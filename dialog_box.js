export default class DialogBox {
  constructor(width, height, x, y, ctx, canvas, message) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.canvas = canvas;
    this.message = message;
    this.fontSize = 14;
    this.counter = 0;
    this.startPoint = 0;
  }

  draw() {
    this.ctx.font = this.fontSize + "px Helvetica";
    this.ctx.fillStyle = "rgba(5, 32, 32, 0.4)";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.strokeStyle = 'White';
    this.ctx.fillStyle = 'Red';
    //console.log(this.ctx.measureText(this.message));
    //console.log(this.message.length);
    // console.log(this.ctx.measureText(substring));
    
    //console.log(this.yoffset);
    this.printText(this.startPoint, this.message, this.y);
  }

  printText(startPoint, message, yaxis){
    if(message.length < 0) return
    var substring = message.substring(startPoint, this.counter);
    if(this.ctx.measureText(substring).width <= this.width - 20){
      this.ctx.strokeText(substring, this.x+ 10, yaxis + this.fontSize);
      this.counter++;
    }
    this.ctx.strokeText(substring, this.x+ 10, this.y + this.fontSize);
  }
  //while ctx.measureText(message) < width
  //{ strokeText }
  //strokeText

  // formatText(){
  //   fitWidth = fitWidth || 0;
    
  //   if (fitWidth <= 0)
  //   {
  //       this.ctx.fillText( text, x, y );
  //       return;
  //   }
    
  //   for (var idx = 1; idx <= text.length; idx++)
  //   {
  //       var str = text.substr(0, idx);
  //       console.log(str, context.measureText(str).width, fitWidth);
  //       if (context.measureText(str).width > fitWidth)
  //       {
  //           context.fillText( text.substr(0, idx-1), x, y );
  //           printAt(context, text.substr(idx-1), x, y + lineHeight, lineHeight,  fitWidth);
  //           return;
  //       }
  //   }
  //   context.fillText( text, x, y );
  // }
}
