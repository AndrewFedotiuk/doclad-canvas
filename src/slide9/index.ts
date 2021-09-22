export { };
const canvas = <HTMLCanvasElement>document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.font = '48px serif';
ctx.textBaseline = "top";

ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.shadowBlur = 1;
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

ctx.fillText("Hello world", 50, 50);
ctx.strokeText("Hello world", 350, 50);

// const text = ctx.measureText("Hello world");
// ctx.fillStyle = "red";
// ctx.fillText(text.width.toString(), 50, 150);
// console.log("=-----> [index.ts:17]: ", text);

// ctx.strokeRect(250, 150, 150, 150)
