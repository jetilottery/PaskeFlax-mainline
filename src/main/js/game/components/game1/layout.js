define({
    _BASE_GAME: {
        children: ["game1"]
    },
    /*
     * GAME 1
     */
    game1: {
        type: "rectangle",
        children: ["bgG1"],
        fillAlpha: 0,
        width: 640,
        height: 1136,
        landscape: {
            x: 3,
            y: 73,
            scale: 0.38
        },
        landscapeSelected: {
            x: 194,
            y: -58,
            scale: 0.64
        },
        portrait: {
            x: 0,
            y: 0,
            scale: 1
        }
    },
        bgG1: {
            type: "sprite",
            children: ["luckyTilesG1", "playerTilesG1", "gameLabel0G1", "gameLabel1G1", "gameLabelG1Large", "luckyLabelG1", "playerLabel0G1", "playerLabel1G1", "tagLineG1"],
            texture: "bgG1"
        },
        luckyTilesG1: {
            type: "container",
            children: ["luckyTile1G1", "luckyTile2G1", "luckyTile3G1", "luckyTile4G1"],
            landscape: { x: 0, y: 200 },
            portrait: { x: 0, y: 200 }
        },
            luckyTile1G1: {
                type: "container",
                x: 217,
                y: 100,
                rotation: -Math.PI / 4
            },
            luckyTile2G1: {
                type: "container",
                x: 284,
                y: 74,
                rotation: -Math.PI / 9
            },
            luckyTile3G1: {
                type: "container",
                x: 356,
                y: 74,
                rotation: Math.PI / 9
            },
            luckyTile4G1: {
                type: "container",
                x: 420,
                y: 100,
                rotation: Math.PI / 4
            },
        playerTilesG1: {
            type: "container",
            children: [
                "playerTile1G1",
                "playerTile2G1",
                "playerTile3G1",
                "playerTile4G1",
                "playerTile5G1",
                "playerTile6G1",
                "playerTile7G1",
                "playerTile8G1",
                "playerTile9G1",
                "playerTile10G1",
                "playerTile11G1",
                "playerTile12G1",
                "playerTile13G1",
                "playerTile14G1",
                "playerTile15G1",
                "playerTile16G1",
                "playerTile17G1",
                "playerTile18G1",
                "playerTile19G1",
                "playerTile20G1"
            ],
            landscape: { x: 0, y: 0 },
            portrait: { x: 0, y: 0 }
        },
            playerTile1G1: {
                type: "container",
                x: 212,
                y: 484
            },
            playerTile2G1: {
                type: "container",
                x: 276,
                y: 484
            },
            playerTile3G1: {
                type: "container",
                x: 364,
                y: 484
            },
            playerTile4G1: {
                type: "container",
                x: 428,
                y: 484
            },
            playerTile5G1: {
                type: "container",
                x: 128,
                y: 552
            },
            playerTile6G1: {
                type: "container",
                x: 192,
                y: 552
            },
            playerTile7G1: {
                type: "container",
                x: 256,
                y: 552
            },
            playerTile8G1: {
                type: "container",
                x: 320,
                y: 552
            },
            playerTile9G1: {
                type: "container",
                x: 384,
                y: 552
            },
            playerTile10G1: {
                type: "container",
                x: 448,
                y: 552
            },
            playerTile11G1: {
                type: "container",
                x: 512,
                y: 552
            },
            playerTile12G1: {
                type: "container",
                x: 192,
                y: 620
            },
            playerTile13G1: {
                type: "container",
                x: 256,
                y: 620
            },
            playerTile14G1: {
                type: "container",
                x: 320,
                y: 620
            },
            playerTile15G1: {
                type: "container",
                x: 384,
                y: 620
            },
            playerTile16G1: {
                type: "container",
                x: 448,
                y: 620
            },
            playerTile17G1: {
                type: "container",
                x: 256,
                y: 688
            },
            playerTile18G1: {
                type: "container",
                x: 320,
                y: 688
            },
            playerTile19G1: {
                type: "container",
                x: 384,
                y: 688
            },
            playerTile20G1: {
                type: "container",
                x: 320,
                y: 756
            },
        gameLabel0G1: {
            type: "text",
            string: "gameLabelG1",
            anchor: 0.5,
            x: 190,
            y: 230,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "gameLabel",
            rotation: -Math.PI/4
        },
        gameLabel1G1: {
            type: "text",
            string: "gameLabelG1",
            anchor: 0.5,
            x: 452,
            y: 232,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "gameLabel",
            rotation: Math.PI/4
        },
        gameLabelG1Large: {
            type: "text",
            string: "gameLabelG1",
            anchor: 0.5,
            x: 340,
            y: 50,
            landscape: {visible: true},
            landscapeSelected: {visible: false},
            portrait: {visible: false},
            style: "gameLabelLarge"
        },
        luckyLabelG1: {
            type: "text",
            string: "luckyLabelG1",
            anchor: 0.5,
            x: 320,
            y: 210,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "luckyLabelG1"
        },
        playerLabel0G1: {
            type: "text",
            string: "playerLabelG1",
            anchor: 0.5,
            x: 130,
            y: 470,
            style: "playerLabelG1",
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            rotation: -Math.PI/4
        },
        playerLabel1G1: {
            type: "text",
            string: "playerLabelG1",
            anchor: 0.5,
            x: 510,
            y: 470,
            style: "playerLabelG1",
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            rotation: Math.PI/4
        },
        tagLineG1: {
            type: "text",
            string: "tagLineG1",
            anchor: 0.5,
            x: 320,
            y: 816,
            landscape: {visible: false},
            landscapeSelected: {visible: true},
            portrait: {visible: true},
            style: "playerLabelG1"
        }
});