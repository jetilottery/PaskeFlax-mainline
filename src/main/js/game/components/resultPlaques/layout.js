define({
    _BASE_RESULTPLAQUES: {
        children: ["resultPlaques"]
    },
    /*
     * INTRO
     */
    resultPlaques: {
        type: "rectangle",
        children: ["winPlaque", "losePlaque", "viewResultButton", "okButton"],
        x: 0,
        y: 0,
        width: 1024,
        height: 1136,
        fill: 0x000000,
        fillAlpha: 0.8
    },
        /*
         * Win
         */
        winPlaque: {
            type: "container",
            portrait: {
                x: 0,
                y: 0,
                scale: 1
            },
            landscape: {
                x: 146,
                y: -150,
                scale: 0.8
            },
            children: ["burst2", "burst3", "cheekyChickenWinPlaque", "winPopUp"]
        },
            burst2: {
                type: "sprite",
                x: 320,
                y: 568,
                anchor: 0.5,
                texture: "burst2"
            },
            burst3: {
                type: "sprite",
                x: 320,
                y: 568,
                anchor: 0.5,
                texture: "burst3"
            },
            cheekyChickenWinPlaque: {
                type: "animatedSprite",
                anchor: 0.5,
                scale: 0.8,
                x: 320,
                y: 480,
                loop: false,
                animationSpeed: 0.5,
                textures: [
                    "chickenFront/loopfront0011",
                    "chickenFront/loopfront0012",
                    "chickenFront/loopfront0013",
                    "chickenFront/loopfront0014",
                    "chickenFront/loopfront0015",
                    "chickenFront/loopfront0016",
                    "chickenFront/loopfront0017",
                    "chickenFront/loopfront0018",
                    "chickenFront/loopfront0019",
                    "chickenFront/loopfront0020",
                    "chickenFront/loopfront0021",
                    "chickenFront/loopfront0022",
                    "chickenFront/loopfront0023",
                    "chickenFront/loopfront0024",
                    "chickenFront/loopfront0025",
                    "chickenFront/loopfront0026",
                    "chickenFront/loopfront0027",
                    "chickenFront/loopfront0028",
                    "chickenFront/loopfront0029",
                    "chickenFront/loopfront0030"
                ]
            },
            winPopUp: {
                type: "sprite",
                x: 320,
                y: 578,
                anchor: 0.5,
                texture: "winPopUp",
                children: ["congratulationsRP", "youWinRP", "prizeRP"]
            },
                congratulationsRP: {
                    type: "text",
                    string: "congratulationsRP",
                    anchor: 0.5,
                    x: 0,
                    y: -92,
                    style: "congratulationsRP"
                },
                youWinRP: {
                    type: "text",
                    string: "youWinRP",
                    anchor: 0.5,
                    x: 0,
                    y: -30,
                    style: "youWinRP"
                },
                prizeRP: {
                    type: "text",
                    anchor: 0.5,
                    x: 0,
                    y: 110,
                    style: "congratulationsRP"
                },
        losePlaque: {
            type: "container",
            portrait: {
                x: 0,
                y: 0,
                scale: 1
            },
            landscape: {
                x: 146,
                y: -166,
                scale: 0.8
            },
            children: ["losePopUp"]
        },
            losePopUp: {
                type: "sprite",
                x: 320,
                y: 578,
                anchor: 0.5,
                texture: "noWinPopUp",
                children: ["sorryRP", "nextTimeRP"]
            },
                sorryRP: {
                    type: "text",
                    string: "sorryRP",
                    anchor: 0.5,
                    x: 0,
                    y: -50,
                    style: "sorryRP"
                },
                nextTimeRP: {
                    type: "text",
                    string: "nextTimeRP",
                    anchor: 0.5,
                    x: 0,
                    y: 80,
                    style: "nextTimeRP"
                },
        viewResultButton: {
            type:           "button",
            portrait: {
                x:          200,
                y:          844,
                scale: 1
            },
            landscape: {
                x:          320,
                y:          520,
                scale:      0.8
            },
            string:         "button_viewResult",
            textures: {
                enabled:    "buttonBaseSmallUp",
                over:       "buttonBaseSmallOver",
                pressed:    "buttonBaseSmallDown",
                disabled:   "buttonBaseSmallDisabled"
            },
            style: {
                enabled:    "mainButtonEnabled",
                over:       "mainButtonOver",
                pressed:    "mainButtonPressed",
                disabled:   "mainButtonDisabled"
            }
        },
        okButton: {
            type:           "button",
            portrait: {
                x:          440,
                y:          844,
                scale: 1
            },
            landscape: {
                x:          480,
                y:          520,
                scale:      0.8
            },
            string:         "button_ok",
            textures: {
                enabled:    "buttonBaseSmallUp",
                over:       "buttonBaseSmallOver",
                pressed:    "buttonBaseSmallDown",
                disabled:   "buttonBaseSmallDisabled"
            },
            style: {
                enabled:    "mainButtonEnabled",
                over:       "mainButtonOver",
                pressed:    "mainButtonPressed",
                disabled:   "mainButtonDisabled"
            }
        }
});