import Ember from 'ember';
var $ = Ember.$;
import DS from 'ember-data';

/**
 * Tenant model
 *
 * @author Jan-Hendrik Popp
 * @param   {Object}   ember-data
 * @returns {DS.Model}
 */
var Tenant = DS.Model.extend({
  gender: DS.attr("string"),
  active: DS.attr("boolean"),
  firstname: DS.attr("string"),
  lastname: DS.attr("string"),
  birthday: DS.attr("number"),
  street: DS.attr("string"),
  postcode: DS.attr("string"),
  country: DS.attr("string")
});

export default Tenant;
