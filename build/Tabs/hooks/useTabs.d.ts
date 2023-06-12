/// <reference types="react" />
export default function useTabs(tabs: any, initialValue?: string): {
    tabs: any;
    tab: any;
    setTab: import("react").Dispatch<any>;
};
