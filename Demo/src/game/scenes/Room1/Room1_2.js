import { Scene } from 'phaser';

export class Room1_2 extends Scene {
    constructor() {
        super('Room1_2');
    }

    create() {
        const bg = this.add.image(512, 384, this.scene.key);
        bg.setScale(0.3);
        this.scene.launch('MovementUI', { sceneName: this.scene.key });
    }
}