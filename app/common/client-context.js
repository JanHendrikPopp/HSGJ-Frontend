import Ember from 'ember';

var ClientContext = Ember.Controller.extend({
	loggedInUser: undefined,
	isResellerAdmin: false,
	isTenantAdmin: false,
	lastReloadTimestamp: undefined
});

export default ClientContext;
