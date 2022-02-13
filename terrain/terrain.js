export default class Terrain {
    constructor(ctx, canvas){
        this.x = 100;
        this.y = 850;
        this.width = 250;
        this.height = 50;
        this.spriteHeight = 13;
        this.spriteWidth = 47;
        this.canvas = canvas;
        this.ctx = ctx;
        this.terrainImage = new Image();
        this.terrainImage.src = 'sprites/twilight-tiles.png';
        this.spriteCoordinates = {x: 0, y: 0}
        //this.spriteCoordinates2 = {x: 66, y: 16, spriteWidth: 44, spriteHeight: 11} 
        
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