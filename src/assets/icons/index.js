import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/pro-regular-svg-icons';

library.add(faPlus, faMinus);

const plus = icon(faPlus, {
  classes: ['fa-fw'],
}).node;

const minus = icon(faMinus, {
  classes: ['fa-fw'],
}).node;

export default {
  plus: plus[0],
  minus: minus[0],
};
