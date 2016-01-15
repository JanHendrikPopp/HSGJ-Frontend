import Ember from 'ember';
import Attribute from "../../models/attribute";

export default Ember.Controller.extend({

  modelAttributes: Ember.ArrayProxy.create({
    content: Ember.A([
        Attribute.create({modelName: "inventory", attributeName: "id"}),
        Attribute.create({modelName: "inventory", attributeName: "type"}),
        Attribute.create({modelName: "inventory", attributeName: "name"}),
        Attribute.create({modelName: "inventory", attributeName: "color"}),
        Attribute.create({modelName: "inventory", attributeName: "description"}),
        Attribute.create({modelName: "inventory", attributeName: "price"})
    ])
  })

});
