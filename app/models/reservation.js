import Ember from 'ember';
var $ = Ember.$;
import DS from 'ember-data';

/**
 * Reservation model
 *
 * @author Jan-Hendrik Popp
 * @param   {Object}   ember-data
 * @returns {DS.Model}
 */
var Reservation = DS.Model.extend({
  status: DS.attr("string"),
  start: DS.attr("string"),
  end: DS.attr("string")
});

export default Reservation;
