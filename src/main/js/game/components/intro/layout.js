define({
    _BASE_INTRO: {
        children: ["intro"]
    },
    /*
     * INTRO
     */
    intro: {
        type: "container",
        children: ["balanceMeter", "ticketPrice", "flaxLogo", "logoSmall", "squareStatic", "squareLarge", "squareText", "squareSmall1", "squareSmall2", "squareSmall3", "diamond", "chicken", "logoLarge"],
        x: 0,
        y: 0
    },
        /*
         * BALANCE
         */
        balanceMeter: {
            type: "text",
            style: "balanceMeterStyle",
            string: "balanceMeter",
            anchor: { x: 1, y: 0 },
            landscape: { x: 794, y: 12 },
            portrait: { x: 634, y: 144 }
        },
    
        ticketPrice: {
            type: "text",
            style: "ticketPriceStyle",
            anchor: { x: 1, y: 0 },
            landscape: { x: 794, y: 512 },
            portrait: { x: 634, y: 880 }
        },

        /*
         * LOGO
         */

        flaxLogo: {
            type: "sprite",
            anchor: 0.5,
            landscape: { x: 94, y: 38, texture: "ntFlaxLogo", scale: 0.7 },
            portrait: { x: 100, y: 170, texture: "ntFlaxLogo" }
        },

        logoSmall: {
            type: "sprite",
            anchor: 0.5,
            landscape: { x: 713, y: 90, texture: "paskeFlaxLogoSmall" },
            portrait: { x: 560, y: 220, texture: "paskeFlaxLogoSmall" }
        },

        /*
         * INTRO SQUARES (Bottom right)
         */
        squareStatic: {
            type: "sprite",
            texture: "squaresshadows",
            landscape: { x: 26, y: 377 },
            portrait: { x: 33, y: 850 }
        },
        squareLarge: {
            type: "sprite",
            texture: "big square",
            anchor: 0.5,
            landscape: { x: -3, y: 328 },
            portrait: { x: 0, y: 811 }
        },
        squareText: {
            type: "container",
            anchor: 0.5,
            children: ["squareText1", "squareText2", "squareText3"],
            landscape: { x: 10, y: 290 },
            portrait: { x: 20, y: 736 }
        },
            squareText1: {
                type: "text",
                string: "purchase_line1",
                style: "introTitleLarge",
                x: 0,
                y: 0
            },
            squareText2: {
                type: "text",
                string: "purchase_line2",
                style: "introTitleSmall",
                x: 0,
                y: 40
            },
            squareText3: {
                type: "text",
                string: "purchase_line3",
                style: "introTitleLarge",
                x: 0,
                y: 50
            },

        squareSmall1: {
            type: "sprite",
            texture: "s1",
            anchor: 0.5,
            landscape: { x: 103, y: 482 },
            portrait: { x: 110, y: 957 }
        },
        squareSmall2: {
            type: "sprite",
            texture: "s2",
            anchor: 0.5,
            landscape: { x: 164, y: 502 },
            portrait: { x: 172, y: 977 }
        },
        squareSmall3: {
            type: "sprite",
            texture: "s3",
            anchor: 0.5,
            landscape: { x: 221, y: 464 },
            portrait: { x: 228, y: 938 }
        },

        /*
         * CHICKEN
         */
        diamond: {
            type: "sprite",
            anchor: 0.5,
            portrait: { x: 320, y: 544 },
            landscape: { x: 554, y: 399 },
            texture: "diamond"
        },
        chicken: {
            type: "animatedSprite",
            anchor: 0.5,
            portrait: { x: 313, y: 510 },
            landscape: { x: 554, y: 380 },
            pivot: { x: 0, y: 100 },
            loop: false,
            animationSpeed: 0.5,
            textures: ["chicken/chicken1","chicken/chicken2","chicken/chicken3","chicken/chicken4","chicken/chicken5","chicken/chicken6","chicken/chicken7","chicken/chicken8","chicken/chicken9","chicken/chicken10"]
        },
        logoLarge: {
            type: "sprite",
            anchor: 0.5,
            landscape: { x: 553, y: 410 },
            portrait: { x: 320, y: 558 },
            texture: "paskeFlaxLogoLarge"
        }
});