import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
  "flex h-[70vh] md:h-[80vh] border-none w-full  text-base border-[#007bff] bg-transparent px-3 py-2 shadow-sm resize-none placeholder:text-muted-foreground scrollbar-thumb-[#494949] scrollbar-track-transparent focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-xl",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }

