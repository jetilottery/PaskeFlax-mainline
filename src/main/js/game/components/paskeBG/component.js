define(function(require) {
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const resources = require("skbJet/component/resourceLoader/resourceLib");
    const app = require("skbJet/componentManchester/standardIW/app");
    require('com/gsap/TweenLite');
    require('com/gsap/TimelineLite');

    let Tween = window.TweenLite;
    let Timeline = window.TimelineLite;

    let HOP_DIST = 24;
    let HOP_TIME = 0.12;
    let CHICKEN_TIME_MIN = 10;
    let CHICKEN_TIME_MAX = 30;
    let chickenTween;

    return function bgComponent(parts) {
        let slideTime = resources.i18n.config.gameSelectSlideTransitionInterval * 2;
        let gameIndex = 99;

        // hide initially;
        parts.animBG.alpha = 0;
        parts.cheekyChickenFront.visible = false;
        parts.cheekyChickenFrontG2.visible = false;
        parts.cheekyChickenLeftSide.visible = false;
        parts.cheekyChickenRightSide.visible = false;
        parts.backgroundGrass.alpha = 0;
        parts.backgroundHill.alpha = 0;

        let bgTimeline = new Timeline({paused: true})
            .to(parts.backgroundGrass, 0.208333, {alpha: 1}, 0.958333)
            .to(parts.backgroundGrass, 0.166666, {y: "+=48"}, 1.166667)
            .to(parts.backgroundGrass, 0.083333, {y: "-=48"}, 1.333333)
            .to(parts.backgroundHill, 0.25, {alpha: 1}, 1.166666)
            .to(parts.backgroundHill, 0.166666, {y: "+=10"}, 1.416666)
            .to(parts.backgroundHill, 0.125, {y: "-=10"}, 1.583333)
            .to(parts.animBG, 0.25, {alpha: 1}, 1.725);

        function waitRandom() {
            let pick = Math.floor(Math.random() * parts.animBG.children.length - 0.00000001);
            Tween.delayedCall(Math.random() / 2, hop, [parts.animBG.children[pick]]);
        }

        function waitRandom2() {
            parts.cheekyChickenFront.visible = false;
            parts.cheekyChickenFrontG2.visible = false;
            parts.cheekyChickenLeftSide.visible = false;
            parts.cheekyChickenRightSide.visible = false;
            chickenTween = Tween.delayedCall(CHICKEN_TIME_MIN + (Math.random() * (CHICKEN_TIME_MAX - CHICKEN_TIME_MIN)), cheekyChicken);
        }

        function hop(sprite) {
            let hop0 = sprite.y;
            let hop1 = sprite.y - (HOP_DIST * sprite.scale.y);
            new Timeline().to(sprite, HOP_TIME, {y: hop1}, 0).to(sprite, HOP_TIME, {y: hop0}, HOP_TIME).call(waitRandom, null, this, HOP_TIME*2);
        }


        parts.cheekyChickenFront.onComplete = parts.cheekyChickenFrontG2.onComplete = parts.cheekyChickenLeftSide.onComplete = parts.cheekyChickenRightSide.onComplete = function hide() {
            parts.cheekyChickenFront.visible = false;
            parts.cheekyChickenFrontG2.visible = false;
            parts.cheekyChickenLeftSide.visible = false;
            parts.cheekyChickenRightSide.visible = false;
            waitRandom2();
        };

        function cheekyChicken(data) {
            let anims = [
                parts.cheekyChickenFront,
                parts.cheekyChickenFrontG2,
                parts.cheekyChickenLeftSide,
                parts.cheekyChickenRightSide
            ];
            let type;
            if(data && data.type) {
                type = data.type;
            } else {
                type = gameIndex;
            }
            if(gameIndex > anims.length) {
                type = 0;
            }
            anims[type].visible = true;
            anims[type].gotoAndPlay(0);
        }
        window.cc = function(c) {
            parts.cheekyChickenFront.onComplete = parts.cheekyChickenFrontG2.onComplete = parts.cheekyChickenLeftSide.onComplete = parts.cheekyChickenRightSide.onComplete = function hide() {
                parts.cheekyChickenFront.visible = false;
                parts.cheekyChickenFrontG2.visible = false;
                parts.cheekyChickenLeftSide.visible = false;
                parts.cheekyChickenRightSide.visible = false;
            };

            cheekyChicken({type: c});
        };
        
        function play() {
            bgTimeline.play(0);
            waitRandom2();
        }

        function restart() {
            chickenTween.kill();
            parts.cheekyChickenFront.onComplete = parts.cheekyChickenFrontG2.onComplete = parts.cheekyChickenLeftSide.onComplete = parts.cheekyChickenRightSide.onComplete = null;
            parts.cheekyChickenFront.visible = false;
            parts.cheekyChickenFrontG2.visible = false;
            parts.cheekyChickenLeftSide.visible = false;
            parts.cheekyChickenRightSide.visible = false;
            
            parts.paskeBG.alpha = 1;
            parts.animBG.alpha = 0;
            parts.backgroundGrass.alpha = 0;
            parts.backgroundHill.alpha = 0;
        }

        function change(data) {
            gameIndex = data.gameIndex;
            parts.cheekyChickenFront.gotoAndStop(0);
            parts.cheekyChickenFrontG2.gotoAndStop(0);
            parts.cheekyChickenLeftSide.gotoAndStop(0);
            parts.cheekyChickenRightSide.gotoAndStop(0);
            parts.cheekyChickenFront.visible = false;
            parts.cheekyChickenFrontG2.visible = false;
            parts.cheekyChickenLeftSide.visible = false;
            parts.cheekyChickenRightSide.visible = false;
            switch(data.transition) {
                case "slideLeft":
                    if(data.gameIndex <= 1) {
						Tween.to(parts.backgroundHill, slideTime, {
							x: 0
						});
						Tween.to(parts.animBG, slideTime, {
							x: 0
						});
                    }
                    break;
                case "slideRight":
                    if(data.gameIndex >= 2) {
						Tween.to(parts.backgroundHill, slideTime, {
							x: -parts.backgroundHill.width + app.renderer.width
						});
						Tween.to(parts.animBG, slideTime, {
							x: -parts.backgroundHill.width + app.renderer.width
						});
					}
                    break;
                default:
                    //do nothing
            }
        }

        msgBus.subscribe("Game.Intro", play);
        msgBus.subscribe("Game.Finish", restart);
        msgBus.subscribe("Game.Change", change);
        msgBus.subscribe("Game.Cheeky", cheekyChicken);
        waitRandom();

        return parts.paskeBG;
    };
});
