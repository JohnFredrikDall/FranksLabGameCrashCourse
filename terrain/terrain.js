export default class Terrain {
    constructor(ctx, canvas){
        this.x = 100;
        this.y = 900;
        this.width = 300;
        this.height = 50;
        this.canvas = canvas;
        this.ctx = ctx;
        this.terrainImage = new Image();
        this.terrainImage.src = 'sprites/twilight-tiles.png';
        this.spriteCoordinates = {x: 0, y: 0, spriteWidth: 47, spriteHeight: 13}
        //this.spriteCoordinates2 = {x: 66, y: 16, spriteWidth: 44, spriteHeight: 11} 
        
    } 
    
    update(){
        // console.log(this.directionX);
        // this.x -= this.directionX;
    }

    draw(){
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.terrainImage, this.spriteCoordinates.x, this.spriteCoordinates.y, this.spriteCoordinates.spriteWidth, this.spriteCoordinates.spriteHeight, this.x, this.y, this.width, this.height);
    }
   
}