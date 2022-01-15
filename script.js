const canvas = /** @type {HTMLCanvasElement} */(document.getElementById('canvas1'));
const ctx = /** @type {CanvasRenderingContext2D} */(canvas.getContext('2d'));
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let terrainArray = [];
let player = new Player(50, 50, 'red', 10, 110, ctx);
let collisionHandler = new CollisionHandler();
let controls = new Controls();
let keys = [];
for (let index = 100; index < 1000; index+=100) {
    const kekw = new Terrain();
    kekw.y = index;
    kekw.x = index/2;
    terrainArray.push(kekw);
}


//animation loop
function animate(timestamp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    controls.movePlayer(player, keys);

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

window.addEventListener('keydown', function (e) {
    keys = (keys || []);
    keys[e.key] = true;
  })
  window.addEventListener('keyup', function (e) {
    keys[e.key] = false;
  })


animate(0); 