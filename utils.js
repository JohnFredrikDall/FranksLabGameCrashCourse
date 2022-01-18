export function drawStatusText(ctx, controls, player){
    ctx.fillStyle ='black';
    ctx.font = '26px Helvetica';
    ctx.fillText('Last input: ' + controls.lastKey, 20, 30);
    ctx.fillText('Active state: ' + player.currentState.state, 20, 120);
}