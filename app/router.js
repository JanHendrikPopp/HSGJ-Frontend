import Ember from 'ember';
import config from './config/environment';

  var Router = Ember.Router.extend({
    location: config.locationType
  });

  Router.map(function() {
    this.route('login');

    this.resource('inventory', function() {
      this.route('list');
    });
    this.resource('tenant', function() {
      this.route('list');
    });
    this.resource('reservation', function() {
      this.route('list');
    });
    this.resource('invoice', function() {
      this.route('list');
    });

  });

  export default Router;
