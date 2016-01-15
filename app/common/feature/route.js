import Ember from 'ember';
import DefaultRoute from "../../application/route";

var FeatureRoute = DefaultRoute.extend({
	actions: {
	    didTransition: function() {
	      this.renderModal("default", "modals.feature.headline", "fa-bug", "modals.feature.message");
	      return true;
	    }
	  }
});

export default FeatureRoute;
