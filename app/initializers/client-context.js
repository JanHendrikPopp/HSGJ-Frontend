import ClientContext from "./../common/client-context";

export function initialize(application) {
	application.register('client-context:main', ClientContext, { instantiate: true });
  application.inject('route', 'client', 'client-context:main');
	application.inject('controller', 'client', 'client-context:main');
	application.inject('adapter', 'client', 'client-context:main');
	application.inject('component', 'client', 'client-context:main');
}

export default {
  name: 'client-context',
  initialize: initialize
};
