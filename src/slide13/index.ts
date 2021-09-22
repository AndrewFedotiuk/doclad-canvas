export { };
import catImg from "../../pictures/cat.png";
const canvas = <HTMLCanvasElement>document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;



function onMouseMove(e: MouseEvent) {
	ctx.beginPath();
	ctx.arc(e.clientX, e.clientY, 50, 0, 2*Math.PI);
	ctx.fill();
}
canvas.addEventListener("mousemove", onMouseMove);





// function onMouseMove(e: MouseEvent) {
// 	console.log("=-----> [index.ts:6]: ", e);

// 	const canvasPosition = canvas.getBoundingClientRect();
// 	ctx.beginPath();
// 	ctx.arc(e.clientX - canvasPosition.left, e.clientY - canvasPosition.top, 3, 0, 2*Math.PI);
// 	ctx.fill();
// }
// canvas.addEventListener("mousemove", onMouseMove);
// canvas.addEventListener("mouseout", ()=>{
// 	ctx.clearRect(0,0, canvas.width, canvas.height);
// });






// const {top, left} = canvas.getBoundingClientRect();
// const cache = {
// 	x: -1,
// 	y: -1,
// }
// let color = 0;

// function onMouseMove(e: MouseEvent) {
// 	const newPositionX = e.clientX - left;
// 	const newPositionY = e.clientY - top;
// 	// ctx.strokeStyle = `hsl(${color}, 70%, 50%)`; //*

// 	ctx.beginPath();
// 	if (cache.x && cache.y < 0){
// 		cache.x = newPositionX;
// 		cache.y = newPositionY;
// 		ctx.moveTo(newPositionX, newPositionY);
// 	} else {
// 		ctx.moveTo(cache.x, cache.y);
// 	}
// 	ctx.lineTo(newPositionX, newPositionY);
// 	ctx.stroke();

// 	cache.x = newPositionX;
// 	cache.y = newPositionY;
// 	color+=1;

// }
// canvas.addEventListener("mousemove", onMouseMove);
// canvas.addEventListener("mouseout", ()=>{
// 	cache.x = -1;
// 	cache.y = -1;
// 	color = 0;
// 	ctx.clearRect(0,0, canvas.width, canvas.height);
// });






// // Cat --
// const image = new Image();
// image.src = catImg;
// image.onload = drawImage;

// let x = 120;
// let y = 150;
// let catWidth = 400;
// let catHeight = 200;

// let imageX = 1200;
// let imageY = 200;
// let frameWidth = 400;
// let frameHeight = 200;

// const frameCount = 11;
// let currentFrame = 0;

// function drawImage() {
// 	ctx.clearRect(x, y, catWidth, catHeight);
// 	ctx.drawImage(image,
// 		imageX, imageY * currentFrame, frameWidth, frameHeight,
// 		x, y, catWidth, catHeight
// 	);
// }

// canvas.addEventListener("click", ()=>{
// 	if(currentFrame === frameCount){
// 		currentFrame = 0;
// 	}else{
// 		currentFrame +=1;
// 	}
// 	drawImage();
// })



// // Cat v2 ---
// const image = new Image();
// image.src = catImg;
// image.onload = drawImage;

// let x = 120;
// let y = 150;
// let catWidth = 400;
// let catHeight = 200;

// let imageX = 1200;
// let imageY = 200;
// let frameWidth = 400;
// let frameHeight = 200;

// const frameCount = 11;
// let currentFrame = 0;

// function drawImage() {
// 	ctx.drawImage(image,
// 		imageX, imageY * currentFrame, frameWidth, frameHeight,
// 		x, y, catWidth, catHeight
// 	);
// };

// let interval = setInterval(function () {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	drawImage();
// 	if (currentFrame === frameCount) {
// 		currentFrame = 0;
// 	} else {
// 		currentFrame += 1;
// 	}
// }, 1000/12);



// // Cat v3 ---
// const image = new Image();
// image.src = catImg;
// image.onload = drawImage;

// let x = 120;
// let y = 150;
// let catWidth = 400;
// let catHeight = 200;

// let imageX = 1200;
// let imageY = 200;
// let frameWidth = 400;
// let frameHeight = 200;

// const frameCount = 11;
// let currentFrame = 0;

// const framesForUpdate = 3;
// let count = 0;

// function drawImage() {
// 	ctx.drawImage(image,
// 		imageX, imageY * currentFrame, frameWidth, frameHeight,
// 		x, y, catWidth, catHeight
// 	);
// };

// let rEF;
// let lastUpdate = 0;
// let deltaTime = 0;

// ctx.font = "25px serif";

// const gameLoop = function (timeStamp:number = 0) {
// 	ctx.clearRect(0,0,canvas.width, canvas.height);
// 	deltaTime = timeStamp - lastUpdate;

// 	ctx.fillText(`delta: ${deltaTime.toFixed(3)}`,50,50);
// 	ctx.fillText(`lastUpdate: ${(lastUpdate / 100).toFixed(3)}`,50,100);

// 	if(count === framesForUpdate){
// 		if (currentFrame === frameCount) {
// 		currentFrame = 0;
// 	} else {
// 		currentFrame += 1;
// 	}
// 		count = 0;
// 	}else{
// 		count += 1;
// 	};

// 	drawImage();

// 	lastUpdate = timeStamp;

// 	rEF = requestAnimationFrame(gameLoop);
// };

// gameLoop();
