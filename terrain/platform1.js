import Terrain from "./terrain";
export default class Platform1 extends Terrain{
    constructor(ctx, canvas, x, y, width, height){
        super( x, y, width, height) 

        this.terrainImage = new Image();
        this.terrainImage.src = 'sprites/twilight-tiles.png';

        spriteCoordinates[0] = {x: 0, y: 0, spriteHeight: 13, spriteWidth: 47}
        spriteCoordinates[1] = {x: 66, y: 16, spriteWidth: 44, spriteHeight: 11} 
    }
    draw(){
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.terrainImage, this.spriteCoordinates.x, this.spriteCoordinates.y, this.spriteCoordinates.spriteWidth, this.spriteCoordinates.spriteHeight, this.x, this.y, this.width, this.height);
    }
}