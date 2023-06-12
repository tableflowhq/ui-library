/// <reference types="react" />
import { ComponentStory } from "@storybook/react";
import InputComponent from ".";
import { inputTypes } from "./types";
declare const _default: import("@storybook/types").ComponentAnnotations<import("@storybook/react/dist/types-0a347bb9").R, import("react").InputHTMLAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLSelectElement> & import("react").InputHTMLAttributes<HTMLTextAreaElement> & {
    as?: "input" | "textarea" | undefined;
    label?: string | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    icon?: any;
    iconAfter?: any;
    error?: string | undefined;
    options?: {
        [key: string]: import("react").ButtonHTMLAttributes<HTMLButtonElement>;
    } | undefined;
    variants?: import("./types").InputVariants[] | undefined;
    type?: inputTypes | undefined;
}>;
export default _default;
export declare const Input: ComponentStory<typeof InputComponent>;
export declare const Error: ComponentStory<typeof InputComponent>;
export declare const Password: ComponentStory<typeof InputComponent>;
export declare const Dropdown: ComponentStory<typeof InputComponent>;
