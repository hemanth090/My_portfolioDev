"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "ui-sound";
const SOUND_SRC = "/sounds/click.mp3";

type UiFeedbackContextValue = {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  toggleSound: () => void;
  tap: (event?: { silent?: boolean }) => void;
};

const UiFeedbackContext = createContext<UiFeedbackContextValue | null>(null);

const TAP_SELECTOR =
  'button, [data-ui-feedback="tap"], [role="button"], [role="menuitem"], [role="option"], [role="switch"], [role="tab"], input[type="submit"]';

export function UiFeedbackProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabledState] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    try {
      setSoundEnabledState(localStorage.getItem(STORAGE_KEY) !== "off");
    } catch {
      /* ignore */
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = media.matches;
    const onChange = () => {
      reducedMotionRef.current = media.matches;
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const setSoundEnabled = useCallback((enabled: boolean) => {
    setSoundEnabledState(enabled);
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
    } catch {
      /* ignore */
    }
  }, []);

  const tap = useCallback(
    (event?: { silent?: boolean }) => {
      if (soundEnabled && !event?.silent) {
        let audio = audioRef.current;
        if (!audio) {
          audio = new Audio(SOUND_SRC);
          audio.volume = 0.375;
          audioRef.current = audio;
        }
        audio.currentTime = 0;
        void audio.play().catch(() => {});
      }

      if (!reducedMotionRef.current && typeof navigator !== "undefined") {
        navigator.vibrate?.(8);
      }
    },
    [soundEnabled],
  );

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest) return;

      const trigger = target.closest(TAP_SELECTOR) as HTMLElement | null;
      if (!trigger) return;
      if (trigger.hasAttribute("disabled")) return;
      if (trigger.getAttribute("aria-disabled") === "true") return;

      tap();
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [tap]);

  const value = useMemo<UiFeedbackContextValue>(
    () => ({
      soundEnabled,
      setSoundEnabled,
      toggleSound: () => {
        const next = !soundEnabled;
        setSoundEnabled(next);

        if (next) {
          const audio = audioRef.current ?? new Audio(SOUND_SRC);
          audio.volume = 0.375;
          audioRef.current = audio;
          void audio.play().catch(() => {});
        }
      },
      tap,
    }),
    [soundEnabled, setSoundEnabled, tap],
  );

  return (
    <UiFeedbackContext.Provider value={value}>
      {children}
    </UiFeedbackContext.Provider>
  );
}

export function useUiFeedback(): UiFeedbackContextValue {
  return (
    useContext(UiFeedbackContext) ?? {
      soundEnabled: false,
      setSoundEnabled: () => {},
      toggleSound: () => {},
      tap: () => {},
    }
  );
}
