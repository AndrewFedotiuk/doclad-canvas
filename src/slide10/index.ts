export { };
import catImg from "../../pictures/cat.png";
const canvas = <HTMLCanvasElement>document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const image = new Image();
image.src = catImg;
image.onload = drawImage;

function drawImage() {
	// ctx.beginPath();
	// ctx.arc(100, 100, 100, 0, Math.PI * 2, true);
	// ctx.fillStyle = "white"
	// ctx.fill();
	// ctx.clip();

	ctx.drawImage(image, 0, 0, 250, 480);
}



// let x = 120;
// let y = 150;
// let catWidth = 400;
// let catHeight = 200;

// let imageX = 1200;
// let imageY = 200;
// let frameWidth = 400;
// let frameHeight = 200;

// function drawImage() {

// 	ctx.drawImage(image,
// 		imageX, imageY, frameWidth, frameHeight,
// 		x, y, catWidth, catHeight
// 	);
// }





// // Create a pattern, offscreen
// const patternCanvas = document.createElement('canvas');
// const patternContext = patternCanvas.getContext('2d') as CanvasRenderingContext2D;
// patternCanvas.width = 50;
// patternCanvas.height = 50;

// patternContext.fillStyle = '#ad904e';
// // patternContext.fillStyle = '#4f7896';
// patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);

// patternContext.lineWidth = 1;
// patternContext.beginPath();
// patternContext.moveTo(25,0);
// patternContext.lineTo(25,50);
// patternContext.closePath();
// patternContext.stroke();

// patternContext.beginPath();
// patternContext.arc(12.5,10,2,0,2*Math.PI);
// patternContext.stroke();

// patternContext.beginPath();
// patternContext.arc(38,10,2,0,2*Math.PI);
// patternContext.stroke();

// //
// const pattern = ctx.createPattern(patternCanvas, 'repeat');
// ctx.fillStyle = pattern!;
// ctx.fillRect(0, 0, canvas.width, canvas.height);