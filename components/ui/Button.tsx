import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: "bg-turquoise-500 text-white hover:bg-turquoise-600 shadow-md hover:shadow-lg",
      outline: "border-2 border-turquoise-500 text-turquoise-600 hover:bg-turquoise-50 bg-transparent",
      ghost: "text-turquoise-600 hover:bg-turquoise-50"
    }
    
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-turquoise-400 focus:ring-offset-2 disabled:opacity-50 active:scale-95",
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
export { Button }