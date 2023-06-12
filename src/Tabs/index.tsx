import classes from "../utils/classes";
import { TabsProps } from "./types";
import style from "./style/Tabs.module.scss";

export default function Tabs({ tabs, tab, setTab, onChange, children }: TabsProps) {
    return (
        <>
            <div className={style.tabs}>
                {Object.keys(tabs).map((k) => (
                    <button
                        key={k}
                        type="button"
                        className={classes([style.tabBtn, tabs[k] === tab && style.active])}
                        onClick={() => {
                            if (setTab) setTab(tabs[k]);
                            if (onChange) onChange(tabs[k]);
                        }}
                        disabled={tabs[k] === tab}>
                        {k}
                    </button>
                ))}
            </div>
            {children && <div className={classes([style.tabContent, style.active])}>{children}</div>}
        </>
    );
}
