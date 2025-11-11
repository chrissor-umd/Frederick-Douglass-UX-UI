gdjs.FDS_32WestCode = {};
gdjs.FDS_32WestCode.localVariables = [];
gdjs.FDS_32WestCode.idToCallbackMap = new Map();
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects1= [];
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects2= [];
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects3= [];
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects4= [];
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects1= [];
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects2= [];
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects3= [];
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects4= [];
gdjs.FDS_32WestCode.GDBackgroundObjects1= [];
gdjs.FDS_32WestCode.GDBackgroundObjects2= [];
gdjs.FDS_32WestCode.GDBackgroundObjects3= [];
gdjs.FDS_32WestCode.GDBackgroundObjects4= [];
gdjs.FDS_32WestCode.GDTransitionObjectObjects1= [];
gdjs.FDS_32WestCode.GDTransitionObjectObjects2= [];
gdjs.FDS_32WestCode.GDTransitionObjectObjects3= [];
gdjs.FDS_32WestCode.GDTransitionObjectObjects4= [];
gdjs.FDS_32WestCode.GDInspectObjectObjects1= [];
gdjs.FDS_32WestCode.GDInspectObjectObjects2= [];
gdjs.FDS_32WestCode.GDInspectObjectObjects3= [];
gdjs.FDS_32WestCode.GDInspectObjectObjects4= [];
gdjs.FDS_32WestCode.GDExitInspectObjects1= [];
gdjs.FDS_32WestCode.GDExitInspectObjects2= [];
gdjs.FDS_32WestCode.GDExitInspectObjects3= [];
gdjs.FDS_32WestCode.GDExitInspectObjects4= [];


gdjs.FDS_32WestCode.mapOfGDgdjs_9546FDS_959532WestCode_9546GDTransitionObjectObjects2ObjectsGDgdjs_9546FDS_959532WestCode_9546GDInspectObjectObjects2Objects = Hashtable.newFrom({"TransitionObject": gdjs.FDS_32WestCode.GDTransitionObjectObjects2, "InspectObject": gdjs.FDS_32WestCode.GDInspectObjectObjects2});
gdjs.FDS_32WestCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FDS_32WestCode.GDInspectObjectObjects2, gdjs.FDS_32WestCode.GDInspectObjectObjects3);

gdjs.copyArray(gdjs.FDS_32WestCode.GDTransitionObjectObjects2, gdjs.FDS_32WestCode.GDTransitionObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.FDS_32WestCode.GDInspectObjectObjects3.length === 0 ) ? (( gdjs.FDS_32WestCode.GDTransitionObjectObjects3.length === 0 ) ? "" :gdjs.FDS_32WestCode.GDTransitionObjectObjects3[0].getName()) :gdjs.FDS_32WestCode.GDInspectObjectObjects3[0].getName()) == "TransitionObject");
}
if (isConditionTrue_0) {
/* Reuse gdjs.FDS_32WestCode.GDTransitionObjectObjects3 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, ((gdjs.FDS_32WestCode.GDTransitionObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FDS_32WestCode.GDTransitionObjectObjects3[0].getVariables()).getFromIndex(0).getAsString(), false);
}
}

}


};gdjs.FDS_32WestCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.FDS_32WestCode.GDInspectObjectObjects2 */
/* Reuse gdjs.FDS_32WestCode.GDTransitionObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.FDS_32WestCode.GDInspectObjectObjects2.length === 0 ) ? (( gdjs.FDS_32WestCode.GDTransitionObjectObjects2.length === 0 ) ? "" :gdjs.FDS_32WestCode.GDTransitionObjectObjects2[0].getName()) :gdjs.FDS_32WestCode.GDInspectObjectObjects2[0].getName()) == "InspectObject");
}
if (isConditionTrue_0) {
/* Reuse gdjs.FDS_32WestCode.GDInspectObjectObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(((gdjs.FDS_32WestCode.GDInspectObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FDS_32WestCode.GDInspectObjectObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "Background", "Darken", "brightness", 0.5);
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "SceneObjects", "Darken", "brightness", 0.5);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, ((gdjs.FDS_32WestCode.GDInspectObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.FDS_32WestCode.GDInspectObjectObjects2[0].getVariables()).getFromIndex(0).getAsString());
}
}

}


};gdjs.FDS_32WestCode.eventsList2 = function(runtimeScene) {

{


gdjs.FDS_32WestCode.eventsList0(runtimeScene);
}


{


gdjs.FDS_32WestCode.eventsList1(runtimeScene);
}


};gdjs.FDS_32WestCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InspectObject"), gdjs.FDS_32WestCode.GDInspectObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.FDS_32WestCode.GDTransitionObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FDS_32WestCode.mapOfGDgdjs_9546FDS_959532WestCode_9546GDTransitionObjectObjects2ObjectsGDgdjs_9546FDS_959532WestCode_9546GDInspectObjectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FDS_32WestCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.FDS_32WestCode.eventsList4 = function(runtimeScene) {

{



}


{


gdjs.FDS_32WestCode.eventsList3(runtimeScene);
}


};gdjs.FDS_32WestCode.mapOfGDgdjs_9546FDS_959532WestCode_9546GDExitInspectObjects1Objects = Hashtable.newFrom({"ExitInspect": gdjs.FDS_32WestCode.GDExitInspectObjects1});
gdjs.FDS_32WestCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExitInspect"), gdjs.FDS_32WestCode.GDExitInspectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FDS_32WestCode.mapOfGDgdjs_9546FDS_959532WestCode_9546GDExitInspectObjects1Objects, runtimeScene, true, false);
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


};gdjs.FDS_32WestCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FDS_32WestCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FDS_32WestCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.FDS_32WestCode.eventsList7 = function(runtimeScene) {

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
gdjs.FDS_32WestCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.FDS_32WestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects1.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects2.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects3.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects4.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects1.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects2.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects3.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects4.length = 0;
gdjs.FDS_32WestCode.GDBackgroundObjects1.length = 0;
gdjs.FDS_32WestCode.GDBackgroundObjects2.length = 0;
gdjs.FDS_32WestCode.GDBackgroundObjects3.length = 0;
gdjs.FDS_32WestCode.GDBackgroundObjects4.length = 0;
gdjs.FDS_32WestCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDS_32WestCode.GDTransitionObjectObjects2.length = 0;
gdjs.FDS_32WestCode.GDTransitionObjectObjects3.length = 0;
gdjs.FDS_32WestCode.GDTransitionObjectObjects4.length = 0;
gdjs.FDS_32WestCode.GDInspectObjectObjects1.length = 0;
gdjs.FDS_32WestCode.GDInspectObjectObjects2.length = 0;
gdjs.FDS_32WestCode.GDInspectObjectObjects3.length = 0;
gdjs.FDS_32WestCode.GDInspectObjectObjects4.length = 0;
gdjs.FDS_32WestCode.GDExitInspectObjects1.length = 0;
gdjs.FDS_32WestCode.GDExitInspectObjects2.length = 0;
gdjs.FDS_32WestCode.GDExitInspectObjects3.length = 0;
gdjs.FDS_32WestCode.GDExitInspectObjects4.length = 0;

gdjs.FDS_32WestCode.eventsList7(runtimeScene);
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects1.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects2.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects3.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595TextObjects4.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects1.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects2.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects3.length = 0;
gdjs.FDS_32WestCode.GDStatueInspect_9595Image2Objects4.length = 0;
gdjs.FDS_32WestCode.GDBackgroundObjects1.length = 0;
gdjs.FDS_32WestCode.GDBackgroundObjects2.length = 0;
gdjs.FDS_32WestCode.GDBackgroundObjects3.length = 0;
gdjs.FDS_32WestCode.GDBackgroundObjects4.length = 0;
gdjs.FDS_32WestCode.GDTransitionObjectObjects1.length = 0;
gdjs.FDS_32WestCode.GDTransitionObjectObjects2.length = 0;
gdjs.FDS_32WestCode.GDTransitionObjectObjects3.length = 0;
gdjs.FDS_32WestCode.GDTransitionObjectObjects4.length = 0;
gdjs.FDS_32WestCode.GDInspectObjectObjects1.length = 0;
gdjs.FDS_32WestCode.GDInspectObjectObjects2.length = 0;
gdjs.FDS_32WestCode.GDInspectObjectObjects3.length = 0;
gdjs.FDS_32WestCode.GDInspectObjectObjects4.length = 0;
gdjs.FDS_32WestCode.GDExitInspectObjects1.length = 0;
gdjs.FDS_32WestCode.GDExitInspectObjects2.length = 0;
gdjs.FDS_32WestCode.GDExitInspectObjects3.length = 0;
gdjs.FDS_32WestCode.GDExitInspectObjects4.length = 0;


return;

}

gdjs['FDS_32WestCode'] = gdjs.FDS_32WestCode;
