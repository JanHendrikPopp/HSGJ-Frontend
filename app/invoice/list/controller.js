import Ember from 'ember';
import Attribute from "../../models/attribute";

export default Ember.Controller.extend({

  modelAttributes: Ember.ArrayProxy.create({
    content: Ember.A([
        Attribute.create({modelName: "invoice", attributeName: "id"}),
        Attribute.create({modelName: "invoice", attributeName: "date"}),
        Attribute.create({modelName: "invoice", attributeName: "brutto"}),
        Attribute.create({modelName: "invoice", attributeName: "netto"})
    ])
  })

});
