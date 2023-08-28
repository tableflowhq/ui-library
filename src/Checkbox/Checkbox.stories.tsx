import { ComponentMeta, ComponentStory } from "@storybook/react";
import { iconsArray } from "../Icon/types";
import CheckboxComponent from ".";
import { CheckboxProps } from "./types";

export default {
  title: "User Interface/Checkbox",
  component: CheckboxComponent,
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args: CheckboxProps) => <CheckboxComponent {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: "Text",
};
