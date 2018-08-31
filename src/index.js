import { html, render } from 'lit-html';

import State from 'crocks/State';

import chain from 'crocks/pointfree/chain';
import compose from 'crocks/helpers/compose';
import isNumber from 'crocks/predicates/isNumber';
import option from 'crocks/pointfree/option';
import mapProps from 'crocks/helpers/mapProps';
import prop from 'crocks/Maybe/prop';
import safe from 'crocks/Maybe/safe';

import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/pro-regular-svg-icons';

library.add(faPlus, faMinus);

import './assets/styles/index.css';

const initState = {
  counter: 0,
};

const { get, modify } = State;

// propOr :: (String, (b -> Boolean), a) -> Object -> c
const propOr = (key, pred, def) =>
  compose(
    option(def),
    chain(safe(pred)),
    prop(key),
  );

// safeNumber :: Object -> Number
const safeNumber = propOr('counter', isNumber, 0);

// add :: Number -> Number -> Number
const add = x => y => x + y;

// subtract :: Number -> Number -> Number
const subtract = x => y => x - y;

// increaseCounter :: Number -> State Object ()
const increaseCounter = x => modify(mapProps({ counter: add(x) }));

// decreaseCounter :: Number -> State Object ()
const decreaseCounter = x => modify(mapProps({ counter: subtract(x) }));

const plus = icon(faPlus, {
  classes: ['fa-fw'],
}).node;

const minus = icon(faMinus, {
  classes: ['fa-fw'],
}).node;

const view = state => html`
  <div class="counter">
    <div class="counter__content">
      <h3 class="counter__title">
        Counter
      </h3>
      <p class="counter__paragraph">
        Count: ${get(safeNumber).evalWith(state)}
      </p>
    </div>
    <div class="counter__action">
      <button
        @click=${() => console.log('+ clicked!')}>
        ${plus[0]}
      </button>
      <button
        @click=${() => console.log('- clicked!')}>
        ${minus[0]}
      </button>
    </div>
  </div>
`;

const update = (msg, state) => {
  switch (msg) {
    case 'Plus':
      return increaseCounter(1).execWith(state);
    case 'Minus':
      return decreaseCounter(1).execWith(state);
    default:
      return state;
  }
};

const rootNode = document.getElementById('app');

const app = (initState, update, view, node) => {
  let state = initState;

  render(view(state), node);
};

app(initState, update, view, rootNode);
