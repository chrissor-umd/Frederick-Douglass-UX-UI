gdjs.Base_32TemplateCode = {};
gdjs.Base_32TemplateCode.localVariables = [];
gdjs.Base_32TemplateCode.idToCallbackMap = new Map();
gdjs.Base_32TemplateCode.GDBackgroundObjects1= [];
gdjs.Base_32TemplateCode.GDBackgroundObjects2= [];
gdjs.Base_32TemplateCode.GDTransitionObjectObjects1= [];
gdjs.Base_32TemplateCode.GDTransitionObjectObjects2= [];


gdjs.Base_32TemplateCode.mapOfGDgdjs_9546Base_959532TemplateCode_9546GDTransitionObjectObjects1Objects = Hashtable.newFrom({"TransitionObject": gdjs.Base_32TemplateCode.GDTransitionObjectObjects1});
gdjs.Base_32TemplateCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.Base_32TemplateCode.GDTransitionObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Base_32TemplateCode.mapOfGDgdjs_9546Base_959532TemplateCode_9546GDTransitionObjectObjects1Objects, runtimeScene, true, false);
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
/* Reuse gdjs.Base_32TemplateCode.GDTransitionObjectObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, ((gdjs.Base_32TemplateCode.GDTransitionObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Base_32TemplateCode.GDTransitionObjectObjects1[0].getVariables()).getFromIndex(0).getAsString(), false);
}
}

}


};gdjs.Base_32TemplateCode.eventsList1 = function(runtimeScene) {

{



}


{



}


{


gdjs.Base_32TemplateCode.eventsList0(runtimeScene);
}


};

gdjs.Base_32TemplateCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Base_32TemplateCode.GDBackgroundObjects1.length = 0;
gdjs.Base_32TemplateCode.GDBackgroundObjects2.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects1.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects2.length = 0;

gdjs.Base_32TemplateCode.eventsList1(runtimeScene);
gdjs.Base_32TemplateCode.GDBackgroundObjects1.length = 0;
gdjs.Base_32TemplateCode.GDBackgroundObjects2.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects1.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects2.length = 0;


return;

}

gdjs['Base_32TemplateCode'] = gdjs.Base_32TemplateCode;
