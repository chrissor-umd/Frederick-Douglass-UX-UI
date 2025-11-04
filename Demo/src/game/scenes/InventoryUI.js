import { Scene } from 'phaser';
import { globalState } from '../../GlobalState.js';

export class InventoryUI extends Scene {
  constructor() {
    super('InventoryUI');
    this.itemImages = []
  }

  renderItems(boxHeight, boxX, boxY) {
    this.itemImages.forEach(obj => {
      obj.img.destroy()
      obj.outline.destroy()
    })
    this.itemImages = [];
    let inventory = globalState.inventory;
    if (inventory.length != 0) {
      for (let i = 0; i < inventory.length; i++) {
        //set position for each item
        const pos = {
          x: boxX + (120 * (i + 1)),
          y: boxY + boxHeight / 2,
        }

        //render each image
        const img = this.add.image(pos.x, pos.y, inventory[i].toString());

        img.setDisplaySize(75, 75)
        img.setInteractive({ useHandCursor: true });

        img.once('pointerdown', () => {
          globalState.selectedItem = inventory[i]
          console.log(globalState.selectedItem)
          this.renderItems(boxHeight, boxX, boxY)
        })

        //set outline to 90 if item is selected
        let outlineSize = (inventory[i] == globalState.selectedItem ? 90 : 0);
        let outline = this.add.graphics();
        outline.lineStyle(3, 0xffffff, 1);
        outline.strokeRoundedRect(pos.x - outlineSize / 2, pos.y - outlineSize / 2, outlineSize, outlineSize, 10);

        this.itemImages.push({ img, outline });
      }
    }
  }

  create() {
    globalState.addItem("key")
    globalState.addItem("stick")
    globalState.addItem("potion")

    //inventory box
    const boxWidth = 984;
    const boxHeight = 150;
    const boxX = 512 - boxWidth / 2;
    const boxY = 20;

    const graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 0.7);
    graphics.fillRoundedRect(boxX, boxY, boxWidth, boxHeight, 20);

    // Add image inside the box
    this.renderItems(boxHeight, boxX, boxY);
  }
}