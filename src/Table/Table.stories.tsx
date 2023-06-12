import { ComponentMeta, ComponentStory } from "@storybook/react";
import TableComponent from ".";
import { TableProps } from "./types";

export default {
  title: "User Interface/Table",
  component: TableComponent,
  argTypes: {},
} as ComponentMeta<typeof TableComponent>;

const dummy = [
  {
    id: 1,
    Name: "John Doe",
    Age: 25,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    Name: "Jane Smith",
    Age: 30,
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    Name: "Mike Johnson",
    Age: 28,
    email: "mike.johnson@example.com",
  },
  {
    id: 4,
    Name: "Emily Davis",
    Age: 32,
    email: "emily.davis@example.com",
  },
  {
    id: 5,
    Name: "Alex Wilson",
    Age: 27,
    email: "alex.wilson@example.com",
  },
];

const Template: ComponentStory<typeof TableComponent> = (args: TableProps) => {
  return (
    <div style={{ textAlign: "left" }}>
      <TableComponent {...args} />
    </div>
  );
};

export const Table = Template.bind({});
Table.args = {
  data: dummy,
  highlightColumns: ["Name"],
  hideColumns: ["id"],
};
