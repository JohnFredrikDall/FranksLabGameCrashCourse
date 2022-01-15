class CollisionHandler{
    constructor(){}

    detectCollision(player, terrainArray){
        for (let i = 0; i < terrainArray.length; i++) {
            const terrain = terrainArray[i];
            
            if(this.correctPositionYAxis(player, terrain)) {     
                if(this.correctPositionXAxis(player, terrain)) {
                    if(this.correctGravityDirection(player)){
                        if(this.correctDistanceFromTerrain(player, terrain)){
                            player.affectedByGravity = false;
                            player.y = terrain.y - terrain.height;
                        }
                    }
                }
                else if(this.correctDistanceFromTerrain(player, terrain)){
                    player.affectedByGravity = true;
                }
            }
        }
    }

    correctPositionYAxis(player, terrain){
        return ((player.y + player.height) <= terrain.y);
    }

    correctPositionXAxis(player, terrain){
        return (player.x >= terrain.x && 
            player.x < (terrain.x + terrain.width) ||
            (player.x + player.width) > terrain.x &&
            (player.x + player.width) < (terrain.x + terrain.width))
    }

    correctGravityDirection(player){
        return (Math.sign(player.gravitySpeed) === 1)
    }

    correctDistanceFromTerrain(player, terrain){
        return ((player.y + player.height)>=terrain.y -10)
    }
}

