import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Switch from "./";

export default {
    title: "User Interface/Switch",
    component: Switch,
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = (args) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <Switch
            {...args}
            checked={checked}
            onChange={(e) => {
                setChecked(e.target.checked);
            }}
        />
    );
};

Default.args = {
    inputFirst: true,
    disabled: false,
    label: "Switch",
    checked: true,
};
