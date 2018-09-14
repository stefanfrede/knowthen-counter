import { expect, use } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

use(sinonChai);

describe('createView', function() {
  afterEach(() => {
    sinon.restore();
  });

  it('should call createView once with actions', function() {
    const actions = sinon.fake();

    const createView = sinon.stub();
    createView.withArgs(actions);

    createView(actions);

    expect(createView).to.have.been.calledOnceWith(actions);
  });

  it('should call createView once with model', function() {
    const actions = sinon.fake();
    const model = sinon.fake();

    const createCurriedView = sinon.stub();
    createCurriedView.withArgs(model);

    const createView = sinon.stub();
    createView.withArgs(actions).returns(createCurriedView);

    const curriedView = createView(actions);

    curriedView(model);

    expect(curriedView).to.have.been.calledOnceWith(model);
  });

  it('should return a template function', function() {
    const actions = sinon.fake();
    const html = sinon.fake();
    const model = sinon.fake();

    const createCurriedView = sinon.stub();
    createCurriedView.withArgs(model).returns(html);

    const createView = sinon.stub();
    createView.withArgs(actions).returns(createCurriedView);

    const curriedView = createView(actions);

    const templateFunction = curriedView(model);

    expect(templateFunction).to.equal(html);
  });

  it('should return a template string', function() {
    const actions = sinon.fake();
    const html = sinon.fake.returns(`<h1>Hello world!</h1>`);
    const model = sinon.fake();

    const createCurriedView = sinon.stub();
    createCurriedView.withArgs(model).returns(html);

    const createView = sinon.stub();
    createView.withArgs(actions).returns(createCurriedView);

    const curriedView = createView(actions);

    const templateFunction = curriedView(model);

    const templateString = templateFunction();

    expect(templateString).to.equal(`<h1>Hello world!</h1>`);
  });
});
