import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * @description
 * A utility function to merge Tailwind classes with clsx.
 *
 * @example
 * ```tsx
 * import { cn } from 'lib/utils'
 *
 * const classes = cn('text-red-500', 'bg-blue-500')
 *
 * return <div className={classes}>Hello World</div>
 * ```
 *
 * @param inputs - The Tailwind classes to merge.
 * @returns The merged Tailwind classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
