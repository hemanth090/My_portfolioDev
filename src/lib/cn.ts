import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Conditional classes where a later Tailwind utility beats an earlier one.
 *
 * The inline `type` modifier on ClassValue is required: tsconfig.app.json sets
 * `verbatimModuleSyntax: true`, which makes a plain value import of a type a
 * hard build error.
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
