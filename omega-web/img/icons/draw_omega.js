globalThis.drawOmega = function (ctx, outerCircleColor, innerCircleColor) {
  ctx.globalCompositeOperation = "source-over";
  
  // Default to brand blue if no color specified
  var outer = outerCircleColor || '#1565c0';
  var inner = innerCircleColor || '#90caf9';
  
  ctx.strokeStyle = outer;
  ctx.lineWidth = 0.28;

  // Outer circle
  ctx.beginPath();
  ctx.arc(0.5, 0.5, 0.375, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();

  // Fill inner
  ctx.fillStyle = inner;
  ctx.beginPath();
  ctx.arc(0.5, 0.5, 0.25, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
};
