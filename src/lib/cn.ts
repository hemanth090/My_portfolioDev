import { twMerge } from 'tailwind-merge'

/**
 * Joins class names and resolves conflicting Tailwind utilities so the *last*
 * one wins — e.g. a `rounded-none` override beats a component's base `rounded-lg`
 * regardless of stylesheet order.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return twMerge(parts.filter(Boolean).join(' '))
}
