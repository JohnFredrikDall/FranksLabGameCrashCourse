export default class Controls {
    constructor() {
        this.lastKey = '';
        window.addEventListener('keydown', (e) =>{
            switch (e.key) {
                case "ArrowLeft":
                    this.lastKey = "PRESS left";
                case "ArrowRight":
                    this.lastKey = "PRESS right";
                case "ArrowDown":
                    this.lastKey = "PRESS down";
                case "ArrowUp":
                    this.lastKey = "PRESS up";
            }
        });

        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.lastKey = "RELEASE left";
                case "ArrowRight":
                    this.lastKey = "RELEASE right";
                case "ArrowDown":
                    this.lastKey = "RELEASE down";
                case "ArrowUp":
                    this.lastKey = "RELEASE up";
            }
        });
    }

    movePlayer(player, keys) {
        if (keys && keys["ArrowLeft"]) {
            //player.state = 'running';
            this.arrowLeft(player);
        }
        if (keys && keys["ArrowRight"]) {
            //player.state = 'running';
            this.arrowRight(player);
        }
        if (keys && keys["ArrowDown"]) {
            //player.state = 'idle';
            this.arrowDown(player);
        }
        if (keys && keys["ArrowUp"]) {
            // player.state = 'jumping';
            this.arrowUp(player);
        }

    }

    arrowLeft(player) {
        player.x += -1;
    }

    arrowRight(player) {
        player.x += 1;
    }

    arrowDown(player) {
        player.y += 1;
    }

    arrowUp(player) {
        if (!player.affectedByGravity) {
            player.gravitySpeed = -5;
            player.gravity = 0.1;
            player.affectedByGravity = true;
        }
    }

}





