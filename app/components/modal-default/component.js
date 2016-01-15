import Ember from 'ember';

export default Ember.Component.extend({

  title: "",
  message: "",
  icon:"",
  
  closeModalAction: "",

  didInsertElement: function() {
    Ember.$('.modal').modal();
  },

  willDestroy: function() {
    Ember.$('.modal').modal("hide");
  },

  actions: {
    cancel: function() {
      this.sendAction("closeAction");
    }
  }

});
