
export default class Wizard {
  constructor(width, height, x, y, ctx, canvas) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.ctx = ctx;
    this.spriteImage = new Image();
    this.spriteImage.src = "sprites/SpriteWizard.png";
    this.spriteWidth = 50;
    this.spriteHeight = 50;
    this.spriteCoordinates = [0, 60, 135, 200, 265];
    this.timeBetweenEachFrame = 50;
    this.counter = 0;
    this.frame = 0;
  }

  update() {}

  draw() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0)";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    if (this.counter < this.timeBetweenEachFrame) {
      this.counter++;
      this.ctx.drawImage(
        this.spriteImage,
        5 + this.spriteCoordinates[this.frame],
        5,
        50,
        100,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else {
      this.ctx.drawImage(
        this.spriteImage,
        5 + this.spriteCoordinates[this.frame],
        5,
        50,
        100,
        this.x,
        this.y,
        this.width,
        this.height
      );
      this.counter = 0;
      if(this.frame < this.spriteCoordinates.length-1){
          this.frame++;
        }
        else{
          this.frame = 0;
      }
    }
  }
}
