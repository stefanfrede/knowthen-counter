import { html, render } from 'lit-html';

import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus } from '@fortawesome/pro-regular-svg-icons';

library.add(faPlus, faMinus);

import './assets/styles/index.css';

const initModel = 0;

const plus = icon(faPlus, {
  classes: ['fa-fw'],
}).node;

const minus = icon(faMinus, {
  classes: ['fa-fw'],
}).node;

const view = model => html`
  <div class="counter">
    <div class="counter__content">
      <h3 class="counter__title">
        Counter
      </h3>
      <p class="counter__paragraph">
        Count: ${model}
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

render(view(initModel), document.getElementById('app'));
