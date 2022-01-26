/* eslint-disable node/no-unpublished-require */
'use strict';
const MergeTrees = require('broccoli-merge-trees');
const ExperimentalSetRouteComponentTransform = require('./utils/experimental-set-route-component-transform.js');

module.exports = {
  name: require('./package').name,
  preprocessTree(kind, tree) {
    if (kind === 'js') {
      const routelessTree = new ExperimentalSetRouteComponentTransform([tree], {
        annotation: 'experimental-set-route-component-transform',
      });
      return new MergeTrees([routelessTree, tree], {
        annotation: 'merge-experimental-set-route-component-transform',
        overwrite: true,
      });
    }
    return tree;
  },
};
