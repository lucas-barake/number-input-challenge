import React from "react";
import { NumberInput } from "@/components/ui/number-input";

export const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="inline-flex w-auto flex-col rounded-xl border bg-card p-6 text-card-foreground shadow-md">
        <NumberInput
          label="Rooms"
          value={value}
          step={2}
          min={0}
          max={10}
          onValueChange={(newValue) => {
            setValue(newValue);
          }}
        />

        <button
          type="button"
          className="mt-4 inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-lg font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          onClick={() => {
            setValue(0);
          }}>
          Reset
        </button>
      </div>

      <span className="mt-4 block text-center text-5xl font-bold leading-tight tracking-tight">
        React Junior Challenge
      </span>
    </div>
  );
};
