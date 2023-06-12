/// <reference types="react" />
import { SqlCommand } from "../../../api/types";
export type IconType = "arrowDown" | "arrowHeadDown" | "arrowHeadUp" | "arrowUp" | "cross" | "ellipsis" | "error" | "eyesClosed" | "eyesOpen" | "google" | "help" | "moon" | "sun" | "sort" | "arrowLeft" | "arrowRight" | "bell" | "gear" | "search" | "trash" | "database" | "clock" | "userSimple" | "check" | SqlCommand;
export type IconProps = {
    icon?: IconType;
};
export type IconMap = {
    [key in IconType]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};
declare const iconsArray: any[];
export { iconsArray };
