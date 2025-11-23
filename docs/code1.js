gdjs.Pause_32ScreenCode = {};
gdjs.Pause_32ScreenCode.localVariables = [];
gdjs.Pause_32ScreenCode.idToCallbackMap = new Map();
gdjs.Pause_32ScreenCode.GDPauseTextObjects1= [];
gdjs.Pause_32ScreenCode.GDPauseTextObjects2= [];
gdjs.Pause_32ScreenCode.GDStatuesCollectedCounterObjects1= [];
gdjs.Pause_32ScreenCode.GDStatuesCollectedCounterObjects2= [];
gdjs.Pause_32ScreenCode.GDPauseButtonObjects1= [];
gdjs.Pause_32ScreenCode.GDPauseButtonObjects2= [];
gdjs.Pause_32ScreenCode.GDCycleInventoryNextObjects1= [];
gdjs.Pause_32ScreenCode.GDCycleInventoryNextObjects2= [];
gdjs.Pause_32ScreenCode.GDInventoryBackgroundObjects1= [];
gdjs.Pause_32ScreenCode.GDInventoryBackgroundObjects2= [];
gdjs.Pause_32ScreenCode.GDInventoryItemObjects1= [];
gdjs.Pause_32ScreenCode.GDInventoryItemObjects2= [];
gdjs.Pause_32ScreenCode.GDUIBackgroundObjects1= [];
gdjs.Pause_32ScreenCode.GDUIBackgroundObjects2= [];
gdjs.Pause_32ScreenCode.GDCycleInventoryPreviousObjects1= [];
gdjs.Pause_32ScreenCode.GDCycleInventoryPreviousObjects2= [];
gdjs.Pause_32ScreenCode.GDSelectedItemBorderObjects1= [];
gdjs.Pause_32ScreenCode.GDSelectedItemBorderObjects2= [];


gdjs.Pause_32ScreenCode.mapOfGDgdjs_9546Pause_959532ScreenCode_9546GDPauseButtonObjects1Objects = Hashtable.newFrom({"PauseButton": gdjs.Pause_32ScreenCode.GDPauseButtonObjects1});
gdjs.Pause_32ScreenCode.userFunc0x7e1d78 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.getGame().getRenderer().getCanvas().style.cursor = "pointer";

};
gdjs.Pause_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Pause_32ScreenCode.userFunc0x7e1d78(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};gdjs.Pause_32ScreenCode.mapOfGDgdjs_9546Pause_959532ScreenCode_9546GDPauseButtonObjects1Objects = Hashtable.newFrom({"PauseButton": gdjs.Pause_32ScreenCode.GDPauseButtonObjects1});
gdjs.Pause_32ScreenCode.userFunc0x9d6488 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.getGame().getRenderer().getCanvas().style.cursor = "default";

};
gdjs.Pause_32ScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.Pause_32ScreenCode.userFunc0x9d6488(runtimeScene);

}


};gdjs.Pause_32ScreenCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs.Pause_32ScreenCode.GDPauseButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32ScreenCode.mapOfGDgdjs_9546Pause_959532ScreenCode_9546GDPauseButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Pause_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs.Pause_32ScreenCode.GDPauseButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32ScreenCode.mapOfGDgdjs_9546Pause_959532ScreenCode_9546GDPauseButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Pause_32ScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Pause_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pause_32ScreenCode.GDPauseTextObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDPauseTextObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDStatuesCollectedCounterObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDStatuesCollectedCounterObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDPauseButtonObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDPauseButtonObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDCycleInventoryNextObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDCycleInventoryNextObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDInventoryItemObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDInventoryItemObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDUIBackgroundObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDUIBackgroundObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDCycleInventoryPreviousObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDCycleInventoryPreviousObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDSelectedItemBorderObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDSelectedItemBorderObjects2.length = 0;

gdjs.Pause_32ScreenCode.eventsList2(runtimeScene);
gdjs.Pause_32ScreenCode.GDPauseTextObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDPauseTextObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDStatuesCollectedCounterObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDStatuesCollectedCounterObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDPauseButtonObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDPauseButtonObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDCycleInventoryNextObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDCycleInventoryNextObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDInventoryItemObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDInventoryItemObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDUIBackgroundObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDUIBackgroundObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDCycleInventoryPreviousObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDCycleInventoryPreviousObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDSelectedItemBorderObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDSelectedItemBorderObjects2.length = 0;


return;

}

gdjs['Pause_32ScreenCode'] = gdjs.Pause_32ScreenCode;
