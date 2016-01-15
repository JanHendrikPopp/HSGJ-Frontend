
import "vse-portals/common/form/textField";
import Ember from "ember";

var FormController = Ember.Controller.extend({

	modalNames: [],
	modalVisibleStates: Ember.ArrayProxy.create({
    content: Ember.A()
	}),
	selectedModel: undefined,

	initVisibleStates: function() {
  	var self = this;
		var names = self.get("modalNames");
		var states = this.get("modalVisibleStates");

		names.forEach(function(name){
			states.pushObject({
    		modalName: name,
    		visible: false
			});
		});
  }.on('init'),

	openModal: function(name) {
		var self = this;
		var modals = self.get("modalVisibleStates").filterBy("modalName", name);
		if (modals.length > 0) {
			modals.setEach("visible", true);
		}
	},
	closeModal: function(name) {
		var self = this;
		var modals = self.get("modalVisibleStates").filterBy("modalName", name);
		if (modals.length > 0) {
			modals.setEach("visible", false);
		}
	},

	modalsClosed: function() {
		return (this.get("modalVisibleStates").filterBy("visible", true).length === 0);
	},

	modalIsVisible: function(name) {
		var self = this;
		var modals = self.get("modalVisibleStates").filterBy("modalName", name);
		if (modals.length > 0) {
			return modals[0].visible;
		} else {
			return false;
		}
	},

	setSelection: function(model) {
		this.set("selectedModel", model);
	},

	unSelect: function() {
		this.set("selectedModel", undefined);
	},

	rollbackSelection: function() {
		var model = this.get("selectedModel");
		model.rollback();
	},

	clearErrors: function () {
		this.set("errorList", []);
		this.set("errorCount", 0);
	},
	actions: {
		reloadRouteModel: function() {
			this.send("reloadRoute");
    }
	}
});

export default FormController;
