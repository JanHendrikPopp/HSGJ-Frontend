import DefaultModal from '../modal-default/component';

export default DefaultModal.extend({
  inProgress: false,
  success: false,
  failure: false,
  generalErrorTitle: "modals.error.save.default.title",
  generalErrorMessage: "modals.error.save.default.message",
  generalSuccessTitle: "modals.success.save.default.title",
  generalSuccessMessage: "modals.success.save.default.message",

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
    this.set("failure", true);
    if(!reason.errors) {
      this.set("failure", true);
    }
  },
  sendCloseModalAction: function() {
    this.sendAction("modalCloseAction");
  }
});
