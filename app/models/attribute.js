import Ember from 'ember';

var Attribute = Ember.Object.extend({
  type: "text",
  modelName: "default",
  attributeName: null,
  disabled: false,
  length: "40",
  title: Ember.computed('modelName', 'attributeName', function() {
    var modelName = this.get("modelName");
    var attributeName = this.get("attributeName");
    return "model.attribute.title." + modelName + "." + attributeName;
  })
});
export default Attribute;
