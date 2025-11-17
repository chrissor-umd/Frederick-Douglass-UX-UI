gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDTransitionObjectObjects1= [];
gdjs.GameCode.GDTransitionObjectObjects2= [];
gdjs.GameCode.GDTransitionObjectObjects3= [];
gdjs.GameCode.GDInspectObjectObjects1= [];
gdjs.GameCode.GDInspectObjectObjects2= [];
gdjs.GameCode.GDInspectObjectObjects3= [];
gdjs.GameCode.GDExitInspectObjects1= [];
gdjs.GameCode.GDExitInspectObjects2= [];
gdjs.GameCode.GDExitInspectObjects3= [];
gdjs.GameCode.GDPauseButtonObjects1= [];
gdjs.GameCode.GDPauseButtonObjects2= [];
gdjs.GameCode.GDPauseButtonObjects3= [];
gdjs.GameCode.GDPauseTextObjects1= [];
gdjs.GameCode.GDPauseTextObjects2= [];
gdjs.GameCode.GDPauseTextObjects3= [];
gdjs.GameCode.GDInspectImageObjects1= [];
gdjs.GameCode.GDInspectImageObjects2= [];
gdjs.GameCode.GDInspectImageObjects3= [];
gdjs.GameCode.GDInspectBackgroundObjects1= [];
gdjs.GameCode.GDInspectBackgroundObjects2= [];
gdjs.GameCode.GDInspectBackgroundObjects3= [];
gdjs.GameCode.GDStatueCollectibleObjects1= [];
gdjs.GameCode.GDStatueCollectibleObjects2= [];
gdjs.GameCode.GDStatueCollectibleObjects3= [];


gdjs.GameCode.userFunc0x932128 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (!runtimeScene.getGame().getVariables().get("DataInitialized").getAsBoolean()) { // All persistent data is attached to gdjs so that it isn't reset on scene change
    gdjs.FDGameData = {};
    const cData = gdjs.FDGameData; // This way data can be accessed through a simpler variable name

    /// PUT ALL PERSISTENT DATA (FUNCTION DEFINITIONS AND VARIABLES AND STUFF) HERE! MAKE SURE TO PREFIX WITH 'cData.'!

    /**
     * @type {{
     * startLayout: string
     * currentLayout: string
     * runtimeScene: gdjs.RuntimeScene
     * collectibles: { [key:string]: boolean}
     * isInspecting: boolean
     * }}
     */
    cData.GameVars = { // This holds variables that are important for tracking/managing the current game variables
        startLayout: "FDS North", // The starting layout
        currentLayout: "", // This is used to load the corrent layout on transitions
        runtimeScene: runtimeScene, // Used for accessing the current RuntimeScene object, since otherwise the definitions here will try and access the old object
        collectibles: {}, /* This is used to track which collectibles have been collected. Each collectible has a uniqueID,
                          and is either true (collected) or false (not collected) */

        // Flags
        _isInspecting: false,
            get isInspecting() {
                return this._isInspecting;
            },
            set isInspecting(value) { // This automatically darkens the proper layers when setting
                this._isInspecting = value;
                const inspectLayer = this.runtimeScene.getLayer("Inspect");
                cData.darkEffect(value, true);
                inspectLayer.show(value);
                cData.ClickableLayers["Inspect"] = value;
                cData.ClickableLayers["UI"] = !value;
                cData.ClickableLayers["SceneObjects"] = !value;
                console.log(cData.ClickableLayers);
            }
    }
    const GameVars = cData.GameVars; // Simpler reference variable
    GameVars.currentLayout = GameVars.startLayout // Load the starting layout as default
    const Game = GameVars.runtimeScene.getGame();

    cData.ClickCallbacks = { // Stores registered callbacks to run when objects are clicked
        "pressed": {},
        "released": {}
    }

    cData.ClickableObjects = {}; // Tracks objects with associated click functions. This is useful for disabling interactivity under specific circumstances

    cData.ClickableLayers = { // Similar but for disabling layers instead of individual objects
        "UI": true,
        "SceneObjects": true,
        "Inspect": false
    }

    // OBJECT GROUPS ###################################################################################################################################
    // Since object groups aren't really easy to access in JS (or the usual engine imo), we can define object groups by object name here
    cData.ObjectGroups = {
        "Collectibles": [
            "StatueCollectible"
        ]
    }
}
};
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0x932128(runtimeScene);

}


};gdjs.GameCode.userFunc0x999518 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (!runtimeScene.getGame().getVariables().get("DataInitialized").getAsBoolean()) {
    const cData = gdjs.FDGameData;
    const GameVars = cData.GameVars;
    const Game = GameVars.runtimeScene.getGame();
    
    // FUNCTIONS #######################################################################################################################################

    /**
     * Returns all object names in the current game
     * @returns {string[]}
    */
    cData.getAllObjects = function() {
        // Gets all object types in the game
        const gameData = Game.getGameData().objects;
        const gameObjects = []; // This stores all object types
        for (const object of gameData) {
            gameObjects.push(object.name);
        }
        return gameObjects;
    }

    /**
     * Returns all instances of any object in the current scene
     * @param {gdjs.RuntimeScene} runtimeScene the target runtimeScene
     * @returns {Object} All objects in the current scene and their instances
     */
    cData.getAllSceneInstances = function(runtimeScene) {
        // Returns all the instances in the current scene (Not sure why the API doesn't already have this)
        const objectTypes = cData.getAllObjects();
        const sceneInstances = {};
        for (const object of objectTypes) {
            sceneInstances[object] = runtimeScene.getObjects(object);
        }
        return sceneInstances;
    }
    
    /**
     * Loads proper layouts for the scene and handles collectibles
     */
    cData.initScene = function() {
        // Loads proper layouts and initializes necessary values
        //console.log(`initializing ${cData.GameVars.currentLayout}`);
        gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(GameVars.runtimeScene, "UI", 0, 0, false); // Load the UI
        gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(GameVars.runtimeScene, "InspectUI", 0, 0, false);
        gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(GameVars.runtimeScene, GameVars.currentLayout, 0, 0, false);
                // Load the layout for the current screen
            
        // Disable the darkening effects
        const backgroundLayer = GameVars.runtimeScene.getLayer("Background");
        const objectsLayer = GameVars.runtimeScene.getLayer("SceneObjects");
        const uiLayer = GameVars.runtimeScene.getLayer("UI");
        for (const layer of [backgroundLayer, objectsLayer, uiLayer]) {
            layer.enableEffect("Darken", false);
        }

        for (const collectibleType of cData.ObjectGroups.Collectibles) { // Check all instances of collectible objects to see if they've been collected already
            const collectibleObjects = GameVars.runtimeScene.getObjects(collectibleType);
            for (const collectible of collectibleObjects) {
                const uniqueID = `${collectible.name}-${GameVars.currentLayout}-${collectible.getX()}-${collectible.getY()}`;
                    /* Each collectible instance is assigned to a unique ID that consists of the type of object, the name of the layout they're in,
                    and their x and y coordinates. This way we can track which objects have been collected or not */
                if (uniqueID in GameVars.collectibles) { // Check if this instance has been registered before
                    if (GameVars.collectibles[uniqueID] == true) { // Check if this item has been collected already
                        collectible.deleteFromScene(GameVars.runtimeScene); // Remove the object from the scene
                    }
                } else { // Collectible has not been registered before
                    GameVars.collectibles[uniqueID] = false; // register the object as not collected yet
                }
            }
        }
    }

    /**
     * Removes a collectible object from the scene and marks it as collected.
     * @param {gdjs.RuntimeObject} collectible the collectibleObject that's being collected
     * @returns {boolean} If the object was successfully collected
     */
    cData.collectObject = function(collectible) {
        if (!cData.ObjectGroups.Collectibles.includes(String(collectible.getName()))) {
            console.log("Object is not a collectible");
            return false;
        }
        const uniqueID = `${collectible.name}-${GameVars.currentLayout}-${collectible.getX()}-${collectible.getY()}`; // The objects uniqueID to distinguish it from others
        GameVars.collectibles[uniqueID] = true; // Mark as collected
        collectible.deleteFromScene(GameVars.runtimeScene);
        console.log(`Collected ${uniqueID}`);
        return true;
    }

    /**
     * Darkens the appropriate layers for pausing and inspection
     * @param {boolean} enable Whether to enable or disable the effect
     * @param {boolean} darkenUI Whether to darken the UI layer (for inspects) 
     */
    cData.darkEffect = function(enable, darkenUI = false) {
        const backgroundLayer = GameVars.runtimeScene.getLayer("Background");
        const objectsLayer = GameVars.runtimeScene.getLayer("SceneObjects");
        const uiLayer = GameVars.runtimeScene.getLayer("UI");
        const layers = [backgroundLayer, objectsLayer];
        if (darkenUI) {
            layers.push(uiLayer);
        }
        for (const layer of layers) {
            layer.enableEffect("Darken", enable);
        }
    }

    /**
     * Registers a function to run when an object is clicked.
     * @param {string} objectType The type of object that will run the function when clicked
     * @param {string} clickButton The type of click to register (Left, Right, Middle, etc.)
     * @param {"pressed"|"released"} clickDuration How long the object must be clicked before this function will run
     * @param {(obj: gdjs.RuntimeObject) => void} callbackFunction The function to run when the object is clicked
     */
    cData.registerClickCallback = function(objectType, clickButton, clickDuration, callbackFunction) {
        if (!(clickButton in cData.ClickCallbacks[clickDuration])) {
            cData.ClickCallbacks[clickDuration][clickButton] = {};
        }
        cData.ClickCallbacks[clickDuration][clickButton][objectType] = callbackFunction;
        cData.ClickableObjects[objectType] = true; // Register this object as clickable
    }
   
    /**
     * Checks clicked objects and runs the appropriate functions
     */
    cData.handleClickCallbacks = function() {
        let isHovering = false; // Whether the mouse is hovering over a clickable object
        for (const object in cData.ClickableObjects) {
            if (cData.ClickableObjects[object]) {
                const objects = GameVars.runtimeScene.getObjects(object);
                for (const instance of objects) { // Iterating over all the objects like this isn't the most efficient but it'll do
                    const instanceLayer = instance.getLayer();
                    if (instance.cursorOnObject() && (instanceLayer in cData.ClickableLayers) && (cData.ClickableLayers[instanceLayer])) {
                        console.log(instanceLayer);
                        console.log(cData.ClickableLayers[instanceLayer]);
                        isHovering = true;
                    }
                }
            }
        }
        if (isHovering) {
            Game.getRenderer().getCanvas().style.cursor = "pointer"; // Change the cursor to a pointer if the mouse is hovering over a clickable object
        }
        for (const clickButton in cData.ClickCallbacks.pressed) {
            if (gdjs.evtTools.input.isMouseButtonPressed(GameVars.runtimeScene, clickButton)) {
                for (const object in cData.ClickCallbacks.pressed[clickButton]) {
                    if (cData.ClickableObjects[object]) { // Check if the object has been disabled
                        const instances = GameVars.runtimeScene.getObjects(object);
                        for (const instance of instances) {
                            const instanceLayer = instance.getLayer();
                            if (instance.cursorOnObject() && (instanceLayer in cData.ClickableLayers) && (cData.ClickableLayers[instanceLayer])) {
                                cData.ClickCallbacks.pressed[clickButton][object](instance); // Run the associated function passing the instance as an arg
                            }
                        }
                    }
                }
            }
        }
        for (const clickButton in cData.ClickCallbacks.released) {
            if (gdjs.evtTools.input.isMouseButtonReleased(GameVars.runtimeScene, clickButton)) {
                for (const object in cData.ClickCallbacks.released[clickButton]) {
                    if (cData.ClickableObjects[object]) { // Check if the object has been disabled
                        const instances = GameVars.runtimeScene.getObjects(object);
                        for (const instance of instances) {
                            const instanceLayer = instance.getLayer();
                            if (instance.cursorOnObject() && (instanceLayer in cData.ClickableLayers) && (cData.ClickableLayers[instanceLayer])) {
                                cData.ClickCallbacks.released[clickButton][object](instance); // Run the associated function passing the instance as an arg
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Enables/Disables the click callback function of a given object. Useful for pausing functionality under specific circumstances
     * @param {string} object The type of object
     * @param {boolean} enable Set to true to enable the object, set to false to disable the object
     */
    cData.enableObjectClick = function(object, enable) {
        if (!(object in cData.ClickableObjects)) {
            console.log(`Warning: ${object} not registered as clickable!`);
            return
        }
        cData.ClickableObjects[object] = enable;
    }
}
};
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0x999518(runtimeScene);

}


};gdjs.GameCode.userFunc0x999690 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (!runtimeScene.getGame().getVariables().get("DataInitialized").getAsBoolean()) {
    const cData = gdjs.FDGameData;
    const GameVars = cData.GameVars;
    const Game = GameVars.runtimeScene.getGame();
    
    // CALLBACK REGISTRATIONS ##########################################################################################################################
    /*
    This is where you can easily assign objects to specific functions when clicked. Just call the cData.registerClickCallback() function, and pass the object type, button, and click duration as arguments,
    and then an anonymous function with all of the code you want to exectute. It should look like this: (obj) => {}; The function can refer to `obj` as the object being clicked;
    */

    cData.registerClickCallback("TransitionObject", "Left", "released", (obj) => {
        GameVars.currentLayout = obj.getVariables().get("targetLayout").getAsString();
        gdjs.evtTools.runtimeScene.replaceScene(GameVars.runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(GameVars.runtimeScene));
            // Changes the currentLayout to the layout associated with the TransitionObject and reloads the scene
    });

    cData.registerClickCallback("InspectObject", "Left", "released", (obj) => {
        GameVars.isInspecting = true;
    });

    cData.registerClickCallback("ExitInspect", "Left", "released", (obj) => {
        GameVars.isInspecting = false;
    });

    cData.registerClickCallback("PauseButton", "Left", "released", (obj) => {
        gdjs.evtTools.runtimeScene.pushScene(GameVars.runtimeScene, "Pause Screen"); // Pauses the current scene and loads the "Pause Screen" Scene
    });

    cData.registerClickCallback("StatueCollectible", "Left", "released", (obj) => {
        cData.collectObject(obj);
    });


    Game.getVariables().get("DataInitialized").setBoolean(true); // Sets the DataInitialized variable to true so that definitions are only made once
    console.log("initialized custom game data");
}

};
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0x999690(runtimeScene);

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


};gdjs.GameCode.userFunc0x896af8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const cData = gdjs.FDGameData; // Simpler variables to use as reference
const GameVars = cData.GameVars;

if (gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene)) { // Runs only at the beginning of the scene
    GameVars.runtimeScene = runtimeScene; // Update the current RuntimeScene object
    cData.initScene(runtimeScene);
    console.log("Initialized scene");
    GameVars.isInspecting = false;
}

cData.handleClickCallbacks(); // Handle all registered functions associated with clicking objects
};
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0x896af8(runtimeScene);

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDTransitionObjectObjects1.length = 0;
gdjs.GameCode.GDTransitionObjectObjects2.length = 0;
gdjs.GameCode.GDTransitionObjectObjects3.length = 0;
gdjs.GameCode.GDInspectObjectObjects1.length = 0;
gdjs.GameCode.GDInspectObjectObjects2.length = 0;
gdjs.GameCode.GDInspectObjectObjects3.length = 0;
gdjs.GameCode.GDExitInspectObjects1.length = 0;
gdjs.GameCode.GDExitInspectObjects2.length = 0;
gdjs.GameCode.GDExitInspectObjects3.length = 0;
gdjs.GameCode.GDPauseButtonObjects1.length = 0;
gdjs.GameCode.GDPauseButtonObjects2.length = 0;
gdjs.GameCode.GDPauseButtonObjects3.length = 0;
gdjs.GameCode.GDPauseTextObjects1.length = 0;
gdjs.GameCode.GDPauseTextObjects2.length = 0;
gdjs.GameCode.GDPauseTextObjects3.length = 0;
gdjs.GameCode.GDInspectImageObjects1.length = 0;
gdjs.GameCode.GDInspectImageObjects2.length = 0;
gdjs.GameCode.GDInspectImageObjects3.length = 0;
gdjs.GameCode.GDInspectBackgroundObjects1.length = 0;
gdjs.GameCode.GDInspectBackgroundObjects2.length = 0;
gdjs.GameCode.GDInspectBackgroundObjects3.length = 0;
gdjs.GameCode.GDStatueCollectibleObjects1.length = 0;
gdjs.GameCode.GDStatueCollectibleObjects2.length = 0;
gdjs.GameCode.GDStatueCollectibleObjects3.length = 0;

gdjs.GameCode.eventsList5(runtimeScene);
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDTransitionObjectObjects1.length = 0;
gdjs.GameCode.GDTransitionObjectObjects2.length = 0;
gdjs.GameCode.GDTransitionObjectObjects3.length = 0;
gdjs.GameCode.GDInspectObjectObjects1.length = 0;
gdjs.GameCode.GDInspectObjectObjects2.length = 0;
gdjs.GameCode.GDInspectObjectObjects3.length = 0;
gdjs.GameCode.GDExitInspectObjects1.length = 0;
gdjs.GameCode.GDExitInspectObjects2.length = 0;
gdjs.GameCode.GDExitInspectObjects3.length = 0;
gdjs.GameCode.GDPauseButtonObjects1.length = 0;
gdjs.GameCode.GDPauseButtonObjects2.length = 0;
gdjs.GameCode.GDPauseButtonObjects3.length = 0;
gdjs.GameCode.GDPauseTextObjects1.length = 0;
gdjs.GameCode.GDPauseTextObjects2.length = 0;
gdjs.GameCode.GDPauseTextObjects3.length = 0;
gdjs.GameCode.GDInspectImageObjects1.length = 0;
gdjs.GameCode.GDInspectImageObjects2.length = 0;
gdjs.GameCode.GDInspectImageObjects3.length = 0;
gdjs.GameCode.GDInspectBackgroundObjects1.length = 0;
gdjs.GameCode.GDInspectBackgroundObjects2.length = 0;
gdjs.GameCode.GDInspectBackgroundObjects3.length = 0;
gdjs.GameCode.GDStatueCollectibleObjects1.length = 0;
gdjs.GameCode.GDStatueCollectibleObjects2.length = 0;
gdjs.GameCode.GDStatueCollectibleObjects3.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
