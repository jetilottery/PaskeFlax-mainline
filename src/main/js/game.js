(function mainEntry(){
    "use strict";

    // Game Namespace - edit here and in webapp/game_settings.json
    let NAMESPACE = "PaskeFlax";

    window.game = window.game || {};
    window.game[NAMESPACE] = window.game[NAMESPACE] || {};
    window.game[NAMESPACE].lib = {};
    window.game[NAMESPACE].lib.Main = function Main(){};



    require.onError = function (err) {
        if (err.requireType === 'timeout') {
            console.log('modules: ' + err.requireModules);
        }

        throw err;
    };

    window.game[NAMESPACE].lib.Main.prototype.init = function init(config){

        if(config && config.urlGameFolder){
            require.config({baseUrl: config.urlGameFolder});
        }

        require.onResourceLoad = function (context, map) {
            if (!window.loadedRequireArray) {
                window.loadedRequireArray = [];
            }
            window.loadedRequireArray.push(map.name);
        };
        
        let _game = this;
        
        require([
            "skbJet/component/SKBeInstant/SKBeInstant",
            "skbJet/componentManchester/standardIW/gameSize",
            "skbJet/componentManchester/standardIW/loadController",
            "game/gameEntry"
        ], function(SKBeInstant) {
            SKBeInstant.init(config, _game);
        });
    };

    //if there is launcher.html in pathname then it should be SKB/RGS env
    if(window.location.pathname.match(/launcher\.html$/)) {
        require(["skbJet/component/gameMsgBus/PlatformMsgBusAdapter"], function(){
            let gameInstance = new window.game[NAMESPACE].lib.Main();
            gameInstance.init();
        });
    }
})();
