import { ComponentMeta, ComponentStory } from "@storybook/react";
import BoxComponent from ".";
import { BoxProps, boxVariants } from "./types";

export default {
    title: "User Interface/Box",
    component: BoxComponent,
    argTypes: {
        variants: {
            control: {
                type: "check",
                options: boxVariants,
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
} as ComponentMeta<typeof BoxComponent>;

const Template: ComponentStory<typeof BoxComponent> = (args: BoxProps) => <BoxComponent {...args} />;

export const Box = Template.bind({});
Box.args = {
    children: (
        <div style={{ textAlign: "left" }}>
            <h2>Lorem ipsum dolor sit amet</h2>
            <hr />
            <p>
                Consectetur adipiscing elit. Morbi feugiat imperdiet elit et tincidunt. Mauris luctus ligula ut consequat lacinia. Etiam aliquam augue
                in faucibus tempus. Morbi non malesuada lorem. Curabitur condimentum vehicula magna sed euismod.{" "}
            </p>
            <p>
                In malesuada pulvinar odio, id gravida felis dignissim at. Ut interdum posuere dolor ultrices pulvinar. Maecenas elementum in mi a
                lacinia. Sed eget maximus nisl, ac auctor tortor.
            </p>
        </div>
    ),
};
