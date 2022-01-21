export default class Terrain {
    constructor(ctx, canvas){
        this.width = 300;
        this.height = 50;
        this.x = 100;
        this.y = 1000;
        // this.y = canvas.height - 100;
        this.directionX = Math.random() * 1 + 0;
        this.directionY = Math.random() * 5 - 2.5;
        this.ctx = ctx;
    } 
    
    update(){
        // console.log(this.directionX);
        // this.x -= this.directionX;
    }

    draw(){
        this.ctx.fillStyle = 'Black';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}