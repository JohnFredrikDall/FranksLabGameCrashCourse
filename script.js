import Player from "./player.js";
import Controls from "./controls.js";
import CollisionHandler from "./collision_handler.js";
import Background from "./background.js";
import Moon from "./moon.js";
import Terrain from "./terrain/terrain.js";
import Wizard from "./wizard.js";
import { drawStatusText } from "./utils.js";
import DialogBox from "./dialog_box.js";

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

  const player = new Player(60, 80, (canvasFrontLayer.width/2), 900, ctxFrontLayer, canvasFrontLayer);
  const controls = new Controls(player);
  const wizard = new Wizard(50, 100, 100, 770, ctxFrontLayer, canvasFrontLayer);
  const dialogBox = new DialogBox(500, 500, 400, 100, ctxFrontLayer, canvasFrontLayer, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper sodales commodo. In tempus, tortor a sollicitudin venenatis, est arcu fringilla arcu, nec aliquam nisl massa at orci. Aliquam in mattis tellus. Cras aliquam nibh erat, vel ultrices elit hendrerit eu. Mauris ut suscipit lacus, sed scelerisque nunc. Suspendisse ultrices at est vel vulputate. Aliquam et sodales lacus. Sed at mi ac metus tempor porta. Etiam porta ultrices orci a luctus. Sed ac ligula condimentum, vulputate augue et, fringilla diam. Nulla tempus odio nisl, at dapibus arcu placerat a. Duis vel lorem et massa interdum volutpat. Ut lacinia ullamcorper dictum. Mauris dolor neque, fermentum quis erat in, mollis elementum libero.");
  
  //MiddleLayer
  const canvasMiddleLayer = document.getElementById("canvasMiddle");
  const ctxMiddleLayer = canvasMiddleLayer.getContext("2d");
  const backgroundMiddleLayer = new Moon(
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
    canvasBackLayer.width,
    player,
    0,
    canvasFrontLayer.width
  );

  let collisionHandler = new CollisionHandler(player, backgroundBackLayer);


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
    
    wizard.draw();
    player.checkForCollision();
    player.update(controls.lastKey);
    player.draw();
    
    dialogBox.draw();

    
    
    
    backgroundMiddleLayer.drawMoon();
    
    backgroundBackLayer.drawBackground();
    backgroundBackLayer.checkPosition();
    
    collisionHandler.edgePan()

    for (let i = 0; i < terrainArray.length; i++) {
      terrainArray[i].draw();
    }

    controls.movePlayer();

    drawStatusText(ctxFrontLayer, controls, player);
    requestAnimationFrame(animate);
  }
  animate();
});
