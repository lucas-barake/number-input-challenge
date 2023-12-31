## Interview Challenge: Create a Number Input Component

### Description

Your task is to create a Number Input component in React. This component should include an input field and two buttons: one for incrementing the value in the input field and one for decrementing it.

### Considerations

- **State Management**: The component should be able to maintain and update its state based on user interactions.
- **Step Value**: The component should accept a `step` prop that controls the amount by which the value in the input field is incremented or decremented.
- **Props**: The component should accept props to control its behavior, such as `min`, `max`, and `step` values.
- **Accessibility**: The component should be accessible to all users, including those using screen readers and other assistive technologies.
- **Styling**: The component should be styled in a way that is visually appealing.

### Sample Usage

```tsx
const Demo: React.FC = () => {
  const [stateValue, setStateValue] = useState(0);

  return (
    <NumberInput
      label="Number"
      min={0}
      max={10}
      value={stateValue}
      onValueChange={(newVal) => {
        setStateValue(newVal);
      }}
    />
  );
};
```
