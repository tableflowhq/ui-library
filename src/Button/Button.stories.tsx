import { ComponentMeta, ComponentStory } from "@storybook/react";
import { iconsArray } from "../Icon/types";
import ButtonComponent from ".";
import { ButtonProps, buttonVariants } from "./types";

export default {
    title: "User Interface/Button",
    component: ButtonComponent,
    argTypes: {
        variants: {
            description: "Style variants, accepts: " + buttonVariants.join(", "),
            table: {
                type: { summary: "string[]" },
            },
        },
        icon: {
            control: { type: "select", options: [undefined, ...iconsArray] },
            description: "Any icon from the Icon component",
            table: {
                type: { summary: "string" },
            },
        },
        iconPosition: {
            control: { type: "radio", options: ["left", "right"] },
            description: "Icon position",
            table: { type: { summary: "string" }, defaultValue: { summary: "left" } },
        },
        disabled: {
            description: "HTML disabled attr",
            table: {
                type: { summary: "boolean" },
            },
        },
        children: {
            description: "React element children",
            table: {
                type: { summary: "string | JSX" },
                defaultValue: { summary: "null" },
            },
        },
    },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args: ButtonProps) => {
    const { variants, ...rest } = args;

    const fArgs = { ...rest, ...(variants && variants?.length ? { variants } : {}) };

    return <ButtonComponent {...fArgs} />;
};

export const Button = Template.bind({});
Button.args = {
    children: "Hello World!",
    variants: ["primary"],
    iconPosition: "left",
    disabled: false,
};
