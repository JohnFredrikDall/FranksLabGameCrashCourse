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
    const terrain = new Terrain(ctx, canvas);
    terrainArray.push(terrain);
    const player = new Player(50, 50, 10, 110, ctx, canvas);
    let collisionHandler = new CollisionHandler();
    const controls = new Controls(player);

//animation loop
function animate(timestamp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    collisionHandler.detectCollision(player, terrainArray);

    player.checkForCollision();
    player.update(controls.lastKey);
    player.draw();

    terrain.draw();
    controls.movePlayer();

    drawStatusText(ctx, controls, player);
    requestAnimationFrame(animate);
}
animate(0); 
});
