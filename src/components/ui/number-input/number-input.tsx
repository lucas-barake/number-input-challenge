import React from "react";
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
  ({ value, onValueChange, step = 1, ...rest }) => {
    function handleIncrement(): void {
      onValueChange(value + step);
    }

    function handleDecrement(): void {
      onValueChange(value - step);
    }

    return (
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-col pb-4">
          <h3 className="text-xl font-semibold tracking-tight">Rooms</h3>

          <span className="text-base font-medium text-muted-foreground">
            Min {rest.min ?? 0} - Max {rest.max ?? 10}
          </span>
        </div>

        <div className="flex w-48 items-center justify-center space-x-2">
          <NumberButton
            onClick={handleDecrement}
            disabled={rest.min !== undefined && value <= rest.min}>
            <MinusIcon className="h-4 w-4" />
            <span className="sr-only">Decrease</span>
          </NumberButton>

          <div className="flex-1 text-center">
            <span className="text-6xl font-bold tracking-tighter">{value}</span>
            <span className="text-md mt-1 block uppercase text-muted-foreground">
              Rooms
            </span>
          </div>

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
