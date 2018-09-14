import { expect, use } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

use(sinonChai);

import { createActions } from '../src/actions';

describe('createActions', function() {
  afterEach(() => {
    sinon.restore();
  });

  it('should return an object', function() {
    const model = sinon.stub();
    model.returns({ counter: 0 });

    const updateSpy = sinon.spy();
    updateSpy.withArgs(model);

    const actions = createActions(updateSpy);

    expect(actions).to.be.an('object');
  });

  it('should have an increase function', function() {
    const model = sinon.stub();
    model.returns({ counter: 0 });

    const updateSpy = sinon.spy();
    updateSpy.withArgs(model);

    const actions = createActions(updateSpy);

    expect(actions.increase).to.be.a('function');
  });

  it('should call increase once with 10', function() {
    const amount = 10;

    const model = sinon.stub();
    model.returns({ counter: 0 });

    const updateSpy = sinon.spy();
    updateSpy.withArgs(model);

    const actions = createActions(updateSpy);

    const increaseSpy = sinon.spy(actions, 'increase');
    increaseSpy.withArgs(amount);

    actions.increase(amount);

    expect(increaseSpy).to.have.been.calledOnceWith(amount);
  });

  it('should return the update function', function() {
    const model = sinon.stub();
    model.returns({ counter: 0 });

    const updateSpy = sinon.spy();
    updateSpy.withArgs(model);

    const actions = createActions(updateSpy);

    const increaseStub = sinon.stub(actions, 'increase');
    increaseStub.returns(updateSpy);

    const increase = actions.increase();

    expect(increase).to.equal(updateSpy);
  });

  it('should call update once with model', function() {
    const model = sinon.stub();
    model.returns({ counter: 0 });

    const updateSpy = sinon.spy();
    updateSpy.withArgs(model);

    const actions = createActions(updateSpy);

    const increaseStub = sinon.stub(actions, 'increase');
    increaseStub.returns(updateSpy);

    const increase = actions.increase();
    increase(model);

    expect(updateSpy).to.have.been.calledOnceWith(model);
  });

  it('should return the increaseCounter function', function() {
    const model = sinon.stub();
    model.returns({ counter: 0 });

    const increaseCounterStub = sinon.stub();

    const updateSpy = sinon.stub();
    updateSpy.withArgs(model).returns(increaseCounterStub);

    const actions = createActions(updateSpy);

    const increaseStub = sinon.stub(actions, 'increase');
    increaseStub.returns(updateSpy);

    const increase = actions.increase();
    const increaseCounter = increase(model);

    expect(increaseCounter).to.equal(increaseCounterStub);
  });

  it('should have a decrease function', function() {
    const model = sinon.stub();
    model.returns({ counter: 0 });

    const updateSpy = sinon.spy();
    updateSpy.withArgs(model);

    const actions = createActions(updateSpy);

    expect(actions.decrease).to.be.a('function');
  });

  it('should call decrease once with 10', function() {
    const amount = 10;

    const model = sinon.stub();
    model.returns({ counter: 0 });

    const updateSpy = sinon.spy();
    updateSpy.withArgs(model);

    const actions = createActions(updateSpy);

    const decreaseSpy = sinon.spy(actions, 'decrease');
    decreaseSpy.withArgs(amount);

    actions.decrease(amount);

    expect(decreaseSpy).to.have.been.calledOnceWith(amount);
  });

  it('should return the update function', function() {
    const model = sinon.stub();
    model.returns({ counter: 0 });

    const updateSpy = sinon.spy();
    updateSpy.withArgs(model);

    const actions = createActions(updateSpy);

    const decreaseStub = sinon.stub(actions, 'decrease');
    decreaseStub.returns(updateSpy);

    const decrease = actions.decrease();

    expect(decrease).to.equal(updateSpy);
  });

  it('should call update once with model', function() {
    const model = sinon.stub();
    model.returns({ counter: 0 });

    const updateSpy = sinon.spy();
    updateSpy.withArgs(model);

    const actions = createActions(updateSpy);

    const decreaseStub = sinon.stub(actions, 'decrease');
    decreaseStub.returns(updateSpy);

    const decrease = actions.decrease();
    decrease(model);

    expect(updateSpy).to.have.been.calledOnceWith(model);
  });

  it('should return the decreaseCounter function', function() {
    const model = sinon.stub();
    model.returns({ counter: 0 });

    const decreaseCounterStub = sinon.stub();

    const updateSpy = sinon.stub();
    updateSpy.withArgs(model).returns(decreaseCounterStub);

    const actions = createActions(updateSpy);

    const decreaseStub = sinon.stub(actions, 'decrease');
    decreaseStub.returns(updateSpy);

    const decrease = actions.decrease();
    const decreaseCounter = decrease(model);

    expect(decreaseCounter).to.equal(decreaseCounterStub);
  });
});
