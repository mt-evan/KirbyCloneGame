import { k } from "./kaboomCtx";

async function gameSetup() {
    k.loadSprite("assests", "./kirby-like.png", {
       sliceX: 9,
       sliceY: 10,
       anims: {
        kirbIdle: 0,
        kirdInhaling: 1,
        kirdFull: 2,
        kirdInhaleEffect: { from: 3, to: 8, speed: 15, loop: true},
        shootingStar: 9,
        flame: { from: 36, to: 37, speed: 4, loop: true },
        guyIdle: 18,
        guyWalk: { from: 18, to: 19, speed: 4, loop: true },
        bird: { from: 27, to: 28, speed: 4, loop: true },
        },
     
    });
}

gameSetup();