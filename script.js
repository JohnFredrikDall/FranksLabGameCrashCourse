import Player from './player.js';
import Controls from './controls.js';
import CollisionHandler from './collision_handler.js';
import Terrain from './terrain.js';

window.addEventListener('load', function(){
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
    const canvas = /** @type {HTMLCanvasElement} */(document.getElementById('canvas1'));
    const ctx = /** @type {CanvasRenderingContext2D} */(canvas.getContext('2d'));
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let terrainArray = [];
    const player = new Player(50, 50, 'red', 10, 110, ctx, canvas);
    let collisionHandler = new CollisionHandler();
    let controls = new Controls();
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
    player.update();
    player.draw();
    
    requestAnimationFrame(animate);
}


animate(0); 

});
