import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StepperProps } from ".";
import Stepper from "..";

const steps = [
  { label: "Upload", id: "upload" },
  { label: "Select Header Row", id: "row-selection" },
  { label: "Review", id: "review" },
  { label: "Complete", id: "complete" },
];

export default {
  title: "User Interface/Stepper",
  component: Stepper,
  argTypes: {},
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args: StepperProps) => {
  return (
    <div style={{ textAlign: "left" }}>
      <Stepper {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  steps,
};
