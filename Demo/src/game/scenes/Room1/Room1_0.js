import { Scene } from 'phaser';
import { Interactable } from '../../../Interactable.js';

export class Room1_0 extends Scene {
    constructor() {
        super('Room1_0');
    }

    create() {
        const bg = this.add.image(512, 384, this.scene.key);
        bg.setScale(0.3);
        let safe = new Interactable(this, 'safe', 400, 400, 'key')
        this.scene.launch('MovementUI', { sceneName: this.scene.key });
    }
}