import typescript from '@rollup/plugin-typescript';
import html from '@web/rollup-plugin-html';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';
import { visualizer } from 'rollup-plugin-visualizer';
import postcss from 'rollup-plugin-postcss';
import consts from 'rollup-plugin-consts';
import copy from 'rollup-plugin-copy';
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

  /** passing applications through the typescript compiler */
  typescript({
    tsconfig: './tsconfig.json',
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
