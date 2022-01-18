export function drawStatusText(ctx, controls, player){
    ctx.fillStyle ='black';
    ctx.font = '26px Helvetica';
    ctx.fillText('Last input: ' + controls.lastKey, 20, 30);
    ctx.fillText('Active state: ' + player.currentState.state, 20, 120);
}

export function flipSpriteHorizontally(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    ctx.translate(dx + sw, dy);

    ctx.scale(-1, 1);

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, dw, dh);

    ctx.setTransform(1,0,0,1,0,0);
}