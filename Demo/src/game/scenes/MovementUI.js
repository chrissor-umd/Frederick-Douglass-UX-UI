import { Scene } from 'phaser';

export class MovementUI extends Scene {
  constructor() {
    super('MovementUI');
  }

  init(data) {
    // ✅ this runs before create()
    this.sceneName = data.sceneName || 'unknown';
  }

  create() {
    const rightArrow = this.add.image(1024 - 100, 384, 'arrow');
    const leftArrow = this.add.image(100, 384, 'arrow')
    rightArrow.setScale(0.075)
    leftArrow.setScale(0.075)
    leftArrow.setFlipX(true);

    const roomModules = import.meta.glob('./Room1/**/*.js', { eager: true });
    const roomCount = Object.keys(roomModules).length;

    rightArrow.setInteractive({ useHandCursor: true })
    rightArrow.once('pointerdown', () => {
      let i = parseInt(this.sceneName.toString().split("_")[1]) + 1
      i = (i == roomCount) ? 0 : i;
      this.scene.stop(this.sceneName)
      this.scene.start(this.sceneName.split("_")[0] + "_" + (i))
    })

    leftArrow.setInteractive({ useHandCursor: true })
    leftArrow.once('pointerdown', () => {
      let i = parseInt(this.sceneName.toString().split("_")[1]) - 1
      i = (i < 0) ? i = roomCount - 1 : i
      this.scene.stop(this.sceneName)
      this.scene.start(this.sceneName.split("_")[0] + "_" + (i))
    })

    console.log(this.sceneName)
  }
}