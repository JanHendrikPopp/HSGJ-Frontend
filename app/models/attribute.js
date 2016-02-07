import Ember from 'ember';

var Attribute = Ember.Object.extend({
  type: "text",
  modelName: "default",
  attributeName: null,
  disabled: false,
  length: "40",
  optional: false,
  title: Ember.computed('modelName', 'attributeName', function() {
    var modelName = this.get("modelName");
    var attributeName = this.get("attributeName");
    return "model.attribute." + modelName + "." + attributeName + ".title";
  }),
  popoverText: Ember.computed('modelName', 'attributeName', function() {
    var modelName = this.get("modelName");
    var attributeName = this.get("attributeName");
    return "model.attribute." + modelName + "." + attributeName + ".popover";
  }),
  optionalText: Ember.computed('optional', function() {
    return "popover.optional." + this.get("optional");
  })
});
export default Attribute;
