"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type SoundContextValue = {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  toggleSound: () => void;
  tap: (options?: { silent?: boolean }) => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

const STORAGE_KEY = "ui-sound";
const SOUND_SRC = "/sounds/click.mp3";

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabledState] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    try {
      setSoundEnabledState(localStorage.getItem(STORAGE_KEY) !== "off");
    } catch {
      // Ignore storage access failures.
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
      // Ignore storage access failures.
    }
  }, []);

  const tap = useCallback(
    (options?: { silent?: boolean }) => {
      if (soundEnabled && !options?.silent) {
        let audio = audioRef.current;
        if (!audio) {
          audio = new Audio(SOUND_SRC);
          audio.volume = 0.375;
          audioRef.current = audio;
        }
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }

      if (!reducedMotionRef.current && typeof navigator !== "undefined") {
        navigator.vibrate?.(8);
      }
    },
    [soundEnabled]
  );

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const control = target?.closest?.(
        'button, [data-ui-feedback="tap"], [role="button"], [role="menuitem"], [role="option"], [role="switch"], [role="tab"], input[type="submit"]'
      );
      if (
        control &&
        !control.hasAttribute("disabled") &&
        control.getAttribute("aria-disabled") !== "true"
      ) {
        tap();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown, true);
    return () =>
      document.removeEventListener("pointerdown", handlePointerDown, true);
  }, [tap]);

  const toggleSound = useCallback(() => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) {
      let audio = audioRef.current;
      if (!audio) {
        audio = new Audio(SOUND_SRC);
        audio.volume = 0.375;
        audioRef.current = audio;
      }
      audio.play().catch(() => {});
    }
  }, [soundEnabled, setSoundEnabled]);

  const value = useMemo(
    () => ({ soundEnabled, setSoundEnabled, toggleSound, tap }),
    [soundEnabled, setSoundEnabled, toggleSound, tap]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound() {
  const context = useContext(SoundContext);
  return (
    context ?? {
      soundEnabled: false,
      setSoundEnabled: () => {},
      toggleSound: () => {},
      tap: () => {},
    }
  );
}
