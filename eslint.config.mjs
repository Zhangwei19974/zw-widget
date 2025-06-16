import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "single", // or 'double'
    overrides: {
      "no-console": "off",
    },
  },
  jsonc: false,
  yaml: false,
});
