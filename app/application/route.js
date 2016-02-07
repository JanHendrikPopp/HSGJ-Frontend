import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		showModal: function(name, title, icon, message) {
			this.renderModal(name, title, icon, message);
    },
		showEditModelModal: function(model, mode, attributes) {
			this._renderEditModelModal(model, mode, attributes);
		},
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    },
		error: function (error) {
			this.intermediateTransitionTo('error', error);
			return true;
		},
		pushFileToDownload: function (data, filename) {
      var blob = new Blob([data]);
        if (window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveBlob(blob, filename);
        }
        else {
          var a = window.document.createElement("a");
          a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
          a.download = filename;
          document.body.appendChild(a);
          a.click();  // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
          document.body.removeChild(a);
        }
		}
	},

	renderModal: function(name, title, icon, message) {
		var modalController = this.controllerFor("common/modal/"+name);
		modalController.set("title", title);
		modalController.set("icon", icon);
		modalController.set("message", message);
		this.render("modals/"+name, {
			into: 'application',
			outlet: 'modal',
			controller: modalController
		});
		Ember.$('.modal').modal();
	},
	_renderEditModelModal: function(model, mode, attributes) {
		var modalController = this.controllerFor("common/modal/model-create-or-edit");
		modalController.set("model", model);
		modalController.set("mode", mode);
		modalController.set("attributes", attributes);
		this.render("modals/model-create-or-edit", {
			into: 'application',
			outlet: 'modal',
			controller: modalController
		});
		Ember.$('.modal').modal();
	}

});
