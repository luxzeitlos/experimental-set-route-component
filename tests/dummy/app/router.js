import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('foo');
  this.route('nested', function () {
    this.route('leaf');
  });
  this.route('legacy', function () {
    this.route('old-route');
  });
});
