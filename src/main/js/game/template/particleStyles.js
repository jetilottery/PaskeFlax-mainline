define(["com/pixijs/pixi", "com/pixijs/pixi-particles", "com/pixijs/pixi-filters"], function(PIXI) {
    return {
        player0G1: {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 0.25,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#FFFFFF",
                "end": "#FFFFFF"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(-0.09, -10.09),
                    new PIXI.Point(10.00, 0.09),
                    new PIXI.Point(0.00, 10.00),
                    new PIXI.Point(-10.09, 0.09)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player1G1: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#8F52A1",
                "end": "#8F52A1"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(-0.09, -10.09),
                    new PIXI.Point(10.00, 0.09),
                    new PIXI.Point(0.00, 10.00),
                    new PIXI.Point(-10.09, 0.09)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        lucky0G1: {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 0.25,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#FFFFFF",
                "end": "#FFFFFF"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(0,-17),
                    new PIXI.Point(6,-15),
                    new PIXI.Point(13,-1),
                    new PIXI.Point(13,10),
                    new PIXI.Point(10,15),
                    new PIXI.Point(3,18),
                    new PIXI.Point(-3,18),
                    new PIXI.Point(-10,15),
                    new PIXI.Point(-13,10),
                    new PIXI.Point(-13,-1),
                    new PIXI.Point(-6,-15)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        lucky1G1: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#8F52A1",
                "end": "#8F52A1"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(0,-17),
                    new PIXI.Point(6,-15),
                    new PIXI.Point(13,-1),
                    new PIXI.Point(13,10),
                    new PIXI.Point(10,15),
                    new PIXI.Point(3,18),
                    new PIXI.Point(-3,18),
                    new PIXI.Point(-10,15),
                    new PIXI.Point(-13,10),
                    new PIXI.Point(-13,-1),
                    new PIXI.Point(-6,-15)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player0G2: {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 0.25,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#FFFFFF",
                "end": "#FFFFFF"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0002,
            "emitterLifetime": 0.1,
            "maxParticles": 2000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player1G2: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#8F52A1",
                "end": "#8F52A1"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player0G3: {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 0.25,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#FFFFFF",
                "end": "#FFFFFF"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(-7.76,-78.03),
                    new PIXI.Point(8.58,-78.03),
                    new PIXI.Point(26.35,-65.91),
                    new PIXI.Point(39.54,-47.15),
                    new PIXI.Point(48.14,-27.82),
                    new PIXI.Point(56.46,-3.87),
                    new PIXI.Point(59.90,20.94),
                    new PIXI.Point(53.59,47.49),
                    new PIXI.Point(43.84,60.47),
                    new PIXI.Point(31.80,69.41),
                    new PIXI.Point(15.17,76.05),
                    new PIXI.Point(-0.88,78.07),
                    new PIXI.Point(-22.10,73.16),
                    new PIXI.Point(-41.02,64.22),
                    new PIXI.Point(-52.21,47.20),
                    new PIXI.Point(-59.37,24.98),
                    new PIXI.Point(-57.08,3.92),
                    new PIXI.Point(-51.63,-17.43),
                    new PIXI.Point(-43.60,-38.21),
                    new PIXI.Point(-29.27,-61.29)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player1G3: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#8F52A1",
                "end": "#8F52A1"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(-7.76,-78.03),
                    new PIXI.Point(8.58,-78.03),
                    new PIXI.Point(26.35,-65.91),
                    new PIXI.Point(39.54,-47.15),
                    new PIXI.Point(48.14,-27.82),
                    new PIXI.Point(56.46,-3.87),
                    new PIXI.Point(59.90,20.94),
                    new PIXI.Point(53.59,47.49),
                    new PIXI.Point(43.84,60.47),
                    new PIXI.Point(31.80,69.41),
                    new PIXI.Point(15.17,76.05),
                    new PIXI.Point(-0.88,78.07),
                    new PIXI.Point(-22.10,73.16),
                    new PIXI.Point(-41.02,64.22),
                    new PIXI.Point(-52.21,47.20),
                    new PIXI.Point(-59.37,24.98),
                    new PIXI.Point(-57.08,3.92),
                    new PIXI.Point(-51.63,-17.43),
                    new PIXI.Point(-43.60,-38.21),
                    new PIXI.Point(-29.27,-61.29)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player0G4: {
            "alpha": {
                "start": 0,
                "end": 1
            },
            "scale": {
                "start": 1,
                "end": 0.25,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#FFFFFF",
                "end": "#FFFFFF"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(0,-17),
                    new PIXI.Point(6,-15),
                    new PIXI.Point(13,-1),
                    new PIXI.Point(13,10),
                    new PIXI.Point(10,15),
                    new PIXI.Point(3,18),
                    new PIXI.Point(-3,18),
                    new PIXI.Point(-10,15),
                    new PIXI.Point(-13,10),
                    new PIXI.Point(-13,-1),
                    new PIXI.Point(-6,-15)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        player1G4: {
            "alpha": {
                "start": 1,
                "end": 0
            },
            "scale": {
                "start": 1,
                "end": 0.1,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#8F52A1",
                "end": "#8F52A1"
            },
            "speed": {
                "start": 100,
                "end": 25,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.4,
                "max": 0.6
            },
            "blendMode": "normal",
            "frequency": 0.0005,
            "emitterLifetime": 0.1,
            "maxParticles": 1000,
            "pos": {
                "x": 320,
                "y": 320
            },
            "addAtBack": true,
            "spawnType": "spline",
            "spawnSpline": {
                "controlPoints": [
                    new PIXI.Point(0,-17),
                    new PIXI.Point(6,-15),
                    new PIXI.Point(13,-1),
                    new PIXI.Point(13,10),
                    new PIXI.Point(10,15),
                    new PIXI.Point(3,18),
                    new PIXI.Point(-3,18),
                    new PIXI.Point(-10,15),
                    new PIXI.Point(-13,10),
                    new PIXI.Point(-13,-1),
                    new PIXI.Point(-6,-15)
                ],
                "kAlpha": 0.5,
                "pointsPerSegment": 50
            },
            "autoUpdate": false
        },
        filterAll: new PIXI.filters.OutlineFilter(1, 0x0000FF)
    };
});
