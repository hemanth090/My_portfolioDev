"use client";

import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;

  if (target.isContentEditable) return true;

  const tagName = target.tagName.toLowerCase();
  if (tagName === "input" || tagName === "textarea" || tagName === "select") {
    return true;
  }

  const editable = target.closest("[contenteditable]");
  return Boolean(
    editable && editable.getAttribute("contenteditable") !== "false"
  );
}

function isHorizontallyScrollableCode(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;

  const codeElement = target.closest<HTMLElement>("pre, code");
  if (!codeElement) return false;

  return [codeElement, codeElement.closest<HTMLElement>("pre")].some(
    (element) => {
      if (!element) return false;

      const { overflowX } = window.getComputedStyle(element);
      return (
        (overflowX === "auto" || overflowX === "scroll") &&
        element.scrollWidth > element.clientWidth + 1
      );
    }
  );
}

function shouldIgnoreShortcut(event: KeyboardEvent) {
  if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
    return true;
  }

  return (
    isEditableTarget(event.target) ||
    isHorizontallyScrollableCode(event.target)
  );
}

export default function DocsKeyboardShortcuts({
  previous,
  next,
}: {
  previous: string | null;
  next: string | null;
}) {
  const router = useRouter();

  const navigate = (href: string | null) => href && router.push(href);

  useHotkeys("ArrowRight", (event) => {
    if (shouldIgnoreShortcut(event)) return;

    navigate(next);
  });
  useHotkeys("ArrowLeft", (event) => {
    if (shouldIgnoreShortcut(event)) return;

    navigate(previous);
  });

  return null;
}
