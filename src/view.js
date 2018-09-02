import { html } from 'lit-html';

import State from 'crocks/State';

import chain from 'crocks/pointfree/chain';
import compose from 'crocks/helpers/compose';
import isNumber from 'crocks/predicates/isNumber';
import option from 'crocks/pointfree/option';
import prop from 'crocks/Maybe/prop';
import safe from 'crocks/Maybe/safe';

import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/pro-regular-svg-icons';

library.add(faPlus, faMinus);

import './assets/styles/index.css';

const { get } = State;

// propOr :: (String, (b -> Boolean), a) -> Object -> c
const propOr = (key, pred, def) =>
  compose(
    option(def),
    chain(safe(pred)),
    prop(key),
  );

// safeCounterNumber :: Object -> Number
const safeCounterNumber = propOr('counter', isNumber, 0);

const plus = icon(faPlus, {
  classes: ['fa-fw'],
}).node;

const minus = icon(faMinus, {
  classes: ['fa-fw'],
}).node;

const icons = {
  plus: plus[0],
  minus: minus[0],
};

export const createView = actions => model => html`
  <div class="counter">
    <div class="counter__content">
      <h3 class="counter__title">
        Counter
      </h3>
      <p class="counter__paragraph">
        Count: ${get(safeCounterNumber).evalWith(model)}
      </p>
    </div>
    <div class="counter__action">
      <button @click=${() => actions.increase(1)}>
        ${icons.plus}
      </button>
      <button @click=${() => actions.decrease(1)}>
        ${icons.minus}
      </button>
    </div>
  </div>
`;
