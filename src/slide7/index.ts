export { };
const canvas = <HTMLCanvasElement>document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.lineWidth = 5;

ctx.beginPath();
ctx.arc(300, 250, 200, 0, 2 * Math.PI);
// ctx.arc(300,250,200,0,20*(Math.PI/180));
ctx.closePath();
ctx.stroke();

// --arcTo
// ctx.beginPath();
// const arc = 190;
// ctx.moveTo(200, 20);
// ctx.arcTo(400, 20, 390, 400, arc);
// ctx.arcTo(400, 400, 0, 400, arc);

// ctx.arcTo(20, 400, 10, 20, arc);
// ctx.arcTo(20, 20, 400, 20, arc);
// ctx.closePath();
// ctx.stroke();


// ctx.fill();


// --Quadratic Bézier curve
// ctx.beginPath();
// ctx.moveTo(160, 50);
// ctx.quadraticCurveTo(350, 50, 350, 200);
// ctx.quadraticCurveTo(350, 400, 150, 400);
// ctx.quadraticCurveTo(50, 400, 50, 200);
// ctx.quadraticCurveTo(60, 60, 150, 50);
// ctx.closePath();
// ctx.stroke();


// --Bézier curve
// ctx.beginPath();
// ctx.moveTo(250, 150);
// ctx.bezierCurveTo(250, 150, 400, 150, 400,300);
// ctx.bezierCurveTo(400, 450, 250, 450, 250,450);

// ctx.bezierCurveTo(100, 450, 100, 300, 100,300);
// ctx.bezierCurveTo(100, 200, 150, 150, 250,150);
// ctx.closePath();
// ctx.stroke();