import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconComponent from ".";
import { IconProps, iconsArray } from "./types";

const settings = {
  title: "User Interface/Icon",
  component: IconComponent,
  argTypes: {
    icon: {
      control: { type: "select", options: iconsArray },
      description: "Any icon from the Icon component",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as ComponentMeta<typeof IconComponent>;

export default settings;

const Template: ComponentStory<typeof IconComponent> = (args: IconProps) => (
  <div>
    <div className="storybook-icons-header">
      <IconComponent {...args} />
    </div>
    <div className="storybook-icons storybook-icons-set">
      {(settings as any).argTypes.icon.control.options.map((i: any, j: number) => {
        return args?.icon !== i ? (
          <span>
            <IconComponent key={i} icon={i} />

            <span>{i}</span>
          </span>
        ) : null;
      })}
    </div>
  </div>
);

export const Icon = Template.bind({});
Icon.args = {
  icon: iconsArray[0],
};
