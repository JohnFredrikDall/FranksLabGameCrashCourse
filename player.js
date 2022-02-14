import {
  IdleLeft,
  IdleRight,
  RunningLeft,
  RunningRight,
  JumpingLeft,
  JumpingRight,
  SittingLeft,
  SittingRight
} from "./state.js";
import { drawSpriteFrames } from "./utils.js";

export default class Player {
  constructor(width, height, x, y, ctx, canvas) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.ctx = ctx;
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.states = [
      new IdleLeft(this),
      new IdleRight(this),
      new RunningLeft(this),
      new RunningRight(this),
      new JumpingLeft(this),
      new JumpingRight(this),
      new SittingLeft(this),
      new SittingRight(this)
    ];
    this.currentState = this.states[0];
    this.playerImage = new Image();
    this.playerImage.src = "sprites/elisa-spritesheet1.png";
    this.spriteWidth = 50;
    this.spriteHeight = 50;
    this.spritesCoordinates = {
      idle: [
        { x: 5, y: 5 },
        { x: 15, y: 5 },
        { x: 20, y: 5 },
      ],
      jumping: [
        { x: 10, y: 65 },
        { x: 20, y: 65 },
        { x: 25, y: 65 },
        { x: 30, y: 65 },
      ],
      running: [
        { x: 5, y: 122 },
        { x: 15, y: 122 },
        { x: 20, y: 122 },
        { x: 30, y: 122 },
        { x: 35, y: 122 },
        { x: 40, y: 122 },
        { x: 50, y: 122 },
        { x: 55, y: 122 },
      ],
      sitting: [
        { x: 185, y: 5 },
        { x: 190, y: 5 }
      ],
    };
    this.timeBetweenEachFrame = 15;
    this.counter = 0;
    this.frame = 0;
    this.affectedByGravity = true;
  }

  update(input) {
    this.gravitySpeed += this.gravity;
    this.currentState.handleInput(input); 
    this.y += this.gravitySpeed;
    
    this.hitBottom();
  }
  
  draw() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0)";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    drawSpriteFrames(this);
  }
  
  hitLeftEdge(){
    this.x = 0;
  }

  hitRightEdge(){
    this.x = (this.canvas.width - this.width);
  }


  checkForCollision() {
    if (!this.affectedByGravity) {
      this.gravitySpeed = 0;
      this.gravity = 0;
    } else {
      this.gravity = 0.1;
    }
  }

  hitBottom() {
    var bottom = this.canvas.height - this.height;
    if (this.y > bottom) {
      this.y = bottom;
      this.affectedByGravity = false;
    }
  }

  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }
}
