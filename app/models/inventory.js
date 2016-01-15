import Ember from 'ember';
var $ = Ember.$;
import DS from 'ember-data';

/**
 * Inventory model
 *
 * @author Jan-Hendrik Popp
 * @param   {Object}   ember-data
 * @returns {DS.Model}
 */
var Inventory = DS.Model.extend({
  type: DS.attr("string"),
  name: DS.attr("string"),
  color: DS.attr("string"),
  description: DS.attr("string"),
  price: DS.attr("number")
});

export default Inventory;
