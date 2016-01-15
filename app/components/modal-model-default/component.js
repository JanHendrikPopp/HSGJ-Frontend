import Ember from 'ember';

export default Ember.Component.extend({
  inProgress: false,
  success: false,
  failure: false,
  generalErrorTitle: "modal.error.default.title",
  generalErrorMessage: "modal.error.default.message",
  generalSuccessTitle: "modal.success.default.title",
  generalSuccessMessage: "modal.success.default.message",

  observeModal: function() {
    this.set("inProgress", false);
    this.set("success", false);
    this.set("failure", false);
  }.observes("modalIsVisible"),

  actions: {
    closeModal: function() {
      this.sendCloseModalAction();
    }
  },

  startProgress: function() {
    this.set("inProgress", true);
    this.set("success", false);
    this.set("failure", false);
  },
  endProgressWithSuccess: function() {
    this.set("inProgress", false);
    this.set("success", true);
  },
  endProgressWithFailure: function(reason) {
    this.set("inProgress", false);
    if(!reason.errors) {
      this.set("failure", true);
    }
  },
  sendCloseModalAction: function() {
    this.sendAction("modalCloseAction");
  }
});
