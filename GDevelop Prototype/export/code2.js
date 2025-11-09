gdjs.FDSSouthCode = {};
gdjs.FDSSouthCode.localVariables = [];
gdjs.FDSSouthCode.idToCallbackMap = new Map();
gdjs.FDSSouthCode.GDBackgroundObjects1= [];
gdjs.FDSSouthCode.GDBackgroundObjects2= [];
gdjs.FDSSouthCode.GDTransitionObjectObjects1= [];
gdjs.FDSSouthCode.GDTransitionObjectObjects2= [];


gdjs.FDSSouthCode.mapOfGDgdjs_9546FDSSouthCode_9546GDTransitionObjectObjects1Objects = Hashtable.newFrom({"TransitionObject": gdjs.FDSSouthCode.GDTransitionObjectObjects1});
gdjs.FDSSouthCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.FDSSouthCode.GDTransitionObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FDSSouthCode.mapOfGDgdjs_9546FDSSouthCode_9546GDTransitionObjectObjects1Objects, runtimeScene, true, false);
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
/* Reuse gdjs.FDSSouthCode.GDTransitionObjectObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, ((gdjs.FDSSouthCode.GDTransitionObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FDSSouthCode.GDTransitionObjectObjects1[0].getVariables()).getFromIndex(0).getAsString(), false);
}
}

}


};gdjs.FDSSouthCode.eventsList1 = function(runtimeScene) {

{



}


{



}


{


gdjs.FDSSouthCode.eventsList0(runtimeScene);
}


};

gdjs.FDSSouthCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FDSSouthCode.GDBackgroundObjects1.length = 0;
gdjs.FDSSouthCode.GDBackgroundObjects2.length = 0;
gdjs.FDSSouthCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDSSouthCode.GDTransitionObjectObjects2.length = 0;

gdjs.FDSSouthCode.eventsList1(runtimeScene);
gdjs.FDSSouthCode.GDBackgroundObjects1.length = 0;
gdjs.FDSSouthCode.GDBackgroundObjects2.length = 0;
gdjs.FDSSouthCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDSSouthCode.GDTransitionObjectObjects2.length = 0;


return;

}

gdjs['FDSSouthCode'] = gdjs.FDSSouthCode;
