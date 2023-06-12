import { ButtonHTMLAttributes } from "react";
import { IconType } from "../../Icon/types";

export type buttonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "warning"
  | "bare"
  | "small"
  | "fullWidth"
  | "noMargin"
  | "sort"
  | "sortUp"
  | "sortDown"
  | "alignLeft"
  | "alignRight";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variants?: buttonVariant[];
  icon?: IconType;
  iconPosition?: "left" | "right";
};

export const buttonVariants = [
  "primary",
  "secondary",
  "tertiary",
  "warning",
  "bare",
  "small",
  "fullWidth",
  "noMargin",
  "sort",
  "sortUp",
  "sortDown",
  "alignLeft",
  "alignRight",
] as const;
