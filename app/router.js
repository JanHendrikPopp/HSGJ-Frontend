import Ember from 'ember';
import config from './config/environment';

  var Router = Ember.Router.extend({
    location: config.locationType
  });

  Router.map(function() {
    this.route('login');

    this.route('inventory', function() {
      this.route('list');
    });
    this.route('tenant', function() {
      this.route('list');
    });
    this.route('reservation', function() {
      this.route('list');
    });
    this.route('invoice', function() {
      this.route('list');
    });

  });

  export default Router;
