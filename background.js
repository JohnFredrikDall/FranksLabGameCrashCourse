export default class Background{

    constructor(ctx, canvas, imageLocation, x, x2, player){
        this.backgroundImage=new Image();
        this.backgroundImage.src=imageLocation;
        this.canvasBG = canvas;
        this.player = player;
        this.ctx=ctx;
        this.x=x;
        this.y=0;
        this.x2=x2;
        this.x3=-x2;
        this.gamespeed=1;

    }


    drawMoon(){
        this.ctx.drawImage(this.backgroundImage,0,0,this.canvasBG.width, this.canvasBG.height)
        
    }
    drawBackground(){
        this.ctx.drawImage(this.backgroundImage,this.x,this.y,this.canvasBG.width, this.canvasBG.height)
        this.ctx.drawImage(this.backgroundImage,this.x +this.canvasBG.width, this.y, this.canvasBG.width, this.canvasBG.height  )
        this.ctx.drawImage(this.backgroundImage,this.x - this.canvasBG.width, this.y, this.canvasBG.width, this.canvasBG.height  )
    }

    checkPosition(){
        console.log(this.player.x);
        
    }

    update(){
        if(this.x < -this.canvasBG.width){
            console.log('update() x < canvaswidth');
            this.x=0;
        }else{
            this.x -= this.gamespeed;
        }
    }

    updateReverse(){
        if(this.x > this.canvasBG.width){
            this.x=0;
        }else{
            this.x += this.gamespeed;
        }
    }
}