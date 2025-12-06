gdjs.TutorialCode = {};
gdjs.TutorialCode.localVariables = [];
gdjs.TutorialCode.idToCallbackMap = new Map();
gdjs.TutorialCode.forEachCount0_3 = 0;

gdjs.TutorialCode.forEachCount1_3 = 0;

gdjs.TutorialCode.forEachIndex2 = 0;

gdjs.TutorialCode.forEachIndex3 = 0;

gdjs.TutorialCode.forEachObjects2 = [];

gdjs.TutorialCode.forEachObjects3 = [];

gdjs.TutorialCode.forEachTemporary2 = null;

gdjs.TutorialCode.forEachTotalCount2 = 0;

gdjs.TutorialCode.forEachTotalCount3 = 0;

gdjs.TutorialCode.GDTutorialTitleObjects1= [];
gdjs.TutorialCode.GDTutorialTitleObjects2= [];
gdjs.TutorialCode.GDTutorialTitleObjects3= [];
gdjs.TutorialCode.GDTutorialTitleObjects4= [];
gdjs.TutorialCode.GDTutorialTitleObjects5= [];
gdjs.TutorialCode.GDNextButtonObjects1= [];
gdjs.TutorialCode.GDNextButtonObjects2= [];
gdjs.TutorialCode.GDNextButtonObjects3= [];
gdjs.TutorialCode.GDNextButtonObjects4= [];
gdjs.TutorialCode.GDNextButtonObjects5= [];
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects1= [];
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects2= [];
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects3= [];
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects4= [];
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects5= [];
gdjs.TutorialCode.GDTutorialText1Objects1= [];
gdjs.TutorialCode.GDTutorialText1Objects2= [];
gdjs.TutorialCode.GDTutorialText1Objects3= [];
gdjs.TutorialCode.GDTutorialText1Objects4= [];
gdjs.TutorialCode.GDTutorialText1Objects5= [];
gdjs.TutorialCode.GDTutorialBackgroundObjects1= [];
gdjs.TutorialCode.GDTutorialBackgroundObjects2= [];
gdjs.TutorialCode.GDTutorialBackgroundObjects3= [];
gdjs.TutorialCode.GDTutorialBackgroundObjects4= [];
gdjs.TutorialCode.GDTutorialBackgroundObjects5= [];
gdjs.TutorialCode.GDPreviousButtonObjects1= [];
gdjs.TutorialCode.GDPreviousButtonObjects2= [];
gdjs.TutorialCode.GDPreviousButtonObjects3= [];
gdjs.TutorialCode.GDPreviousButtonObjects4= [];
gdjs.TutorialCode.GDPreviousButtonObjects5= [];
gdjs.TutorialCode.GDTutorialText2Objects1= [];
gdjs.TutorialCode.GDTutorialText2Objects2= [];
gdjs.TutorialCode.GDTutorialText2Objects3= [];
gdjs.TutorialCode.GDTutorialText2Objects4= [];
gdjs.TutorialCode.GDTutorialText2Objects5= [];
gdjs.TutorialCode.GDImageObjects1= [];
gdjs.TutorialCode.GDImageObjects2= [];
gdjs.TutorialCode.GDImageObjects3= [];
gdjs.TutorialCode.GDImageObjects4= [];
gdjs.TutorialCode.GDImageObjects5= [];
gdjs.TutorialCode.GDTutorialText3Objects1= [];
gdjs.TutorialCode.GDTutorialText3Objects2= [];
gdjs.TutorialCode.GDTutorialText3Objects3= [];
gdjs.TutorialCode.GDTutorialText3Objects4= [];
gdjs.TutorialCode.GDTutorialText3Objects5= [];
gdjs.TutorialCode.GDExitMinigameButtonObjects1= [];
gdjs.TutorialCode.GDExitMinigameButtonObjects2= [];
gdjs.TutorialCode.GDExitMinigameButtonObjects3= [];
gdjs.TutorialCode.GDExitMinigameButtonObjects4= [];
gdjs.TutorialCode.GDExitMinigameButtonObjects5= [];


gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.TutorialCode.GDNextButtonObjects1);

for (gdjs.TutorialCode.forEachIndex2 = 0;gdjs.TutorialCode.forEachIndex2 < gdjs.TutorialCode.GDNextButtonObjects1.length;++gdjs.TutorialCode.forEachIndex2) {
gdjs.TutorialCode.GDNextButtonObjects2.length = 0;


gdjs.TutorialCode.forEachTemporary2 = gdjs.TutorialCode.GDNextButtonObjects1[gdjs.TutorialCode.forEachIndex2];
gdjs.TutorialCode.GDNextButtonObjects2.push(gdjs.TutorialCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNextButtonObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDNextButtonObjects2[i].getVariableString(gdjs.TutorialCode.GDNextButtonObjects2[i].getVariables().getFromIndex(0)) == "Start!" ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDNextButtonObjects2[k] = gdjs.TutorialCode.GDNextButtonObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNextButtonObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.TutorialCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDNextButtonObjects2[i].SetLabelTextOp("Start!", null);
}
}
}
}

}


};gdjs.TutorialCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TutorialCode.GDNextButtonObjects3, gdjs.TutorialCode.GDNextButtonObjects4);

gdjs.copyArray(gdjs.TutorialCode.GDPreviousButtonObjects3, gdjs.TutorialCode.GDPreviousButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNextButtonObjects4.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDNextButtonObjects4[i].isOnLayer("Tutorial1") ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDNextButtonObjects4[k] = gdjs.TutorialCode.GDNextButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNextButtonObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPreviousButtonObjects4.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPreviousButtonObjects4[i].isOnLayer("Tutorial1") ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPreviousButtonObjects4[k] = gdjs.TutorialCode.GDPreviousButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPreviousButtonObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDNextButtonObjects4 */
/* Reuse gdjs.TutorialCode.GDPreviousButtonObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDNextButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDNextButtonObjects4[i].Activate(true, null);
}
for(var i = 0, len = gdjs.TutorialCode.GDPreviousButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDPreviousButtonObjects4[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(gdjs.TutorialCode.GDNextButtonObjects3, gdjs.TutorialCode.GDNextButtonObjects4);

gdjs.copyArray(gdjs.TutorialCode.GDPreviousButtonObjects3, gdjs.TutorialCode.GDPreviousButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNextButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDNextButtonObjects4[i].isOnLayer("Tutorial1")) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDNextButtonObjects4[k] = gdjs.TutorialCode.GDNextButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNextButtonObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPreviousButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPreviousButtonObjects4[i].isOnLayer("Tutorial1")) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPreviousButtonObjects4[k] = gdjs.TutorialCode.GDPreviousButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPreviousButtonObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDNextButtonObjects4 */
/* Reuse gdjs.TutorialCode.GDPreviousButtonObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDNextButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDNextButtonObjects4[i].Activate(false, null);
}
for(var i = 0, len = gdjs.TutorialCode.GDPreviousButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDPreviousButtonObjects4[i].Activate(false, null);
}
}
}

}


};gdjs.TutorialCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.TutorialCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PreviousButton"), gdjs.TutorialCode.GDPreviousButtonObjects2);

gdjs.TutorialCode.forEachTotalCount3 = 0;
gdjs.TutorialCode.forEachObjects3.length = 0;
gdjs.TutorialCode.forEachCount0_3 = gdjs.TutorialCode.GDNextButtonObjects2.length;
gdjs.TutorialCode.forEachTotalCount3 += gdjs.TutorialCode.forEachCount0_3;
gdjs.TutorialCode.forEachObjects3.push.apply(gdjs.TutorialCode.forEachObjects3,gdjs.TutorialCode.GDNextButtonObjects2);
gdjs.TutorialCode.forEachCount1_3 = gdjs.TutorialCode.GDPreviousButtonObjects2.length;
gdjs.TutorialCode.forEachTotalCount3 += gdjs.TutorialCode.forEachCount1_3;
gdjs.TutorialCode.forEachObjects3.push.apply(gdjs.TutorialCode.forEachObjects3,gdjs.TutorialCode.GDPreviousButtonObjects2);
for (gdjs.TutorialCode.forEachIndex3 = 0;gdjs.TutorialCode.forEachIndex3 < gdjs.TutorialCode.forEachTotalCount3;++gdjs.TutorialCode.forEachIndex3) {
gdjs.TutorialCode.GDNextButtonObjects3.length = 0;

gdjs.TutorialCode.GDPreviousButtonObjects3.length = 0;


if (gdjs.TutorialCode.forEachIndex3 < gdjs.TutorialCode.forEachCount0_3) {
    gdjs.TutorialCode.GDNextButtonObjects3.push(gdjs.TutorialCode.forEachObjects3[gdjs.TutorialCode.forEachIndex3]);
}
else if (gdjs.TutorialCode.forEachIndex3 < gdjs.TutorialCode.forEachCount0_3+gdjs.TutorialCode.forEachCount1_3) {
    gdjs.TutorialCode.GDPreviousButtonObjects3.push(gdjs.TutorialCode.forEachObjects3[gdjs.TutorialCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.TutorialCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TutorialCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TutorialCode.GDNextButtonObjects3, gdjs.TutorialCode.GDNextButtonObjects4);

gdjs.copyArray(gdjs.TutorialCode.GDPreviousButtonObjects3, gdjs.TutorialCode.GDPreviousButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNextButtonObjects4.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDNextButtonObjects4[i].isOnLayer("Tutorial2") ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDNextButtonObjects4[k] = gdjs.TutorialCode.GDNextButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNextButtonObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPreviousButtonObjects4.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPreviousButtonObjects4[i].isOnLayer("Tutorial2") ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPreviousButtonObjects4[k] = gdjs.TutorialCode.GDPreviousButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPreviousButtonObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDNextButtonObjects4 */
/* Reuse gdjs.TutorialCode.GDPreviousButtonObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDNextButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDNextButtonObjects4[i].Activate(true, null);
}
for(var i = 0, len = gdjs.TutorialCode.GDPreviousButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDPreviousButtonObjects4[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(gdjs.TutorialCode.GDNextButtonObjects3, gdjs.TutorialCode.GDNextButtonObjects4);

gdjs.copyArray(gdjs.TutorialCode.GDPreviousButtonObjects3, gdjs.TutorialCode.GDPreviousButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNextButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDNextButtonObjects4[i].isOnLayer("Tutorial2")) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDNextButtonObjects4[k] = gdjs.TutorialCode.GDNextButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNextButtonObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPreviousButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPreviousButtonObjects4[i].isOnLayer("Tutorial2")) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPreviousButtonObjects4[k] = gdjs.TutorialCode.GDPreviousButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPreviousButtonObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDNextButtonObjects4 */
/* Reuse gdjs.TutorialCode.GDPreviousButtonObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDNextButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDNextButtonObjects4[i].Activate(false, null);
}
for(var i = 0, len = gdjs.TutorialCode.GDPreviousButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDPreviousButtonObjects4[i].Activate(false, null);
}
}
}

}


};gdjs.TutorialCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.TutorialCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PreviousButton"), gdjs.TutorialCode.GDPreviousButtonObjects2);

gdjs.TutorialCode.forEachTotalCount3 = 0;
gdjs.TutorialCode.forEachObjects3.length = 0;
gdjs.TutorialCode.forEachCount0_3 = gdjs.TutorialCode.GDNextButtonObjects2.length;
gdjs.TutorialCode.forEachTotalCount3 += gdjs.TutorialCode.forEachCount0_3;
gdjs.TutorialCode.forEachObjects3.push.apply(gdjs.TutorialCode.forEachObjects3,gdjs.TutorialCode.GDNextButtonObjects2);
gdjs.TutorialCode.forEachCount1_3 = gdjs.TutorialCode.GDPreviousButtonObjects2.length;
gdjs.TutorialCode.forEachTotalCount3 += gdjs.TutorialCode.forEachCount1_3;
gdjs.TutorialCode.forEachObjects3.push.apply(gdjs.TutorialCode.forEachObjects3,gdjs.TutorialCode.GDPreviousButtonObjects2);
for (gdjs.TutorialCode.forEachIndex3 = 0;gdjs.TutorialCode.forEachIndex3 < gdjs.TutorialCode.forEachTotalCount3;++gdjs.TutorialCode.forEachIndex3) {
gdjs.TutorialCode.GDNextButtonObjects3.length = 0;

gdjs.TutorialCode.GDPreviousButtonObjects3.length = 0;


if (gdjs.TutorialCode.forEachIndex3 < gdjs.TutorialCode.forEachCount0_3) {
    gdjs.TutorialCode.GDNextButtonObjects3.push(gdjs.TutorialCode.forEachObjects3[gdjs.TutorialCode.forEachIndex3]);
}
else if (gdjs.TutorialCode.forEachIndex3 < gdjs.TutorialCode.forEachCount0_3+gdjs.TutorialCode.forEachCount1_3) {
    gdjs.TutorialCode.GDPreviousButtonObjects3.push(gdjs.TutorialCode.forEachObjects3[gdjs.TutorialCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.TutorialCode.eventsList4(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TutorialCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TutorialCode.GDNextButtonObjects3, gdjs.TutorialCode.GDNextButtonObjects4);

gdjs.copyArray(gdjs.TutorialCode.GDPreviousButtonObjects3, gdjs.TutorialCode.GDPreviousButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNextButtonObjects4.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDNextButtonObjects4[i].isOnLayer("Tutorial3") ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDNextButtonObjects4[k] = gdjs.TutorialCode.GDNextButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNextButtonObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPreviousButtonObjects4.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPreviousButtonObjects4[i].isOnLayer("Tutorial3") ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPreviousButtonObjects4[k] = gdjs.TutorialCode.GDPreviousButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPreviousButtonObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDNextButtonObjects4 */
/* Reuse gdjs.TutorialCode.GDPreviousButtonObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDNextButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDNextButtonObjects4[i].Activate(true, null);
}
for(var i = 0, len = gdjs.TutorialCode.GDPreviousButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDPreviousButtonObjects4[i].Activate(true, null);
}
}
}

}


{

gdjs.copyArray(gdjs.TutorialCode.GDNextButtonObjects3, gdjs.TutorialCode.GDNextButtonObjects4);

gdjs.copyArray(gdjs.TutorialCode.GDPreviousButtonObjects3, gdjs.TutorialCode.GDPreviousButtonObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNextButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDNextButtonObjects4[i].isOnLayer("Tutorial3")) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDNextButtonObjects4[k] = gdjs.TutorialCode.GDNextButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNextButtonObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPreviousButtonObjects4.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPreviousButtonObjects4[i].isOnLayer("Tutorial3")) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPreviousButtonObjects4[k] = gdjs.TutorialCode.GDPreviousButtonObjects4[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPreviousButtonObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDNextButtonObjects4 */
/* Reuse gdjs.TutorialCode.GDPreviousButtonObjects4 */
{for(var i = 0, len = gdjs.TutorialCode.GDNextButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDNextButtonObjects4[i].Activate(false, null);
}
for(var i = 0, len = gdjs.TutorialCode.GDPreviousButtonObjects4.length ;i < len;++i) {
    gdjs.TutorialCode.GDPreviousButtonObjects4[i].Activate(false, null);
}
}
}

}


};gdjs.TutorialCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.TutorialCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PreviousButton"), gdjs.TutorialCode.GDPreviousButtonObjects2);

gdjs.TutorialCode.forEachTotalCount3 = 0;
gdjs.TutorialCode.forEachObjects3.length = 0;
gdjs.TutorialCode.forEachCount0_3 = gdjs.TutorialCode.GDNextButtonObjects2.length;
gdjs.TutorialCode.forEachTotalCount3 += gdjs.TutorialCode.forEachCount0_3;
gdjs.TutorialCode.forEachObjects3.push.apply(gdjs.TutorialCode.forEachObjects3,gdjs.TutorialCode.GDNextButtonObjects2);
gdjs.TutorialCode.forEachCount1_3 = gdjs.TutorialCode.GDPreviousButtonObjects2.length;
gdjs.TutorialCode.forEachTotalCount3 += gdjs.TutorialCode.forEachCount1_3;
gdjs.TutorialCode.forEachObjects3.push.apply(gdjs.TutorialCode.forEachObjects3,gdjs.TutorialCode.GDPreviousButtonObjects2);
for (gdjs.TutorialCode.forEachIndex3 = 0;gdjs.TutorialCode.forEachIndex3 < gdjs.TutorialCode.forEachTotalCount3;++gdjs.TutorialCode.forEachIndex3) {
gdjs.TutorialCode.GDNextButtonObjects3.length = 0;

gdjs.TutorialCode.GDPreviousButtonObjects3.length = 0;


if (gdjs.TutorialCode.forEachIndex3 < gdjs.TutorialCode.forEachCount0_3) {
    gdjs.TutorialCode.GDNextButtonObjects3.push(gdjs.TutorialCode.forEachObjects3[gdjs.TutorialCode.forEachIndex3]);
}
else if (gdjs.TutorialCode.forEachIndex3 < gdjs.TutorialCode.forEachCount0_3+gdjs.TutorialCode.forEachCount1_3) {
    gdjs.TutorialCode.GDPreviousButtonObjects3.push(gdjs.TutorialCode.forEachObjects3[gdjs.TutorialCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.TutorialCode.eventsList6(runtimeScene);} //Subevents end.
}
}

}


};gdjs.TutorialCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Tutorial1");
if (isConditionTrue_0) {
{gdjs.TutorialCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial1");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Tutorial2");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Tutorial2");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TutorialCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.TutorialCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial2");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Tutorial3");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Tutorial3");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TutorialCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Exploration", false);
}
}

}


};gdjs.TutorialCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Tutorial2");
if (isConditionTrue_0) {
{gdjs.TutorialCode.localVariables[0].getFromIndex(0).setBoolean(false);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial2");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Tutorial1");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Tutorial3");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = gdjs.TutorialCode.localVariables[0].getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial3");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Tutorial2");
}
}

}


};gdjs.TutorialCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Tutorial1");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial2");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial3");
}

{ //Subevents
gdjs.TutorialCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Tutorial2");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial1");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial3");
}

{ //Subevents
gdjs.TutorialCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Tutorial3");
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial1");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial2");
}

{ //Subevents
gdjs.TutorialCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.TutorialCode.GDNextButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNextButtonObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDNextButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDNextButtonObjects2[k] = gdjs.TutorialCode.GDNextButtonObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNextButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}

{ //Subevents
gdjs.TutorialCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PreviousButton"), gdjs.TutorialCode.GDPreviousButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPreviousButtonObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPreviousButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPreviousButtonObjects1[k] = gdjs.TutorialCode.GDPreviousButtonObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPreviousButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx\\ui_pop3.wav", false, 50, 1);
}

{ //Subevents
gdjs.TutorialCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.TutorialCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial3");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial2");
}

{ //Subevents
gdjs.TutorialCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(true);
variables._declare("else", variable);
}
gdjs.TutorialCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TutorialCode.eventsList10(runtimeScene);} //End of subevents
}
gdjs.TutorialCode.localVariables.pop();

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDTutorialTitleObjects1.length = 0;
gdjs.TutorialCode.GDTutorialTitleObjects2.length = 0;
gdjs.TutorialCode.GDTutorialTitleObjects3.length = 0;
gdjs.TutorialCode.GDTutorialTitleObjects4.length = 0;
gdjs.TutorialCode.GDTutorialTitleObjects5.length = 0;
gdjs.TutorialCode.GDNextButtonObjects1.length = 0;
gdjs.TutorialCode.GDNextButtonObjects2.length = 0;
gdjs.TutorialCode.GDNextButtonObjects3.length = 0;
gdjs.TutorialCode.GDNextButtonObjects4.length = 0;
gdjs.TutorialCode.GDNextButtonObjects5.length = 0;
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects1.length = 0;
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects2.length = 0;
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects3.length = 0;
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects4.length = 0;
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects5.length = 0;
gdjs.TutorialCode.GDTutorialText1Objects1.length = 0;
gdjs.TutorialCode.GDTutorialText1Objects2.length = 0;
gdjs.TutorialCode.GDTutorialText1Objects3.length = 0;
gdjs.TutorialCode.GDTutorialText1Objects4.length = 0;
gdjs.TutorialCode.GDTutorialText1Objects5.length = 0;
gdjs.TutorialCode.GDTutorialBackgroundObjects1.length = 0;
gdjs.TutorialCode.GDTutorialBackgroundObjects2.length = 0;
gdjs.TutorialCode.GDTutorialBackgroundObjects3.length = 0;
gdjs.TutorialCode.GDTutorialBackgroundObjects4.length = 0;
gdjs.TutorialCode.GDTutorialBackgroundObjects5.length = 0;
gdjs.TutorialCode.GDPreviousButtonObjects1.length = 0;
gdjs.TutorialCode.GDPreviousButtonObjects2.length = 0;
gdjs.TutorialCode.GDPreviousButtonObjects3.length = 0;
gdjs.TutorialCode.GDPreviousButtonObjects4.length = 0;
gdjs.TutorialCode.GDPreviousButtonObjects5.length = 0;
gdjs.TutorialCode.GDTutorialText2Objects1.length = 0;
gdjs.TutorialCode.GDTutorialText2Objects2.length = 0;
gdjs.TutorialCode.GDTutorialText2Objects3.length = 0;
gdjs.TutorialCode.GDTutorialText2Objects4.length = 0;
gdjs.TutorialCode.GDTutorialText2Objects5.length = 0;
gdjs.TutorialCode.GDImageObjects1.length = 0;
gdjs.TutorialCode.GDImageObjects2.length = 0;
gdjs.TutorialCode.GDImageObjects3.length = 0;
gdjs.TutorialCode.GDImageObjects4.length = 0;
gdjs.TutorialCode.GDImageObjects5.length = 0;
gdjs.TutorialCode.GDTutorialText3Objects1.length = 0;
gdjs.TutorialCode.GDTutorialText3Objects2.length = 0;
gdjs.TutorialCode.GDTutorialText3Objects3.length = 0;
gdjs.TutorialCode.GDTutorialText3Objects4.length = 0;
gdjs.TutorialCode.GDTutorialText3Objects5.length = 0;
gdjs.TutorialCode.GDExitMinigameButtonObjects1.length = 0;
gdjs.TutorialCode.GDExitMinigameButtonObjects2.length = 0;
gdjs.TutorialCode.GDExitMinigameButtonObjects3.length = 0;
gdjs.TutorialCode.GDExitMinigameButtonObjects4.length = 0;
gdjs.TutorialCode.GDExitMinigameButtonObjects5.length = 0;

gdjs.TutorialCode.eventsList11(runtimeScene);
gdjs.TutorialCode.GDTutorialTitleObjects1.length = 0;
gdjs.TutorialCode.GDTutorialTitleObjects2.length = 0;
gdjs.TutorialCode.GDTutorialTitleObjects3.length = 0;
gdjs.TutorialCode.GDTutorialTitleObjects4.length = 0;
gdjs.TutorialCode.GDTutorialTitleObjects5.length = 0;
gdjs.TutorialCode.GDNextButtonObjects1.length = 0;
gdjs.TutorialCode.GDNextButtonObjects2.length = 0;
gdjs.TutorialCode.GDNextButtonObjects3.length = 0;
gdjs.TutorialCode.GDNextButtonObjects4.length = 0;
gdjs.TutorialCode.GDNextButtonObjects5.length = 0;
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects1.length = 0;
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects2.length = 0;
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects3.length = 0;
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects4.length = 0;
gdjs.TutorialCode.GDMain_9595Menu_9595BackgroundObjects5.length = 0;
gdjs.TutorialCode.GDTutorialText1Objects1.length = 0;
gdjs.TutorialCode.GDTutorialText1Objects2.length = 0;
gdjs.TutorialCode.GDTutorialText1Objects3.length = 0;
gdjs.TutorialCode.GDTutorialText1Objects4.length = 0;
gdjs.TutorialCode.GDTutorialText1Objects5.length = 0;
gdjs.TutorialCode.GDTutorialBackgroundObjects1.length = 0;
gdjs.TutorialCode.GDTutorialBackgroundObjects2.length = 0;
gdjs.TutorialCode.GDTutorialBackgroundObjects3.length = 0;
gdjs.TutorialCode.GDTutorialBackgroundObjects4.length = 0;
gdjs.TutorialCode.GDTutorialBackgroundObjects5.length = 0;
gdjs.TutorialCode.GDPreviousButtonObjects1.length = 0;
gdjs.TutorialCode.GDPreviousButtonObjects2.length = 0;
gdjs.TutorialCode.GDPreviousButtonObjects3.length = 0;
gdjs.TutorialCode.GDPreviousButtonObjects4.length = 0;
gdjs.TutorialCode.GDPreviousButtonObjects5.length = 0;
gdjs.TutorialCode.GDTutorialText2Objects1.length = 0;
gdjs.TutorialCode.GDTutorialText2Objects2.length = 0;
gdjs.TutorialCode.GDTutorialText2Objects3.length = 0;
gdjs.TutorialCode.GDTutorialText2Objects4.length = 0;
gdjs.TutorialCode.GDTutorialText2Objects5.length = 0;
gdjs.TutorialCode.GDImageObjects1.length = 0;
gdjs.TutorialCode.GDImageObjects2.length = 0;
gdjs.TutorialCode.GDImageObjects3.length = 0;
gdjs.TutorialCode.GDImageObjects4.length = 0;
gdjs.TutorialCode.GDImageObjects5.length = 0;
gdjs.TutorialCode.GDTutorialText3Objects1.length = 0;
gdjs.TutorialCode.GDTutorialText3Objects2.length = 0;
gdjs.TutorialCode.GDTutorialText3Objects3.length = 0;
gdjs.TutorialCode.GDTutorialText3Objects4.length = 0;
gdjs.TutorialCode.GDTutorialText3Objects5.length = 0;
gdjs.TutorialCode.GDExitMinigameButtonObjects1.length = 0;
gdjs.TutorialCode.GDExitMinigameButtonObjects2.length = 0;
gdjs.TutorialCode.GDExitMinigameButtonObjects3.length = 0;
gdjs.TutorialCode.GDExitMinigameButtonObjects4.length = 0;
gdjs.TutorialCode.GDExitMinigameButtonObjects5.length = 0;


return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
