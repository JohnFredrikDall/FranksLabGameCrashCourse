import Player from './player.js';
import Controls from './controls.js';
import CollisionHandler from './collision_handler.js';
import Terrain from './terrain.js';
import {drawStatusText} from './utils.js';
import Background from './background.js';

window.addEventListener('load', function(){
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
    const canvas = /** @type {HTMLCanvasElement} */(document.getElementById('canvas1'));
    const ctx = /** @type {CanvasRenderingContext2D} */(canvas.getContext('2d'));
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let terrainArray = [];
    const terrain = new Terrain(ctx, canvas);
    terrainArray.push(terrain);
    const player = new Player(50, 50, 10, 110, ctx, canvas);
    let collisionHandler = new CollisionHandler();
    const controls = new Controls(player);

    const canvasBG0 = document.getElementById('canvasBG0')
    const ctxBG0 = canvasBG0.getContext('2d');
    var BG0 = new Background(ctxBG0, canvasBG0);
    var src="./sprites/moon-transparent.png"
    BG0.getImage(src);
    const canvasBGm1 = document.getElementById('canvasBG-1')
    const ctxBGm1 = canvasBGm1.getContext('2d')
    var BGm1 = new Background(ctxBGm1, canvasBGm1)
    var src ="sprites/exterior-parallaxBG1.png"
    BGm1.getImage(src)

    var x=0;
    var y=0;
    var x2=canvasBGm1.width;
    var gamespeed=1;


//animation loop
function animate(timestamp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxBGm1.clearRect(0,0, canvasBGm1.width, canvasBGm1.height)
    
    collisionHandler.detectCollision(player, terrainArray);

    player.checkForCollision();
    player.update(controls.lastKey);
    player.draw();

    BG0.drawBackground(0,0,canvasBG0.width, canvasBG0.height)
    
    BGm1.drawBackground(x,y,canvasBGm1.width, canvasBGm1.height)
    BGm1.drawBackground(x2,y, canvasBGm1.width, canvasBGm1.height);
    //BGm1.update(x,x2, canvasBGm1, gamespeed)

    if(x < -canvasBGm1.width){
        x=canvasBGm1.width + x2 - gamespeed;
    }else{
        x -= gamespeed;
    }
    if(x2 < -canvasBGm1.width){
        x2= canvasBGm1.width +x -gamespeed;
    }else{
        x2 -= gamespeed;
    }


    terrain.draw();
    controls.movePlayer();

    drawStatusText(ctx, controls, player);
    requestAnimationFrame(animate);
}
animate(0); 
});
