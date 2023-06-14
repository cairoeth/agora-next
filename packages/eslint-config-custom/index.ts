const config = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off"
  },
  parserOptions: {
    babelOptions: {
      presets: ["next/babel"]
    }
  }
}

export default config
