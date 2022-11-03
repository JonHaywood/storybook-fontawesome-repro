import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import autoExternal from 'rollup-plugin-auto-external';

const isProduction = process.env.NODE_ENV === 'production';

export default {
    input: 'src/index.js',
    output: {
        file: 'build/example.bundle.js',
        format: 'es',
    },
    plugins: [
        // locates modules (usually in node_modules) using Node's resolution algorithm
        nodeResolve({
            // added to solve sourcemap warning. see https://github.com/rollup/rollup-plugin-node-resolve/issues/184
            customResolveOptions: {
                moduleDirectory: 'src',
            },
        }),

        // converts CommonJS modules to ES6 so they can be included in a rollup bundle
        commonjs({
            include: /node_modules/,
        }),

        // automatically exclude all dependencies in package.json from being included in the final bundle
        autoExternal(),

        // transpiles React, JSX, CommonJS and ES6/7 code.
        babel({
            exclude: 'node_modules/**',
            babelrc: false,
            compact: isProduction ? 'auto' : false, // see https://stackoverflow.com/a/36880182
            presets: ['@babel/preset-env', '@babel/react'],
            plugins: [
                ['@babel/plugin-proposal-private-methods', { loose: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
            ],
        }),
    ],
};
