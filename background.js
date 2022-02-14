export default class Background{

    constructor(ctx, canvas, imageLocation, x, x2, player, leftEdge, rightEdge){
        this.backgroundImage=new Image();
        this.backgroundImage.src=imageLocation;
        this.canvasBG = canvas;
        this.player = player;
        this.ctx=ctx;
        this.x=x;
        this.y=0;
        this.x2=x2;
        this.x3=-x2;
        this.leftEdge = leftEdge;
        this.rightEdge = rightEdge;
        this.gamespeed=1;
        this.edgePanningLeft = false;
        this.edgePanningRight = false;
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
        if (this.player.x <= this.leftEdge) {        
            this.edgePanningLeft = true;
            if(this.player.currentState.state === ("RUNNING LEFT" || "JUMPING LEFT")){
                this.updateReverse();
            }
            
        }
        else if((this.player.x + this.player.width) > this.rightEdge){
            this.edgePanningRight = true;
            if(this.player.currentState.state === ("RUNNING RIGHT" || "JUMPING RIGHT")){
                this.update();
            }
            
        }
        else{
            this.edgePanningLeft = false; 
            this.edgePanningRight = false; 
        }
        
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