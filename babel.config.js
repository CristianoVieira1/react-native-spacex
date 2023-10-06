module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      ["@babel/preset-react", { runtime: "automatic" }],
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            "@components": "./src/components",
            "@scenes": "./src/scenes",
            "@assets": "./src/assets",
            "@utils": "./src/utils",
            "@services": "./src/utils",
          },
        },
      ],
    ],
  };
};
