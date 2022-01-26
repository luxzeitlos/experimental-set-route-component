import Component from '@glimmer/component';
import { __getRouteComponent } from 'experimental-set-route-component';
import { getOwner } from '@ember/application';

export default class ExperimentalSetRouteComponentWrapperComponent extends Component {
  get targetComponent() {
    const targetRoute = getOwner(this).lookup(`route:${this.args.forRoute}`);
    return __getRouteComponent(targetRoute);
  }
}
