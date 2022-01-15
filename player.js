class Player{
    constructor(width, height, color, x, y){
        this.width =  width;
        this.height = height;
        this.color = color;
        this.x = x; 
        this.y = y;
        this.gravity = 0.1;
        this.gravitySpeed = 0;
        this.moveAcceleration = 2;
        this.moveDeceleration = -2;
        this.moveSpeed = 0;
        this.playerImage = new Image();
        this.playerImage.src = 'sprites/elisa-spritesheet1.png';
        this.spriteWidth = 50;
        this.spriteHeight = 50;
        this.frameX = 0;
        this.affectedByGravity = true;
    }

    update(){
        this.gravitySpeed += this.gravity;
        this.y += this.gravitySpeed;
        this.friction();
        this.x += this.moveSpeed;
        this.hitBottom();
        
    }

    draw(){
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        //ctx.drawImage(this.playerImage, sx, sy, sw, sh, dx, dy, dw, dh);
        ctx.drawImage(this.playerImage, 4 + this.frameX * this.spriteWidth, 4, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }

    friction(){
        if(this.moveSpeed > 0.2){
            this.moveSpeed += -0.2;
          }else if(this.moveSpeed < -0.2){
            this.moveSpeed += 0.2;
          }else{
            this.moveSpeed = 0.0;
          }
    }

    checkForCollision(){
        if(!this.affectedByGravity){
            this.gravitySpeed = 0;
            this.gravity = 0;
        }
        else{
          this.gravity = 0.1;
        }
    }


    hitBottom(){
        var bottom = canvas.height - this.height;
        if(this.y > bottom) {
            this.y = bottom;
            this.affectedByGravity = false;
        }
    }

    positiveMovement() {
        this.moveSpeed += this.moveAcceleration;
    
        if (this.moveSpeed > 6) {
          this.moveSpeed = 6;
          this.x += this.moveSpeed;
        }else{
          this.x += this.moveSpeed;
        }
      }
      negativeMovement() {
        this.moveSpeed += this.moveDeceleration;
        if (this.moveSpeed < -6) {
          this.moveSpeed = -6;
          this.x += this.moveSpeed;
        }else{
          this.x += this.moveSpeed;
        }
      }
}