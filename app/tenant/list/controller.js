import Ember from 'ember';
import Attribute from "../../models/attribute";
import FormController from "../../common/form/controller";

export default FormController.extend({

  modelListAttributes: Ember.ArrayProxy.create({
    content: Ember.A([
        Attribute.create({modelName: "tenant", attributeName: "active", displayClass: "active"}),
        Attribute.create({modelName: "tenant", attributeName: "name"}),
        Attribute.create({modelName: "tenant", attributeName: "street"}),
        Attribute.create({modelName: "tenant", attributeName: "postcode"}),
        Attribute.create({modelName: "tenant", attributeName: "country"})
    ])
  }),

  modelCreateAttributes: Ember.ArrayProxy.create({
    content: Ember.A([
        Attribute.create({modelName: "tenant", attributeName: "name"}),
        Attribute.create({modelName: "tenant", attributeName: "street"}),
        Attribute.create({modelName: "tenant", attributeName: "postcode"}),
        Attribute.create({modelName: "tenant", attributeName: "country"})
    ])
  }),

  actions: {
    createTenant: function() {
  		var attributes = this.get("modelCreateAttributes");
      var model = this.store.createRecord("tenant");
      this.send("showEditModelModal", model, undefined, attributes);
  	}
  }

});
