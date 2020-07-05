module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: [
      "@storybook/preset-create-react-app",
        {
          name: '@storybook/addon-docs',
          options: {
          configureJSX: true,
          babelOptions: {},
          sourceLoaderOptions: null,
          },
      },
      "@storybook/addon-contexts/register",
      "@storybook/addon-backgrounds/register",
      "@storybook/addon-actions",
      "@storybook/addon-knobs",
      "@storybook/addon-a11y/register",

  ]
};
