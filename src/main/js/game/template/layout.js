define({
    _BASE_APP: {
        children: [
            "backdrop"
        ]
    },

    backdrop: {
        type: "rectangle",
		fill: 0xfcde3d,
		fillAlpha: 1,
		width: 800,
		height: 1136
    }
//
//    /*
//    * How To Play
//    */
//    howToPlayPages: {
//    type: "container",
//    children: ["howToPlayPage1"]
//    },
//    howToPlayPage1: {
//    type: "text",
//    string: "page1",
//    style: "howToPlayText",
//    fontSize: 30,
//    wordWrap: true,
//    anchor: 0.5,
//    align: "center",
//    landscape: { x: 720, y: 420, wordWrapWidth: 1100 },
//    portrait: { x: 405, y: 570, wordWrapWidth: 560 },
//    },
});
