import Ember from 'ember';
import DefaultRoute from "../../application/route";

export default DefaultRoute.extend({

  model: function(params) {
    return this.store.findAll('tenant');
  }
});
