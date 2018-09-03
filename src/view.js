import { html } from 'lit-html';

import State from 'crocks/State';

import chain from 'crocks/pointfree/chain';
import compose from 'crocks/helpers/compose';
import isNumber from 'crocks/predicates/isNumber';
import option from 'crocks/pointfree/option';
import prop from 'crocks/Maybe/prop';
import safe from 'crocks/Maybe/safe';

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

const run = () => {
  const plusButton = document.querySelector('#js-plus');
  const minusButton = document.querySelector('#js-minus');

  import('./assets/icons')
    .then(icons => {
      const { plus, minus } = icons.default;

      while (plusButton.firstChild) {
        plusButton.removeChild(plusButton.firstChild);
      }

      plusButton.appendChild(plus);

      while (minusButton.firstChild) {
        minusButton.removeChild(minusButton.firstChild);
      }

      minusButton.appendChild(minus);
    })
    .catch(error => {
      console.error(error);
    });
};

if (document.readyState !== 'loading') {
  run();
} else {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    document.attachEvent('onreadystatechange', () => {
      if (document.readyState === 'complete') {
        run();
      }
    });
  }
}

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
      <button id="js-plus" @click=${() => actions.increase(1)}>
        <span>+</span>
      </button>
      <button id="js-minus" @click=${() => actions.decrease(1)}>
        <span>-</span>
      </button>
    </div>
  </div>
`;
