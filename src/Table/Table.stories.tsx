import { ComponentMeta, ComponentStory } from "@storybook/react";
import TableComponent from ".";
import { TableProps } from "./types";
import storyData from "./storyData";

export default {
    title: "User Interface/Table",
    component: TableComponent,
    argTypes: {},
} as ComponentMeta<typeof TableComponent>;

const Template: ComponentStory<typeof TableComponent> = (args: TableProps) => {
    return (
        <div style={{ textAlign: "left" }}>
            <TableComponent {...args} />
        </div>
    );
};

export const Table = Template.bind({});
Table.args = {
    data: storyData,
    highlightColumns: ["Name"],
    hideColumns: ["id"],
    fixHeader: true,
};
Table.args.onRowClick = (row: any) => console.log("Row clicked", row);
