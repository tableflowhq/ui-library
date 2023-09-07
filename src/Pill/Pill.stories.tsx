import React from "react";
import PillInput from "./index";

export default {
  title: "User Interface/Pill",
  component: PillInput,
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
  },
};

export const Default = (args: any) => <PillInput {...args} />;
Default.args = {
  label: "Pill Component",
  placeholder: "Add options",
};
