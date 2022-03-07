import IS_DEV_MODE from 'consts:IS_DEV_MODE';

import Foo from './modules/Foo';

if (IS_DEV_MODE) {
  console.log('is dev');
}

import './index.styl';

new Foo();

(async () => {
  const module = await import('./modules/Dog')
    .then(m => m.default);
  const dog = new module;

  dog.bark();
})();

console.log('test');