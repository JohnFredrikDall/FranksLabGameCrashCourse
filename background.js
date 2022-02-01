export default class Background{

    constructor(ctx, canvas, imageLoc,x,x2,gamespeed){
        this.backgroundLayer=new Image()
        this.backgroundLayer.src=imageLoc;
        this.canvasBG = canvas;

        this.ctx=ctx;
        this.x=x;
        this.y=0;
        this.x2=x2;
        this.gamespeed=gamespeed;

        console.log(this.x+" "+this.y + " " + this.x2 +" " + this.gamespeed)
    }

    getImage(backgroundSRC){
        this.backgroundLayer.src=backgroundSRC;
    }

    drawBackground(){
        this.ctx.drawImage(this.backgroundLayer,this.x,this.y,this.canvasBG.width, this.canvasBG.height)
        this.ctx.drawImage(this.backgroundLayer,this.x2, this.y, this.canvasBG.width, this.canvasBG.height  )
    }

    update(){
        if(this.x < -this.canvasBG.width){
            this.x=this.canvasBG.width + this.x2 - this.gamespeed;
        }else{
            this.x -= this.gamespeed;
        }
        if(this.x2 < -this.canvasBG.width){
            this.x2= this.canvasBG.width +this.x -this.gamespeed;
        }else{
            this.x2 -= this.gamespeed;
        }

        /*update(x,x2, canvasBGm1, gamespeed){
            if(x < -canvasBGm1.width){
                x=canvasBGm1.width + x2 - gamespeed;
            }else{
                x -= gamespeed;
            }
            if(x2 < -canvasBGm1.width){
                x2= canvasBGm1.width +x -gamespeed;
            }else{
                x2 -= gamespeed;
            }*/
    
    }
}