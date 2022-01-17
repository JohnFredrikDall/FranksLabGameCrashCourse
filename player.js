export default class Player {
  constructor(width, height, color, x, y, ctx, canvas) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.ctx = ctx;
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.moveAcceleration = 2;
    this.moveDeceleration = -2;
    this.states = [];
    this.currentState = this.states[0];
    this.moveSpeed = 0;
    this.playerImage = new Image();
    this.playerImage.src = 'sprites/elisa-spritesheet1.png';
    this.spriteWidth = 50;
    this.spriteHeight = 50;
    this.state = 'idle';
    this.timeBetweenEachFrame = 25;
    this.counter = 0;
    this.sprites = {
      idle: [
        { x: 5, y: 4 },
        { x: 15, y: 4 },
        { x: 20, y: 4 },
      ],
      jumping: [
        {x: 10, y:65},
        {x: 20, y:65},
        {x: 25, y:65},
        {x: 30, y:65}
      ],
      running: [
        {x: 5, y: 122},
        {x: 15, y: 122},
        {x: 20, y: 122},
        {x: 30, y: 122},
        {x: 35, y: 122},
        {x: 40, y: 122},
        {x: 50, y: 122},
        {x: 55, y: 122}
      ] 
    };
    this.frame = 0;

    this.extraStepX = 10;
    this.affectedByGravity = true;
  }

  update() {
    this.gravitySpeed += this.gravity;
    this.y += this.gravitySpeed;
    this.friction();
    this.x += this.moveSpeed;
    this.hitBottom();

  }

  draw() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //Brukes til å teste drawImage() ATM
    let x = 30;
    let y = 65;
    let frame = this.spriteAnimation();
    //ctx.drawImage(this.playerImage, sx, sy, sw, sh, dx, dy, dw, dh);
    this.ctx.drawImage(this.playerImage, frame.x + this.frame * this.spriteWidth, frame.y, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    //ctx.drawImage(this.playerImage, x + this.frame * this.spriteWidth, y, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }

  friction() {
    if (this.moveSpeed > 0.2) {
      this.moveSpeed += -0.2;
    } else if (this.moveSpeed < -0.2) {
      this.moveSpeed += 0.2;
    } else {
      this.moveSpeed = 0.0;
    }
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


  hitBottom() {
    var bottom = this.canvas.height - this.height;
    if (this.y > bottom) {
      this.y = bottom;
      this.affectedByGravity = false;
    }
  }

  positiveMovement() {
    this.moveSpeed += this.moveAcceleration;

    if (this.moveSpeed > 6) {
      this.moveSpeed = 6;
      this.x += this.moveSpeed;
    } else {
      this.x += this.moveSpeed;
    }
  }
  negativeMovement() {
    this.moveSpeed += this.moveDeceleration;
    if (this.moveSpeed < -6) {
      this.moveSpeed = -6;
      this.x += this.moveSpeed;
    } else {
      this.x += this.moveSpeed;
    }
  }

  spriteAnimation() {
    if(this.state === 'jumping') {
      if(this.counter < this.timeBetweenEachFrame){
        this.counter++;
      }
      else {
        this.counter = 0;
        if(this.frame < 3) this.frame ++;
        else this.frame = 1; 
      }
      return this.sprites.jumping[this.frame];
    }
    if(this.state === 'running') {
      if(this.counter < this.timeBetweenEachFrame){
        this.counter++;
      }
      else {
        this.counter = 0;
        if(this.frame < 7) this.frame ++;
        else this.frame = 0;
      }
      return this.sprites.running[this.frame];
    }
    if(this.state === 'idle') {
      if(this.counter < this.timeBetweenEachFrame){
        this.counter++;
      }
      else {
        this.counter = 0;
        if(this.frame < 2) this.frame ++;
        else this.frame = 0;
      }
      return this.sprites.idle[this.frame];
    }
  }
}