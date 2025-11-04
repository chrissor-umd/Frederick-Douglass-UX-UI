import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";

export default class Level extends Phaser.Scene {
	constructor() {
		super("Level");
	}

	/** @returns {void} */
	editorCreate() {
		// hallBackground
		const hallBackground = this.add.image(0, 0, "hall");
		hallBackground.scaleX = 0.42;
		hallBackground.scaleY = 0.42;
		hallBackground.setOrigin(0, 0);

		//Save to the scene so we can access it later
		this.hallBackground = hallBackground;

		// arrowElevator
		const arrowElevator = this.add.image(996, 525, "arrow_right");
		arrowElevator.name = "arrowElevator";
		arrowElevator.scaleX = 1.4793229148377203;
		arrowElevator.scaleY = 1.4793229148377203;

		// transitionOnClick
		new ScriptNode(arrowElevator);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	create() {
		this.editorCreate();

		//Use Phaser’s scale manager for size
		const { width, height } = this.scale;

		//Now defined because we stored it on `this` above
		this.hallBackground.setDisplaySize(width, height);
	}

	/* END-USER-CODE */
}