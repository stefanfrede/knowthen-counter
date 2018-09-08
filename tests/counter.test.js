import { expect, use } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

use(sinonChai);

describe('createCounter tests', function() {
  const update = sinon.fake();
  const model = sinon.fake.returns({ counter: 0 });

  const createActions = sinon.stub();
  createActions.withArgs(update);

  const createView = sinon.stub();
  createActions.withArgs(createActions);

  const counterValue = {
    model,

    view: createView,
  };

  const createCounter = sinon.stub().returns(counterValue);
  createCounter.withArgs(update);

  const counter = createCounter(update);

  afterEach(() => {
    sinon.restore();
  });

  it('should call createCounter once with update', function() {
    expect(createCounter).to.have.been.calledOnceWith(update);
  });

  it('should return an object', function() {
    expect(counter).to.be.an('object');
  });

  it('should have a model', function() {
    expect(counter.model).to.equal(model);
  });

  it('should return a model with an initial counter value of 0', function() {
    const { counter: initValue } = counter.model();

    expect(initValue).to.equal(0);
  });

  it('should have a view', function() {
    expect(counter.view).to.equal(createView);
  });

  it('should call createView once with createActions', function() {
    counter.view(createActions);

    expect(createView).to.have.been.calledOnceWith(createActions);
  });

  it('should call createActions once with update', function() {
    counter.view(createActions(update));

    expect(createActions).to.have.been.calledOnceWith(update);
  });

  it('should call createActions before createView', function() {
    counter.view(createActions);

    expect(createActions).to.have.been.calledBefore(createView);
  });
});
