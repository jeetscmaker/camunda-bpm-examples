/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(function() {

  function EmojiOverlay(elementRegistry, overlays, eventBus) {

    this._overlays = overlays;
    this._elementRegistry = elementRegistry;

    var self = this;

    eventBus.on('canvas.viewbox.changed', function() {
      self._elementRegistry.forEach(function(flowElement) {
        self._overlays.add(flowElement, 'emoji', {
          position: { left:0, top: 0 },
          html: '<span style="font-size:40px">😁</span>'
        });
      });
    });

  }

  return {
    __init__: [ 'emojiOverlay' ],
    'emojiOverlay': [ 'type', EmojiOverlay ]
  };

});