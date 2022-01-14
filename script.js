const canvas = /** @type {HTMLCanvasElement} */(document.getElementById('canvas1'));
const ctx = /** @type {CanvasRenderingContext2D} */(canvas.getContext('2d'));
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let timeToNextTerrain = 0;
let terrainInterval = 2000;
let lastTime = 0;
let terrainArray = [];
let player = new Player(50, 50, 'red', 10, 110, ctx);
// let oneTerrain = new Terrain();
// terrainArray.push(oneTerrain);
for (let index = 100; index < 1000; index+=200) {
    const kekw = new Terrain();
    console.log(index);
    kekw.y = index;
    kekw.x = index/2;
    terrainArray.push(kekw);   
}
console.log(terrainArray);

//animation loop
function animate(timestamp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    collisionDetection(player, terrainArray);

    //Player handling
    player.draw();
    player.checkForCollision();
    player.update();
    

    terrainArray.forEach(x => x.draw());

    //Terrain handling
    let deltatime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextTerrain += deltatime;
    

    // if(timeToNextTerrain > terrainInterval){
    //     terrainArray.push(new Terrain());
    //     timeToNextTerrain = 0;
    // }
    // for (let i = 0; i < terrainArray.length; i++) {
    //     terrainArray[i].draw();
    //     terrainArray[i].update();
    //     if((terrainArray[i].y + terrainArray[i].width) < 0){
    //         terrainArray.splice(i, 1);
    //     }
    // }

    requestAnimationFrame(animate);
}

//Collision detection
function collisionDetection(player, terrainArray){
    
    for (let i = 0; i < terrainArray.length; i++) {
        const terrain = terrainArray[i];
        
        
        if((player.y + player.height)<=terrain.y) {
            
            if((player.x + player.height) >= terrain.x && (player.x + player.height) < (terrain.x + terrain.width)) {
                
                if(Math.sign(player.gravitySpeed) === 1){
                    
                    if((player.y + player.height)>=terrain.y -2){
                        player.hasHitTerrain = true;
                        player.gravity = 0;
                    }
                }
                
            }
            
        }
    }
}

//Controls
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return;
    }
  
    switch (event.key) {
      case "ArrowDown": 
        player.y +=5;
        break;
      case "ArrowUp":
        if(player.hasHitTerrain){
            player.gravitySpeed = -5;
            player.gravity = 0.1;
            player.hasHitTerrain = false;
        }
        break;
      case "ArrowLeft":
        player.negativeMovement();
        break;
      case "ArrowRight":
        player.positiveMovement();
        break;
      case " " : 
        player.gravitySpeed = -3;
        break;
        
      default:
        return;
    }
  
    
    event.preventDefault();
  }, true);


animate(0); 
