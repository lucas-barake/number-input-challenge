import React from "react";
import { NumberInput } from "@/components/ui/number-input";

export const App: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="flex h-screen w-full items-center justify-center">
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
    </div>
  );
};
