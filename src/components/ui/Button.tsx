import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { buttonClasses, type ButtonSize, type ButtonVariant } from './buttonStyles'


type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props
  const classes = buttonClasses(variant, size, className)

  if ('href' in rest && typeof rest.href === 'string') {
    const { href, ...anchorRest } = rest
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

export function IconButton({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-2',
        'text-muted-foreground transition-[background-color,color,transform] duration-150 ease-soft',
        'hover:bg-primary/10 hover:text-foreground active:scale-[0.94]',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
