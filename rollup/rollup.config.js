import plugins from './plugins';
import { APP_DIR, DIST_DIR, isDev, files } from './utils';

if (!files.length) {
  throw new Error(`No source files in: ${APP_DIR}`);
}

if (isDev) {
  console.log('Runing app in dev mode');
}

const output = {
  dir: DIST_DIR,
  format: 'esm',
  sourcemap: isDev,
};

export default {
  input: [
    ...files,
  ],
  output,
  plugins,
};
