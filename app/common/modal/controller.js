import Ember from "ember";

var ModalController = Ember.Controller.extend({
  actions: {
    closeModal: function() {
      this.send("removeModal");
    }
  }
});

export default ModalController;
