/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    'Getting Started': ['introduction', 'installation', 'quickstart', 'updating', 'troubleshoot'],
    'Building Bots': [
      'flows',
      'transitions',
      'timeouts',
      'intents',
      'utterances',
      'emulator',
      {
        type: 'category',
        label: 'Docs',
        items: ['configuration', 'rbac']
      }
    ],
    'Deploying Botpress': ['configuration'],
    'Managing Botpress': ['rbac']
  }
}
