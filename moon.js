export default class Moon {
    constructor(ctx, canvas, imageLocation) {
        this.backgroundImage = new Image();
        this.backgroundImage.src = imageLocation;
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
      }

      drawMoon() {
        this.ctx.drawImage(
          this.backgroundImage,
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );
      }
}