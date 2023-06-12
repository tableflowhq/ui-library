import { ComponentMeta, ComponentStory } from "@storybook/react";
import TableflowComponent from ".";
import { TableflowProps } from "./types";

export default {
    title: "User Interface/Tableflow",
    component: TableflowComponent,
    argTypes: {
        size: {
            control: { type: "radio", options: ["small", "normal", "big"] },
            table: {
                type: { summary: "string" },
            },
        },
    },
} as ComponentMeta<typeof TableflowComponent>;

const Template: ComponentStory<typeof TableflowComponent> = (args: TableflowProps) => <TableflowComponent {...args} />;

export const Tableflow = Template.bind({});
Tableflow.args = {
    color: true,
    size: "normal",
};
