import useThemeStore from "../Stores/useThemeStore";
import style from "./style/ThemeToggle.module.scss";
import Icon from "../Icon";

export default function ThemeToggle() {
    const setTheme = useThemeStore((state) => state.setTheme);

    return (
        <button className={style.themeToggle} onClick={() => setTheme()}>
            <span className={style.inner}>
                <span>
                    <Icon icon="sun" />
                </span>
                <span>
                    <Icon icon="moon" />
                </span>
            </span>
        </button>
    );
}
