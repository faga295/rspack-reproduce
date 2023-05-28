import path from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        resourceQuery: /raw/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ],
  },
  output: {
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
    filename: "[name].12345.js",
    sourceMapFilename: "sourcemap/[name].map"
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    alias: {
      "./answer": path.resolve(__dirname, "./src/answer.js?raw"),
    },
  },
};

export default config;
