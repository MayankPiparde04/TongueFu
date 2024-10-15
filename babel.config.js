module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Add any additional plugins you may need here
      "@babel/plugin-transform-runtime", // Optional, but can help with polyfills
    ],
  };
};