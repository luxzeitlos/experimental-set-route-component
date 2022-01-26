import Route from '@ember/routing/route';

import { setRouteComponent } from 'experimental-set-route-component';

export default class FooRoute extends Route {
  model() {
    return 'the leaf route model';
  }
}

import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnlyComponent from '@ember/component/template-only';

const RouteComponent = setComponentTemplate(
  precompileTemplate(
    `
    <div id="leaf-route-component">This is the leaf route component</div>
    <div>The model:</div>
    <div id="leaf-route-model">{{@model}}</div>
    `,
    {
      strictMode: true,
      scope: () => ({}),
    }
  ),
  templateOnlyComponent()
);

setRouteComponent(RouteComponent, FooRoute);
