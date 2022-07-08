import IS_DEV_MODE from 'consts:IS_DEV_MODE';

import { CContext } from './context';
import { CDom } from './dom';
import { CMath } from './math';
import { CSource } from './source';
import { CStorage } from './storage';
import { CUI } from './ui';

if (IS_DEV_MODE) {
  console.log('is dev');
}

import './index.styl';

export default {
  CContext,
  CDom,
  CMath,
  CSource,
  CStorage,
  CUI,
};