import State from 'crocks/State';

import mapProps from 'crocks/helpers/mapProps';

const { modify } = State;

// add :: Number -> Number -> Number
const add = x => y => x + y;

// subtract :: Number -> Number -> Number
const subtract = x => y => y - x;

// increaseCounter :: Number -> State Object ()
const increaseCounter = x => modify(mapProps({ counter: add(x) }));

// decreaseCounter :: Number -> State Object ()
const decreaseCounter = x => modify(mapProps({ counter: subtract(x) }));

export const createActions = update => ({
  increase: amount =>
    update(model => {
      return increaseCounter(amount).execWith(model);
    }),
  decrease: amount =>
    update(model => {
      return decreaseCounter(amount).execWith(model);
    }),
});
