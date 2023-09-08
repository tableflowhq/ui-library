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
    initialPills: {
      description: "Set the initial pill values in the input",
      table: {
        type: { summary: "string[]" },
      },
    },
    error: {
      description: "Error message to show below the input",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
};

export const Default = (args: any) => (
  <div style={{ width: "350px" }}>
    <PillInput {...args} />
  </div>
);
Default.args = {
  label: "Pill Component",
  placeholder: "Add options",
  initialPills: ["l_name", "l_name", "lname"],
  error: false,
};
