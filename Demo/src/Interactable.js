import { globalState } from './GlobalState.js'

export class Interactable {
  constructor(scene, image, x, y, keyItem) {
    this.scene = scene
    this.imageKey = image
    this.keyItem = keyItem

    if (globalState.interactedItems[image]) {
      this.sprite = scene.add.image(x, y, image + "_interacted");
    } else {
      this.sprite = scene.add.image(x, y, image);
    }
    this.sprite.setInteractive({ useHandCursor: true });
    this.sprite.setDisplaySize(200, 200);

    this.sprite.on('pointerdown', () => {
      console.log(globalState.selectedItem)
      if (globalState.selectedItem == keyItem) {
        globalState.interactedItems[image] = true;
        this.sprite.setTexture(image + "_interacted");
        this.sprite.setDisplaySize(200, 200);
      }
    })
  }
}