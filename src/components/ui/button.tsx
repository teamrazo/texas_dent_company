"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Button Variants - TDC Design System
 * 
 * Variants:
 * - default: Primary TDC red button
 * - glow: Premium CTA with shimmer effect (use for main CTAs)
 * - outline: Bordered button with hover fill
 * - secondary: Light gray background
 * - ghost: Transparent with hover background
 * - destructive: Error/danger state
 * - link: Text link style
 * - white: White button with red text (for dark backgrounds)
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Primary default button
        default: "bg-[#BD3728] text-white hover:bg-[#a32f22]",
        // Premium CTA with glow + shimmer effect (from design system cta-glow)
        glow: "bg-[#BD3728] text-white cta-glow",
        // Outline/bordered variant
        outline:
          "border-[#BD3728] border-2 bg-transparent text-[#BD3728] hover:bg-[#BD3728] hover:text-white",
        // Secondary light gray
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        // Ghost/transparent
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        // Destructive/error
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        // Link style
        link: "text-[#BD3728] underline-offset-4 hover:underline",
        // White button for dark backgrounds
        white: "bg-white text-[#BD3728] hover:bg-gray-100",
      },
      size: {
        default: "h-10 gap-2 px-4",
        xs: "h-7 gap-1 px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2 px-6 text-base",
        xl: "h-12 gap-2.5 px-8 text-base font-bold uppercase tracking-wide",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
