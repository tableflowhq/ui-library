import { ComponentMeta, ComponentStory } from "@storybook/react";
import { iconsArray } from "../Icon/types";
import DialogComponent from ".";
import { DialogItem, DialogProps } from "./types";

export default {
  title: "User Interface/Dialog",
  component: DialogComponent,
  argTypes: {
    icon: {
      control: { type: "select", options: [undefined, ...iconsArray] },
      description: "Any icon from the Icon component",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "ellipsis" },
      },
    },
    dialogPosition: {
      control: { type: "radio", options: ["left", "right"] },
      description: "Icon position",
      table: { type: { summary: "string" }, defaultValue: { summary: "right" } },
    },
    useActiveAsLabel: {
      description: "If an item has the property active set to true, it will be used as the label for the button",
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    children: {
      description: "React element children",
      table: {
        type: { summary: "string | JSX" },
        defaultValue: { summary: "null" },
      },
    },
  },
} as ComponentMeta<typeof DialogComponent>;

const items: DialogItem[] = [
  {
    id: "1",
    children: "Option",
    action: (id: string) => console.log(id),
  },
  {
    id: "2",
    children: "Option active",
    action: (id: string) => console.log(id),
    active: true,
  },

  {
    id: "3",
    children: "Option disabled",
    action: (id: string) => console.log(id),
    variants: ["primary"],
    disabled: true,
  },
];

const Template: ComponentStory<typeof DialogComponent> = (args: DialogProps) => <DialogComponent {...args} />;

export const Dialog = Template.bind({});
Dialog.args = {
  items,
  icon: "ellipsis",
  children: "Select an option or action",
  useActiveAsLabel: false,
};
