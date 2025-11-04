import { Boot } from './scenes/Boot';
import { StartScreen } from './scenes/StartScreen';
import { InventoryUI } from './scenes/InventoryUI'
import { MovementUI } from './scenes/MovementUI'
import { Preloader } from './scenes/Preloader';
import { AUTO, Game } from 'phaser';

const roomModules = import.meta.glob('./scenes/*/**/*.js', { eager: true });
const roomScenes = Object.values(roomModules).map(mod => {
    return Object.values(mod).find(v => typeof v === 'function');
});

const config = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        StartScreen,
        ...roomScenes,
        InventoryUI,
        MovementUI
    ]
};

const StartGame = (parent) => {

    return new Game({ ...config, parent });

}

export default StartGame;
