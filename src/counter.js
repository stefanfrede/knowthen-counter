import { createActions } from './actions';
import { createView } from './view';

export const createCounter = update => ({
  model: () => ({
    counter: 0,
  }),

  view: createView(createActions(update)),
});
