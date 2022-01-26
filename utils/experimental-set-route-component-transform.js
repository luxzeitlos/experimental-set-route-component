/* eslint-disable node/no-unpublished-require */
const Plugin = require('broccoli-plugin');
const fs = require('fs');
const path = require('path');
const walkSync = require('walk-sync');
const mkdirp = require('mkdirp');

class ExperimentalSetRouteComponentTransform extends Plugin {
  constructor(inputNodes, options = {}) {
    super(inputNodes, {
      annotation: options.annotation,
    });
  }

  get appName() {
    const [appName] = fs.readdirSync(this.inputPaths[0]);
    return appName;
  }

  get inputAppPath() {
    return path.join(this.inputPaths[0], this.appName);
  }

  get outputAppPath() {
    return path.join(this.outputPath, this.appName);
  }

  setupRoute(routeSegments) {
    const outputRouteTemplatePath =
      path.join(this.outputAppPath, 'templates', ...routeSegments) + '.js';
    const forRoute = routeSegments.join('/');

    mkdirp.sync(path.dirname(outputRouteTemplatePath));
    fs.writeFileSync(
      outputRouteTemplatePath,
      `
      import { hbs } from 'ember-cli-htmlbars';
      export default hbs\`
        <ExperimentalSetRouteComponentWrapper @model={{@model}} @controller={{this}} @forRoute="${forRoute}" />
      \`;
    `
    );
  }

  build() {
    const routeDirTree = walkSync(path.join(this.inputAppPath, 'routes'));
    const routes = [
      'application',
      'index',
      ...routeDirTree.filter((x) => x.endsWith('/')).map((x) => `${x}index`),
      ...routeDirTree
        .filter((x) => x.endsWith('.ts') || x.endsWith('.js'))
        .map((x) => x.slice(0, -3)),
    ]
      .sort()
      .map((r) => r.split('/'));

    for (const route of routes) {
      this.setupRoute(route);
    }
  }
}

module.exports = ExperimentalSetRouteComponentTransform;
