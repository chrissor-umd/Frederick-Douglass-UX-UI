gdjs.FDSEastCode = {};
gdjs.FDSEastCode.localVariables = [];
gdjs.FDSEastCode.idToCallbackMap = new Map();
gdjs.FDSEastCode.GDBackgroundObjects1= [];
gdjs.FDSEastCode.GDBackgroundObjects2= [];
gdjs.FDSEastCode.GDTransitionObjectObjects1= [];
gdjs.FDSEastCode.GDTransitionObjectObjects2= [];


gdjs.FDSEastCode.mapOfGDgdjs_9546FDSEastCode_9546GDTransitionObjectObjects1Objects = Hashtable.newFrom({"TransitionObject": gdjs.FDSEastCode.GDTransitionObjectObjects1});
gdjs.FDSEastCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.FDSEastCode.GDTransitionObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FDSEastCode.mapOfGDgdjs_9546FDSEastCode_9546GDTransitionObjectObjects1Objects, runtimeScene, true, false);
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
/* Reuse gdjs.FDSEastCode.GDTransitionObjectObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, ((gdjs.FDSEastCode.GDTransitionObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FDSEastCode.GDTransitionObjectObjects1[0].getVariables()).getFromIndex(0).getAsString(), false);
}
}

}


};gdjs.FDSEastCode.eventsList1 = function(runtimeScene) {

{



}


{



}


{


gdjs.FDSEastCode.eventsList0(runtimeScene);
}


};

gdjs.FDSEastCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FDSEastCode.GDBackgroundObjects1.length = 0;
gdjs.FDSEastCode.GDBackgroundObjects2.length = 0;
gdjs.FDSEastCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDSEastCode.GDTransitionObjectObjects2.length = 0;

gdjs.FDSEastCode.eventsList1(runtimeScene);
gdjs.FDSEastCode.GDBackgroundObjects1.length = 0;
gdjs.FDSEastCode.GDBackgroundObjects2.length = 0;
gdjs.FDSEastCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDSEastCode.GDTransitionObjectObjects2.length = 0;


return;

}

gdjs['FDSEastCode'] = gdjs.FDSEastCode;
