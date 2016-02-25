import Ember from 'ember';
var $ = Ember.$;
import BaseModel from "../models/base-model";

/**
 * Tenant model
 *
 * @author Jan-Hendrik Popp
 * @param   {Object}   ember-data
 * @returns {DS.Model}
 */
var Tenant = BaseModel.extend({
  active: DS.attr("boolean"),
  name: DS.attr("string"),
  street: DS.attr("string"),
  postcode: DS.attr("string"),
  country: DS.attr("string")
});

export default Tenant;
