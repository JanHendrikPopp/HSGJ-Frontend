import Ember from 'ember';
var $ = Ember.$;
import DS from 'ember-data';

/**
 * Invoice model
 *
 * @author Jan-Hendrik Popp
 * @param   {Object}   ember-data
 * @returns {DS.Model}
 */
var Invoice = DS.Model.extend({
  date: DS.attr("string"),
  brutto: DS.attr("number"),
  netto: DS.attr("number")
});

export default Invoice;
