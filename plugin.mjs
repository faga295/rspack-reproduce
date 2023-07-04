export default class MyPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.thisCompilation.tap("myPlugin", (compilation) => {
            compilation.emitAsset("test.txt", new compiler.webpack.sources.RawSource("test"), { compressed: true });
        })
        compiler.hooks.done.tap('myPlugin', (stats) => {
            console.log(stats.toJson().assets);;
        })
    }
}