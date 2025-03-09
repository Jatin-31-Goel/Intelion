import * as React from "react"

export interface PlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

const Plus = React.forwardRef<SVGSVGElement, PlusProps>(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
))

Plus.displayName = "Plus"

export { Plus }

