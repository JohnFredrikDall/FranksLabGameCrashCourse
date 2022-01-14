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
        this.hasHitTerrain = false;
    }

    update(){
        this.gravitySpeed += this.gravity;
        this.y += this.gravitySpeed;
        this.friction();
        this.x += this.moveSpeed;
        this.hitBottom();
        
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
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
        if(this.hasHitTerrain){
            this.gravitySpeed = 0;
        }
    }


    hitBottom(){
        var bottom = canvas.height - this.height;
        if(this.y > bottom) {
            this.y = bottom;
            this.hasHitTerrain = true;
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