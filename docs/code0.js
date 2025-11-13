gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDYellowButtonObjects1= [];
gdjs.Main_32MenuCode.GDYellowButtonObjects2= [];
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDTransitionObjectObjects1= [];
gdjs.Main_32MenuCode.GDTransitionObjectObjects2= [];
gdjs.Main_32MenuCode.GDInspectObjectObjects1= [];
gdjs.Main_32MenuCode.GDInspectObjectObjects2= [];
gdjs.Main_32MenuCode.GDExitInspectObjects1= [];
gdjs.Main_32MenuCode.GDExitInspectObjects2= [];
gdjs.Main_32MenuCode.GDPauseButtonObjects1= [];
gdjs.Main_32MenuCode.GDPauseButtonObjects2= [];
gdjs.Main_32MenuCode.GDPauseTextObjects1= [];
gdjs.Main_32MenuCode.GDPauseTextObjects2= [];
gdjs.Main_32MenuCode.GDInspectImageObjects1= [];
gdjs.Main_32MenuCode.GDInspectImageObjects2= [];


gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDYellowButtonObjects1Objects = Hashtable.newFrom({"YellowButton": gdjs.Main_32MenuCode.GDYellowButtonObjects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.Main_32MenuCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDYellowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDYellowButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDTransitionObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDTransitionObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDInspectObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDInspectObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDExitInspectObjects1.length = 0;
gdjs.Main_32MenuCode.GDExitInspectObjects2.length = 0;
gdjs.Main_32MenuCode.GDPauseButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPauseButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDPauseTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDPauseTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDInspectImageObjects1.length = 0;
gdjs.Main_32MenuCode.GDInspectImageObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDYellowButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDYellowButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDTransitionObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDTransitionObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDInspectObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDInspectObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDExitInspectObjects1.length = 0;
gdjs.Main_32MenuCode.GDExitInspectObjects2.length = 0;
gdjs.Main_32MenuCode.GDPauseButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPauseButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDPauseTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDPauseTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDInspectImageObjects1.length = 0;
gdjs.Main_32MenuCode.GDInspectImageObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
