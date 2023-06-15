import ThemeToggle from "../src/ThemeToggle";
import "../src/style/globals.scss";
import "../src/style/index.scss";
import "./storybook.css";

const withAppProvider = (Story, context) => {
    return (
        <>
            <div className="storybook-top">
                <ThemeToggle />
            </div>
            <div className="storybook-content">
                <Story {...context} />
            </div>
        </>
    );
};

export const decorators = [withAppProvider];
