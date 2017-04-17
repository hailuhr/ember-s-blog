import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('show', { path: '/:id' });
    this.route('user', { path: '/user/:id' });
    this.route('index', { path: '/index' });
  });
});

export default Router;
