import React, { useId } from "react";
import { cn } from "@/lib/utils/cn.ts";
import { MinusIcon, PlusIcon } from "lucide-react";
import { NumberButton } from "@/components/ui/number-input/number-button";

type Props = Omit<React.ComponentPropsWithRef<"input">, "onChange"> & {
  label: string;
  onValueChange: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
  value: number;
};
export const NumberInput = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, value, onValueChange, step = 1, ...rest }, ref) => {
    const id = useId();

    function handleIncrement(): void {
      onValueChange(value + step);
    }

    function handleDecrement(): void {
      onValueChange(value - step);
    }

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id}>{label}</label>

        <div className="grid grid-cols-4 items-center border border-border">
          <NumberButton
            onClick={handleDecrement}
            disabled={rest.min !== undefined && value <= rest.min}
            className="col-span-1">
            <MinusIcon className="h-4 w-4" />
            <span className="sr-only">Decrease</span>
          </NumberButton>

          <input
            ref={ref}
            id={id}
            type="number"
            value={value}
            {...rest}
            readOnly
            className={cn(
              "col-span-2 rounded-md border-x border-input bg-background p-2 text-foreground disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
          />

          <NumberButton
            onClick={handleIncrement}
            disabled={rest.max !== undefined && value >= rest.max}
            className="col-span-1">
            <PlusIcon className="h-4 w-4" />
            <span className="sr-only">Increase</span>
          </NumberButton>
        </div>
      </div>
    );
  }
);
