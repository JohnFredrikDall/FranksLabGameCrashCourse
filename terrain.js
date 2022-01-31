export default class Terrain {
    constructor(ctx, canvas){
        this.width = 300;
        this.height = 50;
        this.x = 100;
        this.y = 900;
        this.canvas = canvas;
        this.directionX = Math.random() * 1 + 0;
        this.directionY = Math.random() * 5 - 2.5;
        this.ctx = ctx;
        this.terrainImage = new Image();
        this.terrainImage.src = 'sprites/twilight-tiles.png';
        this.spriteWidth = 47;
        this.spriteHeight = 12;
        this.spriteCoordinates = {x: 1, y:1}

    } 
    
    update(){
        // console.log(this.directionX);
        // this.x -= this.directionX;
    }

    draw(){
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.terrainImage, this.spriteCoordinates.x, this.spriteCoordinates.y, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
}