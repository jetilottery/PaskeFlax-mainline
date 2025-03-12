define({
    _BASE_GAME: {
        children: ["game3"]
    },
    /*
     * GAME 3
     */
    game3: {
        type: "rectangle",
        children: ["bgG3"],
        landscape: {
            x: 390,
            y: 101,
            scale: 0.28
        },
        landscapeSelected: {
            x: 175,
            y: -100,
            scale: 0.7
        },
        portrait: {
            x: 0,
            y: 0,
            scale: 1
        },
        fillAlpha: 0,
        width: 640,
        height: 1136
    },
        bgG3: {
            type: "container",
            children: ["basketHandleG3", "playerTilesG3", "basketFrontG3", "gameLabelG3", "gameLabelG3Large", "tagLineG3"]
        },
        basketHandleG3: {
            type: "sprite",
            x: 0,
            y: 166,
            texture: "basketHandle"
        },
        playerTilesG3: {
            type: "container",
            children: [
                "playerTile1G3",
                "playerTile2G3",
                "playerTile3G3",
                "playerTile4G3",
                "playerTile5G3",
                "playerTile6G3",
                "playerTile7G3",
                "playerTile8G3",
                "playerTile9G3"
            ],
            x: 0,
            y: 0
        },
            playerTile1G3: {
                type: "container",
                x: 234,
                y: 340,
                rotation: -Math.PI / 9
            },
            playerTile2G3: {
                type: "container",
                x: 416,
                y: 340,
                rotation: Math.PI / 9
            },
            playerTile3G3: {
                type: "container",
                x: 144,
                y: 444,
                rotation: -Math.PI / 9
            },
            playerTile4G3: {
                type: "container",
                x: 320,
                y: 444,
                rotation: 0
            },
            playerTile5G3: {
                type: "container",
                x: 496,
                y: 444,
                rotation: Math.PI / 9
            },
            playerTile6G3: {
                type: "container",
                x: 104,
                y: 556,
                rotation: -Math.PI / 9
            },
            playerTile7G3: {
                type: "container",
                x: 251,
                y: 556,
                rotation: 0
            },
            playerTile8G3: {
                type: "container",
                x: 389,
                y: 556,
                rotation: 0
            },
            playerTile9G3: {
                type: "container",
                x: 536,
                y: 556,
                rotation: Math.PI / 9
            },
        basketFrontG3: {
            type: "sprite",
            x: 24,
            y: 626,
            texture: "basketBottom"
        },
        gameLabelG3: {
            type: "text",
            string: "gameLabelG3",
            anchor: 0,
            x: 54,
            y: 631,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "gameLabel"
        },
        gameLabelG3Large: {
            type: "text",
            string: "gameLabelG3",
            anchor: 0.5,
            x: 335,
            y: 180,
            scale: 1.4,
            landscape: {visible: true},
            landscapeSelected: {visible: false},
            portrait: {visible: false},
            style: "gameLabelLarge"
        },
        tagLineG3: {
            type: "text",
            string: "tagLineG3",
            anchor: 0.5,
            x: 320,
            y: 811,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "playerLabelG3"
        }
});