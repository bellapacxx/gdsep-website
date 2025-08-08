import { cn } from '../lib/utils';
import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'secondary';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors',
        variant === 'default' && 'bg-muted text-foreground',
        variant === 'outline' && 'border border-current bg-transparent',
        variant === 'secondary' && 'bg-secondary text-secondary-foreground',
        className
      )}
      {...props}
    />
  );
}
