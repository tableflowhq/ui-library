import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabsComponent from ".";
import useTabs from "./hooks/useTabs";
import { TabsProps } from "./types";

export default {
  title: "User Interface/Tabs",
  component: TabsComponent,
  parameters: {
    docs: {
      description: {
        component: "It's recommended to use the <code>useTabs</code> hook to manage the tabs state.",
      },
    },
  },
  argTypes: {
    tabs: {
      description: "An object with pairs of <code>label:id</code> for each tab",
      table: {
        type: { summary: "{[key:string]: string}" },
      },
    },
    tab: {
      control: {
        type: "text",
      },
      description: "<code>id</code> of the currently selected tab",
      table: {
        type: { summary: "string", defaultValue: { summary: "First tab's id" } },
      },
    },
    setTab: {
      description: "Function used by the <code>useTabs</code> hook",
      table: {
        type: { summary: "(tabId: string) => void" },
      },
    },
    onChange: {
      description: "Callback function executed when the tab changes. It receives the <code>id</code> of the new tab as a parameter",
      table: {
        type: { summary: "(tabId: string) => void" },
      },
    },
  },
} as ComponentMeta<typeof TabsComponent>;

export const Tabs: ComponentStory<typeof TabsComponent> = (args: TabsProps) => {
  const tabs = useTabs(args.tabs, args.tab);
  return <TabsComponent {...args} {...tabs} />;
};

Tabs.args = {
  tabs: { Home: "1", About: "2", Contact: "3" },
  onChange: (tab: string) => console.log(`Tab changed: ${tab}`),
};
