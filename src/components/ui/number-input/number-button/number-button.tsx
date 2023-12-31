import React from "react";
import { cn } from "@/lib/utils/cn.ts";

export const NumberButton: React.FC<
  React.ComponentPropsWithoutRef<"button">
> = (props) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        "inline-flex h-8 w-8 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      )}
    />
  );
};
