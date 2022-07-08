import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';
import { visualizer } from 'rollup-plugin-visualizer';
import postcss from 'rollup-plugin-postcss';
import consts from 'rollup-plugin-consts';
import copy from 'rollup-plugin-copy';
// import license from 'rollup-plugin-license';

import html from '@web/rollup-plugin-html';
import autoprefixer from 'autoprefixer';

import { DIST_DIR, APP_DIR, isDev, isNeedOpenStats } from './utils';

export default [
  /** clear dist directory */
  clear({
    targets: [ DIST_DIR ],
    watch: true,
  }),

  /** define global application constants */
  consts({
    IS_DEV_MODE: isDev,
  }),

  // TODO: uncomment when I do a normal production build of the bundle
  // /** copy & paste LICENSE into bundle */
  // !isDev ? license({
  //   banner: {
  //     commentStyle: 'regular',
  //     content: {
  //       file: 'LICENSE',
  //     },
  //   },
  // }) : null,

  /** passing applications through the typescript compiler */
  typescript({
    tsconfig: './tsconfig.json',
  }),

  /** convert CommonJS modules to ES6, so they can be included in a Rollup bundle */
  commonjs({
    include: 'node_modules/**',
  }),

  /** locates modules for using third party modules in node_modules */
  nodeResolve(),

  /** defining aliases when bundling packages */
  alias({
    entries: [
      { find: 'dom', replacement: `${APP_DIR}/dom` },
    ],
  }),

  /** collecting and compiling styles */
  postcss({
    plugins: [ autoprefixer() ],
    extract: 'index.css',
    minimize: !isDev,
  }),

  /** if we build for production, then minify code */
  !isDev ? terser() : null,

  /** collecting html */
  html({
    input: [ `${APP_DIR}/index.html` ],
    extractAssets: false,
    minify: !isDev,
  }),

  /** copy files and folders */
  copy({
    targets: [
      {
        src: `${APP_DIR}/images/*`,
        dest: `${DIST_DIR}/images`,
      },
    ],
  }),

  /** if need build statistics, start collecting it */
  isNeedOpenStats ? visualizer({
    title: 'Project dependency visualization',
    template: 'sunburst',
    open: true,
  }) : null,
];
