'use strict';

var isList = require('./isList');

/**
 * Return the parent list block for an item block.
 *
 * @param {PluginOptions} opts
 * @param {Slate.State} state
 * @param {Slate.Block} item
 * @return {Slate.Block || Void}
 */
function getListForItem(opts, state, item) {
  var document = state.document;

  var parent = document.getParent(item.key);
  return parent && isList(opts, parent) ? parent : null;
}

module.exports = getListForItem;