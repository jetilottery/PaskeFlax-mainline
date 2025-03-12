define(require => {
    const PIXI = require("com/pixijs/pixi");
    const msgBus = require("skbJet/component/gameMsgBus/GameMsgBus");
    const displayList = require("skbJet/componentManchester/standardIW/displayList");
    const TextStyles = require("skbJet/componentManchester/standardIW/textStyles");
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const PlayerTile = require("./PlayerTileG4");
    const audio = require("skbJet/componentManchester/standardIW/audio");

    require("com/gsap/TweenLite");
    const Tween = window.TweenLite;

    const lookupIcons = {
        "symSunglasses":    ["legendShades0G4", "legendShades1G4", "legendShades2G4"],
        "symSun":           ["legendSun0G4", "legendSun1G4", "legendSun2G4", "legendSun3G4"],
        "symSkis":          ["legendSkis0G4", "legendSkis1G4", "legendSkis2G4", "legendSkis3G4", "legendSkis4G4"],
        "symFlower":        ["legendFlower0G4", "legendFlower1G4", "legendFlower2G4", "legendFlower3G4", "legendFlower4G4", "legendFlower5G4"],
        "symSnowflake":     ["legendSnowflake0G4", "legendSnowflake1G4", "legendSnowflake2G4", "legendSnowflake3G4", "legendSnowflake4G4", "legendSnowflake5G4", "legendSnowflake6G4"],
        "symBunny":         ["legendRabbit0G4", "legendRabbit1G4", "legendRabbit2G4", "legendRabbit3G4", "legendRabbit4G4", "legendRabbit5G4", "legendRabbit6G4", "legendRabbit7G4"],
        "symChick":         ["legendChick0G4", "legendChick1G4", "legendChick2G4", "legendChick3G4", "legendChick4G4", "legendChick5G4", "legendChick6G4", "legendChick7G4", "legendChick8G4"]
    };

    const lookupLabels = {
        "symSunglasses":    ["legendQuantity6G4", "legendValue6G4"],
        "symSun":           ["legendQuantity5G4", "legendValue5G4"],
        "symSkis":          ["legendQuantity4G4", "legendValue4G4"],
        "symFlower":        ["legendQuantity3G4", "legendValue3G4"],
        "symSnowflake":     ["legendQuantity2G4", "legendValue2G4"],
        "symBunny":         ["legendQuantity1G4", "legendValue1G4"],
        "symChick":         ["legendQuantity0G4", "legendValue0G4"]
    };

    const lookupPrizes = {
        "symSunglasses":    10000,
        "symSun":           20000,
        "symSkis":          50000,
        "symFlower":        100000,
        "symSnowflake":     1000000,
        "symBunny":         5000000,
        "symChick":         50000000
    };

    let tiles;
    let numbers;

    function init() {
        tiles = [
            PlayerTile.fromContainer(displayList.playerTile1G4, 2),
            PlayerTile.fromContainer(displayList.playerTile2G4, 3),
            PlayerTile.fromContainer(displayList.playerTile3G4, 6),
            PlayerTile.fromContainer(displayList.playerTile4G4, 3),
            PlayerTile.fromContainer(displayList.playerTile5G4, 1),
            PlayerTile.fromContainer(displayList.playerTile6G4, 2),
            PlayerTile.fromContainer(displayList.playerTile7G4, 4),
            PlayerTile.fromContainer(displayList.playerTile8G4, 5),
            PlayerTile.fromContainer(displayList.playerTile9G4, 6),
            PlayerTile.fromContainer(displayList.playerTile10G4, 4),
            PlayerTile.fromContainer(displayList.playerTile11G4, 1),
            PlayerTile.fromContainer(displayList.playerTile12G4, 5),
            PlayerTile.fromContainer(displayList.playerTile13G4, 6),
            PlayerTile.fromContainer(displayList.playerTile14G4, 2),
            PlayerTile.fromContainer(displayList.playerTile15G4, 1),
            PlayerTile.fromContainer(displayList.playerTile16G4, 3),
            PlayerTile.fromContainer(displayList.playerTile17G4, 4),
            PlayerTile.fromContainer(displayList.playerTile18G4, 3),
            PlayerTile.fromContainer(displayList.playerTile19G4, 5),
            PlayerTile.fromContainer(displayList.playerTile20G4, 4)
        ];
    }

    function populate(data) {
        numbers = data;
    }

    function enable() {
        // Return an array of promises for each tile's lifecycle
        return tiles.map(async tile => {
            // Get the next Winning Number
            const nextData = numbers.shift();
            // Populate the tile with the next Winning Number, ready to be uncovered
            tile.populate(nextData);
            // Enable the tile and wait for it to be revealed (manually or automatically)
            await tile.enable();
            // Play the Winning Number reveal audio
            audio.playSequential("playerNumber");
            // Wait for the uncover animation (if animated)
            await tile.scratch();
            msgBus.publish("Game.PlayerTileG4", nextData);

            //Update Legend
            for(let objName of lookupIcons[tile.numberFrame]) {
                if(!displayList[objName].matched) {
                    displayList[objName].texture = PIXI.Texture.fromFrame("key" + tile.numberFrame + "Win");
                    displayList[objName].matched = true;
                    break;
                }
            }

            //Check for full sets
            let matching = 0;
            tiles.forEach(function check(t){
                if(t.revealed && t.numberFrame === tile.numberFrame) {
                    matching++;
                }
            });
            if(matching === lookupIcons[tile.numberFrame].length) {
                tiles.forEach(function check(t){
                    if(!t.matched && t.revealed && t.number === tile.number) {
                        t.match();
                        t.presentWin();
                        audio.playSequential("match");
                    }
                });
                meterData.win += lookupPrizes[tile.numberFrame];
                lookupLabels[tile.numberFrame].forEach(function winText(l){
                    displayList[l].style = TextStyles.parse("legendWinG4");
                });
            }
        });
    }

    function setActive(active) {
        tiles.forEach(function(tile) {
            tile.active = active;
            if(!tile.revealed) {
                tile.resultContainer.scale.set(0.7);
            }
        });
    }      
    
    function revealAll() {
        // Get all the tiles yet to be revealed
        const unrevealed = tiles.filter(tile => !tile.revealed);
        // Return an array of tweens that calls reveal on each tile in turn
        return unrevealed.map((tile) => Tween.delayedCall(0, tile.reveal, null, tile).duration(tile.scratchDuration));
    }

    function reset() {
        tiles.forEach(tile => tile.reset());
        Object.keys(lookupLabels).forEach(function reset(r){
            lookupLabels[r].forEach(function resetText(rt) {
                displayList[rt].style = TextStyles.parse("legendG4");
            });
        });
        tiles.forEach(tile => {
            if(tile.numberFrame && lookupIcons[tile.numberFrame]) { //edge case - no blance on buying a ticket resets before population
                for (let objName of lookupIcons[tile.numberFrame]) {
                    displayList[objName].texture = PIXI.Texture.fromFrame("key" + tile.numberFrame);
                    displayList[objName].matched = false;
                }
            }
        });
    }

    function checkMatch() {
        //noop
    }
    msgBus.subscribe("Game.PlayerTileG4", checkMatch);


    return {
        init,
        populate,
        enable,
        setActive,
        revealAll,
        reset
    };
});
