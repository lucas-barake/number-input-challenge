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
        "flex h-full w-full items-center justify-center rounded-md border-border bg-transparent text-action hover:bg-accent disabled:cursor-not-allowed disabled:text-accent-foreground disabled:opacity-50"
      )}
    />
  );
};
