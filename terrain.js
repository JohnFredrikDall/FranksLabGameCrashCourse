class Terrain {
    constructor(){
        this.width = 100;
        this.height = 50;
        this.x = canvas.width/2;
        //this.y = Math.random() * (canvas.height - this.height);
        this.y = canvas.height - 100;
        this.directionX = Math.random() * 5 + 3;
        this.directionY = Math.random() * 5 - 2.5;
    }
    
    update(){
        // this.x -= this.directionX;
    }

    draw(){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}