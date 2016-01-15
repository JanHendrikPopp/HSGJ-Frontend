import Ember from 'ember';

export function initialize(container, application) {
  Ember.$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
      if(jqXHR.status === 401) {
        console.log(ajaxSettings);
        console.log(thrownError);
        console.log(application);
        var controller = container.lookup('controller:application');
        controller.transitionToRoute('login');
      }
  });
}

export default {
  name: 'error-handling',
  initialize: initialize
};
