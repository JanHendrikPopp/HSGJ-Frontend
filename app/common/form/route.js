import Ember from 'ember';
/**
 *
 * @author Jan-Hendrik Popp
 */
var CreateModelRoute = Ember.Route.extend({

  deactivate: function() {
		var model = this.get('controller.content');
		  if (model.get('isNew')) {
		    model.deleteRecord();
		  }
  }
});

export default  CreateModelRoute;
