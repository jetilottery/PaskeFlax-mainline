define(function(require) {
    const gameFlow = require("skbJet/componentManchester/standardIW/gameFlow");
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const meterData = require("skbJet/componentManchester/standardIW/meterData");
    const resources = require("skbJet/component/resourceLoader/resourceLib");
    const isMobileOrTablet = require("skbJet/componentLondon/utils/isMobileOrTablet");
    const autoPlay = require("skbJet/componentManchester/standardIW/autoPlay");
    const SKBeInstant = require("skbJet/component/SKBeInstant/SKBeInstant");
    const nokFormat = require("skbJet/componentLondon/utils/nokFormat");


    require("com/gsap/TweenLite");
    require("com/gsap/TimelineLite");

    let Tween = window.TweenLite;
    let Timeline = window.TimelineLite;

    return function introComponent(parts) {
        // initial setup;
        parts.intro.visible = true;
        parts.flaxLogo.visible = true;
        parts.logoSmall.alpha = 0;
        parts.ticketPrice.text = nokFormat(meterData.ticketCost);
        parts.balanceMeter.text = ""; //start with no text until the balance is updated

        let showBuy = SKBeInstant.config.wagerType === "BUY" && SKBeInstant.config.gameType === "normal";
        let showTry = SKBeInstant.config.wagerType === "TRY" && SKBeInstant.config.gameType === "normal";

        msgBus.publish("UI.updateButtons", {
            audioOn: {visible: true, enabled: true},
            audioOff: {visible: true, enabled: true},
            left: {visible: false},
            right: {visible: false, enabled: true},
            info: {visible: true, enabled: true},
            back: {visible: false},
            scratchAll: {visible: false},
            gamePips: {visible: false},
            buy: {visible: showBuy, enabled: showBuy},
            try: {visible: showTry, enabled: showTry}
        });

        parts.chicken.onComplete = function fadeScale() {
            Tween.to(parts.chicken, 0.541666, {alpha: 0});
            Tween.to(parts.chicken.scale, 0.541666, {x: 0.5, y: 0.5});
            parts.squareSmall3.visible = false;
            parts.squareSmall2.visible = false;
            parts.squareSmall1.visible = false;
            parts.squareLarge.visible = false;
            parts.squareText.visible = false;
            parts.logoLarge.visible = false;
            parts.diamond.visible = false;
        };

        let introTimeLine = new Timeline({paused: true, onComplete: endIntro})
            .to(parts.squareStatic, 0.208333, {alpha: 0}, 0)
            .to(parts.squareSmall3, 0.208333, {rotation: -Math.PI/2, x: -parts.squareSmall3.width/2}, 0.208333)
            .to(parts.squareSmall2, 0.208333, {rotation: -Math.PI/2, x:  -parts.squareSmall2.width/2}, 0.333333)
            .to(parts.squareSmall1, 0.25, {rotation: -Math.PI, x:  -parts.squareSmall1.width/2}, 0.458333)
            .to(parts.squareLarge, 0.208333, {rotation: -Math.PI/2, x: -parts.squareLarge.width/2}, 0.708333)
            .to(parts.squareText, 0.208333, {rotation: -Math.PI, x: -150}, 0.708333)
            .to(parts.logoSmall, 0.416666, {alpha: 1}, 0.958333)
            .to(parts.logoLarge, 0.166666, {alpha: 0, rotation: 0.29147}, 1.708333).to(parts.logoLarge.scale, 0.166666, {x: 0.6, y: 0.6})
            .to(parts.diamond.scale, 0.125, {x: 1.1, y: 1.1}).to(parts.diamond.scale, 0.208333, {x: 0, y: 0}).to(parts.diamond, 0.208333, {alpha: 0}, 1.8749997)
            .call(t, null, null, 1.166666);

        function t() {
            parts.chicken.gotoAndPlay(0);
        }

        function play() {
            introTimeLine.play(0);
        }

        function endIntro() {
            //Show buttons after intro
            msgBus.publish("UI.updateButtons", {
                audioOn: {visible: true, enabled: true},
                audioOff: {visible: true, enabled: true},
                left: {visible: true, enabled: false},
                right: {visible: true, enabled: true},
                info: {visible: true, enabled: true},
                back: {visible: false, enabled: true},
                scratchAll: {visible: true, enabled: true},
                gamePips: {visible: true, enabled: true},
                buy: {visible: false},
                try: {visible: false},
                playAgain: {visible: false}
            });
            if(!isMobileOrTablet) {
                msgBus.publish("Game.Change", {gameIndex: 99, transition: "fadeToMenu"});
            } else {
                msgBus.publish("Game.Change", {gameIndex: 0, transition: "fadeToGame"});
            }

            gameFlow.next("START_REVEAL");
        }

        function restart() {
            msgBus.publish("Game.Change", {gameIndex: 99});

            window.introParts = parts;

            //I can't figure out a clever way to reset this
            parts.squareSmall3.visible = true;
            parts.squareSmall2.visible = true;
            parts.squareSmall1.visible = true;
            parts.squareLarge.visible = true;
            parts.squareText.visible = true;
            parts.logoSmall.visible = true;
            parts.logoLarge.visible = true;
            parts.diamond.visible = true;
            parts.chicken.visible = true;

            parts.squareSmall3.alpha = 1;
            parts.squareSmall3.rotation = 0;
            parts.squareSmall3.x = !isMobileOrTablet ? 221 : 228;

            parts.squareSmall2.alpha = 1;
            parts.squareSmall2.rotation = 0;
            parts.squareSmall2.x = !isMobileOrTablet ? 164 : 172;

            parts.squareSmall1.alpha = 1;
            parts.squareSmall1.rotation = 0;
            parts.squareSmall1.x = !isMobileOrTablet ? 103 : 110;

            parts.squareStatic.alpha = 1;

            parts.squareLarge.alpha = 1;
            parts.squareLarge.x = !isMobileOrTablet ? -3 : 0;

            parts.squareText.alpha = 1;
            parts.squareText.rotation = 0;
            parts.squareText.x = !isMobileOrTablet ? 10 : 20;

            parts.logoSmall.alpha = 0;

            parts.logoLarge.alpha = 1;
            parts.logoLarge.rotation = 0;
            parts.logoLarge.scale.set(1);

            parts.diamond.alpha = 1;
            parts.diamond.scale.set(1);

            parts.chicken.alpha = 1;
            parts.chicken.scale.set(1);

            autoPlay._suspended = false; //something suspends this, fixlater
            
            parts.intro.alpha = 0;
            gameFlow.next("GAME_RESET");

            Tween.to(parts.intro, 3, {
                alpha: 1
            });
        }

        // Attach start call to startNetworkActivity message
        
        msgBus.subscribe("Game.Intro", play);
        msgBus.subscribe("Game.Finish", restart);
        msgBus.subscribe("MeterData.Balance", (data) => {
           parts.balanceMeter.text = resources.i18n.game.Game.balanceMeter + SKBeInstant.formatCurrency(data).formattedAmount;
        });

        return parts.intro;
    };
});
