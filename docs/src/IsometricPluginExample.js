import Phaser, { Scene } from 'phaser';
import IsometricPlugin from 'phaser3-plugin-isometric';

class IsometricPluginExample extends Scene {
  constructor() {
    super({ key: 'IsometricPluginExample' });
  }

  preload() {
    this.load.plugin('IsometricPlugin', IsometricPlugin);
    this.load.image('cube', 'assets/cube.png');
  }

  create() {
    this.sys.install('IsometricPlugin');

    // Set the anchor of the isometric projection to the mid top of the screen
    this.isometric.anchor.setTo(0.5, 0.1)

    // Even though the children are added back to front, it is sorted the right way
    // because depth value is set on the IsoSprites and Phaser 3 sorts after that by default.
    for (var xx = 256; xx > 0; xx -= 48) {
      for (var yy = 256; yy > 0; yy -= 48) {
        // Create a cube using the new isoSprite factory method at the specified position.
        const isoCube = this.add.isoSprite(xx, yy, 0, 'cube');

        // Add a tween so we can see the depth sorting works on updates
        this.tweens.add({
          targets: isoCube,
          isoX: 256 - xx + 32,
          duration: 2000,
          ease: 'Quad.easeInOut',
          delay: 0,
          yoyo: true,
          repeat: Infinity
        })
      }
    }
  }

  update() {
    // We can interact with the cubes
    // Pick a pseudo-random cube and let it sink on click / touch
    if (this.input.activePointer.justDown) {
      const cube = this.children.list[Math.trunc(Math.random() * 35)];
      cube.isoZ -= 48;
    }
  }
}

export default new IsometricPluginExample();
