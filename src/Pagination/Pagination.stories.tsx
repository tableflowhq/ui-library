import { ComponentMeta, ComponentStory } from "@storybook/react";
import PaginationComponent from ".";
import { PaginationProps } from "./types";

export default {
  title: "User Interface/Pagination",
  component: PaginationComponent,
  argTypes: {
    totalItems: {
      control: { type: "number" },
      table: { type: { summary: "number" } },
    },
    itemsPerPage: {
      control: { type: "number" },
      table: { type: { summary: "number" } },
    },
    initialPage: {
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "1" } },
    },
    paginatorSize: {
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "7" } },
    },
    onPageChange: {
      table: { type: { summary: "(page: number) => void" } },
    },
    showNumbers: {
      table: { type: { summary: "true" } },
    },
    showArrows: {
      table: { type: { summary: "true" } },
    },
    showFirstLast: {
      table: { type: { summary: "true" } },
    },
  },
} as ComponentMeta<typeof PaginationComponent>;

const Template: ComponentStory<typeof PaginationComponent> = (args: PaginationProps) => <PaginationComponent {...args} />;

export const Pagination = Template.bind({});
Pagination.args = {
  totalItems: 100,
  itemsPerPage: 10,
  initialPage: 3,
  paginatorSize: 7,
  onPageChange: (page: number) => console.log(`Page ${page} selected`),
  showNumbers: true,
  showArrows: true,
  showFirstLast: true,
};
