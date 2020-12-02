'use strict';

window.renderStatistics = function (ctx, names, times) {

  // Отрисовка облака

  ctx.fillStyle = '#ffffff';
  ctx.beginPath();

  ctx.lineTo(110, 25);

  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';

  var currentX = 110;
  var currentY = 25;
  var y1 = 10;
  var y2 = 10;
  var step = 100;
  var cloudIndent = 10;
  var cloudBodySize = 80;
  var endY = currentY;
  for (var i = 0; i < 4; i++) {
    var endX = currentX + step;
    var x1 = currentX + cloudIndent;
    var x2 = x1 + cloudBodySize;
    currentX += step;
    ctx.bezierCurveTo(x1, y1, x2, y2, endX, endY);
  }

  ctx.fill();

  step = 80;
  cloudBodySize = 60;
  x1 = 520;
  x2 = 520;
  currentX = endX;
  for (var j = 0; j < 3; j++) {
    endY = currentY + step;
    y1 = currentY + cloudIndent;
    y2 = y1 + cloudBodySize;
    currentY += step;
    ctx.bezierCurveTo(x1, y1, x2, y2, endX, endY);
  }

  ctx.fill();

  step = 100;
  cloudBodySize = 80;
  y1 = 280;
  y2 = 280;
  currentY = endY;
  for (i = 0; i < 4; i++) {
    endX = currentX - step;
    x1 = currentX - cloudIndent;
    x2 = x1 - cloudBodySize;
    currentX -= step;
    ctx.bezierCurveTo(x1, y1, x2, y2, endX, endY);
  }

  ctx.fill();

  step = 80;
  cloudBodySize = 60;
  x1 = 100;
  x2 = 100;
  currentX = endX;
  for (j = 0; j < 3; j++) {
    endY = currentY - step;
    y1 = currentY - cloudIndent;
    y2 = y1 - cloudBodySize;
    currentY -= step;
    ctx.bezierCurveTo(x1, y1, x2, y2, endX, endY);
  }

  ctx.fill();

  ctx.closePath();

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = 'transparent';

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура! Вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 220, 60);


};