gdjs.ExplorationCode = {};
gdjs.ExplorationCode.localVariables = [];
gdjs.ExplorationCode.idToCallbackMap = new Map();
gdjs.ExplorationCode.GDBackgroundObjects1= [];
gdjs.ExplorationCode.GDBackgroundObjects2= [];
gdjs.ExplorationCode.GDBackgroundObjects3= [];
gdjs.ExplorationCode.GDBackgroundObjects4= [];
gdjs.ExplorationCode.GDTransitionObjectObjects1= [];
gdjs.ExplorationCode.GDTransitionObjectObjects2= [];
gdjs.ExplorationCode.GDTransitionObjectObjects3= [];
gdjs.ExplorationCode.GDTransitionObjectObjects4= [];
gdjs.ExplorationCode.GDInteractionObjectObjects1= [];
gdjs.ExplorationCode.GDInteractionObjectObjects2= [];
gdjs.ExplorationCode.GDInteractionObjectObjects3= [];
gdjs.ExplorationCode.GDInteractionObjectObjects4= [];
gdjs.ExplorationCode.GDExitInspectionObjects1= [];
gdjs.ExplorationCode.GDExitInspectionObjects2= [];
gdjs.ExplorationCode.GDExitInspectionObjects3= [];
gdjs.ExplorationCode.GDExitInspectionObjects4= [];
gdjs.ExplorationCode.GDInspectionImageObjects1= [];
gdjs.ExplorationCode.GDInspectionImageObjects2= [];
gdjs.ExplorationCode.GDInspectionImageObjects3= [];
gdjs.ExplorationCode.GDInspectionImageObjects4= [];
gdjs.ExplorationCode.GDStatueCollectibleObjects1= [];
gdjs.ExplorationCode.GDStatueCollectibleObjects2= [];
gdjs.ExplorationCode.GDStatueCollectibleObjects3= [];
gdjs.ExplorationCode.GDStatueCollectibleObjects4= [];
gdjs.ExplorationCode.GDInspectionTextObjects1= [];
gdjs.ExplorationCode.GDInspectionTextObjects2= [];
gdjs.ExplorationCode.GDInspectionTextObjects3= [];
gdjs.ExplorationCode.GDInspectionTextObjects4= [];
gdjs.ExplorationCode.GDItemObjectObjects1= [];
gdjs.ExplorationCode.GDItemObjectObjects2= [];
gdjs.ExplorationCode.GDItemObjectObjects3= [];
gdjs.ExplorationCode.GDItemObjectObjects4= [];
gdjs.ExplorationCode.GDInspectionObjectObjects1= [];
gdjs.ExplorationCode.GDInspectionObjectObjects2= [];
gdjs.ExplorationCode.GDInspectionObjectObjects3= [];
gdjs.ExplorationCode.GDInspectionObjectObjects4= [];
gdjs.ExplorationCode.GDInspectionBackgroundObjects1= [];
gdjs.ExplorationCode.GDInspectionBackgroundObjects2= [];
gdjs.ExplorationCode.GDInspectionBackgroundObjects3= [];
gdjs.ExplorationCode.GDInspectionBackgroundObjects4= [];
gdjs.ExplorationCode.GDItemPopupBackgroundObjects1= [];
gdjs.ExplorationCode.GDItemPopupBackgroundObjects2= [];
gdjs.ExplorationCode.GDItemPopupBackgroundObjects3= [];
gdjs.ExplorationCode.GDItemPopupBackgroundObjects4= [];
gdjs.ExplorationCode.GDItemNameTextObjects1= [];
gdjs.ExplorationCode.GDItemNameTextObjects2= [];
gdjs.ExplorationCode.GDItemNameTextObjects3= [];
gdjs.ExplorationCode.GDItemNameTextObjects4= [];
gdjs.ExplorationCode.GDItemDescriptionTextObjects1= [];
gdjs.ExplorationCode.GDItemDescriptionTextObjects2= [];
gdjs.ExplorationCode.GDItemDescriptionTextObjects3= [];
gdjs.ExplorationCode.GDItemDescriptionTextObjects4= [];
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects1= [];
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects2= [];
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects3= [];
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects4= [];
gdjs.ExplorationCode.GDItemPopupExitButtonObjects1= [];
gdjs.ExplorationCode.GDItemPopupExitButtonObjects2= [];
gdjs.ExplorationCode.GDItemPopupExitButtonObjects3= [];
gdjs.ExplorationCode.GDItemPopupExitButtonObjects4= [];
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects1= [];
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects2= [];
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects3= [];
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects4= [];
gdjs.ExplorationCode.GDPauseButtonObjects1= [];
gdjs.ExplorationCode.GDPauseButtonObjects2= [];
gdjs.ExplorationCode.GDPauseButtonObjects3= [];
gdjs.ExplorationCode.GDPauseButtonObjects4= [];
gdjs.ExplorationCode.GDCycleInventoryNextObjects1= [];
gdjs.ExplorationCode.GDCycleInventoryNextObjects2= [];
gdjs.ExplorationCode.GDCycleInventoryNextObjects3= [];
gdjs.ExplorationCode.GDCycleInventoryNextObjects4= [];
gdjs.ExplorationCode.GDInventoryBackgroundObjects1= [];
gdjs.ExplorationCode.GDInventoryBackgroundObjects2= [];
gdjs.ExplorationCode.GDInventoryBackgroundObjects3= [];
gdjs.ExplorationCode.GDInventoryBackgroundObjects4= [];
gdjs.ExplorationCode.GDInventoryItemObjects1= [];
gdjs.ExplorationCode.GDInventoryItemObjects2= [];
gdjs.ExplorationCode.GDInventoryItemObjects3= [];
gdjs.ExplorationCode.GDInventoryItemObjects4= [];
gdjs.ExplorationCode.GDUIBackgroundObjects1= [];
gdjs.ExplorationCode.GDUIBackgroundObjects2= [];
gdjs.ExplorationCode.GDUIBackgroundObjects3= [];
gdjs.ExplorationCode.GDUIBackgroundObjects4= [];
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects1= [];
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects2= [];
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects3= [];
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects4= [];
gdjs.ExplorationCode.GDSelectedItemBorderObjects1= [];
gdjs.ExplorationCode.GDSelectedItemBorderObjects2= [];
gdjs.ExplorationCode.GDSelectedItemBorderObjects3= [];
gdjs.ExplorationCode.GDSelectedItemBorderObjects4= [];


gdjs.ExplorationCode.userFunc0x9e2e20 = function GDJSInlineCode(runtimeScene) {
"use strict";
gdjs.FDGameData = {}; // All persistent data is attached to gdjs so that it isn't reset on scene change
const FDSG = gdjs.FDGameData; // This way data can be accessed through a simpler variable name (FDSG = Frederick-Douglass Square Game)

/// PUT ALL PERSISTENT DATA (FUNCTION DEFINITIONS AND VARIABLES AND STUFF) HERE! MAKE SURE TO PREFIX WITH 'FDSG.'!

FDSG.GameVars = { // This holds variables that are important for tracking/managing the current game flags and variables
    runtimeScene: runtimeScene,
        // Used for accessing the current RuntimeScene object, since otherwise the definitions here will try and access the old object
    isMobile: gdjs.evtTools.common.isMobile()
}
const GameVars = FDSG.GameVars; // Simpler reference variable
const Game = GameVars.runtimeScene.getGame();


// OBJECT GROUPS ###################################################################################################################################

// Since object groups aren't really easy to access in JS (or in general imo), we can define object groups by object name here
FDSG.ObjectGroups = {
    "Collectibles": [
        "StatueCollectible",
        "ItemObject" 
    ]
}
};
gdjs.ExplorationCode.eventsList0 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x9e2e20(runtimeScene);

}


};gdjs.ExplorationCode.userFunc0x7e2000 = function GDJSInlineCode(runtimeScene) {
"use strict";
const FDSG = gdjs.FDGameData;
const GameVars = FDSG.GameVars;

// CLASS DEFINITIONS ###############################################################################################################################

FDSG.Classes = {};

/**
 * An object that organizes a group of object instances, tracking relative positions so that the whole group can be
 * moved and scaled relative to each other. Useful if you have a collection of instances of different objects and
 * want to move them all as one combined group
 *      @property {RuntimeObject[]} instances Holds the actual RuntimeObjects in the InstanceGroup
 *      @property {}
 */
FDSG.Classes.InstanceGroup = class InstanceGroup {
    /**
     * @param {RuntimeObject[]} instances The object instances you want to group together, passed in an array
     */
    constructor(instances) {
        this._instanceData = []; // Holds an object for each instance in the group and its positional data
        this.x = null; // The x position of the InstanceGroup object
        this.y = null; // The y poition of the InstanceGroup object
        this.width = 0; // The overall width of the InstanceGroup object (the leftmost instance to the rightmost instance)
        this.height = 0; // The overall height of the InstanceGroup object (the topmost instance to the bottommost instance)
        this.scale = 1; // The scaling of the InstanceGroup

        this._init(instances); // Scan instances to initialize necessary data
    }

    /**
     * All object instances in this group
     *      @type {RuntimeObject[]}
     *      @readonly
     */
    get instances() {
        const instanceArray = [];
        for (const instanceData of this._instanceData) {
            instanceArray.push(instanceData.object);
        }
        return instanceArray;
    }

    /**
     * Initializes important data by scanning instances
     *      @param {RuntimeObject[]} instances An array of object instances
     */
    _init(instances) {
        let minX = null; // Leftmost x position of instances
        let minY = null; // Topmost y position of instances
        let maxX = null; // Rightmost x position of instances, including instance width
        let maxY = null; // Bottommost y position of instances, including instance height
        for (const instance of instances) { // First we iterate through each instance to get general data for the InstanceGroup
            let x = instance.getX(), y = instance.getY(); // Instance position
            let width = instance.getWidth(), height = instance.getHeight(); // Instance dimensions
            if (minX == null || x < minX) { minX = x } // We want the leftmost x position so we can determine the relative positioning of all objects
            if (minY == null || y < minY) { minY = y } // We want the topmost y position so we can determine the relative positioning of all objects
            if (maxX == null || x + width > maxX) { maxX = x + width }
            if (maxY == null || y + height > maxY ) { maxY = y + height }
        }
        this.x = minX; // Set x to leftmost x position
        this.y = minY; // Set y to topmost y
        this.width = maxX - minX; // Calculate height of this object
        this.height = maxY - minY; // Calculate width of this object
        for (const instance of instances) { // Iterate a second time to set relative positions now that we know the size of the InstanceGroup
            const instanceData = {
                object: instance, // The RuntimeObject itself
                relX: instance.getX() - this.x, // The x position relative to the InstanceGroup
                relY: instance.getY() - this.y // The y position relative to the InstanceGroup
            }
            this._instanceData.push(instanceData);
        }
    }

    /**
     * Moves all instances in the InstanceGroup to the desired position,
     * maintaining relative positioning across instances
     *      @param {number} x The X coordinate to move to
     *      @param {number} y The Y coordinate to move to
     */
    moveTo(x, y) {
        for (const instanceData of this._instanceData) { // Iterate through each instance of the group
            const instance = instanceData.object; // The actual RuntimeObject[]
            instance.setX(x + instanceData.relX); // Move the instance to given x coordinate, maintaining relative position in the group
            instance.setY(y + instanceData.relY); // Move the instance to given y coordinate, maintaining relative position in the group
        }
    }

    /**
     * Scales the InstanceGroup, scaling and moving all object instances appropriately
     *      @param {number} newScale The new scale to resize to 
     */
    setScale(newScale) {
        if (newScale == 1) { return } // No point scaling by 1
        for (const instanceData of this._instanceData) {
            const instance = instanceData.object;
            instanceData.relX *= newScale;
            instanceData.relY *= newScale;
            instance.setX(x + instanceData.relX);
            instance.setY(y + instanceData.relY);
            instance.setWidth(instance.getWidth()*newScale);
            instance.setHeight(instance.getHeight()*newScale);
        }
        this.width *= newScale;
        this.height *= newScale;
        this.scale = newScale;
        if (newScale < 0) { // If the scale is negative, flip the object around the center rather than the origin
            this.x += this.width;
            this.y += this.height;
        }
    }
}


// HELPER FUNCTIONS ################################################################################################################################

/**
 * Returns all object names in the current game
 *      @returns {string[]}
*/
FDSG.getAllObjects = function() {
    // Gets all object types in the game
    const objects = GameVars.runtimeScene._objects.items;
    const objectList = [];
    for (const object in objects) {
        objectList.push(object);
    }
    return objectList;
}

FDSG.gdVartoJS = function(gdVar) {
    // Arrays
    if (gdVar.isArray()) {
        const arr = [];
        const children = gdVar.getAllChildren();
        for (const key in children) {
            const child = children[key];
            arr.push(gdVarToJS(child));
        }
        return arr;
    }

    // Structures
    if (gdVar.isStructure()) {
        const obj = {};
        const children = gdVar.getAllChildren();
        for (const key in children) {
            obj[key] = gdVarToJS(children[key]);
        }
        return obj;
    }

    // Primitives
    if (gdVar.isNumber()) return gdVar.getAsNumber();
    if (gdVar.isString()) return gdVar.getAsString();
    if (gdVar.isBoolean()) return gdVar.getAsBoolean();

    return null;
}

FDSG.jsToGDVar = function(jsValue, gdVar) {
    if (Array.isArray(jsValue)) {
        // Clear existing and rebuild as array
        gdVar.clearChildren();
        jsValue.forEach((v, i) => {
            const child = gdVar.getChild(i.toString());
            FDSG.jsToGDVar(v, child);
        });
        return;
    }

    if (jsValue && typeof jsValue === "object") {
        // Structure: clear and rebuild
        gdVar.clearChildren();
        for (const key in jsValue) {
            const child = gdVar.getChild(key);
            FDSG.jsToGDVar(jsValue[key], child);
        }
        return;
    }

    // Primitives
    if (typeof jsValue === "number") gdVar.setNumber(jsValue);
    else if (typeof jsValue === "string") gdVar.setString(jsValue);
    else if (typeof jsValue === "boolean") gdVar.setBoolean(jsValue);
    else gdVar.setString("");
}
// FDSG.convertVariablesToJS = function(obj) {
//     const variables = obj.getVariables();
//     const allVars = variables.getAllChildren();
//     for (const variable in allVars) {

//     }

// }

/**
 * Prints a message to the console only if the DEBUG is set to true
 *      @param {...any} arg The values to log 
 */
FDSG.debugPrint = function(...args) {
    if (GameVars.runtimeScene.getGame().getVariables().get("DEBUG").getAsBoolean()) {
        console.log(...args);   
    }
}

};
gdjs.ExplorationCode.eventsList1 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x7e2000(runtimeScene);

}


};gdjs.ExplorationCode.userFunc0x9d6430 = function GDJSInlineCode(runtimeScene) {
"use strict";
const FDSG = gdjs.FDGameData;
const GameVars = FDSG.GameVars;
const Game = GameVars.runtimeScene.getGame();

const STARTING_LAYOUT = "FDS North"; // First layout to load


Object.assign(GameVars, {
    startLayout: STARTING_LAYOUT, // The starting layout
    _currentLayout: STARTING_LAYOUT, // This is used to load the corrent layout on transitions
});

Object.defineProperty(GameVars, 'currentLayout', {
    get() {return this._currentLayout;},
    set(newLayout) {
        FDSG.saveLayoutInstanceData();
        this._currentLayout = newLayout;
        gdjs.evtTools.runtimeScene.replaceScene(GameVars.runtimeScene, GameVars.runtimeScene.getName());
    }
});


FDSG._LayoutData = {}; // Used for tracking layout specific data

FDSG._LayoutInspections = {}; // Used to hold all inspection data for the current layout


/**
 * Loads proper layouts for the scene and handles layout elements
 */
FDSG.initScene = function() {
    // Loads proper layouts and initializes necessary values
    FDSG.debugPrint(`initializing ${FDSG.GameVars.currentLayout}`);
    gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(GameVars.runtimeScene, "UI", 0, 0, false); // Load the UI
    gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(GameVars.runtimeScene, GameVars.currentLayout, 0, 0, false);
        // Load the layout for the current area
        
    // Disable the darkening effects
    const backgroundLayer = GameVars.runtimeScene.getLayer("Background");
    const objectsLayer = GameVars.runtimeScene.getLayer("SceneObjects");
    const uiLayer = GameVars.runtimeScene.getLayer("UI");
    const inspectionUILayer = GameVars.runtimeScene.getLayer("InspectionUI");
    for (const layer of [backgroundLayer, objectsLayer, uiLayer]) {
        layer.enableEffect("Darken", false);
    }

    // Hide disabled layers
    for (const layer in FDSG.Input.ClickableLayers) {
        if (!FDSG.Input.ClickableLayers) {
            layer.show(false);
        }
    }

    // Set instance specific innerText on text objects
    for (const instance of FDSG.getAllSceneInstances()) { // Check for text objects and replace their text with the instance specific text
        if (instance.getVariables().has("innerText")) {
            instance.setText(instance.getVariables().get("innerText").getAsString()); // Replace the text
        }
    }

    // Initialize layout data
    if (!(GameVars.currentLayout in FDSG._LayoutData)) {
        FDSG._LayoutData[GameVars.currentLayout] = {
            instanceGroup: null,
            instanceData: null
        }
    }
    const layoutData = FDSG._LayoutData[GameVars.currentLayout];                                /*
    // const cameraWidth = gdjs.evtTools.camera.getCameraWidth(GameVars.runtimeScene, "", 0); 
    // const cameraHeight = gdjs.evtTools.camera.getCameraHeight(GameVars.runtimeScene, "", 0);     ##########################################
    const layoutInstances = FDSG.getAllSceneInstances(["SceneObjects", "Background"]);               We're not using this so ignore this part
    const layoutInstanceGroup = new FDSG.Classes.InstanceGroup(layoutInstances);                    ##########################################
    const uiObject = GameVars.runtimeScene.getInstancesOf("UIBackground")[0];
    let uiOffset = uiObject.getHeight
    layoutData.instanceGroup = layoutInstanceGroup;                                              */

    // COLLECTIBLES HANDLING
    FDSG.removeCollectedObjects(); // Removes any collected objects from the layout

    FDSG.updateStatueCounter(); // Update the StatuesCollectedCounter to the proper value

    // INSPECTIONS HANDLING
    FDSG._LayoutInspections = FDSG.getLayoutInspections(); // Registers all inspections and their objects for the current layout
    GameVars._loadedInspection = null; // No inspections are loaded on scene init
    GameVars._isInspecting = false; // Reset flag

    // INVENTORY AND ITEM POPUPS
    
    FDSG.PlayerInventory._selectedItemName = null; // Remove stale references
    FDSG.PlayerInventory._selectedItemIndex = null;
    FDSG.PlayerInventory._itemObjects = [];
    FDSG.redrawInventory();

    if (FDSG._LayoutData[GameVars.currentLayout].instances) {
        FDSG.loadLayoutInstanceData();
    }
}

/**
 * Saves instance data to a JSON string and stores it
 */
FDSG.saveLayoutInstanceData = function() {
    const layoutInstanceData = {};
    for (const instance of FDSG.getAllSceneInstances(["SceneObjects", "InspectionObjects"])) {
        if (instance.getVariables().has("instanceID")) {
            const instanceID = instance.getVariables().get("instanceID").getAsString();
            const instanceData = {};
            for (const variable in instance.getVariables()._variables.items) {
                instanceData[variable] = JSON.stringify(instance.getVariables().get(variable).toJSObject());
            }
            instanceData.animation = instance.getAnimationIndex();
            layoutInstanceData[instanceID] = instanceData;
        }
    }
    FDSG._LayoutData[GameVars.currentLayout].instanceData = layoutInstanceData;
}

FDSG.loadLayoutInstanceData = function() {
    const layoutInstanceData = FDSG._LayoutData[GameVars._currentLayout].instanceData;
    for (const instance of FDSG.getAllSceneInstances(["SceneObjects", "InspectionObjects"])) {
        if (instance.getVariables().has("instanceID")) {
            const instanceID = instance.getVariables().get("instanceID").getAsString();
            for (const variable in layoutInstanceData[instanceID]) {
                if (variable == "animation") {
                    instance.setAnimationIndex(layoutInstanceData[instanceID].animation);
                    continue;
                }
                const data = JSON.parse(layoutInstanceData[instanceID][variable]);
                FDSG.jsToGDVar(data, instance.getVariables().get(variable));
            }
        }
    }
}


/**
 * Returns all instances of any object in the current scene
 *      @param {string|string[]} layers? Only retrieve objects from these layers. Defaults to all layers
 *      @param {gdjs.RuntimeScene?} runtimeScene the target runtimeScene. Defaults to current scene
 *      @returns {gdjs.RuntimeObject[]} All instances in the current scene
 */
FDSG.getAllSceneInstances = function(layers = "all", runtimeScene = null) {
    if (runtimeScene == null) {
        runtimeScene = GameVars.runtimeScene;
    }
    if (layers != "all" && !Array.isArray(layers)) {
        layers = [layers];
    }
    const instances = runtimeScene._instances.items;
    const layerInstances = [];
    for (const object in instances) {
        for (const instance of instances[object]) {
            if (layers.includes(instance.getLayer()) || layers == "all") {
                layerInstances.push(instance);
            }
        }
    }
    return layerInstances.slice();
}

/**
 * Returns an Object with all objects and their instances on the given scene
 *      @param {string|string[]} layers? Only retrieve objects from these layer. Defaults to all layers
 *      @returns {Object} All objects in the given scene and their instances
 */
FDSG.getAllSceneObjects = function(layers = "all", runtimeScene = null) {
    if (runtimeScene == null) {
        runtimeScene = GameVars.runtimeScene;
    }
    if (layers != "all" && !Array.isArray(layers)) {
        layers = [layers];
    }
    const sceneObjects = {};
    const sceneInstances = FDSG.getAllSceneInstances(layers);
    for (const instance of sceneInstances) {
        if (!(instance.name in sceneObjects)) {
            sceneObjects[instance.name] = [];
        }
        sceneObjects[instance.name].push(instance);
    }
    return sceneObjects;
}

/**
 * Returns the object instance with the given ID
 *      @param {string} id The instanceID to look for
 */
FDSG.getInstanceFromID = function(id) {
    const instances = FDSG.getAllSceneInstances();
    for (const instance of instances) {
        if (!instance.getVariables().has("instanceID")) {
            continue;
        }
        if (instance.getVariables().get("instanceID").getAsString() == id) {
            return instance;
        }
    }
}

};
gdjs.ExplorationCode.eventsList2 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x9d6430(runtimeScene);

}


};gdjs.ExplorationCode.userFunc0x9d65d8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const FDSG = gdjs.FDGameData;
const GameVars = FDSG.GameVars;
const Game = GameVars.runtimeScene.getGame();


const ITEM_CURSOR_X_OFFSET = 16;
const ITEM_CURSOR_Y_OFFSET = 16;

FDSG.Input = { // Stores objects and variables for handling player input
    _lastObjectPressed: null, /* This stores the last object that was clicked. We use this to ensure that in order to click an object,
                                the mouse has to be hovering over it before any input, so as to avoid dragging clicks or
                                in the case of a UI element appearing underneath the cursor while clicking */
    _currentTouchID: null,
    _lastTouchX: null,
    _lastTouchY: null,
    _currentInputMethod: "Mouse" // This is for knowing whether or not we're using the touchscreen
}

FDSG.Input.ClickableObjects = {}; // Stores registered actions to run when objects are clicked

FDSG.Input.ClickableLayers = { // Similar but for disabling layers instead of individual objects
    "UI": true,
    "SceneObjects": true,
    "InspectionObjects": false,
    "InspectionUI": false,
    "ItemPopup": false,
    "MouseCursor": false
}

FDSG.Input.KeyPressFunctions = {}; // Stores keyboard inputs and their registered functions


const input = GameVars.runtimeScene.getGame().getInputManager();


/**
 * Registers a function to run when an object is clicked.
 *      @param {Object} clickConfig The object that holds the listed parameters
 *      @param {string|string[]} clickConfig.object The object type or array of object types to register
 *      @param {string|string[]} clickConfig.button The mouse button or array of mouse buttons (Left, Right, Middle) that will trigger the function.
 *                                                  Set as "hover" if you want to trigger while hovering over the object
 *      @param {"pressed"|"released"} clickConfig.duration Whether to trigger while clicking or just release
 *      @param {(obj: gdjs.RuntimeObject) => void} clickConfig.clickFunction The function that runs when clicked
 *      @param {string} clickConfig.cursor? Optional cursor to show on hover. Defaults to pointer
 */
FDSG.registerClickableObject = function(clickConfig) {
    let objects = clickConfig.object;
    let clickButtons = clickConfig.button;
    let clickDuration = clickConfig.duration;
    let cursor = (typeof clickConfig.cursor === 'undefined') ? "pointer" : clickConfig.cursor; // Cursor defaults to "pointer"
    /* We put the following parameters in arrays if they're not already.
        This is probably overkill since it's unlikely more than one object will be tied to a function, but this only runs once at startup
        so it's not gonna affect performance or anything */
    if (!Array.isArray(objects)) {
        objects = [clickConfig.object];
    }
    if (!Array.isArray(clickButtons)) {
        clickButtons = [clickConfig.button];
    }
    for (const object of objects) {
        if (!(object in FDSG.Input.ClickableObjects)) {
            FDSG.Input.ClickableObjects[object] = { // Register the object as clickable and store the necessary properties
                clickActions: {}, // Stores functions and their triggers
                cursor: cursor, // What the cursor should turn into when hovering over
                enabled: true // Useful for disabling interactivity on this object
            }
        }
        let clickObject = FDSG.Input.ClickableObjects[object]; // Easier reference variable
        for (const clickButton of clickButtons) {
            if (!(clickButton in clickObject.clickActions)) { // Register the button
                clickObject.clickActions[clickButton] = {};
            }
            if (!(clickDuration in clickObject.clickActions[clickButton])) { // Register the duration
                clickObject.clickActions[clickButton][clickDuration] = {};
            }
            clickObject.clickActions[clickButton][clickDuration] = clickConfig.clickFunction; // Register the clickFunction
        }
    }
}

/**
 * Registers a key to a given function
 *      @param {Object} keyConfig The object that holds the listed parameters
 *      @param {string|string[]} keyConfig.keys The key that triggers the function
 *      @param {"pressed"|"released"} keyConfig.duration Whether to trigger on press or just release
 *      @param {() => void} keyConfig.keyPressFunction The function that runs when clicked
 */
FDSG.registerKeyPressFunction = function(keyConfig) {
    let keys = keyConfig.key; // Which key or keys to press
    //let duration = keyConfig.duration; // Whether to run the function on press or just release
    if (!Array.isArray(keys)) {
        keys = [keys];
    }
    for (const key of keys) {
        if (!(key in FDSG.Input.KeyPressFunctions)) {
            FDSG.Input.KeyPressFunctions[key] = {
                keyPressFunction: keyConfig.keyPressFunction,
                enabled: true
            }
        }
    }
}

/**
 * Checks player input and runs the appropriate functions
 */
FDSG.handlePlayerInput = function() {
    // CLICKABLE OBJECTS AND MOUSE INPUT
    /*
    To whoever potentially ends up having to work on this, I apologize in advance. Getting all the flags
    set up properly to prevent accidental inputs and making sure people select things in the same click as
    releasing them was kind of a headache. From my testing, everything works, so unless you really need to
    change something about the behavior of player input, don't bother touching this.
    */
    var isMousePressed = false;
    var isMouseReleased = false;
    
    let highestZOrder = -1; // We change the mouse cursor to the one determined by the object closest to the camera
    let cursor = "default"; // Default cursor type
    // First we check the instance that was hovered last frame for input, this way an object can't spawn over an already clicking mouse to receive input
    let enableClickFunctions = true;
    let hoveredInstance = null;
    let selectedItemIndex = FDSG.PlayerInventory.selectedItemIndex;
    let touchIDs = Game.getInputManager().getAllTouchIdentifiers();
    let touchJustStartedIDs = Game.getInputManager().getStartedTouchIdentifiers();
    let currentTouchID = FDSG.Input._currentTouchID;
    let isPressed = gdjs.evtTools.input.isMouseButtonPressed(GameVars.runtimeScene, "Left");
    let isReleased = gdjs.evtTools.input.isMouseButtonPressed(GameVars.runtimeScene, "Left");
    if (isPressed || isReleased) {
        FDSG.Input._currentInputMethod = "Mouse";
    }
    let touchJustStarted = false;
    let touchJustEnded = false;
    
    if (touchIDs.length > 0) { // Gets the status of the touchscreen to determine input
        FDSG.Input._currentInputMethod = "Touch";
        if (currentTouchID == null) {
            let newTouchID = touchJustStartedIDs[0];
            FDSG.Input._currentTouchID = newTouchID;
            currentTouchID = newTouchID;
            touchJustStarted = true;
            isPressed = true;
        } else if (Game.getInputManager().hasTouchEnded(currentTouchID)) {
            isReleased = true;
            touchJustEnded = true;
        } else if (touchIDs.includes(currentTouchID)) {
            FDSG.Input._lastTouchX = input.getTouchX(currentTouchID);
            FDSG.Input._lastTouchY = input.getTouchY(currentTouchID);
            isPressed = true;
        }
    } else {
        FDSG.Input._currentTouchID = null;
        FDSG.Input._lastTouchX = null,
        FDSG.Input._lastTouchY = null
    }
    
    for (const object in FDSG.Input.ClickableObjects) { // Check each object to determine which object the mouse is hovering over (if any)
        const clickObject = FDSG.Input.ClickableObjects[object]; // Simpler reference variable
        const instances = GameVars.runtimeScene.getInstancesOf(object);
        if (!clickObject.enabled) { continue } // Check if the object is disabled
        for (const instance of instances) { // Check each instance of the object
            if (selectedItemIndex != null && !instance.getVariables().has("targetInteraction")) { continue } // We only want to check clicks on interaction objects as long as an item is selected
            if (instance.getVariables().has("enabled") && !instance.getVariables().get("enabled").getAsBoolean()) { continue } // Skip if instance is disabled
            let instanceLayer = instance.getLayer();
            if (!FDSG.Input.ClickableLayers[instanceLayer]) { continue }
            let touchX = null;
            let touchY = null;
            let lastTouchX = FDSG.Input._lastTouchX;
            let lastTouchY = FDSG.Input._lastTouchY;
            if (currentTouchID) {
                touchX = input.getTouchX(currentTouchID);
                touchY = input.getTouchY(currentTouchID);
            }
            if (instance.cursorOnObject()
            || (touchX != null && instance.isCollidingWithPoint(touchX, touchY))
            || (touchX == null && instance.isCollidingWithPoint(lastTouchX, lastTouchY))) {
                // Check if the cursor is on the object and if its layer is not disabled
                let zOrder = instance.getZOrder(); // This determines which objects are shown in front of/behind other objects
                if (zOrder > highestZOrder) { // Only set cursor for the object with the highest Z order
                    cursor = clickObject.cursor;
                    hoveredInstance = instance;
                }
            }
        }
    }

    // This is all so that you don't accidentally release on an object you didn't click
    if ((!isPressed && !isReleased) || (touchJustStarted)) {
        FDSG.Input._lastObjectPressed = hoveredInstance;
    } else if (isPressed && hoveredInstance != FDSG.Input._lastObjectPressed) {
        enableClickFunctions = false;
        FDSG.Input._lastObjectPressed = null;
    } else if (isReleased && hoveredInstance != FDSG.Input._lastObjectPressed) {
        enableClickFunctions = false;
        FDSG.Input._lastObjectPressed = null;
    }

    Game.getRenderer().getCanvas().style.cursor = cursor; // Change the cursor

    if (selectedItemIndex != null) {
        var itemCursor = FDSG.getAllSceneInstances("MouseCursor");
        if (itemCursor.length > 0) {
            var itemCursor = itemCursor[0];
            if (FDSG.Input._currentInputMethod == "Mouse") {
                itemCursor.setX(gdjs.evtTools.input.getCursorX(GameVars.runtimeScene) + ITEM_CURSOR_X_OFFSET); // Make the itemCursor follow the mouse;
                itemCursor.setY(gdjs.evtTools.input.getCursorY(GameVars.runtimeScene) + ITEM_CURSOR_Y_OFFSET); // Make the itemCursor follow the mouse;
            } else {
                itemCursor.setX(-50); // Hide the cursor in touchscreen
                itemCursor.setY(-50);
            }
        }
    }

    // CLICK FUNCTIONS
    if (hoveredInstance != null) {
        if ("hover" in FDSG.Input.ClickableObjects[hoveredInstance.getName()].clickActions) { // If the hovered object has a hover function
            FDSG.Input.ClickableObjects[hoveredInstance.getName()].clickActions.hover(hoveredInstance);
        }
        if (enableClickFunctions) {
            const clickObject = FDSG.Input.ClickableObjects[hoveredInstance.getName()]; // Simpler reference variable
            if (FDSG.PlayerInventory.selectedItem == null || hoveredInstance.getVariables().has("targetInteraction")) {
                // We only check interaction objects while an item is selected
                for (const clickButton in clickObject.clickActions) { // Check each button
                    let clickPressed = gdjs.evtTools.input.isMouseButtonPressed(GameVars.runtimeScene, clickButton);
                    let clickReleased = gdjs.evtTools.input.isMouseButtonReleased(GameVars.runtimeScene, clickButton);
                    for (const clickDuration in clickObject.clickActions[clickButton]) {
                        if ((clickDuration == "pressed" && clickPressed) || (clickDuration == "released" && clickReleased)) {
                            if (hoveredInstance.getName() != "InteractionObject" && hoveredInstance.getVariables().has("targetInteraction")) {
                                // Run interactions tied to the object. We skip interaction objects to avoid running them twice
                                const interactionData = FDSG.Interactions[hoveredInstance.getVariables().get("targetInteraction").getAsString()];
                                interactionData.interactionFunction(hoveredInstance);
                                if (!interactionData.runUsual) {
                                    continue;
                                } 
                            }
                            clickObject.clickActions[clickButton][clickDuration](hoveredInstance);
                        }
                    }
                }
            }
        }
    } else if (isReleased && FDSG.PlayerInventory.selectedItemIndex != null) {
        FDSG.PlayerInventory.selectedItemIndex = null; // Clear selected item on click
    }

    if (touchJustEnded) {
        FDSG.Input._currentTouchID = null;
        FDSG.Input._lastTouchX = null;
        FDSG.Input._lastTouchY = null;
    }


    // KEYBOARD INPUT
    for (const key in FDSG.Input.KeyPressFunctions) {
        const keyData = FDSG.Input.KeyPressFunctions[key];
        if (keyData.enabled) {
            let keyPressed = gdjs.evtTools.input.isKeyPressed(gdjs.evtTools.input.keysNameToCode[key]);
            if (keyPressed) {
                keyData.keyPressFunction(); // Run the keyPressFunction
            }
        }
    }
}



/**
 * Enables/Disables the clickFunctions of a given object. Useful for pausing functionality under specific circumstances
 *      @param {string} object The type of object
 *      @param {boolean} enable Set to true to enable the object, set to false to disable the object
 */
FDSG.enableObjectClick = function(object, enable) {
    if (!(object in FDSG.Input.ClickableObjects)) {
        FDSG.debugPrint(`Warning: ${object} not registered as clickable!`);
        return
    }
    FDSG.Input.ClickableObjects[object].enabled = enable;
}


/**
 * Enables/Disables the clickFunctions of all objects on a given layer. Useful for pausing functionality under specific circumstances
 *      @param {string|string[]} layers The target layer or layers
 *      @param {boolean} enable Set to true to enable the layer, set to false to disable the layer
 */
FDSG.enableLayerClick = function(layers, enable) {
    if (!Array.isArray(layers)) {
        layers = [layers];
    }
    for (const layer of layers) {
        if (!(layer in FDSG.Input.ClickableLayers)) {
            FDSG.debugPrint(`Warning: ${layer} not registered as clickable!`);
            return
        }
        FDSG.Input.ClickableLayers[layer] = enable;
    }
}


/**
 * Enable or Disable a keyPressFunction
 *      @param {string|string[]} keys The key or array of keys to enable/disable
 *      @param {boolean} enable Set to true to enable function, false to disable
 */
FDSG.enableKey = function(key, enable) {
    if (!Array.isArray(keys)) {
        key = [keys];
    }
    for (const key of keys) {
        FDSG.Input.KeyPressFunctions[key].enabled = enable;
    }
}
};
gdjs.ExplorationCode.eventsList3 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x9d65d8(runtimeScene);

}


};gdjs.ExplorationCode.userFunc0x9e3180 = function GDJSInlineCode(runtimeScene) {
"use strict";
const FDSG = gdjs.FDGameData;
const GameVars = FDSG.GameVars;
const Game = GameVars.runtimeScene.getGame();

/*
Inspections are just groups of objects that can be used as "popups", for when you want to introduce
new elements into the scene that don't really justify transitioning to a whole new scene. This is useful for item
popups, dialogue popups, really any time the player is focusing on something in the current layout
*/

Object.assign(GameVars, {
    _loadedInspection: null, // Used to track which Inspection is currently loaded
    _isInspecting: false,
});

Object.defineProperty(GameVars, 'isInspecting', {
    get() {
        return this._isInspecting;
    },
    set(value) {
        FDSG.darkEffect(value, true); // Activate/Deactivate the dark screen effect
        const inspectionLayer = GameVars.runtimeScene.getLayer("InspectionObjects"); // Get the InspectionObjects layer
        const inspectionUILayer = GameVars.runtimeScene.getLayer("InspectionUI");
        inspectionLayer.show(value); // Show/Hide the layers
        inspectionUILayer.show(value);
        FDSG.enableLayerClick(["InspectionObjects", "InspectionUI"], value); // Enable/Disable the relevant layers clicks
        FDSG.enableLayerClick(["UI", "SceneObjects"], !value);
        if (!value) {
            FDSG.clearInspectionFromView();
        } 
    }
});

FDSG.Interactions = {}; // Where we store and register Interactions
/*
Interactions are just an easy way to easily and dynamically allow an InteractionObject (or other objects) to run different code
based on the value of its "targetInteraction" property and its flags/variables. All this really does is allow me to
avoid having to make a bunch of unique objects for every interaction.
!!! If you just want to load an inspection into view without any conditions or extra code, just use an Inspection instead !!!
*/


/**
 * Gets an object containing all inspections in the current layout as well as their associated InstanceGroups
 *      @returns {Object} An object containing every inspection in the layout and their associated InstanceGroup
 */
FDSG.getLayoutInspections = function() {
    /*
        All we really do here is check the different "targetInspection" values of instances in the layout,
        and create a map tying each object instance to its associated inspection. Then we just register
        the initial x and y positions of the InstanceGroup in the layout so we can move them into the camera view when they activate,
        and move them back when they exit
    */
    const layoutInspections = {}; // Holds all inspections and their InstanceGroup
    const allInstances = FDSG.getAllSceneInstances("InspectionObjects"); // Get all instances on the InspectionObjects layer
    const inspectionInstances = {}; // Temporary object to map inspections to their associated instances
    for (const instance of allInstances) {
        if (!instance.getVariables().has("targetInspection")) { // Check if the instance is associated with an inspection
            continue;
        }
        const inspection = instance.getVariables().get("targetInspection").getAsString();
        if (!(inspection in inspectionInstances)) {
            inspectionInstances[inspection] = []; // This will store the object instances tied to this inspection
        }
        inspectionInstances[inspection].push(instance); // Register this instance to its inspection
    }
    for (const inspection in inspectionInstances) { // Create an InstanceGroup for each inspection
        const inspectionGroup = new FDSG.Classes.InstanceGroup(inspectionInstances[inspection]); 
            // Create a new InstanceGroup (see class definition) of all object instances in this inspection
        layoutInspections[inspection] = { // Store the data for this inspection
            instanceGroup: inspectionGroup, // The InstanceGroup containing the object instances
            initialX: inspectionGroup.x, // Store intitial position so we can restore it later
            intialY: inspectionGroup.y
        }
    }
    return layoutInspections;
}


/**
 * Sets the currentInspection and brings all associated objects into the camera view
 *      @param {string} inspectionName The specific inspection to load objects from
 *      @param {boolean} activateInspection? Whether to activate the inspection immediately. Defaults to true
 */
FDSG.bringInspectionIntoView = function(inspectionName, activateInspection = true) {
    if (!(inspectionName in FDSG._LayoutInspections)) { // Check if the inspection is registered
        FDSG.debugPrint(`Inspection ${inspectionName} not registered`);
        return;
    }
    if (GameVars._loadedInspection != null) { 
        FDSG.clearInspectionFromView(); // Clear any currently loaded inspection
    }
    FDSG.debugPrint(`Loading inspection ${inspectionName}`);
    const cameraWidth = gdjs.evtTools.camera.getCameraWidth(GameVars.runtimeScene, "", 0); // Get camera properties to properly center Inspections
    const cameraHeight = gdjs.evtTools.camera.getCameraHeight(GameVars.runtimeScene, "", 0);
    const uiBackground = GameVars.runtimeScene.getInstancesOf("UIBackground")[0];
    const cameraHeightOffset = uiBackground.getHeight() + uiBackground.getY(); // This is to vertically offset the inspection to make room for the UI
    const layoutInspectionData = FDSG._LayoutInspections[inspectionName];
    const inspectionGroup = layoutInspectionData.instanceGroup; // The InstanceGroup containing the instances of this inspection
    const activeX = (cameraWidth - inspectionGroup.width)/2; /* Calculate center screen position */
    const activeY = (cameraHeight + cameraHeightOffset - inspectionGroup.height)/2;
    inspectionGroup.moveTo(activeX, activeY); // Move the InstanceGroup to the center of the screen
    GameVars._loadedInspection = inspectionName;
    if (activateInspection) {
        GameVars.isInspecting = true;
    }
}


/**
 * Clears the loaded inspection and resets its objects to their initial positions
 */
FDSG.clearInspectionFromView = function() {
    if (GameVars._loadedInspection == null) { // Don't unload if no inspections are loaded
        FDSG.debugPrint(`No inspection loaded`);
        return;
    }
    FDSG.debugPrint(`Unloading inspection: ${GameVars._loadedInspection}`);
    const inspectionData = FDSG._LayoutInspections[GameVars._loadedInspection];
    const instanceGroup = inspectionData.instanceGroup;
    const initialX = inspectionData.initialX; // Get initial instance positions
    const initialY = inspectionData.initialY;
    instanceGroup.moveTo(initialX, initialY);
    GameVars._loadedInspection = null;
}

/**
 * Darkens the appropriate layers for pausing and inspection
 *      @param {boolean} enable Whether to enable or disable the effect
 *      @param {boolean} darkenUI Whether to darken the UI layer (for inspections) 
 */
FDSG.darkEffect = function(enable, darkenUI = false) {
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
 * Registers an interaction to a given name
 *      @param {string} interactionName The name of the interaction
 *      @param {(obj: RuntimeObject) => void} interactionFunction The function that contains the code for this interaction
 *      @param {boolean} runUsualFunction? Whether to run the objects usual functions as well as the interaction. Defaults to true
 */
FDSG.registerInteraction = function(interactionName, interactionFunction, runUsualFunction = true) {
    FDSG.Interactions[interactionName] = {
        interactionFunction: interactionFunction,
        runUsual: runUsualFunction
    }
}
};
gdjs.ExplorationCode.eventsList4 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x9e3180(runtimeScene);

}


};gdjs.ExplorationCode.userFunc0x9e32f8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const FDSG = gdjs.FDGameData;
const GameVars = FDSG.GameVars;
const Game = GameVars.runtimeScene.getGame();

Object.assign(GameVars, {
    collectibles: {}, /* This is used to track which collectibles have been collected. Each collectible has a uniqueID,
                        and is either true (collected) or false (not collected) */
    statuesCollected: 0, // The number of statues Collected
});


/**
 * Removes a collectible object from the scene and marks it as collected.
 *      @param {gdjs.RuntimeObject} collectible the collectibleObject that's being collected
 *      @returns {boolean} If the object was successfully collected
 */
FDSG.collectObject = function(collectible) {
    if (!FDSG.ObjectGroups.Collectibles.includes(String(collectible.getName()))) {
        FDSG.debugPrint("Object is not a collectible");
        return false;
    }
    const uniqueID = `${collectible.name}-${GameVars.currentLayout}-${collectible.getX()}-${collectible.getY()}`;
        // The objects uniqueID to distinguish it from others
    GameVars.collectibles[uniqueID] = true; // Mark as collected
    collectible.deleteFromScene(GameVars.runtimeScene);
    FDSG.debugPrint(`Collected ${uniqueID}`);
    return true;
}


/**
 * Checks each collectible instance in the scene and removes it if it's been marked as collected already
 */
FDSG.removeCollectedObjects = function() {
    for (const collectibleType of FDSG.ObjectGroups.Collectibles) { // Check all instances of collectible objects to see if they've been collected already
        const collectibleObjects = GameVars.runtimeScene.getInstancesOf(collectibleType).slice(); // Get copy of array to avoid iteration issues
        for (const collectible of collectibleObjects) {
            const uniqueID = `${collectible.name}-${GameVars.currentLayout}-${collectible.getX()}-${collectible.getY()}`;
                /* Each collectible instance is assigned to a unique ID that consists of the type of object, the name of the layout they're in,
                and their x and y coordinates. This way we can track which objects have been collected or not */
            if (uniqueID in GameVars.collectibles) { // Check if this instance has been registered before
                if (GameVars.collectibles[uniqueID] == true) { // Check if this item has been collected already
                    collectible.deleteFromScene(); // Remove the object from the scene
                }
            } else { // Collectible has not been registered before
                GameVars.collectibles[uniqueID] = false; // register the object as not collected yet
            }
        }
    }
}


/**
 * Sets the value of the StatuesCollectedCounter
 */
FDSG.updateStatueCounter = function() {
    const statueCounter = GameVars.runtimeScene.getObjects("StatuesCollectedCounter")[0];
    statueCounter.getVariables().get("value").setNumber(GameVars.statuesCollected);
    statueCounter.setText(`Statues Collected: ${GameVars.statuesCollected}`);
}
};
gdjs.ExplorationCode.eventsList5 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x9e32f8(runtimeScene);

}


};gdjs.ExplorationCode.userFunc0x7e2aa0 = function GDJSInlineCode(runtimeScene) {
"use strict";
const FDSG = gdjs.FDGameData;
const GameVars = FDSG.GameVars;
const Game = GameVars.runtimeScene.getGame();

Object.assign(GameVars, {
    _isItemPopupShowing: false,
    _itemPopupData: {
        itemObject: null, // The RuntimeObject of selected item
        inventoryItemSprite: null, // The RuntimeObject for the item sprite
        itemName: null, // The RuntimeObject for the name text
        itemDescription: null, // The RuntimeObject for the description text
    }
});


FDSG.PlayerInventory = {
    items: [], // This stores the currently held items
    _itemObjects: [], // The RuntimeObjects for the inventory items
    _scrollIndex: 0, // The starting index for item scrolling
    _selectedItem: null, // Which item is currently selected
        get selectedItem() { return this._selectedItem},
        set selectedItem(value) {
            if (value == null) {
                FDSG.selectInventoryItem(null);
            }
            else {
                FDSG.debugPrint('Warning: Do not try and set selectedItem directly! Use selectedItemIndex to get the object instead');
                    // We need to know which instance to remove from the inventory, so setting the name directly is a bad idea
            }
        },
    _selectedItemIndex: null, // The inventory index of the currently selected item
        get selectedItemIndex() { return this._selectedItemIndex },
        set selectedItemIndex(index) {
            if (index < 0) {
                FDSG.debugPrint('invalid inventory index');
            } else {
                FDSG.selectInventoryItem(index);
                this._selectedItemIndex = index;
            }
        },
}


// CONSTANTS
const ITEM_OFFSET = 8; // These change how the inventory is displayed
const ITEM_GAP = 16;
const ITEM_POPUP_SIZE = 224; // How large the item in the item popup should be

/**
 * Redraws the inventory to show current items
 */
FDSG.redrawInventory = function() {
    const inventory = FDSG.PlayerInventory;
    const inventoryObject = GameVars.runtimeScene.getObjects("InventoryBackground")[0]; // Gets the InventoryUI object from the UI Layout
    const inventorySprites = inventory._itemObjects; // Get the sprites of the items in the inventory
    if (inventorySprites.length > 0) {
        for (const itemSprite of inventorySprites.slice()) { // Clear the inventory to draw the current items
            itemSprite.deleteFromScene();
        }
        inventory._itemObjects = []; // Clear the sprite array
    }
    const itemZOrder = inventoryObject.getZOrder() + 1;
    const inventoryShortSide = Math.min(inventoryObject.getWidth(), inventoryObject.getHeight());
    const inventoryLongSide = Math.max(inventoryObject.getWidth(), inventoryObject.getHeight());
    var itemSize = inventoryShortSide - 2*ITEM_OFFSET; // The size to render item sprites
    const maxVisibleItems = Math.floor((inventoryLongSide-ITEM_GAP)/(itemSize + ITEM_GAP));
    const itemStartPosition = ITEM_GAP + ((inventoryLongSide-ITEM_GAP)%(itemSize + ITEM_GAP))/2;
    if (inventoryObject.getWidth() > inventoryObject.getHeight()) {
        var itemPosX = inventoryObject.getX() + itemStartPosition;
        var itemXModifier = itemSize + ITEM_GAP;
        var itemPosY = inventoryObject.getY() + ITEM_OFFSET;
        var itemYModifier = 0;
    } else {
        var itemPosX = inventoryObject.getX() + ITEM_OFFSET;
        var itemXModifier = 0;
        var itemPosY = inventoryObject.getY() + itemStartPosition;
        var itemYModifier = itemSize + ITEM_GAP;
    }
    if (inventory.items.length < maxVisibleItems) {
        inventory._scrollIndex = Math.min(inventory._scrollIndex, maxVisibleItems-inventory.items.length);
    }
    FDSG.debugPrint(`drawing inventory`);
    for (let i = inventory._scrollIndex; i < Math.min(inventory.items.length + inventory._scrollIndex, maxVisibleItems+inventory._scrollIndex); i++) {
        const item = inventory.items[i];
        const itemObject = GameVars.runtimeScene.createObject("InventoryItem");
        itemObject.setAnimationName(item);
        itemObject.getVariables().get("itemName").setString(item);
        itemObject.getVariables().get("inventoryIndex").setNumber(i);
        const itemInitialHeight = itemObject.getHeight();
        const itemInitialWidth = itemObject.getWidth();
        const itemScale = (inventoryShortSide - 2*ITEM_OFFSET)/itemInitialHeight;
        itemObject.setHeight(itemInitialHeight*itemScale);
        itemObject.setWidth(itemInitialWidth*itemScale);
        itemObject.setX(itemPosX);
        itemObject.setY(itemPosY);
        itemObject.setLayer("UI");
        itemObject.setZOrder(itemZOrder);
        inventory._itemObjects.push(itemObject);

        itemPosX += itemXModifier;
        itemPosY += itemYModifier;
    }

    const scrollArrowP = GameVars.runtimeScene.getObjects("CycleInventoryPrevious")[0];
    const scrollArrowN = GameVars.runtimeScene.getObjects("CycleInventoryNext")[0];
    var enableP = false;
    var enableN = false;
    if (inventory._scrollIndex > 0) {
        enableP = true;
    }
    scrollArrowP.enableEffect("Disable", !enableP);
    FDSG.enableObjectClick("CycleInventoryPrevious", enableP);
    if (inventory.items.length > maxVisibleItems + inventory._scrollIndex) {
        enableN = true;
    }
    scrollArrowN.enableEffect("Disable", !enableN);
    FDSG.enableObjectClick("CycleInventoryNext", enableN);
}


/**
 * Shows the item popup for a given item
 *      @param {string} itemName The name of the item
 *      @param {string} itemDescription? The description of the item. Defaults to null for hiding the popup
 */
FDSG.showItemPopup = function(itemName, itemDescription) {
    const itemPopupData = GameVars._itemPopupData;
    for (const item of FDSG.getAllSceneInstances("ItemPopup")) {
        switch(item.getName()) {
            case("InventoryItem"):
                itemPopupData.itemSprite  = item;
                break;
            case("ItemNameText"):
                itemPopupData.itemNameText = item;
                break;
            case("ItemDescriptionText"):
                itemPopupData.itemDescriptionText = item;
                break;
        }
    }
    //GameVars._itemPopupData.positionData = FDSG.getRelativeInstancePositions(FDSG.getAllSceneInstances("ItemPopup"));
        // The relative positional data for the itemPopup object instances
    const itemObject = FDSG.GameVars._itemPopupData.itemObject; // Get the original item object
    const itemSprite = GameVars._itemPopupData.itemSprite; // Get the instance of the InventoryItem used for the popup
    
    // A lot of this code is pretty identical to how Inspections work, but I wanted to keep those systems separate
    FDSG.darkEffect(true, true); // Activate/Deactivate the dark screen effect
    const itemPopupLayer = GameVars.runtimeScene.getLayer("ItemPopup"); // Get the ItemPopup layer
    itemPopupLayer.show(true); // Show the layer
    FDSG.enableLayerClick("ItemPopup", true); // Enable/Disable the relevant layers clicks
    FDSG.enableLayerClick(["UI", "SceneObjects"], false);
    FDSG.enableObjectClick("InventoryItem", false); // Disable the object sprite from being clickable
    const cameraWidth = gdjs.evtTools.camera.getCameraWidth(GameVars.runtimeScene, "", 0);
    const cameraHeight = gdjs.evtTools.camera.getCameraHeight(GameVars.runtimeScene, "", 0);
    const uiBackground = GameVars.runtimeScene.getInstancesOf("UIBackground")[0];
    const cameraHeightOffset = uiBackground.getHeight() + uiBackground.getY(); // This is to vertically offset the inspection to make room for the UI
    //const activeX = (cameraWidth - itemPopupData.positionData.width)/2;
    //const activeY = (cameraHeight + cameraHeightOffset - itemPopupData.positionData.height)/2;
    itemSprite.setAnimationName(itemName); // Set the sprite
    itemSprite.setWidth(ITEM_POPUP_SIZE); // Resize the sprite to fit the popup
    itemSprite.setHeight(ITEM_POPUP_SIZE);
    itemPopupData.itemNameText.setText(itemName); // Set the text to the item name
    itemPopupData.itemDescriptionText.setText(itemDescription);
    //FDSG.moveRelativeInstanceGroup(itemPopupData.positionData, activeX, activeY);   
    GameVars._isItemPopupShowing = true;
}

/**
 * Hides the item popup
 */
FDSG.hideItemPopup = function() {
    FDSG.debugPrint("hiding itemPopup");
    if (!GameVars._isItemPopupShowing) {
        return;
    }
    FDSG.darkEffect(false, true); // Deactivate the dark screen effect
    FDSG.enableLayerClick("ItemPopup", false); // Enable/Disable the relevant layers clicks
    FDSG.enableLayerClick(["UI", "SceneObjects"], true);
    FDSG.enableObjectClick("InventoryItem", true);
    const itemPopupData = GameVars._itemPopupData;
    const itemPopupLayer = GameVars.runtimeScene.getLayer("ItemPopup"); // Get the ItemPopup layer
    itemPopupLayer.show(false); // Hide the layer
    //FDSG.moveRelativeInstanceGroup(itemPopupData.positionData, itemPopupData.positionData.initialX, itemPopupData.positionData.initialY);
    itemPopupData.itemObject = null;
    GameVars._isItemPopupShowing = false;
}


/**
 * Add an item to the player inventory
 *      @param {string} itemName The name of the item to add
 */
FDSG.addItemToInventory = function(itemName) {
    FDSG.debugPrint(`Adding ${itemName} to inventory`);
    FDSG.PlayerInventory.items.push(itemName);
    FDSG.redrawInventory();
}

/**
 * Remove an item to the player inventory
 *      @param {string} itemName The name of the item to add
 */
FDSG.removeItemFromInventory = function(inventoryIndex) {
    const inventory = FDSG.PlayerInventory;
    FDSG.debugPrint(`Removing ${inventory.items[inventoryIndex]} to inventory`);
    inventory.items.splice(inventoryIndex, 1);
    if (inventory._scrollIndex >= inventory.items.length) {
        inventory._scrollIndex -= 1;
    }
    FDSG.redrawInventory();
}

/**
 * Select an item from the inventory
 *      @param {number} inventoryIndex The index of the inventoryItem being selected
 */
FDSG.selectInventoryItem = function(inventoryIndex) {
    if (inventoryIndex < 0) {
        FDSG.debugPrint("invalid inventoryIndex");
        return;
    }
    const selectionBorderExists = GameVars.runtimeScene.getInstancesOf("SelectedItemBorder");
    const itemCursorExists = FDSG.getAllSceneInstances("MouseCursor");
    // Clear any previous instances
    if (selectionBorderExists.length > 0) {
        for (const instance of selectionBorderExists.slice()) {
            instance.deleteFromScene();
        }
    }
    if (itemCursorExists.length > 0) {
        for (const instance of itemCursorExists.slice()) {
            instance.deleteFromScene();
        }
    }
    if (inventoryIndex == null) {
        FDSG.PlayerInventory._selectedItem = null;
        FDSG.PlayerInventory._selectedItemIndex = null;
        return;
    }
    const inventoryItemObject = FDSG.PlayerInventory._itemObjects[inventoryIndex];
    const selectionBorder = GameVars.runtimeScene.createObject("SelectedItemBorder");
    selectionBorder.setLayer("UI");
    selectionBorder.setZOrder(50);
    selectionBorder.setWidth(inventoryItemObject.getWidth());
    selectionBorder.setHeight(inventoryItemObject.getHeight());
    selectionBorder.setX(inventoryItemObject.getX());
    selectionBorder.setY(inventoryItemObject.getY());

    const itemCursor = GameVars.runtimeScene.createObject("InventoryItem");
    itemCursor.setLayer("MouseCursor");
    itemCursor.getVariables().get("isCursor").setBoolean(true);
    itemCursor.setAnimationIndex(inventoryItemObject.getAnimationIndex());
    itemCursor.setWidth(inventoryItemObject.getWidth()/1.5);
    itemCursor.setHeight(inventoryItemObject.getHeight()/1.5);
    if (FDSG.Input._currentInputMethod == "Mouse") {
        itemCursor.setX(gdjs.evtTools.input.getCursorX(GameVars.runtimeScene) + 16); // Make the itemCursor follow the mouse;
        itemCursor.setY(gdjs.evtTools.input.getCursorY(GameVars.runtimeScene) + 16); // Make the itemCursor follow the mouse;
    } else {
        itemCursor.setX(-50); // Hide the cursor for touchscreens
        itemCursor.setY(-50);
    }

    FDSG.PlayerInventory._selectedItem = inventoryItemObject.getVariables().get("itemName").getAsString();
}


};
gdjs.ExplorationCode.eventsList6 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x7e2aa0(runtimeScene);

}


};gdjs.ExplorationCode.eventsList7 = function(runtimeScene) {

{


gdjs.ExplorationCode.eventsList1(runtimeScene);
}


{


gdjs.ExplorationCode.eventsList2(runtimeScene);
}


{


gdjs.ExplorationCode.eventsList3(runtimeScene);
}


{


gdjs.ExplorationCode.eventsList4(runtimeScene);
}


{


gdjs.ExplorationCode.eventsList5(runtimeScene);
}


{


gdjs.ExplorationCode.eventsList6(runtimeScene);
}


};gdjs.ExplorationCode.userFunc0x8f4d80 = function GDJSInlineCode(runtimeScene) {
"use strict";
const FDSG = gdjs.FDGameData;
const GameVars = FDSG.GameVars;
const Game = GameVars.runtimeScene.getGame();


// CLICKABLE OBJECT REGISTRATIONS ##########################################################################################################################
/*
This is where you can easily assign objects to specific functions when clicked.
Just call the FDSG.registerClickableObject() function, passing a clickConfig object with the following properties:
    clickConfig = {
        object|object[]: The type of scene object you're registering
        button|button[]: The mouse button that triggers this function. You can also put "hover" if you want the function to run when hovering over
        duration|duration[]: Whether the function should run as long as the mouse button is held down or just when released
        clickFunction: The function that should run when this object is clicked, with a parameter 'obj' for the instance being clicked.
            It's best to pass an anonymous function of this form: (obj) => {<insert code here>}
        cursor?: If you want the mouse cursor to change when hovering over this object, put it here as a string (defaults to "pointer")
    }
*/

FDSG.registerClickableObject({
    object: "TransitionObject",
    button:"Left",
    duration: "released",
    clickFunction: (obj) => {
        GameVars.currentLayout = obj.getVariables().get("targetLayout").getAsString();
            // Changes the currentLayout to the layout associated with the TransitionObject and reloads the scene
    }
});

FDSG.registerClickableObject({
    object: "InteractionObject",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        const targetInteraction = obj.getVariables().get("targetInteraction").getAsString();
        if (targetInteraction in FDSG.Interactions) {
            FDSG.Interactions[targetInteraction].interactionFunction(obj); // Run the interaction
        } else {
            FDSG.debugPrint(`Warning, interaction ${targetInteraction} not registered`);
        }
    },
    cursor: "help"
});

FDSG.registerClickableObject({ // Similar to InteractionObject, but only for inspections
    object: "InspectionObject",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        const targetInspection = obj.getVariables().get("targetInspection").getAsString();
        FDSG.bringInspectionIntoView(targetInspection);
        GameVars.isInspecting = true;
    },
    cursor: "help"
});

FDSG.registerClickableObject({
    object: "ExitInspection",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        GameVars.isInspecting = false;
    }
});

FDSG.registerClickableObject({
    object: "PauseButton",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        gdjs.evtTools.runtimeScene.pushScene(GameVars.runtimeScene, "Pause Screen"); // Pauses the current scene and loads the "Pause Screen" Scene
    }
});

FDSG.registerClickableObject({
    object: "StatueCollectible",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        if (FDSG.collectObject(obj)) { // Try and collect the statue
            GameVars.statuesCollected += 1;
            FDSG.updateStatueCounter();
        }
    }
});

FDSG.registerClickableObject({
    object: "ItemObject",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        const objVariables = obj.getVariables();
        const itemName = objVariables.get("itemName").getAsString();
        const itemDescription = objVariables.get("itemDescription").getAsString();
        const showPopup = objVariables.get("showPickupPrompt").getAsBoolean();
        const removeOnPickup = objVariables.get("removeOnPickup").getAsBoolean();
        if (showPopup) {
            GameVars._itemPopupData.itemObject = obj;
            FDSG.showItemPopup(itemName, itemDescription);
        } else {
            FDSG.addItemToInventory(itemName);
            if (removeOnPickup) {
                FDSG.collectObject(obj);
            }
        }
    }
});

FDSG.registerClickableObject({
    object: "InventoryItem",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        const itemInventoryIndex = obj.getVariables().get("inventoryIndex").getAsNumber();
        FDSG.PlayerInventory.selectedItemIndex = itemInventoryIndex;
    }
});

FDSG.registerClickableObject({
    object: "CycleInventoryNext",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        FDSG.PlayerInventory._scrollIndex += 1;
        FDSG.redrawInventory();
    }
});

FDSG.registerClickableObject({
    object: "CycleInventoryPrevious",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        FDSG.PlayerInventory._scrollIndex -= 1;
        FDSG.redrawInventory();
    }
});

FDSG.registerClickableObject({
    object: "ItemPopupPickupButton",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        const itemPopupData = GameVars._itemPopupData;
        if (itemPopupData.itemObject.getVariables().get("removeOnPickup").getAsBoolean()) {
            FDSG.collectObject(itemPopupData.itemObject);
        }
        const itemName = itemPopupData.itemObject.getVariables().get("itemName").getAsString();
        FDSG.addItemToInventory(itemName);
        FDSG.hideItemPopup();
    }
});

FDSG.registerClickableObject({
    object: "ItemPopupExitButton",
    button: "Left",
    duration: "released",
    clickFunction: (obj) => {
        FDSG.hideItemPopup();
    }
});

};
gdjs.ExplorationCode.eventsList8 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x8f4d80(runtimeScene);

}


};gdjs.ExplorationCode.userFunc0x8f4f38 = function GDJSInlineCode(runtimeScene) {
"use strict";
const FDSG = gdjs.FDGameData;
const GameVars = FDSG.GameVars;
const Game = GameVars.runtimeScene.getGame();

// INTERACTIONS ############################################################################################################################################


function getFlag(obj, flagName, type = null) { // Just a helper function for getting instance flags, since it's going to be pretty common
    const flag = obj.getVariables().get("flags").getChild(flagName);
    if (type == null) {
        return flag;
    }
    switch (type) {
        case("boolean"):
            return flag.getAsBoolean();
            break;
        case("string"):
            return flag.getAsString();
            break;
        case("number"):
            return flag.getAsNumber();
    }
}


// Player tries to open chest in FDS North
FDSG.registerInteraction("FDS North Chest", (obj) => {
    if (obj.getVariables().get("instanceID").getAsString() == "FDS North Chest") { // Check if the player clicked the chest or the statue
        const isClosed = getFlag(obj, "isClosed", "boolean");
        if (isClosed) {
            if (FDSG.PlayerInventory.selectedItem != "Key") {
                FDSG.bringInspectionIntoView("closedChest");
            } else {
                getFlag(obj, "isClosed").setBoolean(false);
                obj.setAnimationName("ChestOpen");
                const keyIndex = FDSG.PlayerInventory.selectedItemIndex;
                FDSG.PlayerInventory.selectedItem = null;
                FDSG.removeItemFromInventory(keyIndex);
                FDSG.bringInspectionIntoView("openChest");
            }
        } else {
            const isStatueCollected = getFlag(obj, "statueCollected", "boolean");
            if (!isStatueCollected) {
                FDSG.bringInspectionIntoView("openChest");
            } else {
                FDSG.bringInspectionIntoView("emptyChest");
            }
        }
    } else {
        const chest = FDSG.getInstanceFromID("FDS North Chest");
        getFlag(chest, "statueCollected").setBoolean(true);
        FDSG.isInspecting = false;
    }
    
});
};
gdjs.ExplorationCode.eventsList9 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x8f4f38(runtimeScene);

}


};gdjs.ExplorationCode.userFunc0xa44868 = function GDJSInlineCode(runtimeScene) {
"use strict";
const FDSG = gdjs.FDGameData;
const GameVars = FDSG.GameVars;

FDSG.registerKeyPressFunction({
    key: "f",
    duration: "released",
    keyPressFunction: () => {
        FDSG.debugPrint(FDSG);
    }
});

FDSG.registerKeyPressFunction({
    key: "v",
    duration: "released",
    keyPressFunction: () => {
        FDSG.debugPrint(GameVars);
    }
});

FDSG.registerKeyPressFunction({
    key: "r",
    duration: "released",
    keyPressFunction: () => {
        FDSG.debugPrint(GameVars.runtimeScene);
    }
});

};
gdjs.ExplorationCode.userFunc0x7e2488 = function GDJSInlineCode(runtimeScene) {
"use strict";
gdjs.FDGameData.PlayerInventory.selectedItem = null;

};
gdjs.ExplorationCode.eventsList10 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x7e2488(runtimeScene);

}


};gdjs.ExplorationCode.eventsList11 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0xa44868(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {

{ //Subevents
gdjs.ExplorationCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.ExplorationCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ExplorationCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.ExplorationCode.eventsList13 = function(runtimeScene) {

{


gdjs.ExplorationCode.eventsList0(runtimeScene);
}


{


gdjs.ExplorationCode.eventsList7(runtimeScene);
}


{


gdjs.ExplorationCode.eventsList8(runtimeScene);
}


{


gdjs.ExplorationCode.eventsList9(runtimeScene);
}


{


gdjs.ExplorationCode.eventsList12(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtTools.debuggerTools.log("Game Data Initialized", "info", "init");
}
}

}


};gdjs.ExplorationCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.ExplorationCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.ExplorationCode.userFunc0x93ee58 = function GDJSInlineCode(runtimeScene) {
"use strict";
const FDSG = gdjs.FDGameData; // Simpler variables to use as reference
const GameVars = FDSG.GameVars;

if (gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene)) { // Runs only at the beginning of the scene
    GameVars.runtimeScene = runtimeScene; // Update the current RuntimeScene object
    FDSG.initScene();
    FDSG.debugPrint("Scene initialized");
    GameVars.isInspecting = false;
}

FDSG.handlePlayerInput(); // Handle all registered functions associated with clicking objects and pressing keys
};
gdjs.ExplorationCode.eventsList15 = function(runtimeScene) {

{


gdjs.ExplorationCode.userFunc0x93ee58(runtimeScene);

}


};gdjs.ExplorationCode.eventsList16 = function(runtimeScene) {

{



}


{


gdjs.ExplorationCode.eventsList14(runtimeScene);
}


{


gdjs.ExplorationCode.eventsList15(runtimeScene);
}


};

gdjs.ExplorationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ExplorationCode.GDBackgroundObjects1.length = 0;
gdjs.ExplorationCode.GDBackgroundObjects2.length = 0;
gdjs.ExplorationCode.GDBackgroundObjects3.length = 0;
gdjs.ExplorationCode.GDBackgroundObjects4.length = 0;
gdjs.ExplorationCode.GDTransitionObjectObjects1.length = 0;
gdjs.ExplorationCode.GDTransitionObjectObjects2.length = 0;
gdjs.ExplorationCode.GDTransitionObjectObjects3.length = 0;
gdjs.ExplorationCode.GDTransitionObjectObjects4.length = 0;
gdjs.ExplorationCode.GDInteractionObjectObjects1.length = 0;
gdjs.ExplorationCode.GDInteractionObjectObjects2.length = 0;
gdjs.ExplorationCode.GDInteractionObjectObjects3.length = 0;
gdjs.ExplorationCode.GDInteractionObjectObjects4.length = 0;
gdjs.ExplorationCode.GDExitInspectionObjects1.length = 0;
gdjs.ExplorationCode.GDExitInspectionObjects2.length = 0;
gdjs.ExplorationCode.GDExitInspectionObjects3.length = 0;
gdjs.ExplorationCode.GDExitInspectionObjects4.length = 0;
gdjs.ExplorationCode.GDInspectionImageObjects1.length = 0;
gdjs.ExplorationCode.GDInspectionImageObjects2.length = 0;
gdjs.ExplorationCode.GDInspectionImageObjects3.length = 0;
gdjs.ExplorationCode.GDInspectionImageObjects4.length = 0;
gdjs.ExplorationCode.GDStatueCollectibleObjects1.length = 0;
gdjs.ExplorationCode.GDStatueCollectibleObjects2.length = 0;
gdjs.ExplorationCode.GDStatueCollectibleObjects3.length = 0;
gdjs.ExplorationCode.GDStatueCollectibleObjects4.length = 0;
gdjs.ExplorationCode.GDInspectionTextObjects1.length = 0;
gdjs.ExplorationCode.GDInspectionTextObjects2.length = 0;
gdjs.ExplorationCode.GDInspectionTextObjects3.length = 0;
gdjs.ExplorationCode.GDInspectionTextObjects4.length = 0;
gdjs.ExplorationCode.GDItemObjectObjects1.length = 0;
gdjs.ExplorationCode.GDItemObjectObjects2.length = 0;
gdjs.ExplorationCode.GDItemObjectObjects3.length = 0;
gdjs.ExplorationCode.GDItemObjectObjects4.length = 0;
gdjs.ExplorationCode.GDInspectionObjectObjects1.length = 0;
gdjs.ExplorationCode.GDInspectionObjectObjects2.length = 0;
gdjs.ExplorationCode.GDInspectionObjectObjects3.length = 0;
gdjs.ExplorationCode.GDInspectionObjectObjects4.length = 0;
gdjs.ExplorationCode.GDInspectionBackgroundObjects1.length = 0;
gdjs.ExplorationCode.GDInspectionBackgroundObjects2.length = 0;
gdjs.ExplorationCode.GDInspectionBackgroundObjects3.length = 0;
gdjs.ExplorationCode.GDInspectionBackgroundObjects4.length = 0;
gdjs.ExplorationCode.GDItemPopupBackgroundObjects1.length = 0;
gdjs.ExplorationCode.GDItemPopupBackgroundObjects2.length = 0;
gdjs.ExplorationCode.GDItemPopupBackgroundObjects3.length = 0;
gdjs.ExplorationCode.GDItemPopupBackgroundObjects4.length = 0;
gdjs.ExplorationCode.GDItemNameTextObjects1.length = 0;
gdjs.ExplorationCode.GDItemNameTextObjects2.length = 0;
gdjs.ExplorationCode.GDItemNameTextObjects3.length = 0;
gdjs.ExplorationCode.GDItemNameTextObjects4.length = 0;
gdjs.ExplorationCode.GDItemDescriptionTextObjects1.length = 0;
gdjs.ExplorationCode.GDItemDescriptionTextObjects2.length = 0;
gdjs.ExplorationCode.GDItemDescriptionTextObjects3.length = 0;
gdjs.ExplorationCode.GDItemDescriptionTextObjects4.length = 0;
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects1.length = 0;
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects2.length = 0;
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects3.length = 0;
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects4.length = 0;
gdjs.ExplorationCode.GDItemPopupExitButtonObjects1.length = 0;
gdjs.ExplorationCode.GDItemPopupExitButtonObjects2.length = 0;
gdjs.ExplorationCode.GDItemPopupExitButtonObjects3.length = 0;
gdjs.ExplorationCode.GDItemPopupExitButtonObjects4.length = 0;
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects1.length = 0;
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects2.length = 0;
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects3.length = 0;
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects4.length = 0;
gdjs.ExplorationCode.GDPauseButtonObjects1.length = 0;
gdjs.ExplorationCode.GDPauseButtonObjects2.length = 0;
gdjs.ExplorationCode.GDPauseButtonObjects3.length = 0;
gdjs.ExplorationCode.GDPauseButtonObjects4.length = 0;
gdjs.ExplorationCode.GDCycleInventoryNextObjects1.length = 0;
gdjs.ExplorationCode.GDCycleInventoryNextObjects2.length = 0;
gdjs.ExplorationCode.GDCycleInventoryNextObjects3.length = 0;
gdjs.ExplorationCode.GDCycleInventoryNextObjects4.length = 0;
gdjs.ExplorationCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.ExplorationCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.ExplorationCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.ExplorationCode.GDInventoryBackgroundObjects4.length = 0;
gdjs.ExplorationCode.GDInventoryItemObjects1.length = 0;
gdjs.ExplorationCode.GDInventoryItemObjects2.length = 0;
gdjs.ExplorationCode.GDInventoryItemObjects3.length = 0;
gdjs.ExplorationCode.GDInventoryItemObjects4.length = 0;
gdjs.ExplorationCode.GDUIBackgroundObjects1.length = 0;
gdjs.ExplorationCode.GDUIBackgroundObjects2.length = 0;
gdjs.ExplorationCode.GDUIBackgroundObjects3.length = 0;
gdjs.ExplorationCode.GDUIBackgroundObjects4.length = 0;
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects1.length = 0;
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects2.length = 0;
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects3.length = 0;
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects4.length = 0;
gdjs.ExplorationCode.GDSelectedItemBorderObjects1.length = 0;
gdjs.ExplorationCode.GDSelectedItemBorderObjects2.length = 0;
gdjs.ExplorationCode.GDSelectedItemBorderObjects3.length = 0;
gdjs.ExplorationCode.GDSelectedItemBorderObjects4.length = 0;

gdjs.ExplorationCode.eventsList16(runtimeScene);
gdjs.ExplorationCode.GDBackgroundObjects1.length = 0;
gdjs.ExplorationCode.GDBackgroundObjects2.length = 0;
gdjs.ExplorationCode.GDBackgroundObjects3.length = 0;
gdjs.ExplorationCode.GDBackgroundObjects4.length = 0;
gdjs.ExplorationCode.GDTransitionObjectObjects1.length = 0;
gdjs.ExplorationCode.GDTransitionObjectObjects2.length = 0;
gdjs.ExplorationCode.GDTransitionObjectObjects3.length = 0;
gdjs.ExplorationCode.GDTransitionObjectObjects4.length = 0;
gdjs.ExplorationCode.GDInteractionObjectObjects1.length = 0;
gdjs.ExplorationCode.GDInteractionObjectObjects2.length = 0;
gdjs.ExplorationCode.GDInteractionObjectObjects3.length = 0;
gdjs.ExplorationCode.GDInteractionObjectObjects4.length = 0;
gdjs.ExplorationCode.GDExitInspectionObjects1.length = 0;
gdjs.ExplorationCode.GDExitInspectionObjects2.length = 0;
gdjs.ExplorationCode.GDExitInspectionObjects3.length = 0;
gdjs.ExplorationCode.GDExitInspectionObjects4.length = 0;
gdjs.ExplorationCode.GDInspectionImageObjects1.length = 0;
gdjs.ExplorationCode.GDInspectionImageObjects2.length = 0;
gdjs.ExplorationCode.GDInspectionImageObjects3.length = 0;
gdjs.ExplorationCode.GDInspectionImageObjects4.length = 0;
gdjs.ExplorationCode.GDStatueCollectibleObjects1.length = 0;
gdjs.ExplorationCode.GDStatueCollectibleObjects2.length = 0;
gdjs.ExplorationCode.GDStatueCollectibleObjects3.length = 0;
gdjs.ExplorationCode.GDStatueCollectibleObjects4.length = 0;
gdjs.ExplorationCode.GDInspectionTextObjects1.length = 0;
gdjs.ExplorationCode.GDInspectionTextObjects2.length = 0;
gdjs.ExplorationCode.GDInspectionTextObjects3.length = 0;
gdjs.ExplorationCode.GDInspectionTextObjects4.length = 0;
gdjs.ExplorationCode.GDItemObjectObjects1.length = 0;
gdjs.ExplorationCode.GDItemObjectObjects2.length = 0;
gdjs.ExplorationCode.GDItemObjectObjects3.length = 0;
gdjs.ExplorationCode.GDItemObjectObjects4.length = 0;
gdjs.ExplorationCode.GDInspectionObjectObjects1.length = 0;
gdjs.ExplorationCode.GDInspectionObjectObjects2.length = 0;
gdjs.ExplorationCode.GDInspectionObjectObjects3.length = 0;
gdjs.ExplorationCode.GDInspectionObjectObjects4.length = 0;
gdjs.ExplorationCode.GDInspectionBackgroundObjects1.length = 0;
gdjs.ExplorationCode.GDInspectionBackgroundObjects2.length = 0;
gdjs.ExplorationCode.GDInspectionBackgroundObjects3.length = 0;
gdjs.ExplorationCode.GDInspectionBackgroundObjects4.length = 0;
gdjs.ExplorationCode.GDItemPopupBackgroundObjects1.length = 0;
gdjs.ExplorationCode.GDItemPopupBackgroundObjects2.length = 0;
gdjs.ExplorationCode.GDItemPopupBackgroundObjects3.length = 0;
gdjs.ExplorationCode.GDItemPopupBackgroundObjects4.length = 0;
gdjs.ExplorationCode.GDItemNameTextObjects1.length = 0;
gdjs.ExplorationCode.GDItemNameTextObjects2.length = 0;
gdjs.ExplorationCode.GDItemNameTextObjects3.length = 0;
gdjs.ExplorationCode.GDItemNameTextObjects4.length = 0;
gdjs.ExplorationCode.GDItemDescriptionTextObjects1.length = 0;
gdjs.ExplorationCode.GDItemDescriptionTextObjects2.length = 0;
gdjs.ExplorationCode.GDItemDescriptionTextObjects3.length = 0;
gdjs.ExplorationCode.GDItemDescriptionTextObjects4.length = 0;
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects1.length = 0;
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects2.length = 0;
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects3.length = 0;
gdjs.ExplorationCode.GDItemPopupPickupButtonObjects4.length = 0;
gdjs.ExplorationCode.GDItemPopupExitButtonObjects1.length = 0;
gdjs.ExplorationCode.GDItemPopupExitButtonObjects2.length = 0;
gdjs.ExplorationCode.GDItemPopupExitButtonObjects3.length = 0;
gdjs.ExplorationCode.GDItemPopupExitButtonObjects4.length = 0;
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects1.length = 0;
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects2.length = 0;
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects3.length = 0;
gdjs.ExplorationCode.GDStatuesCollectedCounterObjects4.length = 0;
gdjs.ExplorationCode.GDPauseButtonObjects1.length = 0;
gdjs.ExplorationCode.GDPauseButtonObjects2.length = 0;
gdjs.ExplorationCode.GDPauseButtonObjects3.length = 0;
gdjs.ExplorationCode.GDPauseButtonObjects4.length = 0;
gdjs.ExplorationCode.GDCycleInventoryNextObjects1.length = 0;
gdjs.ExplorationCode.GDCycleInventoryNextObjects2.length = 0;
gdjs.ExplorationCode.GDCycleInventoryNextObjects3.length = 0;
gdjs.ExplorationCode.GDCycleInventoryNextObjects4.length = 0;
gdjs.ExplorationCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.ExplorationCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.ExplorationCode.GDInventoryBackgroundObjects3.length = 0;
gdjs.ExplorationCode.GDInventoryBackgroundObjects4.length = 0;
gdjs.ExplorationCode.GDInventoryItemObjects1.length = 0;
gdjs.ExplorationCode.GDInventoryItemObjects2.length = 0;
gdjs.ExplorationCode.GDInventoryItemObjects3.length = 0;
gdjs.ExplorationCode.GDInventoryItemObjects4.length = 0;
gdjs.ExplorationCode.GDUIBackgroundObjects1.length = 0;
gdjs.ExplorationCode.GDUIBackgroundObjects2.length = 0;
gdjs.ExplorationCode.GDUIBackgroundObjects3.length = 0;
gdjs.ExplorationCode.GDUIBackgroundObjects4.length = 0;
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects1.length = 0;
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects2.length = 0;
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects3.length = 0;
gdjs.ExplorationCode.GDCycleInventoryPreviousObjects4.length = 0;
gdjs.ExplorationCode.GDSelectedItemBorderObjects1.length = 0;
gdjs.ExplorationCode.GDSelectedItemBorderObjects2.length = 0;
gdjs.ExplorationCode.GDSelectedItemBorderObjects3.length = 0;
gdjs.ExplorationCode.GDSelectedItemBorderObjects4.length = 0;


return;

}

gdjs['ExplorationCode'] = gdjs.ExplorationCode;
