// Learn more https://docs.expo.io/guides/customizing-metro

// @ts-ignore
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    },
    resolver: {
      // @ts-ignore
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
