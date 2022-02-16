export default class Background {
  constructor(ctx, canvas, imageLocation, x, player, leftEdge, rightEdge) {
    this.backgroundImage = new Image();
    this.backgroundImage.src = imageLocation;
    this.canvasBG = canvas;
    this.player = player;
    this.ctx = ctx;
    this.x = x;
    this.y = 0;
    this.leftEdge = leftEdge;
    this.rightEdge = rightEdge;
    this.edgePanSpeed = 0.5;
    this.edgePanningLeft = false;
    this.edgePanningRight = false;
  }

  drawBackground() {
    this.ctx.drawImage(
      this.backgroundImage,
      this.x,
      this.y,
      this.canvasBG.width,
      this.canvasBG.height
    );
    this.ctx.drawImage(
      this.backgroundImage,
      this.x + this.canvasBG.width,
      this.y,
      this.canvasBG.width,
      this.canvasBG.height
    );
    this.ctx.drawImage(
      this.backgroundImage,
      this.x - this.canvasBG.width,
      this.y,
      this.canvasBG.width,
      this.canvasBG.height
    );
  }

  checkPosition() {
    if (this.player.x <= this.leftEdge) {
      this.edgePanningLeft = true;
      if (
        this.player.currentState.state === ("RUNNING LEFT" || "JUMPING LEFT")
      ) {
        this.updateReverse();
      }
    } else if (this.player.x + this.player.width > this.rightEdge) {
      this.edgePanningRight = true;
      if (
        this.player.currentState.state === ("RUNNING RIGHT" || "JUMPING RIGHT")
      ) {
        this.update();
      }
    } else {
      this.edgePanningLeft = false;
      this.edgePanningRight = false;
    }
  }

  update() {
    if (this.x < -this.canvasBG.width) {
      this.x = 0;
    } else {
      this.x -= this.edgePanSpeed;
      0.5;
    }
  }

  updateReverse() {
    if (this.x > this.canvasBG.width) {
      this.x = 0;
    } else {
      this.x += this.edgePanSpeed;
      0.5;
    }
  }
}
