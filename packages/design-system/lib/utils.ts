import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

// TODO: observability
// import { parseError } from '@repo/observability/error';
// export const handleError = (error: unknown): void => {
//   const message = parseError(error);

//   toast.error(message);
// };
