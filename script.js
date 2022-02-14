import Player from "./player.js";
import Controls from "./controls.js";
import CollisionHandler from "./collision_handler.js";
import { drawStatusText } from "./utils.js";
import Background from "./background.js";
import Terrain from "./terrain/terrain.js";

window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.style.display = "none";

  //FrontLayer
  const canvasFrontLayer = /** @type {HTMLCanvasElement} */ (
    document.getElementById("canvasFront")
  );
  const ctxFrontLayer = /** @type {CanvasRenderingContext2D} */ (
    canvasFrontLayer.getContext("2d")
  );
  canvasFrontLayer.width = window.innerWidth;
  canvasFrontLayer.height = window.innerHeight;

  let terrainArray = [];
  const terrain = new Terrain(
    ctxFrontLayer,
    canvasFrontLayer,
    100,
    850,
    200,
    49,
    0
  );
  terrainArray.push(terrain);

  const player = new Player(50, 50, 10, 500, ctxFrontLayer, canvasFrontLayer);
  let collisionHandler = new CollisionHandler();
  const controls = new Controls(player);
  
    //MiddleLayer
    const canvasMiddleLayer = document.getElementById("canvasMiddle");
    const ctxMiddleLayer = canvasMiddleLayer.getContext("2d");
    const backgroundMiddleLayer = new Background(
      ctxMiddleLayer,
      canvasMiddleLayer,
      "./sprites/moon-transparent.png"
    );

  //BackLayer
  const canvasBackLayer = document.getElementById("canvasBack");
  const ctxBackLayer = canvasBackLayer.getContext("2d");
  const backgroundBackLayer = new Background(
    ctxBackLayer,
    canvasBackLayer,
    "sprites/exterior-parallaxBG1.png",
    0,
    canvasBackLayer.width,
    player,
    0,
    canvasFrontLayer.width
  );



  function edgePan(player, background){
    if(background.edgePanningLeft){
        player.hitLeftEdge();
    }
    else if(background.edgePanningRight){
        player.hitRightEdge();
    }
  }

  //animation loop
  function animate() {
    ctxFrontLayer.clearRect(
      0,
      0,
      canvasFrontLayer.width,
      canvasFrontLayer.height
    );
    ctxBackLayer.clearRect(0, 0, canvasBackLayer.width, canvasBackLayer.height);

    collisionHandler.detectCollision(player, terrainArray);

    player.checkForCollision();
    player.update(controls.lastKey);
    player.draw();

    backgroundMiddleLayer.drawMoon();

    backgroundBackLayer.drawBackground();
    backgroundBackLayer.checkPosition();
    edgePan(player, backgroundBackLayer);


    for (let i = 0; i < terrainArray.length; i++) {
      terrainArray[i].draw();
    }

    controls.movePlayer();

    drawStatusText(ctxFrontLayer, controls, player);
    requestAnimationFrame(animate);
  }
  animate();
});
