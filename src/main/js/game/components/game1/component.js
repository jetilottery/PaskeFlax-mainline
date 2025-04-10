define(function(require) {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const resources = require("skbJet/component/resourceLoader/resourceLib");
    const app = require("skbJet/componentManchester/standardIW/app");
    const mainLayout = require("game/template/layout");
    const gameLayout = require("game/components/game1/layout");
    const layoutEngine = require("skbJet/componentManchester/standardIW/layout/engine");
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");

    const luckyTilesG1 = require("game/components/game1/luckyTilesG1");
    const playerTilesG1 = require("game/components/game1/playerTilesG1");
    const PIXI = require("com/pixijs/pixi");
    require("com/gsap/TweenLite");
    require("com/gsap/TimelineLite");

    let Tween = window.TweenLite;
    let Timeline = window.TimelineLite;
    let index = 0;
    let enabled = window.innerWidth < window.innerHeight; //Start game enabled when in mobile/portrait mode

    return function game1Component(parts) {
        let slideTime = resources.i18n.config.gameSelectSlideTransitionInterval;
        let fadeTime = resources.i18n.config.gameSelectFadeTransitionInterval;
        let container = parts.game1;
        container.hitArea = new PIXI.Rectangle(parts.bgG1.x, parts.bgG1.y, parts.bgG1.width, parts.bgG1.height);

        // initial setup;
        container.alpha = 0;
        
        function restart() {
            Tween.to(container, 0.25, {alpha: 0});
            if(isMobileOrTablet) {
                container.x = 0;
            }
        }

        function change(data) {
            data = data || {gameIndex: 0};
            enabled = (data.gameIndex === index);
            container.interactive = false;
            container.interactiveChildren = false;

            switch(data.transition) {
                case "slideLeft":
                    if(enabled) {
                        container.alpha = 1;
                        container.x = -app.renderer.width;
                        Tween.to(container, slideTime, {x: 0, visible: 1, onComplete: () => {
                            msgBus.publish("UI.GameReady");
                            container.interactiveChildren = true;
                        }});
                    } else if(container.x === 0) {
                        Tween.to(container, slideTime, {x: app.renderer.width, visible: 0, onComplete: () => {
                            container.interactiveChildren = true;
                        }});
                    }
                    break;
                case "slideRight":
                    if(enabled) {
                        container.alpha = 1;
                        container.x = app.renderer.width;
                        Tween.to(container, slideTime, {x: 0, visible: 1, onComplete: () => {
                            msgBus.publish("UI.GameReady");
                            container.interactiveChildren = true;
                        }});
                    } else if(container.x === 0) {
                        Tween.to(container, slideTime, {x: -app.renderer.width, visible: 0, onComplete: () => {
                            container.interactiveChildren = true;
                        }});
                    }
                    break;
                case "fadeToGame":
                    if(enabled) {
                        new Timeline()
                            .to(container, fadeTime, {alpha: 0, visible: 0})
                            .call(layoutEngine.update, [gameLayout._BASE_GAME, [mainLayout, gameLayout], !isMobileOrTablet ? "landscapeSelected" : "portrait"])
                            .to(container, fadeTime, {alpha: 1, visible: 1})
                            .call(() => {
                                msgBus.publish("UI.GameReady");
                                container.interactiveChildren = true;
                            });
                    } else {
                        Tween.to(container, fadeTime, {alpha: 0, visible: 0});
                    }
                    break;
                case "fadeToMenu":
                    new Timeline()
                        .to(container, fadeTime, {alpha: 0, visible: 0})
                        .call(layoutEngine.update, [gameLayout._BASE_GAME, [mainLayout, gameLayout], isMobileOrTablet ? "portrait" : "landscape"])
                        .to(container, fadeTime, {alpha: 1, visible: 1})
                        .call(() => {
                            msgBus.publish("UI.GameReady");
                            container.interactive = true;
                        });
                    break;
                default:
                    //Show current game without any transition
                    layoutEngine.update(gameLayout._BASE_GAME, [mainLayout, gameLayout], isMobileOrTablet ? "portrait" : "landscape");
                    if(isMobileOrTablet) {
                        container.interactiveChildren = true;
                    } else {
                        container.interactive = true;
                    }
                    container.alpha = 1;
                    container.visible = enabled;
            }
        }
        
        function setActive() {
            playerTilesG1.setActive(enabled);
            luckyTilesG1.setActive(enabled);
        }

        container.on("pointertap", (event) => {
            if(event.data.button !== 2) {
                msgBus.publish("Game.Change", {gameIndex: index, transition: "fadeToGame"});
            }
        });

        msgBus.subscribe("Game.Finish", restart);
        msgBus.subscribe("Game.Change", change);
        msgBus.subscribe("UI.GameReady", setActive);

        return container;
    };
});