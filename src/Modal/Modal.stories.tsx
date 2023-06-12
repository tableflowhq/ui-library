import { ComponentMeta, ComponentStory } from "@storybook/react";
import ModalComponent from ".";
import { ModalProps } from "./types";

export default {
  title: "User Interface/Modal",
  component: ModalComponent,
  argTypes: {
    isOpen: {
      description: "Weather the modal is open or not",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    useBox: {
      description: "Put children inside a Box container",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    useCloseButton: {
      description: "Include the close button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    usePortal: {
      description: "Render the modal in a separated div at the root level",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    handleClose: {
      isOpen: {
        description: "Callback function to close the modal",
        table: {
          type: { summary: "() => void" },
        },
      },
    },
    children: {
      description: "React element children",
      table: {
        type: { summary: "string | JSX" },
        defaultValue: { summary: "null" },
      },
    },
  },
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args: ModalProps) => {
  const style = {
    overflow: "hidden",
    minHeight: "420px",
  };
  return (
    <div style={style}>
      <ModalComponent {...args} />
    </div>
  );
};

export const Modal = Template.bind({});
Modal.args = {
  isOpen: true,
  handleClose: () => console.log("close callback called"),
  usePortal: false,
  useBox: true,
  useCloseButton: true,
  children: <div style={{ minHeight: "300px", minWidth: "200px", textAlign: "left" }}>Content...</div>,
};
