import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, labelClassName, ...props }, ref) => {
    return (
      <div suppressHydrationWarning className="relative group w-full">
        <input
          type={type}
          className={cn(
            "flex h-16 lg:h-12 w-full rounded-none border-b-2 border-gray-200 bg-transparent px-1 py-2 text-xl lg:text-base ring-offset-white placeholder:text-transparent focus:border-turquoise-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors peer",
            className
          )}
          ref={ref}
          placeholder=" "
          {...props}
        />
        {label && (
          <label className={cn(
            "absolute left-1 top-4 lg:top-3 text-gray-400 text-xl lg:text-base transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-turquoise-600 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500 pointer-events-none",
            labelClassName
          )}>
            {label}
          </label>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"
export { Input }