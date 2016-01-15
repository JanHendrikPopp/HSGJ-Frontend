
import Ember from "ember";
import Localization from "vse-portals/localizations/localization";

var FormView = Ember.View.extend({
	/**
	 * Renders an error message as popover. This is only done if an error message is supplied. The error message is automatically localized.
	 *
	 * @param jQueryObject Form element where the error occurred
	 * @param message Localization key for the error message
	 */
	_renderPopover: function(jQueryObject, message) {
		if (jQueryObject === undefined || message === undefined) {
			throw "The jQ reference and message cannot be undefined!";
		}

		var localizedMessage = Localization.msg(message);

		jQueryObject.attr("data-toggle", "popover");
		jQueryObject.attr("data-has-error", "true");
		jQueryObject.attr("data-placement", "top");
		jQueryObject.attr("data-content", localizedMessage);
		jQueryObject.attr("data-html", false);

		jQueryObject.popover({
			trigger : "click"
		});
		jQueryObject.popover("show");
	}

});

export default FormView;
