import Ember from 'ember';
var $ = Ember.$;
import DS from 'ember-data';

/**
 * Release Notes Model
 *
 * @author Jan-Hendrik Popp
 * @param   {Object}   ember-data
 * @returns {DS.Model}
 */
var ReleaseNote = DS.Model.extend({
  version: DS.attr("string"),
  description:  DS.attr("string"),
});

export default ReleaseNote;
