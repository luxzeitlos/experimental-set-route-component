experimental-set-route-component
==============================================================================

This is an experimental polyfill for the
[unmerged `setRouteComponent` RFC 731](https://github.com/emberjs/rfcs/pull/731).

`setRouteComponent` can be imported as follows:

```
import { setRouteComponent } from 'experimental-set-route-component';
```

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install experimental-set-route-component
```


Usage
------------------------------------------------------------------------------

This probably should be used by other addons experimenting with routable
components.
Examples can be found in the Dummy App.

This is also compatible with `ember-template-imports` and `.gjs` files.
So this *will* work:

```
import Route from '@ember/routing/route';
import { setRouteComponent } from 'experimental-set-route-component';

const RoutableComponentYeah = <template>
  Whatever
</template>

export default class FooRoute extends Route {}
setRouteComponent(RoutableComponentYeah, FooRoute);
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
