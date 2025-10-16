
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// hallBackground
		const hallBackground = this.add.image(0, 0, "hall");
		hallBackground.scaleX = 0.42;
		hallBackground.scaleY = 0.42;
		hallBackground.setOrigin(0, 0);

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

	// Write more your code here

	create() {
		this.editorCreate();
		const hallBackground = this.hallBackground;
		console.log(hallBackground);
		hallBackground.setDisplaySize(this.width, this.height);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
