gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDTitleObjects3= [];
gdjs.Main_32MenuCode.GDTitleObjects4= [];
gdjs.Main_32MenuCode.GDStartButtonObjects1= [];
gdjs.Main_32MenuCode.GDStartButtonObjects2= [];
gdjs.Main_32MenuCode.GDStartButtonObjects3= [];
gdjs.Main_32MenuCode.GDStartButtonObjects4= [];
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects1= [];
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects2= [];
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects3= [];
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects4= [];
gdjs.Main_32MenuCode.GDCreditsButtonObjects1= [];
gdjs.Main_32MenuCode.GDCreditsButtonObjects2= [];
gdjs.Main_32MenuCode.GDCreditsButtonObjects3= [];
gdjs.Main_32MenuCode.GDCreditsButtonObjects4= [];
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects1= [];
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects2= [];
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects3= [];
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects4= [];
gdjs.Main_32MenuCode.GDCreditsTextRightObjects1= [];
gdjs.Main_32MenuCode.GDCreditsTextRightObjects2= [];
gdjs.Main_32MenuCode.GDCreditsTextRightObjects3= [];
gdjs.Main_32MenuCode.GDCreditsTextRightObjects4= [];
gdjs.Main_32MenuCode.GDGameOverTitleObjects1= [];
gdjs.Main_32MenuCode.GDGameOverTitleObjects2= [];
gdjs.Main_32MenuCode.GDGameOverTitleObjects3= [];
gdjs.Main_32MenuCode.GDGameOverTitleObjects4= [];
gdjs.Main_32MenuCode.GDGameOverTextObjects1= [];
gdjs.Main_32MenuCode.GDGameOverTextObjects2= [];
gdjs.Main_32MenuCode.GDGameOverTextObjects3= [];
gdjs.Main_32MenuCode.GDGameOverTextObjects4= [];
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects1= [];
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects2= [];
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects3= [];
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects4= [];
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects1= [];
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2= [];
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects3= [];
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects4= [];
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects1= [];
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2= [];
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects3= [];
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects4= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Main Menu");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOver");
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartButtonObjects2[i].Activate(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOver");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Main Menu");
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartButtonObjects1[i].Activate(false, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\game_won.wav", false, 50, 1);
}
}

}


};gdjs.Main_32MenuCode.userFunc0xd7e7d8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// We basically just check if the player uses a touchscreen at any point in the main menu.
// This is to know whether or not the VisibilityEffect should default to Enabled on game start
window.addEventListener("pointerdown", e => { // js method for determining input type
    if (e.pointerType == "touch") {
        runtimeScene.getVariables().get("isUsingTouchscreen").setBoolean(true); // This distinguishes between touch and mouse input
    }
}, { passive: true }); // This is for performance reasons
};
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.userFunc0xd7e7d8(runtimeScene);

}


};gdjs.Main_32MenuCode.asyncCallback14939868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}
gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.idToCallbackMap.set(14939868, gdjs.Main_32MenuCode.asyncCallback14939868);
gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback14939868(runtimeScene, asyncObjectsList)), 14939868, asyncObjectsList);
}
}

}


};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOver");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Main Menu");
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartButtonObjects2[i].Activate(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOver");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Main Menu");
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartButtonObjects1[i].Activate(false, null);
}
}
}

}


};gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Credits"));
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDCreditsButtonObjects1, gdjs.Main_32MenuCode.GDCreditsButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Main Menu");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOver");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Credits");
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartButtonObjects2[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDCreditsButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCreditsButtonObjects2[i].SetLabelTextOp("Return", null);
}
}
{gdjs.Main_32MenuCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Credits");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.Main_32MenuCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDCreditsButtonObjects1 */
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Credits");
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCreditsButtonObjects1[i].SetLabelTextOp("Credits", null);
}
}

{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDFullScreenToggleMinigameObjects2Objects = Hashtable.newFrom({"FullScreenToggleMinigame": gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDFullScreenToggleMinigameObjects2Objects = Hashtable.newFrom({"FullScreenToggleMinigame": gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2});
gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2, gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects3);

{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects3[i].getBehavior("Animation").setAnimationName("fullscreen");
}
}
{gdjs.Main_32MenuCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.Main_32MenuCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2[i].getBehavior("Animation").setAnimationName("not_fullscreen");
}
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
}

}


};gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(true);
variables._declare("else", variable);
}
gdjs.Main_32MenuCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList5(runtimeScene);} //End of subevents
}
gdjs.Main_32MenuCode.localVariables.pop();

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDSoundToggleMinigameObjects2Objects = Hashtable.newFrom({"SoundToggleMinigame": gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDSoundToggleMinigameObjects2Objects = Hashtable.newFrom({"SoundToggleMinigame": gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2});
gdjs.Main_32MenuCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2, gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects3);

{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects3[i].getBehavior("Animation").setAnimationName("on");
}
}
{gdjs.Main_32MenuCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.Main_32MenuCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2[i].getBehavior("Animation").setAnimationName("off");
}
}
}

}


};gdjs.Main_32MenuCode.eventsList8 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(true);
variables._declare("else", variable);
}
gdjs.Main_32MenuCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList7(runtimeScene);} //End of subevents
}
gdjs.Main_32MenuCode.localVariables.pop();

}


};gdjs.Main_32MenuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FullScreenToggleMinigame"), gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDFullScreenToggleMinigameObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullScreenToggleMinigame"), gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDFullScreenToggleMinigameObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}

{ //Subevents
gdjs.Main_32MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundToggleMinigame"), gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDSoundToggleMinigameObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundToggleMinigame"), gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDSoundToggleMinigameObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}

{ //Subevents
gdjs.Main_32MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundToggleMinigame"), gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundToggleMinigame"), gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2[i].getBehavior("Animation").setAnimationName("off");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullScreenToggleMinigame"), gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2[i].getBehavior("Animation").setAnimationName("fullscreen");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullScreenToggleMinigame"), gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects1[i].getBehavior("Animation").setAnimationName("not_fullscreen");
}
}
}

}


};gdjs.Main_32MenuCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Main_32MenuCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTitleObjects1[i].setLineHeight((gdjs.Main_32MenuCode.GDTitleObjects1[i].getCharacterSize()) * 1.5);
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Credits");
}
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDStartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDStartButtonObjects1[k] = gdjs.Main_32MenuCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}

{ //Subevents
gdjs.Main_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.Main_32MenuCode.GDCreditsButtonObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(true);
variables._declare("else", variable);
}
gdjs.Main_32MenuCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDCreditsButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDCreditsButtonObjects1[k] = gdjs.Main_32MenuCode.GDCreditsButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}

{ //Subevents
gdjs.Main_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}
gdjs.Main_32MenuCode.localVariables.pop();

}


{



}


{



}


{


gdjs.Main_32MenuCode.eventsList9(runtimeScene);
}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects4.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects4.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects4.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects4.length = 0;
gdjs.Main_32MenuCode.GDGameOverTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDGameOverTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDGameOverTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDGameOverTitleObjects4.length = 0;
gdjs.Main_32MenuCode.GDGameOverTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDGameOverTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDGameOverTextObjects3.length = 0;
gdjs.Main_32MenuCode.GDGameOverTextObjects4.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects1.length = 0;
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2.length = 0;
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects3.length = 0;
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects4.length = 0;
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects1.length = 0;
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2.length = 0;
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects3.length = 0;
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects4.length = 0;

gdjs.Main_32MenuCode.eventsList10(runtimeScene);
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects4.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects4.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects4.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects4.length = 0;
gdjs.Main_32MenuCode.GDGameOverTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDGameOverTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDGameOverTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDGameOverTitleObjects4.length = 0;
gdjs.Main_32MenuCode.GDGameOverTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDGameOverTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDGameOverTextObjects3.length = 0;
gdjs.Main_32MenuCode.GDGameOverTextObjects4.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects1.length = 0;
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects2.length = 0;
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects3.length = 0;
gdjs.Main_32MenuCode.GDFullScreenToggleMinigameObjects4.length = 0;
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects1.length = 0;
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects2.length = 0;
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects3.length = 0;
gdjs.Main_32MenuCode.GDSoundToggleMinigameObjects4.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
