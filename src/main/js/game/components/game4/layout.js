define({
    _BASE_GAME: {
        children: ["game4"]
    },
    /*
     * GAME 4
     */
    game4: {
        type: "container",
        children: ["bgG4"],
        landscape: {
            x: 534,
            y: 144,
            scale: 0.4
        },
        landscapeSelected: {
            x: 179,
            y: -94,
            scale: 0.68
        },
        portrait: {
            x: 0,
            y: 0,
            scale: 1
        }
    },
        bgG4: {
            type: "sprite",
            children: ["playerTilesG4", "gameLabelG4", "gameLabelG4Large", "legendG4"],
            texture: "bgG4",
            x: 10,
            y: 126
        },
        playerTilesG4: {
            type: "container",
            children: [
                "playerTile1G4",
                "playerTile2G4",
                "playerTile3G4",
                "playerTile4G4",
                "playerTile5G4",
                "playerTile6G4",
                "playerTile7G4",
                "playerTile8G4",
                "playerTile9G4",
                "playerTile10G4",
                "playerTile11G4",
                "playerTile12G4",
                "playerTile13G4",
                "playerTile14G4",
                "playerTile15G4",
                "playerTile16G4",
                "playerTile17G4",
                "playerTile18G4",
                "playerTile19G4",
                "playerTile20G4"
            ],
            x: 0,
            y: -126
        },
            playerTile1G4: {
                type: "container",
                x: 246,
                y: 272
            },
            playerTile2G4: {
                type: "container",
                x: 320,
                y: 272
            },
            playerTile3G4: {
                type: "container",
                x: 394,
                y: 272
            },
            playerTile4G4: {
                type: "container",
                x: 246,
                y: 362
            },
            playerTile5G4: {
                type: "container",
                x: 320,
                y: 362
            },
            playerTile6G4: {
                type: "container",
                x: 394,
                y: 362
            },
            playerTile7G4: {
                type: "container",
                x: 135,
                y: 452
            },
            playerTile8G4: {
                type: "container",
                x: 209,
                y: 452
            },
            playerTile9G4: {
                type: "container",
                x: 283,
                y: 452
            },
            playerTile10G4: {
                type: "container",
                x: 357,
                y: 452
            },
            playerTile11G4: {
                type: "container",
                x: 431,
                y: 452
            },
            playerTile12G4: {
                type: "container",
                x: 505,
                y: 452
            },
            playerTile13G4: {
                type: "container",
                x: 61,
                y: 542
            },
            playerTile14G4: {
                type: "container",
                x: 135,
                y: 542
            },
            playerTile15G4: {
                type: "container",
                x: 209,
                y: 542
            },
            playerTile16G4: {
                type: "container",
                x: 283,
                y: 542
            },
            playerTile17G4: {
                type: "container",
                x: 357,
                y: 542
            },
            playerTile18G4: {
                type: "container",
                x: 431,
                y: 542
            },
            playerTile19G4: {
                type: "container",
                x: 505,
                y: 542
            },
            playerTile20G4: {
                type: "container",
                x: 579,
                y: 542
            },
        gameLabelG4: {
            type: "text",
            string: "gameLabelG4",
            anchor: 0.5,
            x: 90,
            y: 210,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "gameLabel"
        },
        gameLabelG4Large: {
            type: "text",
            string: "gameLabelG4",
            anchor: 0.5,
            x: 464,
            y: -18,
            scale: 1,
            landscape: {visible: true},
            landscapeSelected: {visible: false},
            portrait: {visible: false},
            style: "gameLabelLarge"
        },
        legendG4: {
            type: "sprite",
            children: [
                "legendQuantity0G4",
                "legendChick0G4",
                "legendChick1G4",
                "legendChick2G4",
                "legendChick3G4",
                "legendChick4G4",
                "legendChick5G4",
                "legendChick6G4",
                "legendChick7G4",
                "legendChick8G4",
                "legendValue0G4",
                "legendQuantity1G4",
                "legendRabbit0G4",
                "legendRabbit1G4",
                "legendRabbit2G4",
                "legendRabbit3G4",
                "legendRabbit4G4",
                "legendRabbit5G4",
                "legendRabbit6G4",
                "legendRabbit7G4",
                "legendValue1G4",
                "legendQuantity2G4",
                "legendSnowflake0G4",
                "legendSnowflake1G4",
                "legendSnowflake2G4",
                "legendSnowflake3G4",
                "legendSnowflake4G4",
                "legendSnowflake5G4",
                "legendSnowflake6G4",
                "legendValue2G4",
                "legendQuantity3G4",
                "legendFlower0G4",
                "legendFlower1G4",
                "legendFlower2G4",
                "legendFlower3G4",
                "legendFlower4G4",
                "legendFlower5G4",
                "legendValue3G4",
                "legendQuantity4G4",
                "legendSkis0G4",
                "legendSkis1G4",
                "legendSkis2G4",
                "legendSkis3G4",
                "legendSkis4G4",
                "legendValue4G4",
                "legendQuantity5G4",
                "legendSun0G4",
                "legendSun1G4",
                "legendSun2G4",
                "legendSun3G4",
                "legendValue5G4",
                "legendQuantity6G4",
                "legendShades0G4",
                "legendShades1G4",
                "legendShades2G4",
                "legendValue6G4"
            ],
            anchor: 0,
            x: 85,
            y: 474,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            texture: "keyBox"
        },
            legendQuantity0G4: {
                        type: "text",
                        string: "legendQuantity0G4",
                        anchor: 0.5,
                        x: 14,
                        y: 18,
                        style: "legendG4"
                    },
            legendChick0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 40,
                y: 18,
                texture: "keysymChick"
            },
            legendChick1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 71,
                y: 18,
                texture: "keysymChick"
            },
            legendChick2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 102,
                y: 18,
                texture: "keysymChick"
            },
            legendChick3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 133,
                y: 18,
                texture: "keysymChick"
            },
            legendChick4G4: {
                type: "sprite",
                anchor: 0.5,
                x: 164,
                y: 18,
                texture: "keysymChick"
            },
            legendChick5G4: {
                type: "sprite",
                anchor: 0.5,
                x: 195,
                y: 18,
                texture: "keysymChick"
            },
            legendChick6G4: {
                type: "sprite",
                anchor: 0.5,
                x: 226,
                y: 18,
                texture: "keysymChick"
            },
            legendChick7G4: {
                type: "sprite",
                anchor: 0.5,
                x: 257,
                y: 18,
                texture: "keysymChick"
            },
            legendChick8G4: {
                type: "sprite",
                anchor: 0.5,
                x: 288,
                y: 18,
                texture: "keysymChick"
            },
            legendValue0G4: {
                type: "text",
                string: "legendValue0G4",
                anchor: {x: 1, y: 0.5},
                x: 457,
                y: 18,
                style: "legendG4"
            },
            legendQuantity1G4: {
                type: "text",
                string: "legendQuantity1G4",
                anchor: 0.5,
                x: 14,
                y: 54,
                style: "legendG4"
            },
            legendRabbit0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 40,
                y: 54,
                texture: "keysymBunny"
            },
            legendRabbit1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 71,
                y: 54,
                texture: "keysymBunny"
            },
            legendRabbit2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 102,
                y: 54,
                texture: "keysymBunny"
            },
            legendRabbit3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 133,
                y: 54,
                texture: "keysymBunny"
            },
            legendRabbit4G4: {
                type: "sprite",
                anchor: 0.5,
                x: 164,
                y: 54,
                texture: "keysymBunny"
            },
            legendRabbit5G4: {
                type: "sprite",
                anchor: 0.5,
                x: 195,
                y: 54,
                texture: "keysymBunny"
            },
            legendRabbit6G4: {
                type: "sprite",
                anchor: 0.5,
                x: 226,
                y: 54,
                texture: "keysymBunny"
            },
            legendRabbit7G4: {
                type: "sprite",
                anchor: 0.5,
                x: 257,
                y: 54,
                texture: "keysymBunny"
            },
            legendValue1G4: {
                type: "text",
                string: "legendValue1G4",
                anchor: {x: 1, y: 0.5},
                x: 457,
                y: 54,
                style: "legendG4"
            },
            legendQuantity2G4: {
                type: "text",
                string: "legendQuantity2G4",
                anchor: 0.5,
                x: 14,
                y: 90,
                style: "legendG4"
            },
            legendSnowflake0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 40,
                y: 90,
                texture: "keysymSnowflake"
            },
            legendSnowflake1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 71,
                y: 90,
                texture: "keysymSnowflake"
            },
            legendSnowflake2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 102,
                y: 90,
                texture: "keysymSnowflake"
            },
            legendSnowflake3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 133,
                y: 90,
                texture: "keysymSnowflake"
            },
            legendSnowflake4G4: {
                type: "sprite",
                anchor: 0.5,
                x: 164,
                y: 90,
                texture: "keysymSnowflake"
            },
            legendSnowflake5G4: {
                type: "sprite",
                anchor: 0.5,
                x: 195,
                y: 90,
                texture: "keysymSnowflake"
            },
            legendSnowflake6G4: {
                type: "sprite",
                anchor: 0.5,
                x: 226,
                y: 90,
                texture: "keysymSnowflake"
            },
            legendValue2G4: {
                type: "text",
                string: "legendValue2G4",
                anchor: {x: 1, y: 0.5},
                x: 457,
                y: 90,
                style: "legendG4"
            },
            legendQuantity3G4: {
                type: "text",
                string: "legendQuantity3G4",
                anchor: 0.5,
                x: 14,
                y: 126,
                style: "legendG4"
            },
            legendFlower0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 40,
                y: 126,
                texture: "keysymFlower"
            },
            legendFlower1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 71,
                y: 126,
                texture: "keysymFlower"
            },
            legendFlower2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 102,
                y: 126,
                texture: "keysymFlower"
            },
            legendFlower3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 133,
                y: 126,
                texture: "keysymFlower"
            },
            legendFlower4G4: {
                type: "sprite",
                anchor: 0.5,
                x: 164,
                y: 126,
                texture: "keysymFlower"
            },
            legendFlower5G4: {
                type: "sprite",
                anchor: 0.5,
                x: 195,
                y: 126,
                texture: "keysymFlower"
            },
            legendValue3G4: {
                type: "text",
                string: "legendValue3G4",
                anchor: {x: 1, y: 0.5},
                x: 457,
                y: 126,
                style: "legendG4"
            },
            legendQuantity4G4: {
                type: "text",
                string: "legendQuantity4G4",
                anchor: 0.5,
                x: 14,
                y: 162,
                style: "legendG4"
            },
            legendSkis0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 40,
                y: 162,
                texture: "keysymSkis"
            },
            legendSkis1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 71,
                y: 162,
                texture: "keysymSkis"
            },
            legendSkis2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 102,
                y: 162,
                texture: "keysymSkis"
            },
            legendSkis3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 133,
                y: 162,
                texture: "keysymSkis"
            },
            legendSkis4G4: {
                type: "sprite",
                anchor: 0.5,
                x: 164,
                y: 162,
                texture: "keysymSkis"
            },
            legendValue4G4: {
                type: "text",
                string: "legendValue4G4",
                anchor: {x: 1, y: 0.5},
                x: 457,
                y: 162,
                style: "legendG4"
            },
            legendQuantity5G4: {
                type: "text",
                string: "legendQuantity5G4",
                anchor: 0.5,
                x: 14,
                y: 198,
                style: "legendG4"
            },
            legendSun0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 40,
                y: 198,
                texture: "keysymSun"
            },
            legendSun1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 71,
                y: 198,
                texture: "keysymSun"
            },
            legendSun2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 102,
                y: 198,
                texture: "keysymSun"
            },
            legendSun3G4: {
                type: "sprite",
                anchor: 0.5,
                x: 133,
                y: 198,
                texture: "keysymSun"
            },
            legendValue5G4: {
                type: "text",
                string: "legendValue5G4",
                anchor: {x: 1, y: 0.5},
                x: 457,
                y: 198,
                style: "legendG4"
            },
            legendQuantity6G4: {
                type: "text",
                string: "legendQuantity6G4",
                anchor: 0.5,
                x: 14,
                y: 234,
                style: "legendG4"
            },
            legendShades0G4: {
                type: "sprite",
                anchor: 0.5,
                x: 40,
                y: 234,
                texture: "keysymSunglasses"
            },
            legendShades1G4: {
                type: "sprite",
                anchor: 0.5,
                x: 71,
                y: 234,
                texture: "keysymSunglasses"
            },
            legendShades2G4: {
                type: "sprite",
                anchor: 0.5,
                x: 102,
                y: 234,
                texture: "keysymSunglasses"
            },
            legendValue6G4: {
                type: "text",
                string: "legendValue6G4",
                anchor: {x: 1, y: 0.5},
                x: 457,
                y: 234,
                style: "legendG4"
            }
});