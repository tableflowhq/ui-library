import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import isValidEmail, { validateEmails } from "../utils/validateEmail";
import TagEditorComponent from ".";
import { TagEditorProps } from "./types";
import Button from "../Button";

export default {
    title: "User Interface/Tag Editor",
    component: TagEditorComponent,
    argTypes: {
        initialValue: {
            table: {
                type: { summary: "string[]" },
            },
        },
        placeholder: {
            control: {
                type: "text",
            },
            description: "Placeholder text",
            table: {
                type: { summary: "boolean" },
            },
        },
        storageKey: {
            control: {
                type: "text",
            },
            description: "Key to save the tags in local storage",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "tag-editor_key" },
            },
        },
        clearOnUnmount: {
            control: {
                type: "boolean",
            },
            description: "Weather to clear the Tag Editor's local storage on unmount",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        clearNow: {
            control: {
                type: "boolean",
            },
            description: "Weather to clear the local storage in the moment. Executes only once",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
        },
        validation: {
            description:
                "Function to validate individual tags. It returns an error message if the tag is invalid, and an empty string if it is valid",
            table: {
                type: { summary: "(tag: string) => string" },
            },
        },
        onUpdate: {
            description: "Callback that passes the updated tags array",
            table: {
                type: { summary: "(tags: string[]) => void" },
            },
        },
        error: {
            control: {
                type: "text",
            },
            description: "An error message to display bellow the textarea",
            table: {
                type: { summary: "string" },
            },
        },
    },
} as ComponentMeta<typeof TagEditorComponent>;

export const TagEditor: ComponentStory<typeof TagEditorComponent> = (args: TagEditorProps) => {
    const [tags, setTags] = useState<string[]>([]);

    const [error, setError] = useState<string>("");

    const onUpdate = (tags: string[]) => {
        args?.onUpdate && args.onUpdate(tags);
        setTags(tags);
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        setError(validateEmails(tags) || "");
    };

    return (
        <form onSubmit={onSubmit}>
            <TagEditorComponent {...args} {...{ onUpdate, error: error || args?.error }} />

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variants={["primary"]}>Submit</Button>
            </div>
        </form>
    );
};

TagEditor.args = {
    initialValue: ["valid@mail.com", "valid-2@mail.com", "valid-3@mail.com", "invalid"],
    validation: (tag: string) => (!isValidEmail(tag) ? "This is not a valid email" : ""),
    onUpdate: (tags: string[]) => console.log(tags),
    placeholder: "Add user emails",
};
