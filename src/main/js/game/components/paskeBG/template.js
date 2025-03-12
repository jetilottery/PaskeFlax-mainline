define(function(require) {
    const layoutEngine = require('skbJet/componentManchester/standardIW/layout/engine');
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const bgLayout = require('game/components/paskeBG/layout');
    const bgComponent = require('game/components/paskeBG/component');
    const mainLayout = require('game/template/layout');
    
    return function bgTemplate() {
        let displayList = layoutEngine.createFromTree(
            bgLayout._BASE_BG,
            null,
            [window.mainLayout, mainLayout, bgLayout],
            isMobileOrTablet ? "portrait" : "landscape"
        );
        
        return bgComponent({
            paskeBG: displayList.paskeBG,
            animBG: displayList.animBG,
            backgroundHill: displayList.backgroundHill,
            cheekyChickenFront: displayList.cheekyChickenFront,
            cheekyChickenFrontG2: displayList.cheekyChickenFrontG2,
            cheekyChickenLeftSide: displayList.cheekyChickenLeftSide,
            cheekyChickenRightSide: displayList.cheekyChickenRightSide,
            backgroundGrass: displayList.backgroundGrass
        });
    };
});
