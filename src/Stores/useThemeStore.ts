import { create } from "zustand";
import setTheme from "../utils/setTheme";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";
type themeStoreType = {
    theme: Theme;
    setTheme: (theme?: Theme) => void;
};

const useThemeStore = create<themeStoreType>()(
    persist(
        (set) => ({
            theme: "light" || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
            setTheme: (newTheme) =>
                set((state) => {
                    const theme = newTheme || (state.theme === "light" ? "dark" : "light");
                    setTheme(theme);
                    return { theme };
                }),
        }),
        {
            name: "theme",
        }
    )
);

export default useThemeStore;
