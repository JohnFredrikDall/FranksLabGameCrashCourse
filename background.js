export default class Background{

    constructor(ctx, canvas, imageLoc,x,x2,gamespeed){
        this.backgroundLayer=new Image()
        this.backgroundLayer.src=imageLoc;
        this.canvasBG = canvas;

        this.ctx=ctx;
        this.x=x;
        this.y=0;
        this.x2=x2;
        this.x3=-x2;
        this.gamespeed=gamespeed;
    }

    getImage(backgroundSRC){
        this.backgroundLayer.src=backgroundSRC;
    }

    drawMoon(){
        this.ctx.drawImage(this.backgroundLayer,0,0,this.canvasBG.width, this.canvasBG.height)
    }
    drawBackground(){
        this.ctx.drawImage(this.backgroundLayer,this.x,this.y,this.canvasBG.width, this.canvasBG.height)
        this.ctx.drawImage(this.backgroundLayer,this.x +this.canvasBG.width, this.y, this.canvasBG.width, this.canvasBG.height  )
        this.ctx.drawImage(this.backgroundLayer,this.x - this.canvasBG.width, this.y, this.canvasBG.width, this.canvasBG.height  )
        
    }

    update(){
        if(this.x < -this.canvasBG.width){
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