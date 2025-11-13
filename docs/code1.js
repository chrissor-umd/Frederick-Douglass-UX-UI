gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDInspectTextObjects1= [];
gdjs.GameCode.GDInspectTextObjects2= [];
gdjs.GameCode.GDInspectTextObjects3= [];
gdjs.GameCode.GDInspectTextObjects4= [];
gdjs.GameCode.GDInspectTextObjects5= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDBackgroundObjects4= [];
gdjs.GameCode.GDBackgroundObjects5= [];
gdjs.GameCode.GDTransitionObjectObjects1= [];
gdjs.GameCode.GDTransitionObjectObjects2= [];
gdjs.GameCode.GDTransitionObjectObjects3= [];
gdjs.GameCode.GDTransitionObjectObjects4= [];
gdjs.GameCode.GDTransitionObjectObjects5= [];
gdjs.GameCode.GDInspectObjectObjects1= [];
gdjs.GameCode.GDInspectObjectObjects2= [];
gdjs.GameCode.GDInspectObjectObjects3= [];
gdjs.GameCode.GDInspectObjectObjects4= [];
gdjs.GameCode.GDInspectObjectObjects5= [];
gdjs.GameCode.GDExitInspectObjects1= [];
gdjs.GameCode.GDExitInspectObjects2= [];
gdjs.GameCode.GDExitInspectObjects3= [];
gdjs.GameCode.GDExitInspectObjects4= [];
gdjs.GameCode.GDExitInspectObjects5= [];
gdjs.GameCode.GDPauseButtonObjects1= [];
gdjs.GameCode.GDPauseButtonObjects2= [];
gdjs.GameCode.GDPauseButtonObjects3= [];
gdjs.GameCode.GDPauseButtonObjects4= [];
gdjs.GameCode.GDPauseButtonObjects5= [];
gdjs.GameCode.GDPauseTextObjects1= [];
gdjs.GameCode.GDPauseTextObjects2= [];
gdjs.GameCode.GDPauseTextObjects3= [];
gdjs.GameCode.GDPauseTextObjects4= [];
gdjs.GameCode.GDPauseTextObjects5= [];
gdjs.GameCode.GDInspectImageObjects1= [];
gdjs.GameCode.GDInspectImageObjects2= [];
gdjs.GameCode.GDInspectImageObjects3= [];
gdjs.GameCode.GDInspectImageObjects4= [];
gdjs.GameCode.GDInspectImageObjects5= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTransitionObjectObjects2ObjectsGDgdjs_9546GameCode_9546GDInspectObjectObjects2Objects = Hashtable.newFrom({"TransitionObject": gdjs.GameCode.GDTransitionObjectObjects2, "InspectObject": gdjs.GameCode.GDInspectObjectObjects2});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InspectObject"), gdjs.GameCode.GDInspectObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.GameCode.GDTransitionObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTransitionObjectObjects2ObjectsGDgdjs_9546GameCode_9546GDInspectObjectObjects2Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDInspectObjectObjects2 */
/* Reuse gdjs.GameCode.GDTransitionObjectObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTransitionObjectObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTransitionObjectObjects2[i].activateBehavior("CursorHover", false);
}
for(var i = 0, len = gdjs.GameCode.GDInspectObjectObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInspectObjectObjects2[i].activateBehavior("CursorHover", false);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTransitionObjectObjects4ObjectsGDgdjs_9546GameCode_9546GDInspectObjectObjects4Objects = Hashtable.newFrom({"TransitionObject": gdjs.GameCode.GDTransitionObjectObjects4, "InspectObject": gdjs.GameCode.GDInspectObjectObjects4});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InspectObject"), gdjs.GameCode.GDInspectObjectObjects4);
gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.GameCode.GDTransitionObjectObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTransitionObjectObjects4ObjectsGDgdjs_9546GameCode_9546GDInspectObjectObjects4Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDInspectObjectObjects4 */
/* Reuse gdjs.GameCode.GDTransitionObjectObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDTransitionObjectObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTransitionObjectObjects4[i].activateBehavior("CursorHover", true);
}
for(var i = 0, len = gdjs.GameCode.GDInspectObjectObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDInspectObjectObjects4[i].activateBehavior("CursorHover", true);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTransitionObjectObjects3ObjectsGDgdjs_9546GameCode_9546GDInspectObjectObjects3Objects = Hashtable.newFrom({"TransitionObject": gdjs.GameCode.GDTransitionObjectObjects3, "InspectObject": gdjs.GameCode.GDInspectObjectObjects3});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.GameCode.GDInspectObjectObjects3, gdjs.GameCode.GDInspectObjectObjects4);

gdjs.copyArray(gdjs.GameCode.GDTransitionObjectObjects3, gdjs.GameCode.GDTransitionObjectObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDInspectObjectObjects4.length === 0 ) ? (( gdjs.GameCode.GDTransitionObjectObjects4.length === 0 ) ? "" :gdjs.GameCode.GDTransitionObjectObjects4[0].getName()) :gdjs.GameCode.GDInspectObjectObjects4[0].getName()) == "TransitionObject");
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTransitionObjectObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(3).setString(((gdjs.GameCode.GDTransitionObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDTransitionObjectObjects4[0].getVariables()).getFromIndex(0).getAsString());
}
{gdjs.evtTools.debuggerTools.log("Switching to " + ((gdjs.GameCode.GDTransitionObjectObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDTransitionObjectObjects4[0].getVariables()).getFromIndex(0).getAsString(), "info", "");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDInspectObjectObjects3 */
/* Reuse gdjs.GameCode.GDTransitionObjectObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDInspectObjectObjects3.length === 0 ) ? (( gdjs.GameCode.GDTransitionObjectObjects3.length === 0 ) ? "" :gdjs.GameCode.GDTransitionObjectObjects3[0].getName()) :gdjs.GameCode.GDInspectObjectObjects3[0].getName()) == "InspectObject");
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDInspectObjectObjects3 */
{runtimeScene.getGame().getVariables().getFromIndex(2).setString(((gdjs.GameCode.GDInspectObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDInspectObjectObjects3[0].getVariables()).getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InspectObject"), gdjs.GameCode.GDInspectObjectObjects3);
gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.GameCode.GDTransitionObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTransitionObjectObjects3ObjectsGDgdjs_9546GameCode_9546GDInspectObjectObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10734028);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Inspect");
}

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDInspectImageObjects4Objects = Hashtable.newFrom({"InspectImage": gdjs.GameCode.GDInspectImageObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTransitionObjectObjects3ObjectsGDgdjs_9546GameCode_9546GDInspectObjectObjects3Objects = Hashtable.newFrom({"TransitionObject": gdjs.GameCode.GDTransitionObjectObjects3, "InspectObject": gdjs.GameCode.GDInspectObjectObjects3});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InspectImage"), gdjs.GameCode.GDInspectImageObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDInspectImageObjects4Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDInspectImageObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}
{for(var i = 0, len = gdjs.GameCode.GDInspectImageObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDInspectImageObjects4[i].getBehavior("Animation").setAnimationName(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Inspect");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("InspectObject"), gdjs.GameCode.GDInspectObjectObjects3);
gdjs.copyArray(runtimeScene.getObjects("TransitionObject"), gdjs.GameCode.GDTransitionObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTransitionObjectObjects3ObjectsGDgdjs_9546GameCode_9546GDInspectObjectObjects3Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDInspectObjectObjects3 */
/* Reuse gdjs.GameCode.GDTransitionObjectObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDTransitionObjectObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTransitionObjectObjects3[i].activateBehavior("CursorHover", false);
}
for(var i = 0, len = gdjs.GameCode.GDInspectObjectObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDInspectObjectObjects3[i].activateBehavior("CursorHover", false);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExitInspectObjects2Objects = Hashtable.newFrom({"ExitInspect": gdjs.GameCode.GDExitInspectObjects2});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10740012);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitInspect"), gdjs.GameCode.GDExitInspectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExitInspectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPauseButtonObjects1Objects = Hashtable.newFrom({"PauseButton": gdjs.GameCode.GDPauseButtonObjects1});
gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "PauseMenu");
}

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "PauseMenu");
}

{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs.GameCode.GDPauseButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPauseButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1));
}
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10744940);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = !runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10746468);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10746972);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Background", "Darken", true);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "SceneObjects", "Darken", true);
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "Background", "Darken", "brightness", 0.5);
}
{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "SceneObjects", "Darken", "brightness", 0.5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10748948);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "SceneObjects", "Darken", false);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Background", "Darken", false);
}
}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), 0, 0, 0);
}
}

}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDInspectTextObjects1.length = 0;
gdjs.GameCode.GDInspectTextObjects2.length = 0;
gdjs.GameCode.GDInspectTextObjects3.length = 0;
gdjs.GameCode.GDInspectTextObjects4.length = 0;
gdjs.GameCode.GDInspectTextObjects5.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects5.length = 0;
gdjs.GameCode.GDTransitionObjectObjects1.length = 0;
gdjs.GameCode.GDTransitionObjectObjects2.length = 0;
gdjs.GameCode.GDTransitionObjectObjects3.length = 0;
gdjs.GameCode.GDTransitionObjectObjects4.length = 0;
gdjs.GameCode.GDTransitionObjectObjects5.length = 0;
gdjs.GameCode.GDInspectObjectObjects1.length = 0;
gdjs.GameCode.GDInspectObjectObjects2.length = 0;
gdjs.GameCode.GDInspectObjectObjects3.length = 0;
gdjs.GameCode.GDInspectObjectObjects4.length = 0;
gdjs.GameCode.GDInspectObjectObjects5.length = 0;
gdjs.GameCode.GDExitInspectObjects1.length = 0;
gdjs.GameCode.GDExitInspectObjects2.length = 0;
gdjs.GameCode.GDExitInspectObjects3.length = 0;
gdjs.GameCode.GDExitInspectObjects4.length = 0;
gdjs.GameCode.GDExitInspectObjects5.length = 0;
gdjs.GameCode.GDPauseButtonObjects1.length = 0;
gdjs.GameCode.GDPauseButtonObjects2.length = 0;
gdjs.GameCode.GDPauseButtonObjects3.length = 0;
gdjs.GameCode.GDPauseButtonObjects4.length = 0;
gdjs.GameCode.GDPauseButtonObjects5.length = 0;
gdjs.GameCode.GDPauseTextObjects1.length = 0;
gdjs.GameCode.GDPauseTextObjects2.length = 0;
gdjs.GameCode.GDPauseTextObjects3.length = 0;
gdjs.GameCode.GDPauseTextObjects4.length = 0;
gdjs.GameCode.GDPauseTextObjects5.length = 0;
gdjs.GameCode.GDInspectImageObjects1.length = 0;
gdjs.GameCode.GDInspectImageObjects2.length = 0;
gdjs.GameCode.GDInspectImageObjects3.length = 0;
gdjs.GameCode.GDInspectImageObjects4.length = 0;
gdjs.GameCode.GDInspectImageObjects5.length = 0;

gdjs.GameCode.eventsList12(runtimeScene);
gdjs.GameCode.GDInspectTextObjects1.length = 0;
gdjs.GameCode.GDInspectTextObjects2.length = 0;
gdjs.GameCode.GDInspectTextObjects3.length = 0;
gdjs.GameCode.GDInspectTextObjects4.length = 0;
gdjs.GameCode.GDInspectTextObjects5.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects5.length = 0;
gdjs.GameCode.GDTransitionObjectObjects1.length = 0;
gdjs.GameCode.GDTransitionObjectObjects2.length = 0;
gdjs.GameCode.GDTransitionObjectObjects3.length = 0;
gdjs.GameCode.GDTransitionObjectObjects4.length = 0;
gdjs.GameCode.GDTransitionObjectObjects5.length = 0;
gdjs.GameCode.GDInspectObjectObjects1.length = 0;
gdjs.GameCode.GDInspectObjectObjects2.length = 0;
gdjs.GameCode.GDInspectObjectObjects3.length = 0;
gdjs.GameCode.GDInspectObjectObjects4.length = 0;
gdjs.GameCode.GDInspectObjectObjects5.length = 0;
gdjs.GameCode.GDExitInspectObjects1.length = 0;
gdjs.GameCode.GDExitInspectObjects2.length = 0;
gdjs.GameCode.GDExitInspectObjects3.length = 0;
gdjs.GameCode.GDExitInspectObjects4.length = 0;
gdjs.GameCode.GDExitInspectObjects5.length = 0;
gdjs.GameCode.GDPauseButtonObjects1.length = 0;
gdjs.GameCode.GDPauseButtonObjects2.length = 0;
gdjs.GameCode.GDPauseButtonObjects3.length = 0;
gdjs.GameCode.GDPauseButtonObjects4.length = 0;
gdjs.GameCode.GDPauseButtonObjects5.length = 0;
gdjs.GameCode.GDPauseTextObjects1.length = 0;
gdjs.GameCode.GDPauseTextObjects2.length = 0;
gdjs.GameCode.GDPauseTextObjects3.length = 0;
gdjs.GameCode.GDPauseTextObjects4.length = 0;
gdjs.GameCode.GDPauseTextObjects5.length = 0;
gdjs.GameCode.GDInspectImageObjects1.length = 0;
gdjs.GameCode.GDInspectImageObjects2.length = 0;
gdjs.GameCode.GDInspectImageObjects3.length = 0;
gdjs.GameCode.GDInspectImageObjects4.length = 0;
gdjs.GameCode.GDInspectImageObjects5.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
