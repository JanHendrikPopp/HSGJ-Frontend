
import "../form/textField";
import Ember from "ember";

var FormController = Ember.Controller.extend({

	actions: {
		reloadRouteModel: function() {
			this.send("reloadRoute");
    }
	}
});

export default FormController;
