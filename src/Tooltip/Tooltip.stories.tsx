import { ComponentMeta, ComponentStory } from "@storybook/react";
import TooltipComponent from ".";
import { TooltipProps } from "./types";

export default {
  title: "User Interface/Tooltip",
  component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>;

export const Tooltip: any = (args: TooltipProps<"span">) => {
  return <TooltipComponent {...args} />;
};

Tooltip.args = {
  children: "Tooltip",
  title: "Title text",
};

export const TwoLines: any = (args: TooltipProps<"span">) => {
  return <TooltipComponent {...args} />;
};

TwoLines.args = {
  children: "Tooltip",
  title: (
    <div>
      <span>Lorem ipsum dolor sit amet, consectetur.</span> <span>Ut ornare nunc tortor.</span>
    </div>
  ),
};

export const LongText: any = (args: TooltipProps<"span">) => {
  return <TooltipComponent {...args} />;
};

LongText.args = {
  children: "Tooltip",
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare nunc tortor, id eleifend metus elementum in. Cras eget dui at ligula bibendum convallis et id est. Donec consequat mauris quis orci hendrerit interdum. Cras nec varius orci. Nunc mollis quam ac varius vulputate. Morbi cursus consectetur nulla, eget varius augue lacinia at. Mauris varius fermentum mauris ut dictum. In iaculis efficitur congue. Quisque enim diam, aliquam vitae nibh ut, euismod luctus est. Aenean rutrum est pulvinar ligula dapibus lacinia. Sed et lacus augue. Curabitur non ultrices mi.",
};
