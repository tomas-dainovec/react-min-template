import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import webpack from 'webpack';
import webpackConfig, { DEV_SERVER_PORT } from './webpack.config.babel.js';
import WebpackDevServer from 'webpack-dev-server';

gulp.task('default', ['webpack-dev-server']);

gulp.task('webpack-dev-server', (callback) => {
    const compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        historyApiFallback: true,
        hot: true,
        noInfo: true,
         stats: { colors: true }
    }).listen(DEV_SERVER_PORT, "localhost", (err) => {
        if(err) throw new PluginError("webpack-dev-server", err);
        
        gutil.log("[webpack-dev-server]", `http://localhost:${DEV_SERVER_PORT}/webpack-dev-server/index.html`);
    });
});
