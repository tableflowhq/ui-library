/// <reference types="react" />
import { ComponentStory } from "@storybook/react";
import TabsComponent from ".";
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, {
    children?: import("react").ReactNode;
} & {
    tabs: import("./types").Tab;
    tab: string;
    setTab: (key: string) => void;
    onChange?: ((key: string) => void) | undefined;
}>;
export default _default;
export declare const Tabs: ComponentStory<typeof TabsComponent>;
