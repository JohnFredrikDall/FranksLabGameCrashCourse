export function drawStatusText(ctx, controls, player){
    ctx.fillStyle ='black';
    ctx.font = '26px Helvetica';
    ctx.fillText('Last input: ' + controls.lastKey, 20, 30);
    ctx.fillText('Active state: ' + player.currentState.state, 20, 120);
}

function flipSpriteHorizontally(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    ctx.translate(dx + sw, dy);

    ctx.scale(-1, 1);

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, dw, dh);

    ctx.setTransform(1,0,0,1,0,0);
}

export function drawSpriteFrames(player) {
    if (player.currentState.state === "IDLE LEFT") {
      if (player.counter < player.timeBetweenEachFrame) {
        player.counter++;
        flipSpriteHorizontally(
          player.ctx,
          player.playerImage,
          player.spritesCoordinates.idle[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.idle[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
      } else {
        flipSpriteHorizontally(
          player.ctx,
          player.playerImage,
          player.spritesCoordinates.idle[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.idle[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
        player.counter = 0;
        if (player.frame < player.spritesCoordinates.idle.length - 1) {
          player.frame++;
        } else {
          player.frame = 0;
        }
      }
    }
    if (player.currentState.state === "IDLE RIGHT") {
      if (player.counter < player.timeBetweenEachFrame) {
        player.counter++;
        player.ctx.drawImage(
          player.playerImage,
          player.spritesCoordinates.idle[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.idle[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
      } else {
        player.ctx.drawImage(
          player.playerImage,
          player.spritesCoordinates.idle[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.idle[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
        player.counter = 0;
        if (player.frame < player.spritesCoordinates.idle.length - 1) {
          player.frame++;
        } else {
          player.frame = 0;
        }
      }
    }
    if (player.currentState.state === "RUNNING LEFT") {
      if (player.counter < player.timeBetweenEachFrame) {
        player.counter++;
        flipSpriteHorizontally(
          player.ctx,
          player.playerImage,
          player.spritesCoordinates.running[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.running[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
      } else {
        flipSpriteHorizontally(
          player.ctx,
          player.playerImage,
          player.spritesCoordinates.running[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.running[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
        player.counter = 0;
        if (player.frame < player.spritesCoordinates.running.length - 1) {
          player.frame++;
        } else {
          player.frame = 0;
        }
      }
    }
    if (player.currentState.state === "RUNNING RIGHT") {
      if (player.counter < player.timeBetweenEachFrame) {
        player.counter++;
        player.ctx.drawImage(
          player.playerImage,
          player.spritesCoordinates.running[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.running[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
      } else {
        player.ctx.drawImage(
          player.playerImage,
          player.spritesCoordinates.running[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.running[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
        player.counter = 0;
        if (player.frame < player.spritesCoordinates.running.length - 1) {
          player.frame++;
        } else {
          player.frame = 0;
        }
      }
    }
    if (player.currentState.state === "JUMPING LEFT") {
      if (player.counter < player.timeBetweenEachFrame) {
        player.counter++;
        flipSpriteHorizontally(
          player.ctx,
          player.playerImage,
          player.spritesCoordinates.jumping[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.jumping[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
      } else {
        flipSpriteHorizontally(
          player.ctx,
          player.playerImage,
          player.spritesCoordinates.jumping[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.jumping[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
        player.counter = 0;
        if (player.frame < player.spritesCoordinates.jumping.length - 1) {
          player.frame++;
        } else {
          player.frame = 0;
        }
      }
    }
    if (player.currentState.state === "JUMPING RIGHT") {
      if (player.counter < player.timeBetweenEachFrame) {
        player.counter++;
        player.ctx.drawImage(
          player.playerImage,
          player.spritesCoordinates.jumping[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.jumping[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
      } else {
        player.ctx.drawImage(
          player.playerImage,
          player.spritesCoordinates.jumping[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.jumping[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
        player.counter = 0;
        if (player.frame < player.spritesCoordinates.jumping.length - 1) {
          player.frame++;
        } else {
          player.frame = 0;
        }
      }
    }

    if (player.currentState.state === "SITTING LEFT") {
      if (player.counter < player.timeBetweenEachFrame) {
        player.counter++;
        flipSpriteHorizontally(
          player.ctx,
          player.playerImage,
          player.spritesCoordinates.sitting[player.frame].x + 
          player.frame * player.spriteWidth,
          player.spritesCoordinates.sitting[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
      } else {
        flipSpriteHorizontally(
          player.ctx,
          player.playerImage,
          player.spritesCoordinates.sitting[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.sitting[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
        player.counter = 0;
        if (player.frame < player.spritesCoordinates.sitting.length - 1) {
          player.frame++;
        } else {
          player.frame = 1;
        }
      }
    }

    if (player.currentState.state === "SITTING RIGHT") {
      if (player.counter < player.timeBetweenEachFrame) {
        player.counter++;
        player.ctx.drawImage(
          player.playerImage,
          player.spritesCoordinates.sitting[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.sitting[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
      } else {
        player.ctx.drawImage(
          player.playerImage,
          player.spritesCoordinates.sitting[player.frame].x +
            player.frame * player.spriteWidth,
          player.spritesCoordinates.sitting[player.frame].y,
          player.spriteWidth,
          player.spriteHeight,
          player.x,
          player.y,
          player.width,
          player.height
        );
        player.counter = 0;
        if (player.frame < player.spritesCoordinates.sitting.length - 1) {
          player.frame++;
        } else {
          player.frame = 1;
        }
      }
    }
  }

  //Brukes til å teste drawImage() ATM
    // let x = 190;
    // let y = 5;

    // ctx.drawImage(this.playerImage, frame.x + this.frame * this.spriteWidth, frame.y, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    // this.ctx.drawImage(
    //   this.playerImage,
    //   x + this.frame * this.spriteWidth,
    //   y,
    //   this.spriteWidth,
    //   this.spriteHeight,
    //   this.x,
    //   this.y,
    //   this.width,
    //   this.height
    // );