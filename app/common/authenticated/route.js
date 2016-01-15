import Ember from 'ember';

var AuthenticatedRoute = Ember.Route.extend({
	/*
	beforeModel: function (transition) {
    var self = this;
		var loggedIn = false;

    var promise = new Ember.RSVP.Promise(function (resolve, reject) {
      $.ajax({
        type: 'GET',
        url: '/admin/api/user',
        contentType: 'application/json',
        processData: false,
        success: function(response) {
          resolve(response.user);
        },
        error: function(reason) {
          reject(reason.responseText);
        }
      });
    });

    promise.then(function(user) {
			if (jQuery.inArray("ROLE_RESELLER_ADMIN", user.roleNames) !== -1) {
					self.client.set("isResellerAdmin", true);
			}
			if (jQuery.inArray("ROLE_TENANT_ADMIN", user.roleNames) !== -1) {
					self.client.set("isTenantAdmin", true);
			}

			self.client.set("loggedInUser", user);
    }, function(reason) {
      if (transition.targetName !== "login") {
        self.transitionTo("login");
      }
    });
	},
	actions: {
	  reloadRoute: function() {
			var self = this;
			this.store.unloadAll("plan");
			this.store.unloadAll("tariff");
			var onSuccess = function() {
				self.client.set("lastReloadTimestamp", new Date().getTime());
			};
			this.refresh().then(onSuccess);
	  },
		logout: function() {
			var self = this;
			var promise = new Promise(function (resolve, reject) {
	      $.ajax({
	        type: 'POST',
	        url: '/admin/api/logout',
	        contentType: 'application/json',
	        processData: false,
	        success: function(response) {
	          resolve(response);
	        },
	        error: function(reason) {
	          reject(reason);
	        }
	      });
			});

			var onSuccess = function() {
				self.client.set('loggedInUser', null);
				self.store.unloadAll();
				self.transitionTo("logout");
			}

			var onFail = function() {
				console.log("Logout error");
			}
			promise.then(onSuccess).catch(onFail);
		}
	}
	*/
});

export default AuthenticatedRoute;
