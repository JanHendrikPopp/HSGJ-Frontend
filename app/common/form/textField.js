/**
 * Activities such as rendering tooltips.
 *
 * @author Jan-Hendrik Popp
 * @param   {Object}   Ember
 * @returns {Ember.TextField}
 */
import Ember from "ember";
import Localization from "vse-portals/localizations/localization";

Ember.TextField.reopen({

	attributeBindings: ['tooltip', 'model', 'modelAttribute'],
/*
		triggerEvents: function () {
	        Ember.run.next(this, function () {
	            this.$().trigger("change");

	        });
	    }.on("didInsertElement"),
*/

	value: function(key, value){
		var model = this.get("model");
		var attribute = this.get("modelAttribute");
		if(model) {
			model.set(attribute, value);
		}
		return value;
	}.property('value'),

	focusIn: function () {

		/* Tooltip disabled
		var object = this.$();
		var tooltip = object.attr("tooltip");
		if (!object.attr("data-has-error") && tooltip !== undefined) {
			this._renderTooltip(object, tooltip);
		}
		*/
	},

	focusOut: function () {
		/* Tooltip disabled
		this.$().popover("hide");
		*/
	},

	/**
	 * Renders a tooltip message as popover. This is only done if a tooltip message is supplied. The tooltip message is automatically localized.
	 *
	 * @param jQueryObject Form element
	 * @param message Localization key for the error message
	 */
	_renderTooltip: function (jQueryObject, message) {
		if (jQueryObject === undefined || message === undefined) {
			throw "The jQ reference and message cannot be undefined!";
		}

		var localizedMessage = Localization.msg(message);

		jQueryObject.attr("data-toggle", "popover");
		jQueryObject.attr("data-placement", "right");
		jQueryObject.attr("data-content", localizedMessage);
		jQueryObject.attr("data-html", false);

		if (jQueryObject.is("input")) {
			jQueryObject.popover({
				trigger: "focus"
			});
		} else {
			jQueryObject.popover({
				trigger: "click"
			});
			jQueryObject.popover("show");
		}

	}

});
