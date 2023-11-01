import { ButtonHTMLAttributes, InputHTMLAttributes, ReactElement } from "react";
import { IconType } from "../../Icon/types";

export type inputTypes =
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export type InputVariants = "fluid" | "small";
export type InputOption = ButtonHTMLAttributes<HTMLButtonElement> & {
  required?: boolean;
  tooltip?: string;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLSelectElement> &
  InputHTMLAttributes<HTMLTextAreaElement> & {
    as?: "input" | "textarea";
    label?: string | ReactElement;
    icon?: IconType;
    iconAfter?: IconType | ReactElement;
    error?: string;
    options?: { [key: string]: InputOption };
    variants?: InputVariants[];
    type?: inputTypes;
  };
