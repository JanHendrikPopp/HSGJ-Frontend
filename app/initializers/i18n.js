
export function initialize(container, application) {
	application.inject('route', 'i18n', 'service:i18n');
	application.inject('controller', 'i18n', 'service:i18n');
	application.inject('adapter', 'i18n', 'service:i18n');
	application.inject('component', 'i18n', 'service:i18n');
}

export default {
  name: 'i18n',
	after: 'ember-i18n',
  initialize: initialize
};
