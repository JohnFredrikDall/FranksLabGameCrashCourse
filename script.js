import Player from './player.js';
import Controls from './controls.js';
import CollisionHandler from './collision_handler.js';
import { drawStatusText } from './utils.js';
import Background from './background.js';
import Terrain from './terrain/terrain.js';

window.addEventListener('load', function () {
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
    const canvas = /** @type {HTMLCanvasElement} */(document.getElementById('canvas1'));
    const ctx = /** @type {CanvasRenderingContext2D} */(canvas.getContext('2d'));
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let terrainArray = [];
    const terrain = new Terrain(ctx, canvas, 100, 850, 200, 49, 0);
    terrainArray.push(terrain);

    const player = new Player(50, 50, 10, 500, ctx, canvas);
    let collisionHandler = new CollisionHandler();
    const controls = new Controls(player);

    
    //Background canvas
    const canvasBGm1 = document.getElementById('canvasBG-1')
    const ctxBGm1 = canvasBGm1.getContext('2d')
    const BGm1 = new Background(ctxBGm1, canvasBGm1, "sprites/exterior-parallaxBG1.png", 0, canvasBGm1.width, player)
    
    //Moon canvas
    const canvasBG0 = document.getElementById('canvasBG0')
    const ctxBG0 = canvasBG0.getContext('2d');
    const BG0 = new Background(ctxBG0, canvasBG0, "./sprites/moon-transparent.png");
    




    //animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctxBGm1.clearRect(0, 0, canvasBGm1.width, canvasBGm1.height)

        collisionHandler.detectCollision(player, terrainArray);

        player.checkForCollision();
        player.update(controls.lastKey);
        player.draw();

        BG0.drawMoon()

        BGm1.drawBackground();

        // var checkState = player.checkMoving()
        // if (checkState == 2) {
        //     BGm1.update()
        // } if (checkState == 1) {
        //     BGm1.updateReverse();
        // }


        for (let i = 0; i < terrainArray.length; i++) {
            terrainArray[i].draw();
        }

        controls.movePlayer();

        drawStatusText(ctx, controls, player);
        requestAnimationFrame(animate);
    }
    animate();
});
