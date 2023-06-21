import { ComponentMeta, ComponentStory } from "@storybook/react";
import BadgeComponent from ".";
import { BadgeProps, badgeVariants } from "./types";

export default {
    title: "User Interface/Badge",
    component: BadgeComponent,
    argTypes: {
        variants: {
            control: {
                type: "check",
                options: badgeVariants,
            },
            description: "Style variants",
            table: {
                type: { summary: "string[]" },
            },
        },
        children: {
            description: "React element children",
            table: {
                type: { summary: "string | JSX" },
            },
        },
    },
} as ComponentMeta<typeof BadgeComponent>;

const Template: ComponentStory<typeof BadgeComponent> = (args: BadgeProps) => <BadgeComponent {...args} />;

export const Badge = Template.bind({});
Badge.args = {
    children: "Hello World!",
};
