class Terrain {
    constructor(){
        this.width = 300;
        this.height = 50;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        // this.y = canvas.height - 100;
        this.directionX = Math.random() * 1 + 0;
        this.directionY = Math.random() * 5 - 2.5;
    } 
    
    update(){
        // console.log(this.directionX);
        this.x -= this.directionX;
    }

    draw(){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}