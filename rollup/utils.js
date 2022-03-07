import { readdirSync } from 'fs';

/** Main app directory */
export const APP_DIR = 'src';

/** Destination directory */
export const DIST_DIR = 'dist';

/** If app run in dev mode */
export const isDev = !!process.argv.find(el => el === '--config-dev');

/** If need visualize code statisticss of project */
export const isNeedOpenStats = !!process.argv.find(el => el === '--stats');

/** Files that will be processed by typescript plugin */
const includeFileTypes = [ '.ts' ];

/** Files that will not be processed by typescript plugin*/
const excludeFileTypes = ['.test.ts', '.d.ts'];

/** Main entry files in app directory */
export const files = readdirSync(APP_DIR)
  .filter(el =>
    includeFileTypes.every(type => el.endsWith(type)) &&
    excludeFileTypes.every(type => !el.endsWith(type)))
  .map(el => `${APP_DIR}/${el}`);