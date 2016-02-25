import Ember from 'ember';
var $ = Ember.$;
import DS from 'ember-data';

/**
 * BaseModel model
 *
 * @author Jan-Hendrik Popp
 * @param   {Object}   ember-data
 * @returns {DS.Model}
 */
var BaseModel = DS.Model.extend({
  modelType: DS.attr("string")
});

export default BaseModel;
