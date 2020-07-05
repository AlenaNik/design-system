module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: ["@storybook/preset-create-react-app",  {
                                                       name: '@storybook/addon-docs',
                                                       options: {
                                                         configureJSX: true,
                                                         babelOptions: {},
                                                         sourceLoaderOptions: null,
                                                       },
                                                     }
                                                     ]
};
