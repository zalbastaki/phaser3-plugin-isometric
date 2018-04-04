/**
* The MIT License (MIT)

* Copyright (c) 2015 Lewis Lane

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

/**
 * @author       Lewis Lane <lew@rotates.org>
 * @copyright    2015 Lewis Lane (Rotates.org)
 * @license      {@link http://opensource.org/licenses/MIT|MIT License}
 */

import Projector from './Projector';

export const VERSION = '0.9.3';

// Directional consts
export const UP = 0;
export const DOWN = 1;
export const FORWARDX = 2;
export const FORWARDY = 3;
export const BACKWARDX = 4;
export const BACKWARDY = 5;

//  Type consts
export const ISOSPRITE = 'IsoSprite';
export const ISOARCADE = 'IsoArcade';

/**
 * @class IsometricPlugin
 * 
 * @classdesc
 * Isometric is a comprehensive axonometric plugin for Phaser which provides an API for handling axonometric projection of assets in 3D space to the screen.
 * The goal has been to mimic as closely as possible the existing APIs provided by Phaser for standard orthogonal 2D projection, but add a third dimension.
 * Also included is an Arcade-based 3D AABB physics engine, which again is closely equivalent in functionality and its API.
 */
export default class IsometricPlugin {
  /**
   * @constructor
   * @param {Phaser.Scene} scene The current scene instance
   */
  constructor(scene) {
    this.scene = scene;
    this.systems = scene.sys;

    if (!scene.sys.settings.isBooted) {
      scene.sys.events.once('boot', this.boot, this);
    }

    this.projector = new Projector(scene, scene.isometricType);
    scene.isometric = scene.isometric || this.projector;
  }

  boot() {
  }

  static register(PluginManager) {
    PluginManager.register('IsometricPlugin', IsometricPlugin, 'isometric');
  }

  addIsoSprite(x, y, z, key, frame, group) {
    return Phaser.GameObjects.GameObjectFactory.prototype.isoSprite(this.scene, x, y, z, key, frame, group);
  }
}
