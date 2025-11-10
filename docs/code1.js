gdjs.FDSWestCode = {};
gdjs.FDSWestCode.localVariables = [];
gdjs.FDSWestCode.idToCallbackMap = new Map();
gdjs.FDSWestCode.GDBackgroundObjects1= [];
gdjs.FDSWestCode.GDBackgroundObjects2= [];
gdjs.FDSWestCode.GDTransitionObjectObjects1= [];
gdjs.FDSWestCode.GDTransitionObjectObjects2= [];


gdjs.FDSWestCode.mapOfGDgdjs_9546FDSWestCode_9546GDTransitionObjectObjects1Objects = Hashtable.newFrom({"TransitionObject": gdjs.FDSWestCode.GDTransitionObjectObjects1});
gdjs.FDSWestCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.FDSWestCode.GDTransitionObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FDSWestCode.mapOfGDgdjs_9546FDSWestCode_9546GDTransitionObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9571460);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.FDSWestCode.GDTransitionObjectObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, ((gdjs.FDSWestCode.GDTransitionObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FDSWestCode.GDTransitionObjectObjects1[0].getVariables()).getFromIndex(0).getAsString(), false);
}
}

}


};gdjs.FDSWestCode.eventsList1 = function(runtimeScene) {

{



}


{



}


{


gdjs.FDSWestCode.eventsList0(runtimeScene);
}


};

gdjs.FDSWestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FDSWestCode.GDBackgroundObjects1.length = 0;
gdjs.FDSWestCode.GDBackgroundObjects2.length = 0;
gdjs.FDSWestCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDSWestCode.GDTransitionObjectObjects2.length = 0;

gdjs.FDSWestCode.eventsList1(runtimeScene);
gdjs.FDSWestCode.GDBackgroundObjects1.length = 0;
gdjs.FDSWestCode.GDBackgroundObjects2.length = 0;
gdjs.FDSWestCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDSWestCode.GDTransitionObjectObjects2.length = 0;


return;

}

gdjs['FDSWestCode'] = gdjs.FDSWestCode;
