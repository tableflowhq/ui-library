import React, { useRef, useState } from "react";
import ReactFocusLock from "react-focus-lock";
import useClickOutside from "../hooks/useClickOutside";
import classes from "../utils/classes";
import { DialogItem, DialogProps } from "./types";
import style from "./style/Dialog.module.scss";
import Button from "../Button";

export default function Dialog({
    icon = "ellipsis",
    variants = ["bare"],
    iconPosition = "right",
    items,
    dialogPosition = "right",
    useActiveAsLabel,
    ...props
}: DialogProps): React.ReactElement {
    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, () => setOpen(false));

    const handleClick = (item: DialogItem) => () => {
        item?.action && item.action(item.id || null);
        setOpen(false);
    };

    const containerClasses = classes([style.container, style[dialogPosition]]);
    const className = classes([style.menu]);

    const buttonProps = { icon, variants, iconPosition, className, ...props };

    return (
        <div ref={ref} className={containerClasses}>
            <Button {...buttonProps} type="button" onClick={() => setOpen(!open)}>
                {(useActiveAsLabel && items.find((item) => item.active)?.children) || props.children}
            </Button>

            {open && (
                <ReactFocusLock className={style.items}>
                    {items.map((item, i) => {
                        const { id, active, action, ...props } = item;

                        return !active || !useActiveAsLabel ? (
                            <Button
                                {...props}
                                variants={["bare", "alignLeft"]}
                                type="button"
                                key={i}
                                onClick={handleClick(item)}
                                className={classes([style.item, active && style.active])}
                                iconPosition="right">
                                {item.children}
                            </Button>
                        ) : null;
                    })}
                </ReactFocusLock>
            )}
        </div>
    );
}
