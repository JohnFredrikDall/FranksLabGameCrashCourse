import { IdleLeft, IdleRight, RunningLeft, RunningRight, JumpingLeft, JumpingRight } from "./state.js";
import { flipSpriteHorizontally } from "./utils.js";

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
      new JumpingRight(this)
    ];
    this.currentState = this.states[0];
    this.playerImage = new Image();
    this.playerImage.src = 'sprites/elisa-spritesheet1.png';
    this.spriteWidth = 50;
    this.spriteHeight = 50;
    this.spritesCoordinates = {
      idle: [
        { x: 5, y: 4 },
        { x: 15, y: 4 },
        { x: 20, y: 4 },
      ],
      jumping: [
        { x: 10, y: 65 },
        { x: 20, y: 65 },
        { x: 25, y: 65 },
        { x: 30, y: 65 }
      ],
      running: [
        { x: 5, y: 122 },
        { x: 15, y: 122 },
        { x: 20, y: 122 },
        { x: 30, y: 122 },
        { x: 35, y: 122 },
        { x: 40, y: 122 },
        { x: 50, y: 122 },
        { x: 55, y: 122 }
      ]
    };
    this.timeBetweenEachFrame = 30;
    this.counter = 0;
    this.frame = 0;
    this.affectedByGravity = true;
  }

  update(input) {
    this.gravitySpeed += this.gravity;
    this.currentState.handleInput(input)
    this.y += this.gravitySpeed;
    // this.friction();
    // this.x += this.moveSpeed;
    this.hitBottom();
  }

  draw() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.drawSpriteFrames();

    //Brukes til å teste drawImage() ATM
    // let x = 30;
    // let y = 65;
    //ctx.drawImage(this.playerImage, sx, sy, sw, sh, dx, dy, dw, dh);
    //ctx.drawImage(this.playerImage, frame.x + this.frame * this.spriteWidth, frame.y, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    //ctx.drawImage(this.playerImage, x + this.frame * this.spriteWidth, y, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }

  checkForCollision() {
    if (!this.affectedByGravity) {
      this.gravitySpeed = 0;
      this.gravity = 0;
    }
    else {
      this.gravity = 0.1;
    }
  }

   checkMoving(){
    if(this.currentState.state == 'RUNNING LEFT' ||this.currentState.state== 'JUMPING LEFT'){
      
      return 1;
    }if (this.currentState.state == 'RUNNING RIGHT'|| this.currentState.state== 'JUMPING RIGHT') {
      return 2;
    } else {
      return 0;
    }
    
  }
  hitBottom() {
    var bottom = this.canvas.height - this.height;
    if (this.y > bottom) {
      this.y = bottom;
      this.affectedByGravity = false;
      this.setState(1);
    }
  }

  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }

  drawSpriteFrames() {
    if (this.currentState.state === 'IDLE LEFT') {
      if (this.counter < this.timeBetweenEachFrame) {
        this.counter++;
        flipSpriteHorizontally(this.ctx, this.playerImage,
          this.spritesCoordinates.idle[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.idle[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
      }
      else {
        flipSpriteHorizontally(this.ctx,this.playerImage,
          this.spritesCoordinates.idle[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.idle[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
        this.counter = 0;
        if(this.frame < this.spritesCoordinates.idle.length-1) {
          this.frame ++;
        }
        else {
          this.frame = 0;
        }
      }
    }
    if (this.currentState.state === 'IDLE RIGHT') {
      if (this.counter < this.timeBetweenEachFrame) {
        this.counter++;
        this.ctx.drawImage(this.playerImage,
          this.spritesCoordinates.idle[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.idle[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
      }
      else {
        this.ctx.drawImage(this.playerImage,
          this.spritesCoordinates.idle[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.idle[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
        this.counter = 0;
        if(this.frame < this.spritesCoordinates.idle.length-1) {
          this.frame ++;
        }
        else {
          this.frame = 0;
        }
      }
    }
    if (this.currentState.state === 'RUNNING LEFT') {
      if (this.counter < this.timeBetweenEachFrame) {
        this.counter++;
        flipSpriteHorizontally(this.ctx, this.playerImage,
          this.spritesCoordinates.running[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.running[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
      }
      else {
        flipSpriteHorizontally(this.ctx,this.playerImage,
          this.spritesCoordinates.running[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.running[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
        this.counter = 0;
        if(this.frame < this.spritesCoordinates.running.length-1) {
          this.frame ++;
        }
        else {
          this.frame = 0;
        }
      }
    }
    if (this.currentState.state === 'RUNNING RIGHT') {
      if (this.counter < this.timeBetweenEachFrame) {
        this.counter++;
        this.ctx.drawImage(this.playerImage,
          this.spritesCoordinates.running[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.running[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
      }
      else {
        this.ctx.drawImage(this.playerImage,
          this.spritesCoordinates.running[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.running[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
        this.counter = 0;
        if(this.frame < this.spritesCoordinates.running.length-1) {
          this.frame ++;
        }
        else {
          this.frame = 0;
        }
      }
    }
    if(this.currentState.state === 'JUMPING LEFT'){
      if (this.counter < this.timeBetweenEachFrame) {
        this.counter++;
        flipSpriteHorizontally(this.ctx, this.playerImage,
          this.spritesCoordinates.jumping[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.jumping[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
      }
      else {
        flipSpriteHorizontally(this.ctx,this.playerImage,
          this.spritesCoordinates.jumping[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.jumping[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
        this.counter = 0;
        if(this.frame < this.spritesCoordinates.jumping.length-1) {
          this.frame ++;
        }
        else {
          this.frame = 0;
        }
      }
    }
    if (this.currentState.state === 'JUMPING RIGHT') {
      if (this.counter < this.timeBetweenEachFrame) {
        this.counter++;
        this.ctx.drawImage(this.playerImage,
          this.spritesCoordinates.jumping[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.jumping[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
      }
      else {
        this.ctx.drawImage(this.playerImage,
          this.spritesCoordinates.jumping[this.frame].x + this.frame * this.spriteWidth,
          this.spritesCoordinates.jumping[this.frame].y,
          this.spriteWidth,
          this.spriteHeight,
          this.x,
          this.y,
          this.width,
          this.height);
        this.counter = 0;
        if(this.frame < this.spritesCoordinates.jumping.length-1) {
          this.frame ++;
        }
        else {
          this.frame = 0;
        }
      }
    }
  }
}