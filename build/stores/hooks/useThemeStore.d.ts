type Theme = "dark" | "light";
type themeStoreType = {
    theme: Theme;
    setTheme: (theme?: Theme) => void;
};
declare const useThemeStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<themeStoreType>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<themeStoreType, themeStoreType>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: themeStoreType) => void) => () => void;
        onFinishHydration: (fn: (state: themeStoreType) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<themeStoreType, themeStoreType>>;
    };
}>;
export default useThemeStore;
