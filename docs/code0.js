gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDStartButtonObjects1= [];
gdjs.Main_32MenuCode.GDStartButtonObjects2= [];
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects1= [];
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects2= [];
gdjs.Main_32MenuCode.GDCreditsButtonObjects1= [];
gdjs.Main_32MenuCode.GDCreditsButtonObjects2= [];
gdjs.Main_32MenuCode.GDStatuesCollectedCounterObjects1= [];
gdjs.Main_32MenuCode.GDStatuesCollectedCounterObjects2= [];
gdjs.Main_32MenuCode.GDPauseButtonObjects1= [];
gdjs.Main_32MenuCode.GDPauseButtonObjects2= [];
gdjs.Main_32MenuCode.GDCycleInventoryNextObjects1= [];
gdjs.Main_32MenuCode.GDCycleInventoryNextObjects2= [];
gdjs.Main_32MenuCode.GDInventoryBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDInventoryBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDInventoryItemObjects1= [];
gdjs.Main_32MenuCode.GDInventoryItemObjects2= [];
gdjs.Main_32MenuCode.GDUIBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDUIBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDCycleInventoryPreviousObjects1= [];
gdjs.Main_32MenuCode.GDCycleInventoryPreviousObjects2= [];
gdjs.Main_32MenuCode.GDSelectedItemBorderObjects1= [];
gdjs.Main_32MenuCode.GDSelectedItemBorderObjects2= [];
gdjs.Main_32MenuCode.GDHoverTooltipObjects1= [];
gdjs.Main_32MenuCode.GDHoverTooltipObjects2= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Main_32MenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDStartButtonObjects1[i].IsPressed(null) ) {
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

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDCreditsButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDCreditsButtonObjects1[k] = gdjs.Main_32MenuCode.GDCreditsButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDStatuesCollectedCounterObjects1.length = 0;
gdjs.Main_32MenuCode.GDStatuesCollectedCounterObjects2.length = 0;
gdjs.Main_32MenuCode.GDPauseButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPauseButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDCycleInventoryNextObjects1.length = 0;
gdjs.Main_32MenuCode.GDCycleInventoryNextObjects2.length = 0;
gdjs.Main_32MenuCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDInventoryItemObjects1.length = 0;
gdjs.Main_32MenuCode.GDInventoryItemObjects2.length = 0;
gdjs.Main_32MenuCode.GDUIBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDUIBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDCycleInventoryPreviousObjects1.length = 0;
gdjs.Main_32MenuCode.GDCycleInventoryPreviousObjects2.length = 0;
gdjs.Main_32MenuCode.GDSelectedItemBorderObjects1.length = 0;
gdjs.Main_32MenuCode.GDSelectedItemBorderObjects2.length = 0;
gdjs.Main_32MenuCode.GDHoverTooltipObjects1.length = 0;
gdjs.Main_32MenuCode.GDHoverTooltipObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDMain_9595Menu_9595BackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDCreditsButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDStatuesCollectedCounterObjects1.length = 0;
gdjs.Main_32MenuCode.GDStatuesCollectedCounterObjects2.length = 0;
gdjs.Main_32MenuCode.GDPauseButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPauseButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDCycleInventoryNextObjects1.length = 0;
gdjs.Main_32MenuCode.GDCycleInventoryNextObjects2.length = 0;
gdjs.Main_32MenuCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDInventoryItemObjects1.length = 0;
gdjs.Main_32MenuCode.GDInventoryItemObjects2.length = 0;
gdjs.Main_32MenuCode.GDUIBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDUIBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDCycleInventoryPreviousObjects1.length = 0;
gdjs.Main_32MenuCode.GDCycleInventoryPreviousObjects2.length = 0;
gdjs.Main_32MenuCode.GDSelectedItemBorderObjects1.length = 0;
gdjs.Main_32MenuCode.GDSelectedItemBorderObjects2.length = 0;
gdjs.Main_32MenuCode.GDHoverTooltipObjects1.length = 0;
gdjs.Main_32MenuCode.GDHoverTooltipObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
