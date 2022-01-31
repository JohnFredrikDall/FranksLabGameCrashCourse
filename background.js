export default class Background{

    constructor(ctx, canvas){
        this.backgroundLayer=new Image()
        
        this.ctx=ctx;
    }

    getImage(backgroundSRC){
        this.backgroundLayer.src=backgroundSRC;
    }

    drawBackground(x,y,width, height){
        this.ctx.drawImage(this.backgroundLayer,x,y,width, height)
    }

    update(x,x2, canvasBGm1, gamespeed){
    }
}