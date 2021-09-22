export { };
import sandiaImg from "../../pictures/fruits/sandia.png";
const canvas = <HTMLCanvasElement>document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;


ctx.fillRect(20, 20, 150, 150);

ctx.save();
ctx.fillStyle = "red";
ctx.fillRect(200, 20, 150, 150);
ctx.restore();

ctx.fillRect(380, 20, 150, 150);




// ctx.save();

// // ctx.scale(-1, 1);
// ctx.font = "40px serif";
// ctx.fillText("Hello world", 200, 250);

// ctx.restore();



// const image = new Image();
// image.src = sandiaImg;

// let angle = 0;
// let x = 50;
// let y = 50;

// image.onload = () => {
// 	gameLoop();
// }

// const gameLoop = function () {
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	const dx = x + image.width / 2;
// 	const dy = y + image.height / 2;

// 	ctx.save();
// 	ctx.translate(dx, dy);
// 	ctx.rotate(angle);
// 	ctx.translate(-dx, -dy);

// 	ctx.drawImage(image, x, y);
// 	ctx.restore();

// 	angle += 1;

// 	requestAnimationFrame(gameLoop);
// };







	// ctx.rotate((angle * Math.PI) / 180);
