gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDTitleObjects3= [];
gdjs.Main_32MenuCode.GDStartButtonObjects1= [];
gdjs.Main_32MenuCode.GDStartButtonObjects2= [];
gdjs.Main_32MenuCode.GDStartButtonObjects3= [];
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects1= [];
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects2= [];
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects3= [];
gdjs.Main_32MenuCode.GDCreditsButtonObjects1= [];
gdjs.Main_32MenuCode.GDCreditsButtonObjects2= [];
gdjs.Main_32MenuCode.GDCreditsButtonObjects3= [];
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects1= [];
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects2= [];
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects3= [];
gdjs.Main_32MenuCode.GDCreditsTextRightObjects1= [];
gdjs.Main_32MenuCode.GDCreditsTextRightObjects2= [];
gdjs.Main_32MenuCode.GDCreditsTextRightObjects3= [];
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects1= [];
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects2= [];
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects3= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Main Menu");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDCreditsButtonObjects1, gdjs.Main_32MenuCode.GDCreditsButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Main Menu");
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
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Credits");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Main Menu");
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartButtonObjects1[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCreditsButtonObjects1[i].SetLabelTextOp("Credits", null);
}
}
}

}


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

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
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Main Menu");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Credits");
}
}

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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Exploration", false);
}
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

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}
gdjs.Main_32MenuCode.localVariables.pop();

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects3.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList1(runtimeScene);
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextLeftObjects3.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsTextRightObjects3.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDExitMinigameButtonObjects3.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
