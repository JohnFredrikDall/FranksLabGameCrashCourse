export default class Background{

constructor(ctx, canvas){
    this.backgroundLayer=new Image()
    
    this.ctx=ctx;
}

getImage(backgroundSRC){
    this.backgroundLayer.src=backgroundSRC;
}

drawBackground(width, height){
    this.ctx.drawImage(this.backgroundLayer,0,0,width, height)
}
}