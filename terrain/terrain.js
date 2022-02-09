export default class Terrain {
    constructor(ctx, canvas, x, y, width, height, select){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.ctx = ctx;
        this.select = select;

        this.terrainImage = new Image();
        this.terrainImage.src = 'sprites/twilight-tiles.png';
        let spriteCoordinates = [];
        spriteCoordinates.push({x: 0, y: 0, spriteHeight: 13, spriteWidth: 47});
        spriteCoordinates.push({x: 66, y: 16, spriteWidth: 44, spriteHeight: 11});
    } 
    
    update(){
        // console.log(this.directionX);
        // this.x -= this.directionX;
    }

    draw(){
        this.ctx.fillStyle = 'Black';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        //this.ctx.drawImage(this.terrainImage, this.spriteCoordinates[this.select].x, this.spriteCoordinates[this.select].y, this.spriteCoordinates[this.select].spriteWidth, this.spriteCoordinates[this.select].spriteHeight, this.x, this.y, this.width, this.height);
        
    }
   
}