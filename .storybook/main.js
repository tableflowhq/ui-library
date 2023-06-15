const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    webpackFinal: async (config) => {
        // remove svg from existing rule
        config.module.rules = config.module.rules.map((rule) => {
            if (String(rule.loader).indexOf("file-loader") > -1) {
                return {
                    ...rule,
                    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
                };
            }
            return rule;
        });

        /* // use svgr for svg files
        config.module.rules.push({
          test: /\.svg$/,
          use: [{
            loader: "@svgr/webpack",
            options: {
              viewBox: true
            }
          }, "url-loader"]
        });*/
        return config;
    },
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-styling",
            options: {
                sass: {
                    // Require your Sass preprocessor here
                    implementation: require("sass"),
                },
            },
        },
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};

export default config;
