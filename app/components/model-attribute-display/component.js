import Ember from 'ember';

export default Ember.Component.extend({
  model: undefined,
  attribute: undefined,
  content: Ember.computed('model', 'attribute', function() {
    var model = this.get("model");
    var attribute = this.get("attribute").get("attributeName");
    return model.get(attribute);
  }),

  isActiveClass: function() {
    return this.get('attribute.displayClass') === 'active';
  }.property('attribute')
});
