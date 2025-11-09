gdjs.FDSNorthCode = {};
gdjs.FDSNorthCode.localVariables = [];
gdjs.FDSNorthCode.idToCallbackMap = new Map();
gdjs.FDSNorthCode.GDBackgroundObjects1= [];
gdjs.FDSNorthCode.GDBackgroundObjects2= [];
gdjs.FDSNorthCode.GDTransitionObjectObjects1= [];
gdjs.FDSNorthCode.GDTransitionObjectObjects2= [];


gdjs.FDSNorthCode.mapOfGDgdjs_9546FDSNorthCode_9546GDTransitionObjectObjects1Objects = Hashtable.newFrom({"TransitionObject": gdjs.FDSNorthCode.GDTransitionObjectObjects1});
gdjs.FDSNorthCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.FDSNorthCode.GDTransitionObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FDSNorthCode.mapOfGDgdjs_9546FDSNorthCode_9546GDTransitionObjectObjects1Objects, runtimeScene, true, false);
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
/* Reuse gdjs.FDSNorthCode.GDTransitionObjectObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, ((gdjs.FDSNorthCode.GDTransitionObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FDSNorthCode.GDTransitionObjectObjects1[0].getVariables()).getFromIndex(0).getAsString(), false);
}
}

}


};gdjs.FDSNorthCode.eventsList1 = function(runtimeScene) {

{



}


{



}


{


gdjs.FDSNorthCode.eventsList0(runtimeScene);
}


};

gdjs.FDSNorthCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FDSNorthCode.GDBackgroundObjects1.length = 0;
gdjs.FDSNorthCode.GDBackgroundObjects2.length = 0;
gdjs.FDSNorthCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDSNorthCode.GDTransitionObjectObjects2.length = 0;

gdjs.FDSNorthCode.eventsList1(runtimeScene);
gdjs.FDSNorthCode.GDBackgroundObjects1.length = 0;
gdjs.FDSNorthCode.GDBackgroundObjects2.length = 0;
gdjs.FDSNorthCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDSNorthCode.GDTransitionObjectObjects2.length = 0;


return;

}

gdjs['FDSNorthCode'] = gdjs.FDSNorthCode;
