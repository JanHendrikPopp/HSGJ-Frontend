import Ember from 'ember';
import Attribute from "../../models/attribute";

export default Ember.Controller.extend({

  modelAttributes: Ember.ArrayProxy.create({
    content: Ember.A([
        Attribute.create({modelName: "reservation", attributeName: "id"}),
        Attribute.create({modelName: "reservation", attributeName: "status"}),
        Attribute.create({modelName: "reservation", attributeName: "start"}),
        Attribute.create({modelName: "reservation", attributeName: "end"})
    ])
  })

});
