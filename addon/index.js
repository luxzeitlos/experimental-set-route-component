const routeComponentMap = new WeakMap();
import { tracked } from '@glimmer/tracking';

class Wrapper {
  @tracked target = null;
}

function getWrapper(route) {
  if (!routeComponentMap.has(route)) {
    routeComponentMap.set(route, new Wrapper());
  }
  return routeComponentMap.get(route);
}

export function setRouteComponent(component, route) {
  getWrapper(route).target = component;
  return route;
}

export function __getRouteComponent(route) {
  let klassObj = route;
  while (klassObj) {
    const klass = klassObj.constructor;
    if (getWrapper(klass).target) {
      return getWrapper(klass).target;
    }
    klassObj = Object.getPrototypeOf(klassObj);
  }
  return null;
}
