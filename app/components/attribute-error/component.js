import Ember from 'ember';

export default Ember.Component.extend({

  errorText: function() {
    var message;
    var errors = this.get("errors");
    var attributeName = this.get("attributeName");

    errors.forEach(function(error) {
      if (typeof error === 'object') {
        message = error[attributeName];
      }
    });
    return message;
  }.property('errors')

});
