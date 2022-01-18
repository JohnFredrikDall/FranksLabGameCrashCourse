import Player from './player.js';
import Controls from './controls.js';
import CollisionHandler from './collision_handler.js';
import Terrain from './terrain.js';
import {drawStatusText} from './utils.js';

window.addEventListener('load', function(){
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
    const canvas = /** @type {HTMLCanvasElement} */(document.getElementById('canvas1'));
    const ctx = /** @type {CanvasRenderingContext2D} */(canvas.getContext('2d'));
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let terrainArray = [];
    const player = new Player(50, 50, 10, 110, ctx, canvas);
    let collisionHandler = new CollisionHandler();
    const controls = new Controls(player);
    // for (let index = 100; index < 1000; index+=100) {
    //     const kekw = new Terrain(ctx, canvas);
    //     kekw.y = index;
    //     kekw.x = index/2;
    //     terrainArray.push(kekw);
    // }


//animation loop
function animate(timestamp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    collisionHandler.detectCollision(player, terrainArray);

    for (let i = 0; i < terrainArray.length; i++) {
        terrainArray[i].update();
        terrainArray[i].draw();
    }


    
    player.checkForCollision();
    player.update(controls.lastKey);
    player.draw();
    // console.log(controls.keys);
    controls.movePlayer();
    // console.log(controls.keys["ArrowRight"]);
    //console.log(player.currentState.state);

    drawStatusText(ctx, controls, player);
    requestAnimationFrame(animate);
}


animate(0); 

});
