const canvas = <HTMLCanvasElement>document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.strokeStyle = "green";

//*
ctx.beginPath();
ctx.moveTo(60, 50); //*
ctx.lineTo(600, 450);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(60, 450);
ctx.lineTo(600, 50);
ctx.closePath();
ctx.stroke();


// ctx.fillStyle="#ccc";
// ctx.lineWidth = 10;
// ctx.beginPath();
// ctx.moveTo(20, 250);
// ctx.lineTo(200, 375);
// ctx.lineTo(200, 125);
// // ctx.closePath();
// // ctx.lineCap = "butt"; // 'butt' || 'round' || 'square'
// // ctx.lineJoin = "round"; //"bevel" || "round" || "miter"
// ctx.stroke();
// // ctx.fill(); //*



// const lineCap: CanvasLineCap[] = ['butt', 'round', 'square'];
// // Draw guides
// ctx.strokeStyle = '#09f';
// ctx.beginPath();
// ctx.moveTo(250, 10);
// ctx.lineTo(400, 10);
// ctx.moveTo(250, 140);
// ctx.lineTo(400, 140);
// ctx.stroke();

// // Draw lines
// ctx.strokeStyle = 'black';
// for (let i = 0; i < lineCap.length; i++) {
// 	ctx.lineWidth = 15;
// 	ctx.lineCap = lineCap[i];
// 	ctx.beginPath();
// 	ctx.moveTo(275 + i * 50, 10);
// 	ctx.lineTo(275 + i * 50, 140);
// 	ctx.stroke();
// }






// function drawDashedLine(pattern: number[]) {
// 	ctx.beginPath();
// 	ctx.setLineDash(pattern);
// 	ctx.moveTo(50, y);
// 	ctx.lineTo(600, y);
// 	ctx.stroke();
// 	y += 20;
// }

// let y = 15;

// drawDashedLine([]);
// drawDashedLine([1, 1]);
// drawDashedLine([10, 10]);
// drawDashedLine([20, 5]);
// drawDashedLine([15, 3, 3, 3]);
// drawDashedLine([20, 3, 3, 3, 3, 3, 3, 3]);
// drawDashedLine([12, 3, 3]);  // Equals [12, 3, 3, 12, 3, 3]

// ctx.strokeRect(200, 200, 150, 150);