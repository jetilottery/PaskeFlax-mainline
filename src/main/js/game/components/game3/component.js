define(function(require) {
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const curveText = require("skbJet/componentLondon/utils/curveText");
    const resources = require("skbJet/component/resourceLoader/resourceLib");
    const app = require("skbJet/componentManchester/standardIW/app");
    const mainLayout = require("game/template/layout");
    const gameLayout = require("game/components/game3/layout");
    const layoutEngine = require("skbJet/componentManchester/standardIW/layout/engine");
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const playerTilesG3 = require("game/components/game3/playerTilesG3");
    const PIXI = require("com/pixijs/pixi");

    require("com/gsap/TweenLite");
    require("com/gsap/TimelineLite");

    let Tween = window.TweenLite;
    let Timeline = window.TimelineLite;
    let index = 2;
    let enabled = false;

    return function game3Component(parts) {
        let slideTime = resources.i18n.config.gameSelectSlideTransitionInterval;
        let fadeTime = resources.i18n.config.gameSelectFadeTransitionInterval;
        let container = parts.game3;
        container.hitArea = new PIXI.Rectangle(parts.bgG3.x, parts.bgG3.y, parts.bgG3.width, parts.bgG3.height);

        // initial setup;
        container.alpha = 0;
        if(isMobileOrTablet) {
            container.x = app.renderer.width;
        }

        //Replace tagLine with curved text
        let curvedTagLineG3 = curveText(parts.tagLineG3, 500, 1);
        parts.bgG3.removeChild(parts.tagLineG3);
        parts.bgG3.addChild(curvedTagLineG3);
        
        function restart() {
            Tween.to(container, 0.25, {alpha: 0});
            if(isMobileOrTablet) {
                container.x = app.renderer.width;
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
            playerTilesG3.setActive(enabled);
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
