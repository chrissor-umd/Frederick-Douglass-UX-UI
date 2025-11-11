gdjs.FDS_32SouthCode = {};
gdjs.FDS_32SouthCode.localVariables = [];
gdjs.FDS_32SouthCode.idToCallbackMap = new Map();
gdjs.FDS_32SouthCode.GDBackgroundObjects1= [];
gdjs.FDS_32SouthCode.GDBackgroundObjects2= [];
gdjs.FDS_32SouthCode.GDBackgroundObjects3= [];
gdjs.FDS_32SouthCode.GDBackgroundObjects4= [];
gdjs.FDS_32SouthCode.GDTransitionObjectObjects1= [];
gdjs.FDS_32SouthCode.GDTransitionObjectObjects2= [];
gdjs.FDS_32SouthCode.GDTransitionObjectObjects3= [];
gdjs.FDS_32SouthCode.GDTransitionObjectObjects4= [];
gdjs.FDS_32SouthCode.GDInspectObjectObjects1= [];
gdjs.FDS_32SouthCode.GDInspectObjectObjects2= [];
gdjs.FDS_32SouthCode.GDInspectObjectObjects3= [];
gdjs.FDS_32SouthCode.GDInspectObjectObjects4= [];
gdjs.FDS_32SouthCode.GDExitInspectObjects1= [];
gdjs.FDS_32SouthCode.GDExitInspectObjects2= [];
gdjs.FDS_32SouthCode.GDExitInspectObjects3= [];
gdjs.FDS_32SouthCode.GDExitInspectObjects4= [];


gdjs.FDS_32SouthCode.mapOfGDgdjs_9546FDS_959532SouthCode_9546GDTransitionObjectObjects2ObjectsGDgdjs_9546FDS_959532SouthCode_9546GDInspectObjectObjects2Objects = Hashtable.newFrom({"TransitionObject": gdjs.FDS_32SouthCode.GDTransitionObjectObjects2, "InspectObject": gdjs.FDS_32SouthCode.GDInspectObjectObjects2});
gdjs.FDS_32SouthCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FDS_32SouthCode.GDInspectObjectObjects2, gdjs.FDS_32SouthCode.GDInspectObjectObjects3);

gdjs.copyArray(gdjs.FDS_32SouthCode.GDTransitionObjectObjects2, gdjs.FDS_32SouthCode.GDTransitionObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.FDS_32SouthCode.GDInspectObjectObjects3.length === 0 ) ? (( gdjs.FDS_32SouthCode.GDTransitionObjectObjects3.length === 0 ) ? "" :gdjs.FDS_32SouthCode.GDTransitionObjectObjects3[0].getName()) :gdjs.FDS_32SouthCode.GDInspectObjectObjects3[0].getName()) == "TransitionObject");
}
if (isConditionTrue_0) {
/* Reuse gdjs.FDS_32SouthCode.GDTransitionObjectObjects3 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, ((gdjs.FDS_32SouthCode.GDTransitionObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FDS_32SouthCode.GDTransitionObjectObjects3[0].getVariables()).getFromIndex(0).getAsString(), false);
}
}

}


};gdjs.FDS_32SouthCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.FDS_32SouthCode.GDInspectObjectObjects2 */
/* Reuse gdjs.FDS_32SouthCode.GDTransitionObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.FDS_32SouthCode.GDInspectObjectObjects2.length === 0 ) ? (( gdjs.FDS_32SouthCode.GDTransitionObjectObjects2.length === 0 ) ? "" :gdjs.FDS_32SouthCode.GDTransitionObjectObjects2[0].getName()) :gdjs.FDS_32SouthCode.GDInspectObjectObjects2[0].getName()) == "InspectObject");
}
if (isConditionTrue_0) {
/* Reuse gdjs.FDS_32SouthCode.GDInspectObjectObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(((gdjs.FDS_32SouthCode.GDInspectObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FDS_32SouthCode.GDInspectObjectObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "Background", "Darken", "brightness", 0.5);
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "SceneObjects", "Darken", "brightness", 0.5);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, ((gdjs.FDS_32SouthCode.GDInspectObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FDS_32SouthCode.GDInspectObjectObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
}

}


};gdjs.FDS_32SouthCode.eventsList2 = function(runtimeScene) {

{


gdjs.FDS_32SouthCode.eventsList0(runtimeScene);
}


{


gdjs.FDS_32SouthCode.eventsList1(runtimeScene);
}


};gdjs.FDS_32SouthCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InspectObject"), gdjs.FDS_32SouthCode.GDInspectObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.FDS_32SouthCode.GDTransitionObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FDS_32SouthCode.mapOfGDgdjs_9546FDS_959532SouthCode_9546GDTransitionObjectObjects2ObjectsGDgdjs_9546FDS_959532SouthCode_9546GDInspectObjectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FDS_32SouthCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.FDS_32SouthCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.FDS_32SouthCode.eventsList3(runtimeScene);
}


};gdjs.FDS_32SouthCode.mapOfGDgdjs_9546FDS_959532SouthCode_9546GDExitInspectObjects1Objects = Hashtable.newFrom({"ExitInspect": gdjs.FDS_32SouthCode.GDExitInspectObjects1});
gdjs.FDS_32SouthCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExitInspect"), gdjs.FDS_32SouthCode.GDExitInspectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FDS_32SouthCode.mapOfGDgdjs_9546FDS_959532SouthCode_9546GDExitInspectObjects1Objects, runtimeScene, true, false);
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


};gdjs.FDS_32SouthCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FDS_32SouthCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FDS_32SouthCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.FDS_32SouthCode.eventsList7 = function(runtimeScene) {

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
gdjs.FDS_32SouthCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.FDS_32SouthCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FDS_32SouthCode.GDBackgroundObjects1.length = 0;
gdjs.FDS_32SouthCode.GDBackgroundObjects2.length = 0;
gdjs.FDS_32SouthCode.GDBackgroundObjects3.length = 0;
gdjs.FDS_32SouthCode.GDBackgroundObjects4.length = 0;
gdjs.FDS_32SouthCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDS_32SouthCode.GDTransitionObjectObjects2.length = 0;
gdjs.FDS_32SouthCode.GDTransitionObjectObjects3.length = 0;
gdjs.FDS_32SouthCode.GDTransitionObjectObjects4.length = 0;
gdjs.FDS_32SouthCode.GDInspectObjectObjects1.length = 0;
gdjs.FDS_32SouthCode.GDInspectObjectObjects2.length = 0;
gdjs.FDS_32SouthCode.GDInspectObjectObjects3.length = 0;
gdjs.FDS_32SouthCode.GDInspectObjectObjects4.length = 0;
gdjs.FDS_32SouthCode.GDExitInspectObjects1.length = 0;
gdjs.FDS_32SouthCode.GDExitInspectObjects2.length = 0;
gdjs.FDS_32SouthCode.GDExitInspectObjects3.length = 0;
gdjs.FDS_32SouthCode.GDExitInspectObjects4.length = 0;

gdjs.FDS_32SouthCode.eventsList7(runtimeScene);
gdjs.FDS_32SouthCode.GDBackgroundObjects1.length = 0;
gdjs.FDS_32SouthCode.GDBackgroundObjects2.length = 0;
gdjs.FDS_32SouthCode.GDBackgroundObjects3.length = 0;
gdjs.FDS_32SouthCode.GDBackgroundObjects4.length = 0;
gdjs.FDS_32SouthCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDS_32SouthCode.GDTransitionObjectObjects2.length = 0;
gdjs.FDS_32SouthCode.GDTransitionObjectObjects3.length = 0;
gdjs.FDS_32SouthCode.GDTransitionObjectObjects4.length = 0;
gdjs.FDS_32SouthCode.GDInspectObjectObjects1.length = 0;
gdjs.FDS_32SouthCode.GDInspectObjectObjects2.length = 0;
gdjs.FDS_32SouthCode.GDInspectObjectObjects3.length = 0;
gdjs.FDS_32SouthCode.GDInspectObjectObjects4.length = 0;
gdjs.FDS_32SouthCode.GDExitInspectObjects1.length = 0;
gdjs.FDS_32SouthCode.GDExitInspectObjects2.length = 0;
gdjs.FDS_32SouthCode.GDExitInspectObjects3.length = 0;
gdjs.FDS_32SouthCode.GDExitInspectObjects4.length = 0;


return;

}

gdjs['FDS_32SouthCode'] = gdjs.FDS_32SouthCode;
