gdjs.Base_32TemplateCode = {};
gdjs.Base_32TemplateCode.localVariables = [];
gdjs.Base_32TemplateCode.idToCallbackMap = new Map();
gdjs.Base_32TemplateCode.GDBackgroundObjects1= [];
gdjs.Base_32TemplateCode.GDBackgroundObjects2= [];
gdjs.Base_32TemplateCode.GDBackgroundObjects3= [];
gdjs.Base_32TemplateCode.GDBackgroundObjects4= [];
gdjs.Base_32TemplateCode.GDTransitionObjectObjects1= [];
gdjs.Base_32TemplateCode.GDTransitionObjectObjects2= [];
gdjs.Base_32TemplateCode.GDTransitionObjectObjects3= [];
gdjs.Base_32TemplateCode.GDTransitionObjectObjects4= [];
gdjs.Base_32TemplateCode.GDInspectObjectObjects1= [];
gdjs.Base_32TemplateCode.GDInspectObjectObjects2= [];
gdjs.Base_32TemplateCode.GDInspectObjectObjects3= [];
gdjs.Base_32TemplateCode.GDInspectObjectObjects4= [];
gdjs.Base_32TemplateCode.GDExitInspectObjects1= [];
gdjs.Base_32TemplateCode.GDExitInspectObjects2= [];
gdjs.Base_32TemplateCode.GDExitInspectObjects3= [];
gdjs.Base_32TemplateCode.GDExitInspectObjects4= [];


gdjs.Base_32TemplateCode.mapOfGDgdjs_9546Base_959532TemplateCode_9546GDTransitionObjectObjects2ObjectsGDgdjs_9546Base_959532TemplateCode_9546GDInspectObjectObjects2Objects = Hashtable.newFrom({"TransitionObject": gdjs.Base_32TemplateCode.GDTransitionObjectObjects2, "InspectObject": gdjs.Base_32TemplateCode.GDInspectObjectObjects2});
gdjs.Base_32TemplateCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Base_32TemplateCode.GDInspectObjectObjects2, gdjs.Base_32TemplateCode.GDInspectObjectObjects3);

gdjs.copyArray(gdjs.Base_32TemplateCode.GDTransitionObjectObjects2, gdjs.Base_32TemplateCode.GDTransitionObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Base_32TemplateCode.GDInspectObjectObjects3.length === 0 ) ? (( gdjs.Base_32TemplateCode.GDTransitionObjectObjects3.length === 0 ) ? "" :gdjs.Base_32TemplateCode.GDTransitionObjectObjects3[0].getName()) :gdjs.Base_32TemplateCode.GDInspectObjectObjects3[0].getName()) == "TransitionObject");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Base_32TemplateCode.GDTransitionObjectObjects3 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, ((gdjs.Base_32TemplateCode.GDTransitionObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Base_32TemplateCode.GDTransitionObjectObjects3[0].getVariables()).getFromIndex(0).getAsString(), false);
}
}

}


};gdjs.Base_32TemplateCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Base_32TemplateCode.GDInspectObjectObjects2 */
/* Reuse gdjs.Base_32TemplateCode.GDTransitionObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.Base_32TemplateCode.GDInspectObjectObjects2.length === 0 ) ? (( gdjs.Base_32TemplateCode.GDTransitionObjectObjects2.length === 0 ) ? "" :gdjs.Base_32TemplateCode.GDTransitionObjectObjects2[0].getName()) :gdjs.Base_32TemplateCode.GDInspectObjectObjects2[0].getName()) == "InspectObject");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Base_32TemplateCode.GDInspectObjectObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(((gdjs.Base_32TemplateCode.GDInspectObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Base_32TemplateCode.GDInspectObjectObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "Background", "Darken", "brightness", 0.5);
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "SceneObjects", "Darken", "brightness", 0.5);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, ((gdjs.Base_32TemplateCode.GDInspectObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Base_32TemplateCode.GDInspectObjectObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
}

}


};gdjs.Base_32TemplateCode.eventsList2 = function(runtimeScene) {

{


gdjs.Base_32TemplateCode.eventsList0(runtimeScene);
}


{


gdjs.Base_32TemplateCode.eventsList1(runtimeScene);
}


};gdjs.Base_32TemplateCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InspectObject"), gdjs.Base_32TemplateCode.GDInspectObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.Base_32TemplateCode.GDTransitionObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Base_32TemplateCode.mapOfGDgdjs_9546Base_959532TemplateCode_9546GDTransitionObjectObjects2ObjectsGDgdjs_9546Base_959532TemplateCode_9546GDInspectObjectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Base_32TemplateCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Base_32TemplateCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.Base_32TemplateCode.eventsList3(runtimeScene);
}


};gdjs.Base_32TemplateCode.mapOfGDgdjs_9546Base_959532TemplateCode_9546GDExitInspectObjects1Objects = Hashtable.newFrom({"ExitInspect": gdjs.Base_32TemplateCode.GDExitInspectObjects1});
gdjs.Base_32TemplateCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExitInspect"), gdjs.Base_32TemplateCode.GDExitInspectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Base_32TemplateCode.mapOfGDgdjs_9546Base_959532TemplateCode_9546GDExitInspectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("");
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "Background", "Darken", "brightness", 1);
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "SceneObjects", "Darken", "brightness", 1);
}
}

}


};gdjs.Base_32TemplateCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Base_32TemplateCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Base_32TemplateCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Base_32TemplateCode.eventsList7 = function(runtimeScene) {

{



}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Base_32TemplateCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.Base_32TemplateCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Base_32TemplateCode.GDBackgroundObjects1.length = 0;
gdjs.Base_32TemplateCode.GDBackgroundObjects2.length = 0;
gdjs.Base_32TemplateCode.GDBackgroundObjects3.length = 0;
gdjs.Base_32TemplateCode.GDBackgroundObjects4.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects1.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects2.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects3.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects4.length = 0;
gdjs.Base_32TemplateCode.GDInspectObjectObjects1.length = 0;
gdjs.Base_32TemplateCode.GDInspectObjectObjects2.length = 0;
gdjs.Base_32TemplateCode.GDInspectObjectObjects3.length = 0;
gdjs.Base_32TemplateCode.GDInspectObjectObjects4.length = 0;
gdjs.Base_32TemplateCode.GDExitInspectObjects1.length = 0;
gdjs.Base_32TemplateCode.GDExitInspectObjects2.length = 0;
gdjs.Base_32TemplateCode.GDExitInspectObjects3.length = 0;
gdjs.Base_32TemplateCode.GDExitInspectObjects4.length = 0;

gdjs.Base_32TemplateCode.eventsList7(runtimeScene);
gdjs.Base_32TemplateCode.GDBackgroundObjects1.length = 0;
gdjs.Base_32TemplateCode.GDBackgroundObjects2.length = 0;
gdjs.Base_32TemplateCode.GDBackgroundObjects3.length = 0;
gdjs.Base_32TemplateCode.GDBackgroundObjects4.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects1.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects2.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects3.length = 0;
gdjs.Base_32TemplateCode.GDTransitionObjectObjects4.length = 0;
gdjs.Base_32TemplateCode.GDInspectObjectObjects1.length = 0;
gdjs.Base_32TemplateCode.GDInspectObjectObjects2.length = 0;
gdjs.Base_32TemplateCode.GDInspectObjectObjects3.length = 0;
gdjs.Base_32TemplateCode.GDInspectObjectObjects4.length = 0;
gdjs.Base_32TemplateCode.GDExitInspectObjects1.length = 0;
gdjs.Base_32TemplateCode.GDExitInspectObjects2.length = 0;
gdjs.Base_32TemplateCode.GDExitInspectObjects3.length = 0;
gdjs.Base_32TemplateCode.GDExitInspectObjects4.length = 0;


return;

}

gdjs['Base_32TemplateCode'] = gdjs.Base_32TemplateCode;
