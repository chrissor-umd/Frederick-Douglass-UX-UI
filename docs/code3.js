gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.idToCallbackMap = new Map();
gdjs.CreditsCode.GDCredits_9595TextObjects1= [];
gdjs.CreditsCode.GDCredits_9595TextObjects2= [];
gdjs.CreditsCode.GDBackButtonObjects1= [];
gdjs.CreditsCode.GDBackButtonObjects2= [];
gdjs.CreditsCode.GDBackgroundObjects1= [];
gdjs.CreditsCode.GDBackgroundObjects2= [];
gdjs.CreditsCode.GDStatuesCollectedCounterObjects1= [];
gdjs.CreditsCode.GDStatuesCollectedCounterObjects2= [];
gdjs.CreditsCode.GDPauseButtonObjects1= [];
gdjs.CreditsCode.GDPauseButtonObjects2= [];
gdjs.CreditsCode.GDCycleInventoryNextObjects1= [];
gdjs.CreditsCode.GDCycleInventoryNextObjects2= [];
gdjs.CreditsCode.GDInventoryBackgroundObjects1= [];
gdjs.CreditsCode.GDInventoryBackgroundObjects2= [];
gdjs.CreditsCode.GDInventoryItemObjects1= [];
gdjs.CreditsCode.GDInventoryItemObjects2= [];
gdjs.CreditsCode.GDUIBackgroundObjects1= [];
gdjs.CreditsCode.GDUIBackgroundObjects2= [];
gdjs.CreditsCode.GDCycleInventoryPreviousObjects1= [];
gdjs.CreditsCode.GDCycleInventoryPreviousObjects2= [];
gdjs.CreditsCode.GDSelectedItemBorderObjects1= [];
gdjs.CreditsCode.GDSelectedItemBorderObjects2= [];
gdjs.CreditsCode.GDHoverTooltipObjects1= [];
gdjs.CreditsCode.GDHoverTooltipObjects2= [];


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.CreditsCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDBackButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDBackButtonObjects1[k] = gdjs.CreditsCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDCredits_9595TextObjects1.length = 0;
gdjs.CreditsCode.GDCredits_9595TextObjects2.length = 0;
gdjs.CreditsCode.GDBackButtonObjects1.length = 0;
gdjs.CreditsCode.GDBackButtonObjects2.length = 0;
gdjs.CreditsCode.GDBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDStatuesCollectedCounterObjects1.length = 0;
gdjs.CreditsCode.GDStatuesCollectedCounterObjects2.length = 0;
gdjs.CreditsCode.GDPauseButtonObjects1.length = 0;
gdjs.CreditsCode.GDPauseButtonObjects2.length = 0;
gdjs.CreditsCode.GDCycleInventoryNextObjects1.length = 0;
gdjs.CreditsCode.GDCycleInventoryNextObjects2.length = 0;
gdjs.CreditsCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDInventoryItemObjects1.length = 0;
gdjs.CreditsCode.GDInventoryItemObjects2.length = 0;
gdjs.CreditsCode.GDUIBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDUIBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDCycleInventoryPreviousObjects1.length = 0;
gdjs.CreditsCode.GDCycleInventoryPreviousObjects2.length = 0;
gdjs.CreditsCode.GDSelectedItemBorderObjects1.length = 0;
gdjs.CreditsCode.GDSelectedItemBorderObjects2.length = 0;
gdjs.CreditsCode.GDHoverTooltipObjects1.length = 0;
gdjs.CreditsCode.GDHoverTooltipObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
gdjs.CreditsCode.GDCredits_9595TextObjects1.length = 0;
gdjs.CreditsCode.GDCredits_9595TextObjects2.length = 0;
gdjs.CreditsCode.GDBackButtonObjects1.length = 0;
gdjs.CreditsCode.GDBackButtonObjects2.length = 0;
gdjs.CreditsCode.GDBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDStatuesCollectedCounterObjects1.length = 0;
gdjs.CreditsCode.GDStatuesCollectedCounterObjects2.length = 0;
gdjs.CreditsCode.GDPauseButtonObjects1.length = 0;
gdjs.CreditsCode.GDPauseButtonObjects2.length = 0;
gdjs.CreditsCode.GDCycleInventoryNextObjects1.length = 0;
gdjs.CreditsCode.GDCycleInventoryNextObjects2.length = 0;
gdjs.CreditsCode.GDInventoryBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDInventoryBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDInventoryItemObjects1.length = 0;
gdjs.CreditsCode.GDInventoryItemObjects2.length = 0;
gdjs.CreditsCode.GDUIBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDUIBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDCycleInventoryPreviousObjects1.length = 0;
gdjs.CreditsCode.GDCycleInventoryPreviousObjects2.length = 0;
gdjs.CreditsCode.GDSelectedItemBorderObjects1.length = 0;
gdjs.CreditsCode.GDSelectedItemBorderObjects2.length = 0;
gdjs.CreditsCode.GDHoverTooltipObjects1.length = 0;
gdjs.CreditsCode.GDHoverTooltipObjects2.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
