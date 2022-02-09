export default class Controls {

    constructor(player) {
        this.player = player;
        this.keys = [];
        this.lastKey = '';
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.keys[e.key] = true;
                    this.lastKey = "PRESS left";
                    break;
                case "ArrowRight":
                    this.keys[e.key] = true;
                    this.lastKey = "PRESS right";
                    break;
                case "ArrowDown":
                    this.keys[e.key] = true;
                    this.lastKey = "PRESS down";
                    break;
                case "ArrowUp":
                    this.keys[e.key] = true;
                    this.lastKey = "PRESS up";
                    break;
            }
        });

        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.keys[e.key] = false;
                    this.lastKey = "RELEASE left";
                    break;
                case "ArrowRight":
                    this.keys[e.key] = false;
                    this.lastKey = "RELEASE right";
                    break;
                case "ArrowDown":
                    this.keys[e.key] = false;
                    this.lastKey = "RELEASE down";
                    break;
                case "ArrowUp":
                    this.keys[e.key] = false;
                    this.lastKey = "RELEASE up";
                    break;
            }
        });
    }


    movePlayer() {
        if (this.keys["ArrowLeft"]) {
            this.arrowLeft(this.player);
        }
        if (this.keys["ArrowRight"]) {
            this.arrowRight(this.player);
        }
        if (this.keys["ArrowDown"]) {
            //this.arrowDown(this.player);
        }
        if (this.keys["ArrowUp"]) {
            this.arrowUp(this.player);
        }
    }
    arrowLeft(player) {
        player.x += -5;
    }

    arrowRight(player) {
        player.x += 5;
    }

    arrowDown(player) {
        player.y += 5;
    }

    arrowUp(player) {
        if (!player.affectedByGravity) {
            player.gravitySpeed = -5;
            player.gravity = 0.1;
            player.affectedByGravity = true;
        }
    }
}
