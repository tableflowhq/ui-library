import React from "react";
import { TableProps } from "./types";
export default function Table({ data, // An array of objects with the data to be displayed
keyAsId, // Has to be a unique property in the data array to be used as key
theme, // A CSS module object to style the table
mergeThemes, // Should 'theme' be the only style applied (false) or be merged with the default style (true)
highlightColumns, // Columns that should use the highlighted style
hideColumns, // Array of columns to be hidden in the display
emptyState, heading, background, columnWidths, columnAlignments, }: TableProps): React.ReactElement;
