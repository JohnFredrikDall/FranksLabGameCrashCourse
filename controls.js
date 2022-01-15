class Controls {
    constructor() {
    }
    
    movePlayer(player, keys) {
        if (keys && keys["ArrowLeft"]) this.arrowLeft(player);
        if (keys && keys["ArrowRight"]) this.arrowRight(player);
        if (keys && keys["ArrowDown"]) this.arrowDown(player);
        if (keys && keys["ArrowUp"]) this.arrowUp(player);
    }

    arrowLeft(player) {
        player.x += -1;
    }

    arrowRight(player) {
        player.x += 1;
    }

    arrowDown(player) {
        player.y += -1;
    }

    arrowUp(player) {
        if (!player.affectedByGravity) {
            player.gravitySpeed = -5;
            player.gravity = 0.1;
            player.affectedByGravity = true;
        }
    }

}





