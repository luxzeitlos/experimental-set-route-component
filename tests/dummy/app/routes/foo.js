import Route from '@ember/routing/route';

import { setRouteComponent } from 'experimental-set-route-component';

export default class FooRoute extends Route {}

import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnlyComponent from '@ember/component/template-only';

const RouteComponent = setComponentTemplate(
  precompileTemplate(
    `
    <div id="foo-route-component">Foo Component</div>
    `,
    {
      strictMode: true,
      scope: () => ({}),
    }
  ),
  templateOnlyComponent()
);

setRouteComponent(RouteComponent, FooRoute);
