import Ember from 'ember';
import Attribute from "../../models/attribute";

export default Ember.Controller.extend({

  modelAttributes: Ember.ArrayProxy.create({
    content: Ember.A([
        Attribute.create({modelName: "tenant", attributeName: "id"}),
        Attribute.create({modelName: "tenant", attributeName: "active"}),
        Attribute.create({modelName: "tenant", attributeName: "gender"}),
        Attribute.create({modelName: "tenant", attributeName: "firstname"}),
        Attribute.create({modelName: "tenant", attributeName: "lastname"}),
        Attribute.create({modelName: "tenant", attributeName: "birthday"}),
        Attribute.create({modelName: "tenant", attributeName: "street"}),
        Attribute.create({modelName: "tenant", attributeName: "postcode"}),
        Attribute.create({modelName: "tenant", attributeName: "country"})
    ])
  })

});
