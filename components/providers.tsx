"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { Component, type ErrorInfo, type ReactNode } from "react";

import { LenisSmoothScroll } from "@/components/lenis-smooth-scroll";
import { UiFeedbackProvider } from "@/components/ui-feedback";
import { UserCursor } from "@/components/user-cursor";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Something went wrong
            </h2>
            <p className="mb-4 text-gray-600">
              We&apos;re sorry, but something unexpected happened.
            </p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="app-theme"
      >
        <MotionConfig
          reducedMotion="user"
          transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.6 }}
        >
          <UiFeedbackProvider>
            <LenisSmoothScroll />
            <UserCursor name="hi" />
            {children}
          </UiFeedbackProvider>
        </MotionConfig>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
