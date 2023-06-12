import classes from "../utils/classes";
import { ButtonProps, buttonVariant } from "./types";
import style from "./style/Button.module.scss";
import Icon from "../Icon";

export default function Button({ children, icon, className, variants = [], iconPosition = "left", ...props }: ButtonProps) {
    const variantStyles = classes(variants.map((c: string) => style[c]));
    const containerClassName = classes([style.button, variantStyles, className]);

    const iconId = (["sort", "sortUp", "sortDown"] as buttonVariant[]).some((i) => variants.includes(i)) ? "sort" : icon;

    const iconElement = (
        <span className={style.icon}>
            <Icon icon={iconId} />
        </span>
    );

    return (
        <button {...props} className={containerClassName}>
            {!!iconId && iconPosition === "left" && iconElement}
            {children && <span className={style.label}>{children}</span>}
            {!!iconId && iconPosition === "right" && iconElement}
        </button>
    );
}
