import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { iconsArray } from "../Icon/types";
import InputComponent from ".";
import usePassword from "./hooks/usePassword";
import { InputProps, inputTypes } from "./types";

export default {
  title: "User Interface/Input",
  component: InputComponent,
  argTypes: {
    label: {
      description: "Shown above the input",
      table: {
        type: { summary: "string | JSX" },
      },
    },
    placeholder: {
      description: "HTML input placeholder",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      description: "Shown below the input",
      table: {
        type: { summary: "string | JSX" },
        defaultValue: { summary: "null" },
      },
    },
    disabled: {
      description: "HTML disabled attr",
      table: {
        type: { summary: "boolean" },
      },
    },
    icon: {
      control: { type: "select", options: [undefined, ...iconsArray] },
      description: "Any icon from the Icon component, shown on the left",
      table: {
        type: { summary: "string" },
      },
    },
    iconAfter: {
      control: { type: "select", options: [undefined, ...iconsArray] },
      description: "Any icon from the Icon component, shown on the right, or a JSX element",
      table: {
        type: { summary: "string | JSX" },
      },
    },
    type: {
      control: {
        type: "select",
        options: [
          undefined,
          "date",
          "datetime-local",
          "email",
          "file",
          "month",
          "number",
          "password",
          "search",
          "tel",
          "text",
          "time",
          "url",
          "week",
        ] as inputTypes[],
      },
      description: "A subset of HTML input types",
      table: {
        type: { summary: "string" },
      },
    },
    options: {
      description: "An object with 'key: {button props for each option}', that will make the component behave as a dropdown",
      table: {
        type: { summary: "{ [key: string]: ButtonHTMLAttributes<HTMLButtonElement> }" },
      },
    },
  },
} as ComponentMeta<typeof InputComponent>;

export const Input: ComponentStory<typeof InputComponent> = (args: InputProps) => <InputComponent {...args} />;
Input.args = {
  label: "Label Text",
  placeholder: "Placeholder Text",
  children: "Description element",
  disabled: false,
};

export const Error: ComponentStory<typeof InputComponent> = (args: InputProps) => <InputComponent {...args} />;
Error.args = {
  label: "Label Text",
  value: "Hello world!",
  error: "The value is not valid",
  placeholder: "",
  children: "",
  disabled: false,
};

export const Password: ComponentStory<typeof InputComponent> = (args: InputProps) => {
  const password = usePassword();

  return <InputComponent {...args} {...password} />;
};
Password.args = {
  label: "Label Text",
  placeholder: "Placeholder Text",
  children: "Description element",
  disabled: false,
};

export const Dropdown: ComponentStory<typeof InputComponent> = (args: InputProps) => {
  const [value, setValue] = useState<any>("");
  return (
    <>
      <InputComponent {...args} value={value} onChange={(e) => setValue(e)} />
      {/* <div style={{ height: "30vh", overflowY: "scroll" }}>
                <div style={{ padding: "60vh 1rem 1rem" }}>
                    <InputComponent {...args} value={value} onChange={(e) => setValue(e)} />
                </div>
            </div> */}
    </>
  );
};
Dropdown.args = {
  placeholder: "Placeholder Text",
  disabled: false,
  options: {
    "Option I": { value: "1" },
    "Option II": { value: "2" },
    "Disabled option": { value: "2", disabled: true },
    "Option III": { value: "3", tooltip: "Option not available", disabled: true },
    "Option IV": { value: "4" },
    "Option V": { value: "5" },
    "Option VI": { value: "required", required: true },
  },
};
