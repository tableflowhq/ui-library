import { ComponentMeta, ComponentStory } from "@storybook/react";
import AccordionComponent from ".";

export default {
  title: "User Interface/Accordion",
  component: AccordionComponent,
  argTypes: {},
} as ComponentMeta<typeof AccordionComponent>;

const Template: ComponentStory<typeof AccordionComponent> = (args: any) => <AccordionComponent {...args} />;

export const Accordion = Template.bind({});
Accordion.args = {};
