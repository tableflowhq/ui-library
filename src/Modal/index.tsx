import React, { useEffect } from "react";
import ReactFocusLock from "react-focus-lock";
import classes from "../utils/classes";
import { ModalProps } from "./types";
import style from "./style/Modal.module.scss";
import Box from "../Box";
import Icon from "../Icon";
import Portal from "../Portal";

const setModal = (on: boolean) => {
    if (on) {
        document.body.classList.add("modal");
    } else {
        document.body.classList.remove("modal");
    }
};

export default function Modal({
    children,
    handleClose,
    isOpen,
    setOpen,
    useBox = true,
    useCloseButton,
    usePortal = true,
    openDelayed,
    ...props
}: ModalProps): React.ReactElement {
    const className = classes([style.container, isOpen ? style.isOpen : style.isClosing, props?.className]);
    const Element = useBox ? Box : "div";

    useEffect(() => {
        setModal(!!isOpen);
        () => setModal(false);
    }, [isOpen]);

    useEffect(() => {
        function handleKeyDown(e: any) {
            const { key } = e;

            e.stopPropagation();

            if (key === "Escape") {
                if (setOpen) setOpen(false);
            }
        }
        document.addEventListener("keydown", handleKeyDown);

        return function cleanup() {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const content = (
        <ReactFocusLock>
            <div {...props} className={className}>
                <div className={style.veil} onClick={() => handleClose && handleClose()} />
                <Element className={style.content}>
                    {useCloseButton && (
                        <button type="button" onClick={handleClose} className={style.close}>
                            <Icon icon="cross" />
                        </button>
                    )}
                    {children}
                </Element>
            </div>
        </ReactFocusLock>
    );

    return usePortal ? <Portal> {content}</Portal> : content;
}
