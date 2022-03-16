import IS_DEV_MODE from 'consts:IS_DEV_MODE';

import { ContextClass } from './context';
import { DomClass } from './dom';
import { MathClass } from './math';
import { SourceClass } from './source';
import { StorageClass } from './storage';
import { UIClass } from './ui';

if (IS_DEV_MODE) {
  console.log('is dev');
}

import './index.styl';

export default {
  ContextClass,
  DomClass,
  MathClass,
  SourceClass,
  StorageClass,
  UIClass,
};