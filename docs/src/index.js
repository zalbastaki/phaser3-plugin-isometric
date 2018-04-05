import Phaser, { Game } from 'phaser';
import IsometricPluginExample from './IsometricPluginExample';

let config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  pixelArt: true,
  scene: IsometricPluginExample
};

new Game(config);
