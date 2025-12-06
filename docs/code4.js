gdjs.Painting_32PuzzleCode = {};
gdjs.Painting_32PuzzleCode.localVariables = [];
gdjs.Painting_32PuzzleCode.idToCallbackMap = new Map();
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final = [];

gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_1final = [];

gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final = [];

gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final = [];

gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_1final = [];

gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final = [];

gdjs.Painting_32PuzzleCode.forEachCount0_3 = 0;

gdjs.Painting_32PuzzleCode.forEachCount1_3 = 0;

gdjs.Painting_32PuzzleCode.forEachIndex2 = 0;

gdjs.Painting_32PuzzleCode.forEachIndex3 = 0;

gdjs.Painting_32PuzzleCode.forEachObjects2 = [];

gdjs.Painting_32PuzzleCode.forEachObjects3 = [];

gdjs.Painting_32PuzzleCode.forEachTemporary2 = null;

gdjs.Painting_32PuzzleCode.forEachTotalCount2 = 0;

gdjs.Painting_32PuzzleCode.forEachTotalCount3 = 0;

gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects1= [];
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2= [];
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3= [];
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4= [];
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1= [];
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2= [];
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3= [];
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4= [];
gdjs.Painting_32PuzzleCode.GDBackgroundObjects1= [];
gdjs.Painting_32PuzzleCode.GDBackgroundObjects2= [];
gdjs.Painting_32PuzzleCode.GDBackgroundObjects3= [];
gdjs.Painting_32PuzzleCode.GDBackgroundObjects4= [];
gdjs.Painting_32PuzzleCode.GDStayButtonObjects1= [];
gdjs.Painting_32PuzzleCode.GDStayButtonObjects2= [];
gdjs.Painting_32PuzzleCode.GDStayButtonObjects3= [];
gdjs.Painting_32PuzzleCode.GDStayButtonObjects4= [];
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects1= [];
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects2= [];
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects3= [];
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects4= [];
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects1= [];
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects2= [];
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects3= [];
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects4= [];
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1= [];
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2= [];
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects3= [];
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects4= [];
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects1= [];
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects2= [];
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects3= [];
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects4= [];
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects1= [];
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects2= [];
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects3= [];
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects4= [];
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects1= [];
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects2= [];
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects3= [];
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects4= [];
gdjs.Painting_32PuzzleCode.GDStartButtonObjects1= [];
gdjs.Painting_32PuzzleCode.GDStartButtonObjects2= [];
gdjs.Painting_32PuzzleCode.GDStartButtonObjects3= [];
gdjs.Painting_32PuzzleCode.GDStartButtonObjects4= [];
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects1= [];
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2= [];
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects3= [];
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects4= [];


gdjs.Painting_32PuzzleCode.eventsList0 = function(runtimeScene) {

};gdjs.Painting_32PuzzleCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PaintingScrap"), gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("x").setNumber((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) - ((( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[0].getWidth()) * 4)) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("y").setNumber((gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) - ((( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[0].getHeight()) * 4)) / 2);
}
}

}


{

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2);

gdjs.copyArray(runtimeScene.getObjects("PaintingScrap"), gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2);

gdjs.Painting_32PuzzleCode.forEachTotalCount3 = 0;
gdjs.Painting_32PuzzleCode.forEachObjects3.length = 0;
gdjs.Painting_32PuzzleCode.forEachCount0_3 = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length;
gdjs.Painting_32PuzzleCode.forEachTotalCount3 += gdjs.Painting_32PuzzleCode.forEachCount0_3;
gdjs.Painting_32PuzzleCode.forEachObjects3.push.apply(gdjs.Painting_32PuzzleCode.forEachObjects3,gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2);
gdjs.Painting_32PuzzleCode.forEachCount1_3 = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2.length;
gdjs.Painting_32PuzzleCode.forEachTotalCount3 += gdjs.Painting_32PuzzleCode.forEachCount1_3;
gdjs.Painting_32PuzzleCode.forEachObjects3.push.apply(gdjs.Painting_32PuzzleCode.forEachObjects3,gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2);
for (gdjs.Painting_32PuzzleCode.forEachIndex3 = 0;gdjs.Painting_32PuzzleCode.forEachIndex3 < gdjs.Painting_32PuzzleCode.forEachTotalCount3;++gdjs.Painting_32PuzzleCode.forEachIndex3) {
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length = 0;

gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length = 0;


if (gdjs.Painting_32PuzzleCode.forEachIndex3 < gdjs.Painting_32PuzzleCode.forEachCount0_3) {
    gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.push(gdjs.Painting_32PuzzleCode.forEachObjects3[gdjs.Painting_32PuzzleCode.forEachIndex3]);
}
else if (gdjs.Painting_32PuzzleCode.forEachIndex3 < gdjs.Painting_32PuzzleCode.forEachCount0_3+gdjs.Painting_32PuzzleCode.forEachCount1_3) {
    gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.push(gdjs.Painting_32PuzzleCode.forEachObjects3[gdjs.Painting_32PuzzleCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("x").getAsNumber() + (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].getVariables().get("targetX").getAsNumber() * (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].getWidth())),runtimeScene.getScene().getVariables().getFromIndex(1).getChild("y").getAsNumber() + (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].getVariables().get("targetY").getAsNumber() * (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].getHeight())));
}
for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("x").getAsNumber() + (gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[i].getVariables().get("targetX").getAsNumber() * (gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[i].getWidth())),runtimeScene.getScene().getVariables().getFromIndex(1).getChild("y").getAsNumber() + (gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[i].getVariables().get("targetY").getAsNumber() * (gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[i].getHeight())));
}
}
}
}

}


};gdjs.Painting_32PuzzleCode.mapOfGDgdjs_9546Painting_959532PuzzleCode_9546GDPaintingScrapObjects3Objects = Hashtable.newFrom({"PaintingScrap": gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3});
gdjs.Painting_32PuzzleCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("initialX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("initialY", variable);
}
gdjs.Painting_32PuzzleCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.Painting_32PuzzleCode.mapOfGDgdjs_9546Painting_959532PuzzleCode_9546GDPaintingScrapObjects3Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].getVariableNumber(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].getVariables().getFromIndex(0)) != runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3);

/* Reuse gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3 */
{gdjs.Painting_32PuzzleCode.localVariables[0].getFromIndex(0).setNumber((( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[0].getPointX("")));
}
{gdjs.Painting_32PuzzleCode.localVariables[0].getFromIndex(1).setNumber((( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[0].getPointY("")));
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].setPosition((( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[0].getPointX("")),(( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[i].setPosition(gdjs.Painting_32PuzzleCode.localVariables[0].getFromIndex(0).getAsNumber(),gdjs.Painting_32PuzzleCode.localVariables[0].getFromIndex(1).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(((gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
}
gdjs.Painting_32PuzzleCode.localVariables.pop();

}


};gdjs.Painting_32PuzzleCode.eventsList3 = function(runtimeScene) {

{


const repeatCount2 = 200;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2);

gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3);

gdjs.copyArray(runtimeScene.getObjects("PaintingScrap"), gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].getY() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[0].getPointY("")) ) {
        isConditionTrue_2 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.length = 0;
let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4);

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4);

for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getX() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getPointX("")) - (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getWidth()) ) {
        isConditionTrue_3 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4);

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4);

for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getX() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getPointX("")) + (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getWidth()) ) {
        isConditionTrue_3 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3);
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3);

gdjs.copyArray(runtimeScene.getObjects("PaintingScrap"), gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].getX() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[0].getPointX("")) ) {
        isConditionTrue_2 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.length = 0;
let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4);

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4);

for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getY() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getPointY("")) - (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getHeight()) ) {
        isConditionTrue_3 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4);

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4);

for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getY() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getPointY("")) + (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getHeight()) ) {
        isConditionTrue_3 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3);
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2);
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2);
}
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.Painting_32PuzzleCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Painting_32PuzzleCode.eventsList4 = function(runtimeScene) {

{


gdjs.Painting_32PuzzleCode.eventsList1(runtimeScene);
}


{


gdjs.Painting_32PuzzleCode.eventsList3(runtimeScene);
}


};gdjs.Painting_32PuzzleCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlankSpace"), gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExitMinigameButton"), gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeaveButton"), gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Painting_32PuzzleCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StayButton"), gdjs.Painting_32PuzzleCode.GDStayButtonObjects1);
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "WinPopup");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ExitPrompt");
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects1.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDStayButtonObjects1.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDStayButtonObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1[i].Activate(false, null);
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Tutorial");
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDStartButtonObjects1[i].Activate(true, null);
}
}

{ //Subevents
gdjs.Painting_32PuzzleCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Painting_32PuzzleCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Painting_32PuzzleCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDStartButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Painting_32PuzzleCode.GDStartButtonObjects1[k] = gdjs.Painting_32PuzzleCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ExitMinigameButton"), gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects1);
/* Reuse gdjs.Painting_32PuzzleCode.GDStartButtonObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial");
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects1.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDStartButtonObjects1[i].Activate(false, null);
}
}
}

}


};gdjs.Painting_32PuzzleCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Painting_32PuzzleCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Painting_32PuzzleCode.mapOfGDgdjs_9546Painting_959532PuzzleCode_9546GDExitMinigameButtonObjects2Objects = Hashtable.newFrom({"ExitMinigameButton": gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2});
gdjs.Painting_32PuzzleCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, 2);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeaveButton"), gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("StayButton"), gdjs.Painting_32PuzzleCode.GDStayButtonObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "ExitPrompt");
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDStayButtonObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDStayButtonObjects2[i].Activate(true, null);
}
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2[i].Activate(true, null);
}
}
}

}


};gdjs.Painting_32PuzzleCode.mapOfGDgdjs_9546Painting_959532PuzzleCode_9546GDExitMinigameButtonObjects2Objects = Hashtable.newFrom({"ExitMinigameButton": gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2});
gdjs.Painting_32PuzzleCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StayButton"), gdjs.Painting_32PuzzleCode.GDStayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDStayButtonObjects2.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDStayButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Painting_32PuzzleCode.GDStayButtonObjects2[k] = gdjs.Painting_32PuzzleCode.GDStayButtonObjects2[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDStayButtonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeaveButton"), gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2);
/* Reuse gdjs.Painting_32PuzzleCode.GDStayButtonObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDStayButtonObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDStayButtonObjects2[i].Activate(false, null);
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ExitPrompt");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaveButton"), gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1[k] = gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};gdjs.Painting_32PuzzleCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExitMinigameButton"), gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Painting_32PuzzleCode.mapOfGDgdjs_9546Painting_959532PuzzleCode_9546GDExitMinigameButtonObjects2Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2[k] = gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2 */
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2[i].getBehavior("Effect").enableEffect("Highlight", true);
}
}

{ //Subevents
gdjs.Painting_32PuzzleCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitMinigameButton"), gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Painting_32PuzzleCode.mapOfGDgdjs_9546Painting_959532PuzzleCode_9546GDExitMinigameButtonObjects2Objects, runtimeScene, false, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2 */
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2[i].getBehavior("Effect").enableEffect("Highlight", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "ExitPrompt");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Painting_32PuzzleCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Painting_32PuzzleCode.mapOfGDgdjs_9546Painting_959532PuzzleCode_9546GDPaintingScrapObjects2Objects = Hashtable.newFrom({"PaintingScrap": gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2});
gdjs.Painting_32PuzzleCode.mapOfGDgdjs_9546Painting_959532PuzzleCode_9546GDBlankSpaceObjects2Objects = Hashtable.newFrom({"BlankSpace": gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2});
gdjs.Painting_32PuzzleCode.eventsList11 = function(runtimeScene) {

{

/* Reuse gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2 */
/* Reuse gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, 2);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.Painting_32PuzzleCode.mapOfGDgdjs_9546Painting_959532PuzzleCode_9546GDBlankSpaceObjects2Objects, (( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2[0].getPointX("")), (( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2[0].getPointY("")), false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2 */
/* Reuse gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2 */
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2[i].getBehavior("Tween").addObjectPositionTween2("slide", (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2[0].getPointX("")), (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2[0].getPointY("")), "easeFromTo", 0.25, false);
}
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2[i].getBehavior("Tween").addObjectPositionTween2("slide", (( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2[0].getPointX("")), (( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2[0].getPointY("")), "easeFromTo", 0.25, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\swipe.wav", false, 25, 0.5);
}
}

}


};gdjs.Painting_32PuzzleCode.eventsList12 = function(runtimeScene) {

{

/* Reuse gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Painting_32PuzzleCode.mapOfGDgdjs_9546Painting_959532PuzzleCode_9546GDPaintingScrapObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}

{ //Subevents
gdjs.Painting_32PuzzleCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.Painting_32PuzzleCode.eventsList13 = function(runtimeScene) {

};gdjs.Painting_32PuzzleCode.eventsList14 = function(runtimeScene) {

};gdjs.Painting_32PuzzleCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PaintingScrap"), gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects1);

for (gdjs.Painting_32PuzzleCode.forEachIndex2 = 0;gdjs.Painting_32PuzzleCode.forEachIndex2 < gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects1.length;++gdjs.Painting_32PuzzleCode.forEachIndex2) {
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length = 0;


gdjs.Painting_32PuzzleCode.forEachTemporary2 = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects1[gdjs.Painting_32PuzzleCode.forEachIndex2];
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.push(gdjs.Painting_32PuzzleCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2[i].getBehavior("Effect").enableEffect("outline", false);
}
}
}
}

}


};gdjs.Painting_32PuzzleCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlankSpace"), gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2);
gdjs.copyArray(runtimeScene.getObjects("PaintingScrap"), gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2);

gdjs.Painting_32PuzzleCode.forEachTotalCount3 = 0;
gdjs.Painting_32PuzzleCode.forEachObjects3.length = 0;
gdjs.Painting_32PuzzleCode.forEachCount0_3 = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length;
gdjs.Painting_32PuzzleCode.forEachTotalCount3 += gdjs.Painting_32PuzzleCode.forEachCount0_3;
gdjs.Painting_32PuzzleCode.forEachObjects3.push.apply(gdjs.Painting_32PuzzleCode.forEachObjects3,gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2);
gdjs.Painting_32PuzzleCode.forEachCount1_3 = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2.length;
gdjs.Painting_32PuzzleCode.forEachTotalCount3 += gdjs.Painting_32PuzzleCode.forEachCount1_3;
gdjs.Painting_32PuzzleCode.forEachObjects3.push.apply(gdjs.Painting_32PuzzleCode.forEachObjects3,gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2);
for (gdjs.Painting_32PuzzleCode.forEachIndex3 = 0;gdjs.Painting_32PuzzleCode.forEachIndex3 < gdjs.Painting_32PuzzleCode.forEachTotalCount3;++gdjs.Painting_32PuzzleCode.forEachIndex3) {
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length = 0;

gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length = 0;


if (gdjs.Painting_32PuzzleCode.forEachIndex3 < gdjs.Painting_32PuzzleCode.forEachCount0_3) {
    gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.push(gdjs.Painting_32PuzzleCode.forEachObjects3[gdjs.Painting_32PuzzleCode.forEachIndex3]);
}
else if (gdjs.Painting_32PuzzleCode.forEachIndex3 < gdjs.Painting_32PuzzleCode.forEachCount0_3+gdjs.Painting_32PuzzleCode.forEachCount1_3) {
    gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.push(gdjs.Painting_32PuzzleCode.forEachObjects3[gdjs.Painting_32PuzzleCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_1final.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4);

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4);

for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getX() != runtimeScene.getScene().getVariables().getFromIndex(1).getChild("x").getAsNumber() + (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getVariables().get("targetX").getAsNumber() * (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[i].getX() != runtimeScene.getScene().getVariables().getFromIndex(1).getChild("x").getAsNumber() + (gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[i].getVariables().get("targetX").getAsNumber() * (gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[i].getWidth())) ) {
        isConditionTrue_1 = true;
        gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[k] = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_1final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_1final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_1final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_1final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4);

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4);

for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getY() != runtimeScene.getScene().getVariables().getFromIndex(1).getChild("y").getAsNumber() + (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getVariables().get("targetY").getAsNumber() * (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getHeight())) ) {
        isConditionTrue_1 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[i].getY() != runtimeScene.getScene().getVariables().getFromIndex(1).getChild("y").getAsNumber() + (gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[i].getVariables().get("targetY").getAsNumber() * (gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[i].getHeight())) ) {
        isConditionTrue_1 = true;
        gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[k] = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_1final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_1final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_1final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_1final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_1final, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3);
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_1final, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);
}
}
if (isConditionTrue_0) {
{gdjs.Painting_32PuzzleCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.Painting_32PuzzleCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlankSpace"), gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 255, "easeTo", 3, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gameOver");
}

{ //Subevents
gdjs.Painting_32PuzzleCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.Painting_32PuzzleCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlankSpace"), gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2);
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2.length;i<l;++i) {
    if ( !(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2[i].getBehavior("Tween").isPlaying("slide")) ) {
        isConditionTrue_0 = true;
        gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2[k] = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3);

gdjs.copyArray(runtimeScene.getObjects("PaintingScrap"), gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].getY() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[0].getPointY("")) ) {
        isConditionTrue_2 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.length = 0;
let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4);

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4);

for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getX() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getPointX("")) - (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getWidth()) ) {
        isConditionTrue_3 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4);

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4);

for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getX() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getPointX("")) + (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getWidth()) ) {
        isConditionTrue_3 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3);
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3);

gdjs.copyArray(runtimeScene.getObjects("PaintingScrap"), gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i].getX() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[0].getPointX("")) ) {
        isConditionTrue_2 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.length = 0;
let isConditionTrue_3 = false;
isConditionTrue_2 = false;
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4);

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4);

for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getY() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getPointY("")) - (gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getHeight()) ) {
        isConditionTrue_3 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4);

gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4);

for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i].getY() == (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getPointY("")) + (( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length === 0 ) ? 0 :gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[0].getHeight()) ) {
        isConditionTrue_3 = true;
        gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[k] = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = k;
if(isConditionTrue_3) {
    isConditionTrue_2 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3_3final, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3);
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3_3final, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final.indexOf(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final.push(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final.indexOf(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[j]) === -1 )
            gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final.push(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2_1final, gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2);
gdjs.copyArray(gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2_1final, gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2 */
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2[i].getBehavior("Effect").setEffectStringParameter("outline", "color", "0;255;0");
}
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2[i].setZOrder(1);
}
}

{ //Subevents
gdjs.Painting_32PuzzleCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(true);
variables._declare("isGameOver", variable);
}
gdjs.Painting_32PuzzleCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Painting_32PuzzleCode.eventsList16(runtimeScene);} //End of subevents
}
gdjs.Painting_32PuzzleCode.localVariables.pop();

}


};gdjs.Painting_32PuzzleCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PaintingScrap"), gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2);
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", null);
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2[i].getBehavior("Effect").setEffectStringParameter("outline", "color", "255;255;255");
}
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2[i].setZOrder(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Painting_32PuzzleCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Painting_32PuzzleCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeaveButton"), gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1.length;i<l;++i) {
    if ( gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1[k] = gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1[i];
        ++k;
    }
}
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};gdjs.Painting_32PuzzleCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "gameOver") >= 3.5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15453428);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ExitMinigameButton"), gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeaveButton"), gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\win.wav", false, 50, 1);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "WinPopup");
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2.length ;i < len;++i) {
    gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2[i].Activate(true, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Painting Puzzle").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "WinPopup");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Painting_32PuzzleCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.Painting_32PuzzleCode.eventsList21 = function(runtimeScene) {

{


gdjs.Painting_32PuzzleCode.eventsList5(runtimeScene);
}


{


gdjs.Painting_32PuzzleCode.eventsList7(runtimeScene);
}


{


gdjs.Painting_32PuzzleCode.eventsList10(runtimeScene);
}


{


gdjs.Painting_32PuzzleCode.eventsList18(runtimeScene);
}


{


gdjs.Painting_32PuzzleCode.eventsList20(runtimeScene);
}


};

gdjs.Painting_32PuzzleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDBackgroundObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDBackgroundObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDBackgroundObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDBackgroundObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDStayButtonObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDStayButtonObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDStayButtonObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDStayButtonObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDStartButtonObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDStartButtonObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDStartButtonObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDStartButtonObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects4.length = 0;

gdjs.Painting_32PuzzleCode.eventsList21(runtimeScene);
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDPaintingScrapObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDBlankSpaceObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDBackgroundObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDBackgroundObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDBackgroundObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDBackgroundObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDStayButtonObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDStayButtonObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDStayButtonObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDStayButtonObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDPopupBackgroundObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDExitPopupTextObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDLeaveButtonObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDWinPopupTextObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialTextObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDTutorialHeaderObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDStartButtonObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDStartButtonObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDStartButtonObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDStartButtonObjects4.length = 0;
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects1.length = 0;
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects2.length = 0;
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects3.length = 0;
gdjs.Painting_32PuzzleCode.GDExitMinigameButtonObjects4.length = 0;


return;

}

gdjs['Painting_32PuzzleCode'] = gdjs.Painting_32PuzzleCode;
