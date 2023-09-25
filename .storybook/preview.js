import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../src/Chakra";
import ThemeToggle from "../src/ThemeToggle";
import "../src/style/globals.scss";
import "../src/style/index.scss";
import "./storybook.css";

const chakraTheme = extendTheme(theme);

const withAppProvider = (Story, context) => {
  return (
    <ChakraProvider resetCSS={false} theme={chakraTheme}>
      <div className="storybook-top">
        <ThemeToggle />
      </div>
      <div className="storybook-content">
        <Story {...context} />
      </div>
    </ChakraProvider>
  );
};

export const decorators = [withAppProvider];
