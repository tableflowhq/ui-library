/// <reference types="react" />
import { ComponentStory } from "@storybook/react";
import TagEditorComponent from ".";
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, import("react").HTMLAttributes<HTMLDivElement> & {
    placeholder?: string | undefined;
    storageKey: string;
    clearOnUnmount?: boolean | undefined;
    clearNow?: boolean | undefined;
    validation?: ((tag: string) => string) | undefined;
    onUpdate: (tags: string[]) => void;
    error?: string | undefined;
    initialValue?: string[] | undefined;
}>;
export default _default;
export declare const TagEditor: ComponentStory<typeof TagEditorComponent>;
