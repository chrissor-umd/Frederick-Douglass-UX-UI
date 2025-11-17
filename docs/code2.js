gdjs.Pause_32ScreenCode = {};
gdjs.Pause_32ScreenCode.localVariables = [];
gdjs.Pause_32ScreenCode.idToCallbackMap = new Map();
gdjs.Pause_32ScreenCode.GDPauseText2Objects1= [];
gdjs.Pause_32ScreenCode.GDPauseText2Objects2= [];
gdjs.Pause_32ScreenCode.GDBackgroundObjects1= [];
gdjs.Pause_32ScreenCode.GDBackgroundObjects2= [];
gdjs.Pause_32ScreenCode.GDTransitionObjectObjects1= [];
gdjs.Pause_32ScreenCode.GDTransitionObjectObjects2= [];
gdjs.Pause_32ScreenCode.GDInspectObjectObjects1= [];
gdjs.Pause_32ScreenCode.GDInspectObjectObjects2= [];
gdjs.Pause_32ScreenCode.GDExitInspectObjects1= [];
gdjs.Pause_32ScreenCode.GDExitInspectObjects2= [];
gdjs.Pause_32ScreenCode.GDPauseButtonObjects1= [];
gdjs.Pause_32ScreenCode.GDPauseButtonObjects2= [];
gdjs.Pause_32ScreenCode.GDPauseTextObjects1= [];
gdjs.Pause_32ScreenCode.GDPauseTextObjects2= [];
gdjs.Pause_32ScreenCode.GDInspectImageObjects1= [];
gdjs.Pause_32ScreenCode.GDInspectImageObjects2= [];
gdjs.Pause_32ScreenCode.GDInspectBackgroundObjects1= [];
gdjs.Pause_32ScreenCode.GDInspectBackgroundObjects2= [];
gdjs.Pause_32ScreenCode.GDStatueCollectibleObjects1= [];
gdjs.Pause_32ScreenCode.GDStatueCollectibleObjects2= [];


gdjs.Pause_32ScreenCode.mapOfGDgdjs_9546Pause_959532ScreenCode_9546GDPauseButtonObjects1Objects = Hashtable.newFrom({"PauseButton": gdjs.Pause_32ScreenCode.GDPauseButtonObjects1});
gdjs.Pause_32ScreenCode.userFunc0xa80e28 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.getGame().getRenderer().getCanvas().style.cursor = "pointer";

};
gdjs.Pause_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Pause_32ScreenCode.userFunc0xa80e28(runtimeScene);

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


};gdjs.Pause_32ScreenCode.eventsList1 = function(runtimeScene) {

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


};

gdjs.Pause_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pause_32ScreenCode.GDPauseText2Objects1.length = 0;
gdjs.Pause_32ScreenCode.GDPauseText2Objects2.length = 0;
gdjs.Pause_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDTransitionObjectObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDTransitionObjectObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDInspectObjectObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDInspectObjectObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDExitInspectObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDExitInspectObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDPauseButtonObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDPauseButtonObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDPauseTextObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDPauseTextObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDInspectImageObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDInspectImageObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDInspectBackgroundObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDInspectBackgroundObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDStatueCollectibleObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDStatueCollectibleObjects2.length = 0;

gdjs.Pause_32ScreenCode.eventsList1(runtimeScene);
gdjs.Pause_32ScreenCode.GDPauseText2Objects1.length = 0;
gdjs.Pause_32ScreenCode.GDPauseText2Objects2.length = 0;
gdjs.Pause_32ScreenCode.GDBackgroundObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDBackgroundObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDTransitionObjectObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDTransitionObjectObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDInspectObjectObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDInspectObjectObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDExitInspectObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDExitInspectObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDPauseButtonObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDPauseButtonObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDPauseTextObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDPauseTextObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDInspectImageObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDInspectImageObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDInspectBackgroundObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDInspectBackgroundObjects2.length = 0;
gdjs.Pause_32ScreenCode.GDStatueCollectibleObjects1.length = 0;
gdjs.Pause_32ScreenCode.GDStatueCollectibleObjects2.length = 0;


return;

}

gdjs['Pause_32ScreenCode'] = gdjs.Pause_32ScreenCode;
