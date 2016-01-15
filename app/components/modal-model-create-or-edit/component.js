import ModalModelDefault from 'vse-portals/components/modal-model-default/component';

export default ModalModelDefault.extend({

  generalErrorMessage: "modal.error.model.safe.default.message",
  generalSuccessTitle: "modal.success.model.safe.default.title",
  generalSuccessMessage: "modal.success.model.safe.default.message",
  closeText: "modal.create.edit.button.close",
  saveText: "modal.create.edit.button.save",
  cancelText: "modal.create.edit.button.cancel",

  actions: {
    updateModel:function() {
      var self = this;
      self.startProgress();
      var model = this.get("model");

      var onSuccess = function() {
        self.endProgressWithSuccess();
      };
      var onFail = function(reason) {
        self.endProgressWithFailure(reason);
      };

      model.save().then(onSuccess).catch(onFail);
    }
  }
});
