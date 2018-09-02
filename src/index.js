import flyd from 'flyd';
import { render } from 'lit-html';

import { createCounter } from './counter';

const update = flyd.stream();
const counter = createCounter(update);
const models = flyd.scan((model, func) => func(model), counter.model(), update);

const rootNode = document.getElementById('app');
models.map(model => render(counter.view(model), rootNode));
