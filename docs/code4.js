gdjs.MarblesCode = {};
gdjs.MarblesCode.localVariables = [];
gdjs.MarblesCode.idToCallbackMap = new Map();
gdjs.MarblesCode.forEachIndex3 = 0;

gdjs.MarblesCode.forEachIndex4 = 0;

gdjs.MarblesCode.forEachObjects3 = [];

gdjs.MarblesCode.forEachObjects4 = [];

gdjs.MarblesCode.forEachTemporary3 = null;

gdjs.MarblesCode.forEachTemporary4 = null;

gdjs.MarblesCode.forEachTotalCount3 = 0;

gdjs.MarblesCode.forEachTotalCount4 = 0;

gdjs.MarblesCode.GDBackgroundObjects1= [];
gdjs.MarblesCode.GDBackgroundObjects2= [];
gdjs.MarblesCode.GDBackgroundObjects3= [];
gdjs.MarblesCode.GDBackgroundObjects4= [];
gdjs.MarblesCode.GDBackgroundObjects5= [];
gdjs.MarblesCode.GDBackgroundObjects6= [];
gdjs.MarblesCode.GDCircleObjects1= [];
gdjs.MarblesCode.GDCircleObjects2= [];
gdjs.MarblesCode.GDCircleObjects3= [];
gdjs.MarblesCode.GDCircleObjects4= [];
gdjs.MarblesCode.GDCircleObjects5= [];
gdjs.MarblesCode.GDCircleObjects6= [];
gdjs.MarblesCode.GDMarbleObjects1= [];
gdjs.MarblesCode.GDMarbleObjects2= [];
gdjs.MarblesCode.GDMarbleObjects3= [];
gdjs.MarblesCode.GDMarbleObjects4= [];
gdjs.MarblesCode.GDMarbleObjects5= [];
gdjs.MarblesCode.GDMarbleObjects6= [];
gdjs.MarblesCode.GDInfoTextObjects1= [];
gdjs.MarblesCode.GDInfoTextObjects2= [];
gdjs.MarblesCode.GDInfoTextObjects3= [];
gdjs.MarblesCode.GDInfoTextObjects4= [];
gdjs.MarblesCode.GDInfoTextObjects5= [];
gdjs.MarblesCode.GDInfoTextObjects6= [];
gdjs.MarblesCode.GDPlayerMarbleObjects1= [];
gdjs.MarblesCode.GDPlayerMarbleObjects2= [];
gdjs.MarblesCode.GDPlayerMarbleObjects3= [];
gdjs.MarblesCode.GDPlayerMarbleObjects4= [];
gdjs.MarblesCode.GDPlayerMarbleObjects5= [];
gdjs.MarblesCode.GDPlayerMarbleObjects6= [];
gdjs.MarblesCode.GDDirectionalArrowHeadObjects1= [];
gdjs.MarblesCode.GDDirectionalArrowHeadObjects2= [];
gdjs.MarblesCode.GDDirectionalArrowHeadObjects3= [];
gdjs.MarblesCode.GDDirectionalArrowHeadObjects4= [];
gdjs.MarblesCode.GDDirectionalArrowHeadObjects5= [];
gdjs.MarblesCode.GDDirectionalArrowHeadObjects6= [];
gdjs.MarblesCode.GDComputerMarbleObjects1= [];
gdjs.MarblesCode.GDComputerMarbleObjects2= [];
gdjs.MarblesCode.GDComputerMarbleObjects3= [];
gdjs.MarblesCode.GDComputerMarbleObjects4= [];
gdjs.MarblesCode.GDComputerMarbleObjects5= [];
gdjs.MarblesCode.GDComputerMarbleObjects6= [];
gdjs.MarblesCode.GDPlayerScoreTextObjects1= [];
gdjs.MarblesCode.GDPlayerScoreTextObjects2= [];
gdjs.MarblesCode.GDPlayerScoreTextObjects3= [];
gdjs.MarblesCode.GDPlayerScoreTextObjects4= [];
gdjs.MarblesCode.GDPlayerScoreTextObjects5= [];
gdjs.MarblesCode.GDPlayerScoreTextObjects6= [];
gdjs.MarblesCode.GDComputerScoreTextObjects1= [];
gdjs.MarblesCode.GDComputerScoreTextObjects2= [];
gdjs.MarblesCode.GDComputerScoreTextObjects3= [];
gdjs.MarblesCode.GDComputerScoreTextObjects4= [];
gdjs.MarblesCode.GDComputerScoreTextObjects5= [];
gdjs.MarblesCode.GDComputerScoreTextObjects6= [];
gdjs.MarblesCode.GDDirectionalArrowBaseObjects1= [];
gdjs.MarblesCode.GDDirectionalArrowBaseObjects2= [];
gdjs.MarblesCode.GDDirectionalArrowBaseObjects3= [];
gdjs.MarblesCode.GDDirectionalArrowBaseObjects4= [];
gdjs.MarblesCode.GDDirectionalArrowBaseObjects5= [];
gdjs.MarblesCode.GDDirectionalArrowBaseObjects6= [];
gdjs.MarblesCode.GDTextBackgroundObjects1= [];
gdjs.MarblesCode.GDTextBackgroundObjects2= [];
gdjs.MarblesCode.GDTextBackgroundObjects3= [];
gdjs.MarblesCode.GDTextBackgroundObjects4= [];
gdjs.MarblesCode.GDTextBackgroundObjects5= [];
gdjs.MarblesCode.GDTextBackgroundObjects6= [];
gdjs.MarblesCode.GDPointAnimObjects1= [];
gdjs.MarblesCode.GDPointAnimObjects2= [];
gdjs.MarblesCode.GDPointAnimObjects3= [];
gdjs.MarblesCode.GDPointAnimObjects4= [];
gdjs.MarblesCode.GDPointAnimObjects5= [];
gdjs.MarblesCode.GDPointAnimObjects6= [];
gdjs.MarblesCode.GDPopupBackgroundObjects1= [];
gdjs.MarblesCode.GDPopupBackgroundObjects2= [];
gdjs.MarblesCode.GDPopupBackgroundObjects3= [];
gdjs.MarblesCode.GDPopupBackgroundObjects4= [];
gdjs.MarblesCode.GDPopupBackgroundObjects5= [];
gdjs.MarblesCode.GDPopupBackgroundObjects6= [];
gdjs.MarblesCode.GDTutorialTextObjects1= [];
gdjs.MarblesCode.GDTutorialTextObjects2= [];
gdjs.MarblesCode.GDTutorialTextObjects3= [];
gdjs.MarblesCode.GDTutorialTextObjects4= [];
gdjs.MarblesCode.GDTutorialTextObjects5= [];
gdjs.MarblesCode.GDTutorialTextObjects6= [];
gdjs.MarblesCode.GDStartButtonObjects1= [];
gdjs.MarblesCode.GDStartButtonObjects2= [];
gdjs.MarblesCode.GDStartButtonObjects3= [];
gdjs.MarblesCode.GDStartButtonObjects4= [];
gdjs.MarblesCode.GDStartButtonObjects5= [];
gdjs.MarblesCode.GDStartButtonObjects6= [];
gdjs.MarblesCode.GDTutorialHeaderTextObjects1= [];
gdjs.MarblesCode.GDTutorialHeaderTextObjects2= [];
gdjs.MarblesCode.GDTutorialHeaderTextObjects3= [];
gdjs.MarblesCode.GDTutorialHeaderTextObjects4= [];
gdjs.MarblesCode.GDTutorialHeaderTextObjects5= [];
gdjs.MarblesCode.GDTutorialHeaderTextObjects6= [];
gdjs.MarblesCode.GDExitPromptTextObjects1= [];
gdjs.MarblesCode.GDExitPromptTextObjects2= [];
gdjs.MarblesCode.GDExitPromptTextObjects3= [];
gdjs.MarblesCode.GDExitPromptTextObjects4= [];
gdjs.MarblesCode.GDExitPromptTextObjects5= [];
gdjs.MarblesCode.GDExitPromptTextObjects6= [];
gdjs.MarblesCode.GDStayButtonObjects1= [];
gdjs.MarblesCode.GDStayButtonObjects2= [];
gdjs.MarblesCode.GDStayButtonObjects3= [];
gdjs.MarblesCode.GDStayButtonObjects4= [];
gdjs.MarblesCode.GDStayButtonObjects5= [];
gdjs.MarblesCode.GDStayButtonObjects6= [];
gdjs.MarblesCode.GDExitButtonObjects1= [];
gdjs.MarblesCode.GDExitButtonObjects2= [];
gdjs.MarblesCode.GDExitButtonObjects3= [];
gdjs.MarblesCode.GDExitButtonObjects4= [];
gdjs.MarblesCode.GDExitButtonObjects5= [];
gdjs.MarblesCode.GDExitButtonObjects6= [];
gdjs.MarblesCode.GDWinTextObjects1= [];
gdjs.MarblesCode.GDWinTextObjects2= [];
gdjs.MarblesCode.GDWinTextObjects3= [];
gdjs.MarblesCode.GDWinTextObjects4= [];
gdjs.MarblesCode.GDWinTextObjects5= [];
gdjs.MarblesCode.GDWinTextObjects6= [];
gdjs.MarblesCode.GDLoseTextObjects1= [];
gdjs.MarblesCode.GDLoseTextObjects2= [];
gdjs.MarblesCode.GDLoseTextObjects3= [];
gdjs.MarblesCode.GDLoseTextObjects4= [];
gdjs.MarblesCode.GDLoseTextObjects5= [];
gdjs.MarblesCode.GDLoseTextObjects6= [];
gdjs.MarblesCode.GDExitMinigameButtonObjects1= [];
gdjs.MarblesCode.GDExitMinigameButtonObjects2= [];
gdjs.MarblesCode.GDExitMinigameButtonObjects3= [];
gdjs.MarblesCode.GDExitMinigameButtonObjects4= [];
gdjs.MarblesCode.GDExitMinigameButtonObjects5= [];
gdjs.MarblesCode.GDExitMinigameButtonObjects6= [];
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects1= [];
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2= [];
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects3= [];
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects4= [];
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects5= [];
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects6= [];
gdjs.MarblesCode.GDSoundToggleMinigameObjects1= [];
gdjs.MarblesCode.GDSoundToggleMinigameObjects2= [];
gdjs.MarblesCode.GDSoundToggleMinigameObjects3= [];
gdjs.MarblesCode.GDSoundToggleMinigameObjects4= [];
gdjs.MarblesCode.GDSoundToggleMinigameObjects5= [];
gdjs.MarblesCode.GDSoundToggleMinigameObjects6= [];


gdjs.MarblesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MarblesCode.GDExitButtonObjects3, gdjs.MarblesCode.GDExitButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MarblesCode.GDExitButtonObjects4.length;i<l;++i) {
    if ( gdjs.MarblesCode.GDExitButtonObjects4[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MarblesCode.GDExitButtonObjects4[k] = gdjs.MarblesCode.GDExitButtonObjects4[i];
        ++k;
    }
}
gdjs.MarblesCode.GDExitButtonObjects4.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{

/* Reuse gdjs.MarblesCode.GDStayButtonObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MarblesCode.GDStayButtonObjects3.length;i<l;++i) {
    if ( gdjs.MarblesCode.GDStayButtonObjects3[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MarblesCode.GDStayButtonObjects3[k] = gdjs.MarblesCode.GDStayButtonObjects3[i];
        ++k;
    }
}
gdjs.MarblesCode.GDStayButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDExitButtonObjects3 */
/* Reuse gdjs.MarblesCode.GDStayButtonObjects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}
{for(var i = 0, len = gdjs.MarblesCode.GDStayButtonObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDStayButtonObjects3[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDExitButtonObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDExitButtonObjects3[i].Activate(false, null);
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ExitPrompt");
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setBoolean(true);
}
}

}


};gdjs.MarblesCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "ExitPrompt");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.MarblesCode.GDExitButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("StayButton"), gdjs.MarblesCode.GDStayButtonObjects3);
{for(var i = 0, len = gdjs.MarblesCode.GDStayButtonObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDStayButtonObjects3[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDExitButtonObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDExitButtonObjects3[i].Activate(true, null);
}
}

{ //Subevents
gdjs.MarblesCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.MarblesCode.GDExitButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MarblesCode.GDExitButtonObjects3.length;i<l;++i) {
    if ( gdjs.MarblesCode.GDExitButtonObjects3[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MarblesCode.GDExitButtonObjects3[k] = gdjs.MarblesCode.GDExitButtonObjects3[i];
        ++k;
    }
}
gdjs.MarblesCode.GDExitButtonObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Marbles").setBoolean(true);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};gdjs.MarblesCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Win");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.MarblesCode.GDExitButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MarblesCode.GDExitButtonObjects2.length;i<l;++i) {
    if ( gdjs.MarblesCode.GDExitButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MarblesCode.GDExitButtonObjects2[k] = gdjs.MarblesCode.GDExitButtonObjects2[i];
        ++k;
    }
}
gdjs.MarblesCode.GDExitButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};gdjs.MarblesCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Lose");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList6 = function(runtimeScene) {

{


gdjs.MarblesCode.eventsList1(runtimeScene);
}


{


gdjs.MarblesCode.eventsList3(runtimeScene);
}


{


gdjs.MarblesCode.eventsList5(runtimeScene);
}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDExitMinigameButtonObjects2Objects = Hashtable.newFrom({"ExitMinigameButton": gdjs.MarblesCode.GDExitMinigameButtonObjects2});
gdjs.MarblesCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(15).setBoolean(false);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "ExitPrompt");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}
}

}


};gdjs.MarblesCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExitMinigameButton"), gdjs.MarblesCode.GDExitMinigameButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDExitMinigameButtonObjects2Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDExitMinigameButtonObjects2 */
{for(var i = 0, len = gdjs.MarblesCode.GDExitMinigameButtonObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDExitMinigameButtonObjects2[i].getBehavior("Effect").enableEffect("Highlight", true);
}
}

{ //Subevents
gdjs.MarblesCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDExitMinigameButtonObjects1Objects = Hashtable.newFrom({"ExitMinigameButton": gdjs.MarblesCode.GDExitMinigameButtonObjects1});
gdjs.MarblesCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(15).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(15).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.MarblesCode.GDExitButtonObjects2);
{for(var i = 0, len = gdjs.MarblesCode.GDExitButtonObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDExitButtonObjects2[i].Activate(true, null);
}
}

{ //Subevents
gdjs.MarblesCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitMinigameButton"), gdjs.MarblesCode.GDExitMinigameButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDExitMinigameButtonObjects1Objects, runtimeScene, false, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDExitMinigameButtonObjects1 */
{for(var i = 0, len = gdjs.MarblesCode.GDExitMinigameButtonObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDExitMinigameButtonObjects1[i].getBehavior("Effect").enableEffect("Highlight", false);
}
}
}

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects1Objects = Hashtable.newFrom({"Marble": gdjs.MarblesCode.GDMarbleObjects1});
gdjs.MarblesCode.eventsList10 = function(runtimeScene) {

};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects2ObjectsGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects2ObjectsGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects2Objects = Hashtable.newFrom({"Marble": gdjs.MarblesCode.GDMarbleObjects2, "PlayerMarble": gdjs.MarblesCode.GDPlayerMarbleObjects2, "ComputerMarble": gdjs.MarblesCode.GDComputerMarbleObjects2});
gdjs.MarblesCode.userFunc0xd34488 = function GDJSInlineCode(runtimeScene) {
"use strict";
window.addEventListener("pointerdown", e => { // js method for determining input type
    runtimeScene.getVariables().get("isUsingTouchscreen").setBoolean(e.pointerType == "touch"); // This distinguishes between touch and mouse input
}, { passive: true }); // This is for performance reasons
};
gdjs.MarblesCode.eventsList11 = function(runtimeScene) {

{


gdjs.MarblesCode.userFunc0xd34488(runtimeScene);

}


};gdjs.MarblesCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MarblesCode.GDMarbleObjects1, gdjs.MarblesCode.GDMarbleObjects2);


for (gdjs.MarblesCode.forEachIndex3 = 0;gdjs.MarblesCode.forEachIndex3 < gdjs.MarblesCode.GDMarbleObjects2.length;++gdjs.MarblesCode.forEachIndex3) {
gdjs.MarblesCode.GDMarbleObjects3.length = 0;


gdjs.MarblesCode.forEachTemporary3 = gdjs.MarblesCode.GDMarbleObjects2[gdjs.MarblesCode.forEachIndex3];
gdjs.MarblesCode.GDMarbleObjects3.push(gdjs.MarblesCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.MarblesCode.GDMarbleObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDMarbleObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(0, 3));
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDMarbleObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDMarbleObjects3[i].setX((gdjs.MarblesCode.GDMarbleObjects3[i].getPointX("")) + gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() * gdjs.randomInRange(-(1), 1));
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDMarbleObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDMarbleObjects3[i].setY((gdjs.MarblesCode.GDMarbleObjects3[i].getPointY("")) + gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() * gdjs.randomInRange(-(1), 1));
}
}
}
}

}


{

gdjs.copyArray(gdjs.MarblesCode.GDComputerMarbleObjects1, gdjs.MarblesCode.GDComputerMarbleObjects2);

gdjs.copyArray(gdjs.MarblesCode.GDMarbleObjects1, gdjs.MarblesCode.GDMarbleObjects2);

gdjs.copyArray(gdjs.MarblesCode.GDPlayerMarbleObjects1, gdjs.MarblesCode.GDPlayerMarbleObjects2);


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(6);
variables._declare("marbleLinearDamp", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0.6);
variables._declare("marbleRestitution", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects2ObjectsGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects2ObjectsGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects2Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDComputerMarbleObjects2 */
/* Reuse gdjs.MarblesCode.GDMarbleObjects2 */
/* Reuse gdjs.MarblesCode.GDPlayerMarbleObjects2 */
{for(var i = 0, len = gdjs.MarblesCode.GDMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDMarbleObjects2[i].getBehavior("Physics2").setRestitution(gdjs.MarblesCode.localVariables[1].getFromIndex(1).getAsNumber());
}
for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects2[i].getBehavior("Physics2").setRestitution(gdjs.MarblesCode.localVariables[1].getFromIndex(1).getAsNumber());
}
for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects2[i].getBehavior("Physics2").setRestitution(gdjs.MarblesCode.localVariables[1].getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDMarbleObjects2[i].getBehavior("Physics2").setLinearDamping(gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects2[i].getBehavior("Physics2").setLinearDamping(gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects2[i].getBehavior("Physics2").setLinearDamping(gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber());
}
}
}
gdjs.MarblesCode.localVariables.pop();

}


{


gdjs.MarblesCode.eventsList11(runtimeScene);
}


};gdjs.MarblesCode.eventsList13 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(10);
variables._declare("randomPositionModifier", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ComputerMarble"), gdjs.MarblesCode.GDComputerMarbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("ComputerScoreText"), gdjs.MarblesCode.GDComputerScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowBase"), gdjs.MarblesCode.GDDirectionalArrowBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowHead"), gdjs.MarblesCode.GDDirectionalArrowHeadObjects1);
gdjs.copyArray(runtimeScene.getObjects("InfoText"), gdjs.MarblesCode.GDInfoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marble"), gdjs.MarblesCode.GDMarbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerMarble"), gdjs.MarblesCode.GDPlayerMarbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerScoreText"), gdjs.MarblesCode.GDPlayerScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialHeaderText"), gdjs.MarblesCode.GDTutorialHeaderTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.MarblesCode.GDTutorialTextObjects1);
{gdjs.physics2.setTimeScale(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects1Objects, "Physics2", 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "marbleTimer");
}
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects1[i].getBehavior("Effect").enableEffect("selected", false);
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects1[i].getBehavior("Effect").enableEffect("selected", false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).mul(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 100);
}
{for(var i = 0, len = gdjs.MarblesCode.GDInfoTextObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDInfoTextObjects1[i].setLineHeight((gdjs.MarblesCode.GDInfoTextObjects1[i].getCharacterSize()) * 1.2);
}
for(var i = 0, len = gdjs.MarblesCode.GDPlayerScoreTextObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerScoreTextObjects1[i].setLineHeight((gdjs.MarblesCode.GDPlayerScoreTextObjects1[i].getCharacterSize()) * 1.2);
}
for(var i = 0, len = gdjs.MarblesCode.GDComputerScoreTextObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerScoreTextObjects1[i].setLineHeight((gdjs.MarblesCode.GDComputerScoreTextObjects1[i].getCharacterSize()) * 1.2);
}
for(var i = 0, len = gdjs.MarblesCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDTutorialTextObjects1[i].setLineHeight((gdjs.MarblesCode.GDTutorialTextObjects1[i].getCharacterSize()) * 1.2);
}
for(var i = 0, len = gdjs.MarblesCode.GDTutorialHeaderTextObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDTutorialHeaderTextObjects1[i].setLineHeight((gdjs.MarblesCode.GDTutorialHeaderTextObjects1[i].getCharacterSize()) * 1.2);
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects1[i].hide();
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects1[i].hide();
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Win");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Lose");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ExitPrompt");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Tutorial");
}

{ //Subevents
gdjs.MarblesCode.eventsList12(runtimeScene);} //End of subevents
}
gdjs.MarblesCode.localVariables.pop();

}


};gdjs.MarblesCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(15).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "compAimTimer");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "compPlaceTimer");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "compShootTimer");
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "marbleTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(15).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "compAimTimer");
}
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "compPlaceTimer");
}
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "compShootTimer");
}
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "marbleTimer");
}
}

}


};gdjs.MarblesCode.mapOfEmptyGDMarbleObjects = Hashtable.newFrom({"Marble": []});
gdjs.MarblesCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Marbles").setBoolean(true);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Win");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\win.wav", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Lose");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\lose.wav", false, 100, 1);
}
}

}


};gdjs.MarblesCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MarblesCode.mapOfEmptyGDMarbleObjects) == 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(17).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setBoolean(false);
}

{ //Subevents
gdjs.MarblesCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects5Objects = Hashtable.newFrom({"Marble": gdjs.MarblesCode.GDMarbleObjects5});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects5Objects = Hashtable.newFrom({"Circle": gdjs.MarblesCode.GDCircleObjects5});
gdjs.MarblesCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.MarblesCode.GDCircleObjects5);
gdjs.copyArray(gdjs.MarblesCode.GDMarbleObjects4, gdjs.MarblesCode.GDMarbleObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects5Objects, gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects5Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDMarbleObjects5 */
{for(var i = 0, len = gdjs.MarblesCode.GDMarbleObjects5.length ;i < len;++i) {
    gdjs.MarblesCode.GDMarbleObjects5[i].getBehavior("Physics2").setLinearDamping(8);
}
}
{gdjs.MarblesCode.localVariables[0].getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(gdjs.MarblesCode.GDMarbleObjects4, gdjs.MarblesCode.GDMarbleObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MarblesCode.GDMarbleObjects5.length;i<l;++i) {
    if ( !(gdjs.MarblesCode.GDMarbleObjects5[i].getBehavior("Physics2").getLinearVelocityLength() == 0) ) {
        isConditionTrue_0 = true;
        gdjs.MarblesCode.GDMarbleObjects5[k] = gdjs.MarblesCode.GDMarbleObjects5[i];
        ++k;
    }
}
gdjs.MarblesCode.GDMarbleObjects5.length = k;
if (isConditionTrue_0) {
{gdjs.MarblesCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
}

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects3Objects = Hashtable.newFrom({"PlayerMarble": gdjs.MarblesCode.GDPlayerMarbleObjects3});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects3Objects = Hashtable.newFrom({"Circle": gdjs.MarblesCode.GDCircleObjects3});
gdjs.MarblesCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerMarble"), gdjs.MarblesCode.GDPlayerMarbleObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MarblesCode.GDPlayerMarbleObjects4.length;i<l;++i) {
    if ( !(gdjs.MarblesCode.GDPlayerMarbleObjects4[i].getBehavior("Physics2").getLinearVelocityLength() == 0) ) {
        isConditionTrue_0 = true;
        gdjs.MarblesCode.GDPlayerMarbleObjects4[k] = gdjs.MarblesCode.GDPlayerMarbleObjects4[i];
        ++k;
    }
}
gdjs.MarblesCode.GDPlayerMarbleObjects4.length = k;
if (isConditionTrue_0) {
{gdjs.MarblesCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.MarblesCode.GDCircleObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayerMarble"), gdjs.MarblesCode.GDPlayerMarbleObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects3Objects, gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(16).setBoolean(true);
}
}

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects3Objects = Hashtable.newFrom({"ComputerMarble": gdjs.MarblesCode.GDComputerMarbleObjects3});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects3Objects = Hashtable.newFrom({"Circle": gdjs.MarblesCode.GDCircleObjects3});
gdjs.MarblesCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ComputerMarble"), gdjs.MarblesCode.GDComputerMarbleObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MarblesCode.GDComputerMarbleObjects4.length;i<l;++i) {
    if ( !(gdjs.MarblesCode.GDComputerMarbleObjects4[i].getBehavior("Physics2").getLinearVelocityLength() == 0) ) {
        isConditionTrue_0 = true;
        gdjs.MarblesCode.GDComputerMarbleObjects4[k] = gdjs.MarblesCode.GDComputerMarbleObjects4[i];
        ++k;
    }
}
gdjs.MarblesCode.GDComputerMarbleObjects4.length = k;
if (isConditionTrue_0) {
{gdjs.MarblesCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.MarblesCode.GDCircleObjects3);
gdjs.copyArray(runtimeScene.getObjects("ComputerMarble"), gdjs.MarblesCode.GDComputerMarbleObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects3Objects, gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(16).setBoolean(true);
}
}

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects4Objects = Hashtable.newFrom({"Marble": gdjs.MarblesCode.GDMarbleObjects4});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects4Objects = Hashtable.newFrom({"Circle": gdjs.MarblesCode.GDCircleObjects4});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDPointAnimObjects5Objects = Hashtable.newFrom({"PointAnim": gdjs.MarblesCode.GDPointAnimObjects5});
gdjs.MarblesCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.MarblesCode.GDPointAnimObjects5 */
{for(var i = 0, len = gdjs.MarblesCode.GDPointAnimObjects5.length ;i < len;++i) {
    gdjs.MarblesCode.GDPointAnimObjects5[i].returnVariable(gdjs.MarblesCode.GDPointAnimObjects5[i].getVariables().getFromIndex(0)).setNumber((gdjs.MarblesCode.GDPointAnimObjects5[i].getPointY("")));
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDPointAnimObjects5.length ;i < len;++i) {
    gdjs.MarblesCode.GDPointAnimObjects5[i].getBehavior("Tween").addObjectPositionYTween2("floatUp", gdjs.MarblesCode.GDPointAnimObjects5[i].getVariables().getFromIndex(0).getAsNumber() - 16, "linear", 2, true);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\point_earned.wav", false, 100, 1);
}
}

}


};gdjs.MarblesCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerScoreText"), gdjs.MarblesCode.GDPlayerScoreTextObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerScoreTextObjects5.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerScoreTextObjects5[i].getBehavior("Text").setText("Player Score: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ComputerScoreText"), gdjs.MarblesCode.GDComputerScoreTextObjects5);
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{for(var i = 0, len = gdjs.MarblesCode.GDComputerScoreTextObjects5.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerScoreTextObjects5[i].getBehavior("Text").setText("Computer Score: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.MarblesCode.GDMarbleObjects4, gdjs.MarblesCode.GDMarbleObjects5);

gdjs.MarblesCode.GDPointAnimObjects5.length = 0;

{for(var i = 0, len = gdjs.MarblesCode.GDMarbleObjects5.length ;i < len;++i) {
    gdjs.MarblesCode.GDMarbleObjects5[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(19).add(1);
}
{gdjs.MarblesCode.localVariables[2].getFromIndex(0).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "marbleTimer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDPointAnimObjects5Objects, (( gdjs.MarblesCode.GDMarbleObjects5.length === 0 ) ? 0 :gdjs.MarblesCode.GDMarbleObjects5[0].getPointX("")) - 32, (( gdjs.MarblesCode.GDMarbleObjects5.length === 0 ) ? 0 :gdjs.MarblesCode.GDMarbleObjects5[0].getPointY("")) - 32, "UI");
}

{ //Subevents
gdjs.MarblesCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Marble"), gdjs.MarblesCode.GDMarbleObjects3);

for (gdjs.MarblesCode.forEachIndex4 = 0;gdjs.MarblesCode.forEachIndex4 < gdjs.MarblesCode.GDMarbleObjects3.length;++gdjs.MarblesCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.MarblesCode.GDCircleObjects4);
gdjs.MarblesCode.GDMarbleObjects4.length = 0;


gdjs.MarblesCode.forEachTemporary4 = gdjs.MarblesCode.GDMarbleObjects3[gdjs.MarblesCode.forEachIndex4];
gdjs.MarblesCode.GDMarbleObjects4.push(gdjs.MarblesCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects4Objects, gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects4Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MarblesCode.GDMarbleObjects4.length;i<l;++i) {
    if ( gdjs.MarblesCode.GDMarbleObjects4[i].getVariableBoolean(gdjs.MarblesCode.GDMarbleObjects4[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.MarblesCode.GDMarbleObjects4[k] = gdjs.MarblesCode.GDMarbleObjects4[i];
        ++k;
    }
}
gdjs.MarblesCode.GDMarbleObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !gdjs.MarblesCode.localVariables[2].getFromIndex(0).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MarblesCode.GDMarbleObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDMarbleObjects4[i].returnVariable(gdjs.MarblesCode.GDMarbleObjects4[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}

{ //Subevents: 
gdjs.MarblesCode.eventsList21(runtimeScene);} //Subevents end.
}
}

}


};gdjs.MarblesCode.eventsList23 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(false);
variables._declare("breakLoop", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber() > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList22(runtimeScene);} //End of subevents
}
gdjs.MarblesCode.localVariables.pop();

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects4Objects = Hashtable.newFrom({"Marble": gdjs.MarblesCode.GDMarbleObjects4});
gdjs.MarblesCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerMarble"), gdjs.MarblesCode.GDPlayerMarbleObjects4);
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects4[i].getBehavior("Effect").enableEffect("selected", true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDComputerMarbleObjects3 */
{for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects3[i].getBehavior("Effect").enableEffect("selected", true);
}
}
}

}


};gdjs.MarblesCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MarblesCode.GDComputerMarbleObjects3, gdjs.MarblesCode.GDComputerMarbleObjects4);

gdjs.copyArray(gdjs.MarblesCode.GDMarbleObjects3, gdjs.MarblesCode.GDMarbleObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects4Objects, (( gdjs.MarblesCode.GDComputerMarbleObjects4.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects4[0].getPointX("")), (( gdjs.MarblesCode.GDComputerMarbleObjects4.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects4[0].getPointY("")), false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(gdjs.randomInRange(0, 360));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(0);
}

{ //Subevents
gdjs.MarblesCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects3Objects = Hashtable.newFrom({"PlayerMarble": gdjs.MarblesCode.GDPlayerMarbleObjects3});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects3Objects = Hashtable.newFrom({"Circle": gdjs.MarblesCode.GDCircleObjects3});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects3Objects = Hashtable.newFrom({"PlayerMarble": gdjs.MarblesCode.GDPlayerMarbleObjects3});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects3Objects = Hashtable.newFrom({"Circle": gdjs.MarblesCode.GDCircleObjects3});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects3Objects = Hashtable.newFrom({"ComputerMarble": gdjs.MarblesCode.GDComputerMarbleObjects3});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects3Objects = Hashtable.newFrom({"Circle": gdjs.MarblesCode.GDCircleObjects3});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects2Objects = Hashtable.newFrom({"ComputerMarble": gdjs.MarblesCode.GDComputerMarbleObjects2});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects2Objects = Hashtable.newFrom({"Circle": gdjs.MarblesCode.GDCircleObjects2});
gdjs.MarblesCode.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.MarblesCode.GDCircleObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayerMarble"), gdjs.MarblesCode.GDPlayerMarbleObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects3Objects, gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.MarblesCode.GDCircleObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayerMarble"), gdjs.MarblesCode.GDPlayerMarbleObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects3Objects, gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects3Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.MarblesCode.GDCircleObjects3);
gdjs.copyArray(runtimeScene.getObjects("ComputerMarble"), gdjs.MarblesCode.GDComputerMarbleObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects3Objects, gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects3Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.MarblesCode.GDCircleObjects2);
gdjs.copyArray(runtimeScene.getObjects("ComputerMarble"), gdjs.MarblesCode.GDComputerMarbleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects2Objects, gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDCircleObjects2Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setBoolean(true);
}
}

}


};gdjs.MarblesCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ComputerMarble"), gdjs.MarblesCode.GDComputerMarbleObjects3);
gdjs.copyArray(runtimeScene.getObjects("Marble"), gdjs.MarblesCode.GDMarbleObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(18).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "compPlaceTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "compAimTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "compShootTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(gdjs.toDegrees(Math.atan2((( gdjs.MarblesCode.GDMarbleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDMarbleObjects3[0].getPointY("")) - (( gdjs.MarblesCode.GDComputerMarbleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects3[0].getPointY("")), (( gdjs.MarblesCode.GDMarbleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDMarbleObjects3[0].getPointX("")) - (( gdjs.MarblesCode.GDComputerMarbleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects3[0].getPointX("")))));
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(false);
}

{ //Subevents
gdjs.MarblesCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList26(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList29 = function(runtimeScene) {

{


gdjs.MarblesCode.eventsList23(runtimeScene);
}


{


gdjs.MarblesCode.eventsList28(runtimeScene);
}


};gdjs.MarblesCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Marble"), gdjs.MarblesCode.GDMarbleObjects3);

for (gdjs.MarblesCode.forEachIndex4 = 0;gdjs.MarblesCode.forEachIndex4 < gdjs.MarblesCode.GDMarbleObjects3.length;++gdjs.MarblesCode.forEachIndex4) {
gdjs.MarblesCode.GDMarbleObjects4.length = 0;


gdjs.MarblesCode.forEachTemporary4 = gdjs.MarblesCode.GDMarbleObjects3[gdjs.MarblesCode.forEachIndex4];
gdjs.MarblesCode.GDMarbleObjects4.push(gdjs.MarblesCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.MarblesCode.GDMarbleObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDMarbleObjects4[i].getBehavior("Effect").enableEffect("Effect", false);
}
}

{ //Subevents: 
gdjs.MarblesCode.eventsList17(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0.5);
variables._declare("marbleDeleteDelay", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(16).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "marbleTimer") >= gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber();
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList29(runtimeScene);} //End of subevents
}
gdjs.MarblesCode.localVariables.pop();

}


};gdjs.MarblesCode.eventsList31 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowBase"), gdjs.MarblesCode.GDDirectionalArrowBaseObjects3);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowHead"), gdjs.MarblesCode.GDDirectionalArrowHeadObjects3);
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects3[i].hide();
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects3[i].hide();
}
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(true);
variables._declare("allMarblesStopped", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("marblesOutOfCircle", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(17).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList30(runtimeScene);} //End of subevents
}
gdjs.MarblesCode.localVariables.pop();

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDFullScreenToggleMinigameObjects2Objects = Hashtable.newFrom({"FullScreenToggleMinigame": gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDSoundToggleMinigameObjects2Objects = Hashtable.newFrom({"SoundToggleMinigame": gdjs.MarblesCode.GDSoundToggleMinigameObjects2});
gdjs.MarblesCode.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowBase"), gdjs.MarblesCode.GDDirectionalArrowBaseObjects5);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowHead"), gdjs.MarblesCode.GDDirectionalArrowHeadObjects5);
gdjs.copyArray(gdjs.MarblesCode.GDPlayerMarbleObjects2, gdjs.MarblesCode.GDPlayerMarbleObjects5);

{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects5.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects5[i].hide(false);
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects5.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects5[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects5.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects5[i].getBehavior("Effect").enableEffect("selected", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowBase"), gdjs.MarblesCode.GDDirectionalArrowBaseObjects4);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowHead"), gdjs.MarblesCode.GDDirectionalArrowHeadObjects4);
gdjs.copyArray(gdjs.MarblesCode.GDPlayerMarbleObjects2, gdjs.MarblesCode.GDPlayerMarbleObjects4);

{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects4[i].hide();
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects4[i].hide();
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects4[i].getBehavior("Effect").enableEffect("selected", true);
}
}
}

}


};gdjs.MarblesCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.50);
}
if (isConditionTrue_0) {
{gdjs.MarblesCode.localVariables[1].getFromIndex(0).setNumber((2 * gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()) * 255);
}
{gdjs.MarblesCode.localVariables[1].getFromIndex(1).setNumber(255);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.50);
}
if (isConditionTrue_0) {
{gdjs.MarblesCode.localVariables[1].getFromIndex(0).setNumber(255);
}
{gdjs.MarblesCode.localVariables[1].getFromIndex(1).setNumber(255 * (2 - 2 * gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowBase"), gdjs.MarblesCode.GDDirectionalArrowBaseObjects4);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowHead"), gdjs.MarblesCode.GDDirectionalArrowHeadObjects4);
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects4[i].getBehavior("Effect").setEffectStringParameter("chargeColor", "newColor", gdjs.evtTools.common.toString(gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber()) + ";" + gdjs.evtTools.common.toString(gdjs.MarblesCode.localVariables[1].getFromIndex(1).getAsNumber()) + ";0");
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects4[i].getBehavior("Effect").setEffectStringParameter("chargeColor", "newColor", gdjs.evtTools.common.toString(gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber()) + ";" + gdjs.evtTools.common.toString(gdjs.MarblesCode.localVariables[1].getFromIndex(1).getAsNumber()) + ";0");
}
}
}

}


};gdjs.MarblesCode.eventsList34 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList32(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowBase"), gdjs.MarblesCode.GDDirectionalArrowBaseObjects4);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowHead"), gdjs.MarblesCode.GDDirectionalArrowHeadObjects4);
gdjs.copyArray(gdjs.MarblesCode.GDPlayerMarbleObjects2, gdjs.MarblesCode.GDPlayerMarbleObjects4);

{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects4[i].hide(false);
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects4[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects4[i].getBehavior("Effect").enableEffect("selected", true);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowBase"), gdjs.MarblesCode.GDDirectionalArrowBaseObjects4);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowHead"), gdjs.MarblesCode.GDDirectionalArrowHeadObjects4);
gdjs.copyArray(gdjs.MarblesCode.GDPlayerMarbleObjects2, gdjs.MarblesCode.GDPlayerMarbleObjects4);

{gdjs.MarblesCode.localVariables[0].getFromIndex(1).setNumber(gdjs.toDegrees(Math.atan2((( gdjs.MarblesCode.GDPlayerMarbleObjects4.length === 0 ) ? 0 :gdjs.MarblesCode.GDPlayerMarbleObjects4[0].getPointY("")) - runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber(), (( gdjs.MarblesCode.GDPlayerMarbleObjects4.length === 0 ) ? 0 :gdjs.MarblesCode.GDPlayerMarbleObjects4[0].getPointX("")) - runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber())));
}
{gdjs.MarblesCode.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.common.clamp(0, (gdjs.evtTools.common.distanceBetweenPositions(runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber(), (( gdjs.MarblesCode.GDPlayerMarbleObjects4.length === 0 ) ? 0 :gdjs.MarblesCode.GDPlayerMarbleObjects4[0].getPointX("")), (( gdjs.MarblesCode.GDPlayerMarbleObjects4.length === 0 ) ? 0 :gdjs.MarblesCode.GDPlayerMarbleObjects4[0].getPointY(""))) - gdjs.MarblesCode.localVariables[0].getFromIndex(3).getAsNumber()) * gdjs.MarblesCode.localVariables[0].getFromIndex(4).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects4[i].setAngle(gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber());
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects4[i].setAngle(gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects4[i].getBehavior("Resizable").setWidth(gdjs.evtTools.common.clamp(0, gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / (2 * gdjs.MarblesCode.localVariables[0].getFromIndex(4).getAsNumber()), 24));
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects4[i].getBehavior("Resizable").setWidth(Math.max(0, gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() - (( gdjs.MarblesCode.GDDirectionalArrowHeadObjects4.length === 0 ) ? 0 :gdjs.MarblesCode.GDDirectionalArrowHeadObjects4[0].getWidth())) / gdjs.MarblesCode.localVariables[0].getFromIndex(4).getAsNumber());
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects4[i].putAroundObject((gdjs.MarblesCode.GDPlayerMarbleObjects4.length !== 0 ? gdjs.MarblesCode.GDPlayerMarbleObjects4[0] : null), -((gdjs.MarblesCode.localVariables[0].getFromIndex(3).getAsNumber() + (gdjs.MarblesCode.GDDirectionalArrowHeadObjects4[i].getWidth()) / 2)), gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects4.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects4[i].putAroundObject((gdjs.MarblesCode.GDPlayerMarbleObjects4.length !== 0 ? gdjs.MarblesCode.GDPlayerMarbleObjects4[0] : null), Math.min(0, -((gdjs.MarblesCode.localVariables[0].getFromIndex(3).getAsNumber() + (( gdjs.MarblesCode.GDDirectionalArrowHeadObjects4.length === 0 ) ? 0 :gdjs.MarblesCode.GDDirectionalArrowHeadObjects4[0].getWidth()) + (gdjs.MarblesCode.GDDirectionalArrowBaseObjects4[i].getWidth()) / 2)) + 1), gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("redColorShift", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("greenColorShift", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.MarblesCode.eventsList33(runtimeScene);} //End of subevents
}
gdjs.MarblesCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MarblesCode.GDPlayerMarbleObjects2, gdjs.MarblesCode.GDPlayerMarbleObjects3);

{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects3[i].getBehavior("Physics2").applyPolarImpulse(gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber(), gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / 100, (gdjs.MarblesCode.GDPlayerMarbleObjects3[i].getBehavior("Physics2").getMassCenterX()), (gdjs.MarblesCode.GDPlayerMarbleObjects3[i].getBehavior("Physics2").getMassCenterY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setBoolean(true);
}
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects3[i].getBehavior("Effect").enableEffect("selected", false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\shoot_marble.wav", false, 75 * (gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()) / 4, 3 - 3 * (gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}

}


};gdjs.MarblesCode.eventsList35 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList34(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList36 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = !runtimeScene.getScene().getVariables().getFromIndex(12).getAsBoolean();
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = runtimeScene.getScene().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.MarblesCode.GDCircleObjects3);
gdjs.copyArray(gdjs.MarblesCode.GDPlayerMarbleObjects2, gdjs.MarblesCode.GDPlayerMarbleObjects3);

{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects3[i].putAroundObject((gdjs.MarblesCode.GDCircleObjects3.length !== 0 ? gdjs.MarblesCode.GDCircleObjects3[0] : null), ((( gdjs.MarblesCode.GDCircleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDCircleObjects3[0].getWidth()) + (gdjs.MarblesCode.GDPlayerMarbleObjects3[i].getWidth())) / 2 + gdjs.MarblesCode.localVariables[0].getFromIndex(2).getAsNumber(), gdjs.toDegrees(Math.atan2(runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() - (( gdjs.MarblesCode.GDCircleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDCircleObjects3[0].getPointY("")), runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() - (( gdjs.MarblesCode.GDCircleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDCircleObjects3[0].getPointX("")))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\place_marble.wav", false, 100, 1);
}
}

}


};gdjs.MarblesCode.eventsList37 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowBase"), gdjs.MarblesCode.GDDirectionalArrowBaseObjects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowHead"), gdjs.MarblesCode.GDDirectionalArrowHeadObjects2);
/* Reuse gdjs.MarblesCode.GDPlayerMarbleObjects2 */
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects2[i].hide();
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setBoolean(false);
}
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects2[i].getBehavior("Effect").enableEffect("selected", true);
}
}

{ //Subevents
gdjs.MarblesCode.eventsList36(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList38 = function(runtimeScene) {

{


gdjs.MarblesCode.eventsList35(runtimeScene);
}


{


gdjs.MarblesCode.eventsList37(runtimeScene);
}


};gdjs.MarblesCode.eventsList39 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FullScreenToggleMinigame"), gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2);
gdjs.copyArray(runtimeScene.getObjects("SoundToggleMinigame"), gdjs.MarblesCode.GDSoundToggleMinigameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDFullScreenToggleMinigameObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDSoundToggleMinigameObjects2Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ComputerMarble"), gdjs.MarblesCode.GDComputerMarbleObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerMarble"), gdjs.MarblesCode.GDPlayerMarbleObjects2);
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects2[i].getBehavior("Effect").enableEffect("disabled", false);
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects2[i].getBehavior("Effect").enableEffect("disabled", true);
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects2[i].getBehavior("Physics2").enableLayer(2, true);
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects2[i].getBehavior("Physics2").enableLayer(2, false);
}
}

{ //Subevents
gdjs.MarblesCode.eventsList38(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList40 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(1);
variables._declare("changeDirection", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber() == gdjs.randomInRange(1, 30));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).mul(-(1));
}
}
gdjs.MarblesCode.localVariables.pop();

}


};gdjs.MarblesCode.eventsList41 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "compAimTimer") < 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).add(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() / 8);
}

{ //Subevents
gdjs.MarblesCode.eventsList40(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "compAimTimer") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
}

}


};gdjs.MarblesCode.eventsList42 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList41(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects3Objects = Hashtable.newFrom({"Marble": gdjs.MarblesCode.GDMarbleObjects3});
gdjs.MarblesCode.eventsList43 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber() != 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).add(1);
}
}

}


{

gdjs.copyArray(gdjs.MarblesCode.GDComputerMarbleObjects2, gdjs.MarblesCode.GDComputerMarbleObjects3);

gdjs.copyArray(runtimeScene.getObjects("Marble"), gdjs.MarblesCode.GDMarbleObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
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
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects3Objects, (( gdjs.MarblesCode.GDComputerMarbleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects3[0].getPointX("")), (( gdjs.MarblesCode.GDComputerMarbleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects3[0].getPointY("")), false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDComputerMarbleObjects3 */
/* Reuse gdjs.MarblesCode.GDMarbleObjects3 */
{for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects3[i].getBehavior("Physics2").applyPolarImpulse(gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber(), gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / 100, (gdjs.MarblesCode.GDComputerMarbleObjects3[i].getBehavior("Physics2").getMassCenterX()), (gdjs.MarblesCode.GDComputerMarbleObjects3[i].getBehavior("Physics2").getMassCenterY()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(gdjs.toDegrees(Math.atan2((( gdjs.MarblesCode.GDMarbleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDMarbleObjects3[0].getPointY("")) - (( gdjs.MarblesCode.GDComputerMarbleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects3[0].getPointY("")), (( gdjs.MarblesCode.GDMarbleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDMarbleObjects3[0].getPointX("")) - (( gdjs.MarblesCode.GDComputerMarbleObjects3.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects3[0].getPointX("")))));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "compAimTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "compPlaceTimer");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\shoot_marble.wav", false, 75 * (gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()) / 4, 3 - 3 * (gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}

}


};gdjs.MarblesCode.eventsList44 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.50);
}
if (isConditionTrue_0) {
{gdjs.MarblesCode.localVariables[1].getFromIndex(0).setNumber((2 * gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()) * 255);
}
{gdjs.MarblesCode.localVariables[1].getFromIndex(1).setNumber(255);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.50);
}
if (isConditionTrue_0) {
{gdjs.MarblesCode.localVariables[1].getFromIndex(0).setNumber(255);
}
{gdjs.MarblesCode.localVariables[1].getFromIndex(1).setNumber(255 * (2 - 2 * gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.MarblesCode.GDDirectionalArrowBaseObjects2 */
/* Reuse gdjs.MarblesCode.GDDirectionalArrowHeadObjects2 */
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects2[i].getBehavior("Effect").setEffectStringParameter("chargeColor", "newColor", gdjs.evtTools.common.toString(gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber()) + ";" + gdjs.evtTools.common.toString(gdjs.MarblesCode.localVariables[1].getFromIndex(1).getAsNumber()) + ";0");
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects2[i].getBehavior("Effect").setEffectStringParameter("chargeColor", "newColor", gdjs.evtTools.common.toString(gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber()) + ";" + gdjs.evtTools.common.toString(gdjs.MarblesCode.localVariables[1].getFromIndex(1).getAsNumber()) + ";0");
}
}
}

}


};gdjs.MarblesCode.eventsList45 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("redColorShift", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("greenColorShift", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.MarblesCode.eventsList44(runtimeScene);} //End of subevents
}
gdjs.MarblesCode.localVariables.pop();

}


};gdjs.MarblesCode.eventsList46 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(1);
variables._declare("compShootMarble", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.MarblesCode.localVariables[1].getFromIndex(0).setNumber(gdjs.randomInRange(1, 100));
}

{ //Subevents
gdjs.MarblesCode.eventsList43(runtimeScene);} //End of subevents
}
gdjs.MarblesCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.MarblesCode.GDComputerMarbleObjects2 */
/* Reuse gdjs.MarblesCode.GDDirectionalArrowBaseObjects2 */
/* Reuse gdjs.MarblesCode.GDDirectionalArrowHeadObjects2 */
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects2[i].setAngle(gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber());
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects2[i].setAngle(gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.common.clamp(0, gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() / (2 * gdjs.MarblesCode.localVariables[0].getFromIndex(4).getAsNumber()), 24));
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects2[i].getBehavior("Resizable").setWidth(Math.max(0, gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsNumber() - (( gdjs.MarblesCode.GDDirectionalArrowHeadObjects2.length === 0 ) ? 0 :gdjs.MarblesCode.GDDirectionalArrowHeadObjects2[0].getWidth())) / gdjs.MarblesCode.localVariables[0].getFromIndex(4).getAsNumber());
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects2[i].putAroundObject((gdjs.MarblesCode.GDComputerMarbleObjects2.length !== 0 ? gdjs.MarblesCode.GDComputerMarbleObjects2[0] : null), -((gdjs.MarblesCode.localVariables[0].getFromIndex(3).getAsNumber() + (gdjs.MarblesCode.GDDirectionalArrowHeadObjects2[i].getWidth()) / 2)), gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects2[i].putAroundObject((gdjs.MarblesCode.GDComputerMarbleObjects2.length !== 0 ? gdjs.MarblesCode.GDComputerMarbleObjects2[0] : null), Math.min(0, -((gdjs.MarblesCode.localVariables[0].getFromIndex(3).getAsNumber() + (( gdjs.MarblesCode.GDDirectionalArrowHeadObjects2.length === 0 ) ? 0 :gdjs.MarblesCode.GDDirectionalArrowHeadObjects2[0].getWidth()) + (gdjs.MarblesCode.GDDirectionalArrowBaseObjects2[i].getWidth()) / 2)) + 1), gdjs.MarblesCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}

{ //Subevents
gdjs.MarblesCode.eventsList45(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList47 = function(runtimeScene) {

{


gdjs.MarblesCode.eventsList42(runtimeScene);
}


{


gdjs.MarblesCode.eventsList46(runtimeScene);
}


};gdjs.MarblesCode.eventsList48 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MarblesCode.GDComputerMarbleObjects1, gdjs.MarblesCode.GDComputerMarbleObjects2);

gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowBase"), gdjs.MarblesCode.GDDirectionalArrowBaseObjects2);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowHead"), gdjs.MarblesCode.GDDirectionalArrowHeadObjects2);
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects2[i].hide(false);
}
}
{gdjs.MarblesCode.localVariables[0].getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber());
}
{gdjs.MarblesCode.localVariables[0].getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber());
}
{for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects2[i].getBehavior("Effect").enableEffect("selected", false);
}
}

{ //Subevents
gdjs.MarblesCode.eventsList47(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList49 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(1);
variables._declare("changeDirection", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.MarblesCode.localVariables[1].getFromIndex(0).getAsNumber() == gdjs.randomInRange(1, 120));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).mul(-(1));
}
}
gdjs.MarblesCode.localVariables.pop();

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects1Objects = Hashtable.newFrom({"Marble": gdjs.MarblesCode.GDMarbleObjects1});
gdjs.MarblesCode.eventsList50 = function(runtimeScene) {

{

/* Reuse gdjs.MarblesCode.GDComputerMarbleObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Marble"), gdjs.MarblesCode.GDMarbleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects1Objects, (( gdjs.MarblesCode.GDComputerMarbleObjects1.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects1[0].getPointX("")), (( gdjs.MarblesCode.GDComputerMarbleObjects1.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects1[0].getPointY("")), false);
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDComputerMarbleObjects1 */
/* Reuse gdjs.MarblesCode.GDMarbleObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(gdjs.toDegrees(Math.atan2((( gdjs.MarblesCode.GDMarbleObjects1.length === 0 ) ? 0 :gdjs.MarblesCode.GDMarbleObjects1[0].getPointY("")) - (( gdjs.MarblesCode.GDComputerMarbleObjects1.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects1[0].getPointY("")), (( gdjs.MarblesCode.GDMarbleObjects1.length === 0 ) ? 0 :gdjs.MarblesCode.GDMarbleObjects1[0].getPointX("")) - (( gdjs.MarblesCode.GDComputerMarbleObjects1.length === 0 ) ? 0 :gdjs.MarblesCode.GDComputerMarbleObjects1[0].getPointX("")))));
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setBoolean(false);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "compAimTimer");
}
}

}


};gdjs.MarblesCode.eventsList51 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "compPlaceTimer") < 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Circle"), gdjs.MarblesCode.GDCircleObjects2);
gdjs.copyArray(gdjs.MarblesCode.GDComputerMarbleObjects1, gdjs.MarblesCode.GDComputerMarbleObjects2);

{for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects2[i].putAroundObject((gdjs.MarblesCode.GDCircleObjects2.length !== 0 ? gdjs.MarblesCode.GDCircleObjects2[0] : null), ((( gdjs.MarblesCode.GDCircleObjects2.length === 0 ) ? 0 :gdjs.MarblesCode.GDCircleObjects2[0].getWidth()) + (gdjs.MarblesCode.GDComputerMarbleObjects2[i].getWidth())) / 2 + gdjs.MarblesCode.localVariables[0].getFromIndex(2).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}

{ //Subevents
gdjs.MarblesCode.eventsList49(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "compPlaceTimer") >= 3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setBoolean(false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\place_marble.wav", false, 100, 1);
}

{ //Subevents
gdjs.MarblesCode.eventsList50(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList52 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(5).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDComputerMarbleObjects1 */
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowBase"), gdjs.MarblesCode.GDDirectionalArrowBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("DirectionalArrowHead"), gdjs.MarblesCode.GDDirectionalArrowHeadObjects1);
{for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowHeadObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowHeadObjects1[i].hide();
}
for(var i = 0, len = gdjs.MarblesCode.GDDirectionalArrowBaseObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDDirectionalArrowBaseObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects1[i].getBehavior("Effect").enableEffect("selected", true);
}
}

{ //Subevents
gdjs.MarblesCode.eventsList51(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList53 = function(runtimeScene) {

{


gdjs.MarblesCode.eventsList48(runtimeScene);
}


{


gdjs.MarblesCode.eventsList52(runtimeScene);
}


};gdjs.MarblesCode.eventsList54 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ComputerMarble"), gdjs.MarblesCode.GDComputerMarbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerMarble"), gdjs.MarblesCode.GDPlayerMarbleObjects1);
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects1[i].getBehavior("Effect").enableEffect("disabled", true);
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects1[i].getBehavior("Effect").enableEffect("disabled", false);
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDPlayerMarbleObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDPlayerMarbleObjects1[i].getBehavior("Physics2").enableLayer(2, false);
}
}
{for(var i = 0, len = gdjs.MarblesCode.GDComputerMarbleObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDComputerMarbleObjects1[i].getBehavior("Physics2").enableLayer(2, true);
}
}

{ //Subevents
gdjs.MarblesCode.eventsList53(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList55 = function(runtimeScene) {

{


gdjs.MarblesCode.eventsList39(runtimeScene);
}


{


gdjs.MarblesCode.eventsList54(runtimeScene);
}


};gdjs.MarblesCode.eventsList56 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("chargeValue", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("shotAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(20);
variables._declare("placeMarbleDistance", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(16);
variables._declare("shotDistanceOffset", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(1);
variables._declare("chargeScale", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(18).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(17).getAsBoolean();
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList55(runtimeScene);} //End of subevents
}
gdjs.MarblesCode.localVariables.pop();

}


};gdjs.MarblesCode.eventsList57 = function(runtimeScene) {

{


gdjs.MarblesCode.eventsList16(runtimeScene);
}


{


gdjs.MarblesCode.eventsList31(runtimeScene);
}


{


gdjs.MarblesCode.eventsList56(runtimeScene);
}


};gdjs.MarblesCode.eventsList58 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(15).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList57(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.eventsList59 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MarblesCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MarblesCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.MarblesCode.GDStartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MarblesCode.GDStartButtonObjects1[k] = gdjs.MarblesCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.MarblesCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDStartButtonObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(15).setBoolean(true);
}
{for(var i = 0, len = gdjs.MarblesCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDStartButtonObjects1[i].Activate(false, null);
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}
}

}


};gdjs.MarblesCode.eventsList60 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(15).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList59(runtimeScene);} //End of subevents
}

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects1ObjectsGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects1ObjectsGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects1Objects = Hashtable.newFrom({"Marble": gdjs.MarblesCode.GDMarbleObjects1, "PlayerMarble": gdjs.MarblesCode.GDPlayerMarbleObjects1, "ComputerMarble": gdjs.MarblesCode.GDComputerMarbleObjects1});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects1ObjectsGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects1ObjectsGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects1Objects = Hashtable.newFrom({"Marble": gdjs.MarblesCode.GDMarbleObjects1, "PlayerMarble": gdjs.MarblesCode.GDPlayerMarbleObjects1, "ComputerMarble": gdjs.MarblesCode.GDComputerMarbleObjects1});
gdjs.MarblesCode.eventsList61 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ComputerMarble"), gdjs.MarblesCode.GDComputerMarbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marble"), gdjs.MarblesCode.GDMarbleObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerMarble"), gdjs.MarblesCode.GDPlayerMarbleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects1ObjectsGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects1ObjectsGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects1Objects, "Physics2", gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDMarbleObjects1ObjectsGDgdjs_9546MarblesCode_9546GDPlayerMarbleObjects1ObjectsGDgdjs_9546MarblesCode_9546GDComputerMarbleObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDComputerMarbleObjects1 */
/* Reuse gdjs.MarblesCode.GDMarbleObjects1 */
/* Reuse gdjs.MarblesCode.GDPlayerMarbleObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\marble_collide.wav", false, (( gdjs.MarblesCode.GDComputerMarbleObjects1.length === 0 ) ? (( gdjs.MarblesCode.GDPlayerMarbleObjects1.length === 0 ) ? (( gdjs.MarblesCode.GDMarbleObjects1.length === 0 ) ? 0 :gdjs.MarblesCode.GDMarbleObjects1[0].getBehavior("Physics2").getLinearVelocityLength()) :gdjs.MarblesCode.GDPlayerMarbleObjects1[0].getBehavior("Physics2").getLinearVelocityLength()) :gdjs.MarblesCode.GDComputerMarbleObjects1[0].getBehavior("Physics2").getLinearVelocityLength()) / 2, 1);
}
}

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDFullScreenToggleMinigameObjects2Objects = Hashtable.newFrom({"FullScreenToggleMinigame": gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDFullScreenToggleMinigameObjects2Objects = Hashtable.newFrom({"FullScreenToggleMinigame": gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2});
gdjs.MarblesCode.eventsList62 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2, gdjs.MarblesCode.GDFullScreenToggleMinigameObjects3);

{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{for(var i = 0, len = gdjs.MarblesCode.GDFullScreenToggleMinigameObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDFullScreenToggleMinigameObjects3[i].getBehavior("Animation").setAnimationName("fullscreen");
}
}
{gdjs.MarblesCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2 */
{for(var i = 0, len = gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2[i].getBehavior("Animation").setAnimationName("not_fullscreen");
}
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
}

}


};gdjs.MarblesCode.eventsList63 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(true);
variables._declare("else", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList62(runtimeScene);} //End of subevents
}
gdjs.MarblesCode.localVariables.pop();

}


};gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDSoundToggleMinigameObjects2Objects = Hashtable.newFrom({"SoundToggleMinigame": gdjs.MarblesCode.GDSoundToggleMinigameObjects2});
gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDSoundToggleMinigameObjects2Objects = Hashtable.newFrom({"SoundToggleMinigame": gdjs.MarblesCode.GDSoundToggleMinigameObjects2});
gdjs.MarblesCode.eventsList64 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MarblesCode.GDSoundToggleMinigameObjects2, gdjs.MarblesCode.GDSoundToggleMinigameObjects3);

{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}
{for(var i = 0, len = gdjs.MarblesCode.GDSoundToggleMinigameObjects3.length ;i < len;++i) {
    gdjs.MarblesCode.GDSoundToggleMinigameObjects3[i].getBehavior("Animation").setAnimationName("on");
}
}
{gdjs.MarblesCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.MarblesCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDSoundToggleMinigameObjects2 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
{for(var i = 0, len = gdjs.MarblesCode.GDSoundToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDSoundToggleMinigameObjects2[i].getBehavior("Animation").setAnimationName("off");
}
}
}

}


};gdjs.MarblesCode.eventsList65 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(true);
variables._declare("else", variable);
}
gdjs.MarblesCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MarblesCode.eventsList64(runtimeScene);} //End of subevents
}
gdjs.MarblesCode.localVariables.pop();

}


};gdjs.MarblesCode.eventsList66 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FullScreenToggleMinigame"), gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDFullScreenToggleMinigameObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2 */
{for(var i = 0, len = gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullScreenToggleMinigame"), gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDFullScreenToggleMinigameObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2 */
{for(var i = 0, len = gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}

{ //Subevents
gdjs.MarblesCode.eventsList63(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundToggleMinigame"), gdjs.MarblesCode.GDSoundToggleMinigameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDSoundToggleMinigameObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDSoundToggleMinigameObjects2 */
{for(var i = 0, len = gdjs.MarblesCode.GDSoundToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDSoundToggleMinigameObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundToggleMinigame"), gdjs.MarblesCode.GDSoundToggleMinigameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MarblesCode.mapOfGDgdjs_9546MarblesCode_9546GDSoundToggleMinigameObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MarblesCode.GDSoundToggleMinigameObjects2 */
{for(var i = 0, len = gdjs.MarblesCode.GDSoundToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDSoundToggleMinigameObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}

{ //Subevents
gdjs.MarblesCode.eventsList65(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundToggleMinigame"), gdjs.MarblesCode.GDSoundToggleMinigameObjects2);
{for(var i = 0, len = gdjs.MarblesCode.GDSoundToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDSoundToggleMinigameObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SoundToggleMinigame"), gdjs.MarblesCode.GDSoundToggleMinigameObjects2);
{for(var i = 0, len = gdjs.MarblesCode.GDSoundToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDSoundToggleMinigameObjects2[i].getBehavior("Animation").setAnimationName("off");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullScreenToggleMinigame"), gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2);
{for(var i = 0, len = gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2.length ;i < len;++i) {
    gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2[i].getBehavior("Animation").setAnimationName("fullscreen");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FullScreenToggleMinigame"), gdjs.MarblesCode.GDFullScreenToggleMinigameObjects1);
{for(var i = 0, len = gdjs.MarblesCode.GDFullScreenToggleMinigameObjects1.length ;i < len;++i) {
    gdjs.MarblesCode.GDFullScreenToggleMinigameObjects1[i].getBehavior("Animation").setAnimationName("not_fullscreen");
}
}
}

}


};gdjs.MarblesCode.eventsList67 = function(runtimeScene) {

{


gdjs.MarblesCode.eventsList9(runtimeScene);
}


{


gdjs.MarblesCode.eventsList13(runtimeScene);
}


{


gdjs.MarblesCode.eventsList14(runtimeScene);
}


{


gdjs.MarblesCode.eventsList58(runtimeScene);
}


{


gdjs.MarblesCode.eventsList60(runtimeScene);
}


{


gdjs.MarblesCode.eventsList61(runtimeScene);
}


{



}


{



}


{


gdjs.MarblesCode.eventsList66(runtimeScene);
}


};

gdjs.MarblesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MarblesCode.GDBackgroundObjects1.length = 0;
gdjs.MarblesCode.GDBackgroundObjects2.length = 0;
gdjs.MarblesCode.GDBackgroundObjects3.length = 0;
gdjs.MarblesCode.GDBackgroundObjects4.length = 0;
gdjs.MarblesCode.GDBackgroundObjects5.length = 0;
gdjs.MarblesCode.GDBackgroundObjects6.length = 0;
gdjs.MarblesCode.GDCircleObjects1.length = 0;
gdjs.MarblesCode.GDCircleObjects2.length = 0;
gdjs.MarblesCode.GDCircleObjects3.length = 0;
gdjs.MarblesCode.GDCircleObjects4.length = 0;
gdjs.MarblesCode.GDCircleObjects5.length = 0;
gdjs.MarblesCode.GDCircleObjects6.length = 0;
gdjs.MarblesCode.GDMarbleObjects1.length = 0;
gdjs.MarblesCode.GDMarbleObjects2.length = 0;
gdjs.MarblesCode.GDMarbleObjects3.length = 0;
gdjs.MarblesCode.GDMarbleObjects4.length = 0;
gdjs.MarblesCode.GDMarbleObjects5.length = 0;
gdjs.MarblesCode.GDMarbleObjects6.length = 0;
gdjs.MarblesCode.GDInfoTextObjects1.length = 0;
gdjs.MarblesCode.GDInfoTextObjects2.length = 0;
gdjs.MarblesCode.GDInfoTextObjects3.length = 0;
gdjs.MarblesCode.GDInfoTextObjects4.length = 0;
gdjs.MarblesCode.GDInfoTextObjects5.length = 0;
gdjs.MarblesCode.GDInfoTextObjects6.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects1.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects2.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects3.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects4.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects5.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects6.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects1.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects2.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects3.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects4.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects5.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects6.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects1.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects2.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects3.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects4.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects5.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects6.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects3.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects4.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects5.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects6.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects1.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects2.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects3.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects4.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects5.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects6.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects1.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects2.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects3.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects4.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects5.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects6.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects1.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects2.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects3.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects4.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects5.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects6.length = 0;
gdjs.MarblesCode.GDPointAnimObjects1.length = 0;
gdjs.MarblesCode.GDPointAnimObjects2.length = 0;
gdjs.MarblesCode.GDPointAnimObjects3.length = 0;
gdjs.MarblesCode.GDPointAnimObjects4.length = 0;
gdjs.MarblesCode.GDPointAnimObjects5.length = 0;
gdjs.MarblesCode.GDPointAnimObjects6.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects1.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects2.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects3.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects4.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects5.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects6.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects1.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects2.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects3.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects4.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects5.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects6.length = 0;
gdjs.MarblesCode.GDStartButtonObjects1.length = 0;
gdjs.MarblesCode.GDStartButtonObjects2.length = 0;
gdjs.MarblesCode.GDStartButtonObjects3.length = 0;
gdjs.MarblesCode.GDStartButtonObjects4.length = 0;
gdjs.MarblesCode.GDStartButtonObjects5.length = 0;
gdjs.MarblesCode.GDStartButtonObjects6.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects1.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects2.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects3.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects4.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects5.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects6.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects1.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects2.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects3.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects4.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects5.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects6.length = 0;
gdjs.MarblesCode.GDStayButtonObjects1.length = 0;
gdjs.MarblesCode.GDStayButtonObjects2.length = 0;
gdjs.MarblesCode.GDStayButtonObjects3.length = 0;
gdjs.MarblesCode.GDStayButtonObjects4.length = 0;
gdjs.MarblesCode.GDStayButtonObjects5.length = 0;
gdjs.MarblesCode.GDStayButtonObjects6.length = 0;
gdjs.MarblesCode.GDExitButtonObjects1.length = 0;
gdjs.MarblesCode.GDExitButtonObjects2.length = 0;
gdjs.MarblesCode.GDExitButtonObjects3.length = 0;
gdjs.MarblesCode.GDExitButtonObjects4.length = 0;
gdjs.MarblesCode.GDExitButtonObjects5.length = 0;
gdjs.MarblesCode.GDExitButtonObjects6.length = 0;
gdjs.MarblesCode.GDWinTextObjects1.length = 0;
gdjs.MarblesCode.GDWinTextObjects2.length = 0;
gdjs.MarblesCode.GDWinTextObjects3.length = 0;
gdjs.MarblesCode.GDWinTextObjects4.length = 0;
gdjs.MarblesCode.GDWinTextObjects5.length = 0;
gdjs.MarblesCode.GDWinTextObjects6.length = 0;
gdjs.MarblesCode.GDLoseTextObjects1.length = 0;
gdjs.MarblesCode.GDLoseTextObjects2.length = 0;
gdjs.MarblesCode.GDLoseTextObjects3.length = 0;
gdjs.MarblesCode.GDLoseTextObjects4.length = 0;
gdjs.MarblesCode.GDLoseTextObjects5.length = 0;
gdjs.MarblesCode.GDLoseTextObjects6.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects1.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects2.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects3.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects4.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects5.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects6.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects1.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects3.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects4.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects5.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects6.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects1.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects2.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects3.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects4.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects5.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects6.length = 0;

gdjs.MarblesCode.eventsList67(runtimeScene);
gdjs.MarblesCode.GDBackgroundObjects1.length = 0;
gdjs.MarblesCode.GDBackgroundObjects2.length = 0;
gdjs.MarblesCode.GDBackgroundObjects3.length = 0;
gdjs.MarblesCode.GDBackgroundObjects4.length = 0;
gdjs.MarblesCode.GDBackgroundObjects5.length = 0;
gdjs.MarblesCode.GDBackgroundObjects6.length = 0;
gdjs.MarblesCode.GDCircleObjects1.length = 0;
gdjs.MarblesCode.GDCircleObjects2.length = 0;
gdjs.MarblesCode.GDCircleObjects3.length = 0;
gdjs.MarblesCode.GDCircleObjects4.length = 0;
gdjs.MarblesCode.GDCircleObjects5.length = 0;
gdjs.MarblesCode.GDCircleObjects6.length = 0;
gdjs.MarblesCode.GDMarbleObjects1.length = 0;
gdjs.MarblesCode.GDMarbleObjects2.length = 0;
gdjs.MarblesCode.GDMarbleObjects3.length = 0;
gdjs.MarblesCode.GDMarbleObjects4.length = 0;
gdjs.MarblesCode.GDMarbleObjects5.length = 0;
gdjs.MarblesCode.GDMarbleObjects6.length = 0;
gdjs.MarblesCode.GDInfoTextObjects1.length = 0;
gdjs.MarblesCode.GDInfoTextObjects2.length = 0;
gdjs.MarblesCode.GDInfoTextObjects3.length = 0;
gdjs.MarblesCode.GDInfoTextObjects4.length = 0;
gdjs.MarblesCode.GDInfoTextObjects5.length = 0;
gdjs.MarblesCode.GDInfoTextObjects6.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects1.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects2.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects3.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects4.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects5.length = 0;
gdjs.MarblesCode.GDPlayerMarbleObjects6.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects1.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects2.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects3.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects4.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects5.length = 0;
gdjs.MarblesCode.GDDirectionalArrowHeadObjects6.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects1.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects2.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects3.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects4.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects5.length = 0;
gdjs.MarblesCode.GDComputerMarbleObjects6.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects3.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects4.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects5.length = 0;
gdjs.MarblesCode.GDPlayerScoreTextObjects6.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects1.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects2.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects3.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects4.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects5.length = 0;
gdjs.MarblesCode.GDComputerScoreTextObjects6.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects1.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects2.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects3.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects4.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects5.length = 0;
gdjs.MarblesCode.GDDirectionalArrowBaseObjects6.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects1.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects2.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects3.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects4.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects5.length = 0;
gdjs.MarblesCode.GDTextBackgroundObjects6.length = 0;
gdjs.MarblesCode.GDPointAnimObjects1.length = 0;
gdjs.MarblesCode.GDPointAnimObjects2.length = 0;
gdjs.MarblesCode.GDPointAnimObjects3.length = 0;
gdjs.MarblesCode.GDPointAnimObjects4.length = 0;
gdjs.MarblesCode.GDPointAnimObjects5.length = 0;
gdjs.MarblesCode.GDPointAnimObjects6.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects1.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects2.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects3.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects4.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects5.length = 0;
gdjs.MarblesCode.GDPopupBackgroundObjects6.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects1.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects2.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects3.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects4.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects5.length = 0;
gdjs.MarblesCode.GDTutorialTextObjects6.length = 0;
gdjs.MarblesCode.GDStartButtonObjects1.length = 0;
gdjs.MarblesCode.GDStartButtonObjects2.length = 0;
gdjs.MarblesCode.GDStartButtonObjects3.length = 0;
gdjs.MarblesCode.GDStartButtonObjects4.length = 0;
gdjs.MarblesCode.GDStartButtonObjects5.length = 0;
gdjs.MarblesCode.GDStartButtonObjects6.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects1.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects2.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects3.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects4.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects5.length = 0;
gdjs.MarblesCode.GDTutorialHeaderTextObjects6.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects1.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects2.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects3.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects4.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects5.length = 0;
gdjs.MarblesCode.GDExitPromptTextObjects6.length = 0;
gdjs.MarblesCode.GDStayButtonObjects1.length = 0;
gdjs.MarblesCode.GDStayButtonObjects2.length = 0;
gdjs.MarblesCode.GDStayButtonObjects3.length = 0;
gdjs.MarblesCode.GDStayButtonObjects4.length = 0;
gdjs.MarblesCode.GDStayButtonObjects5.length = 0;
gdjs.MarblesCode.GDStayButtonObjects6.length = 0;
gdjs.MarblesCode.GDExitButtonObjects1.length = 0;
gdjs.MarblesCode.GDExitButtonObjects2.length = 0;
gdjs.MarblesCode.GDExitButtonObjects3.length = 0;
gdjs.MarblesCode.GDExitButtonObjects4.length = 0;
gdjs.MarblesCode.GDExitButtonObjects5.length = 0;
gdjs.MarblesCode.GDExitButtonObjects6.length = 0;
gdjs.MarblesCode.GDWinTextObjects1.length = 0;
gdjs.MarblesCode.GDWinTextObjects2.length = 0;
gdjs.MarblesCode.GDWinTextObjects3.length = 0;
gdjs.MarblesCode.GDWinTextObjects4.length = 0;
gdjs.MarblesCode.GDWinTextObjects5.length = 0;
gdjs.MarblesCode.GDWinTextObjects6.length = 0;
gdjs.MarblesCode.GDLoseTextObjects1.length = 0;
gdjs.MarblesCode.GDLoseTextObjects2.length = 0;
gdjs.MarblesCode.GDLoseTextObjects3.length = 0;
gdjs.MarblesCode.GDLoseTextObjects4.length = 0;
gdjs.MarblesCode.GDLoseTextObjects5.length = 0;
gdjs.MarblesCode.GDLoseTextObjects6.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects1.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects2.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects3.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects4.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects5.length = 0;
gdjs.MarblesCode.GDExitMinigameButtonObjects6.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects1.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects2.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects3.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects4.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects5.length = 0;
gdjs.MarblesCode.GDFullScreenToggleMinigameObjects6.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects1.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects2.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects3.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects4.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects5.length = 0;
gdjs.MarblesCode.GDSoundToggleMinigameObjects6.length = 0;


return;

}

gdjs['MarblesCode'] = gdjs.MarblesCode;
