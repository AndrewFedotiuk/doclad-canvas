export { };
import myImg from "../../pictures/photo.jpg";
const canvas = <HTMLCanvasElement>document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const save = document.getElementById("saveButton");

save?.addEventListener("click", ()=>{
	const imageData = canvas.toDataURL('image/jpeg', 1);

	const link = document.createElement("a");
	link?.setAttribute('download', 'myPhoto.jpeg');
	link?.setAttribute('href', imageData);
	link?.click();
})

const image = new Image();
image.src = myImg;
image.onload = drawImage;

function drawImage() {
	ctx.drawImage(image, 80, 0, 480, 480);
};

const canvasSizes = canvas.getBoundingClientRect();
canvas.addEventListener("click", (e)=>{
	const imgData = ctx.getImageData(e.pageX - canvasSizes.left, e.pageY - canvasSizes.top,1,1);
	console.log("=-----> [index.ts:16]: ", imgData);
});






// function drawImage() {
// 	ctx.drawImage(image, 0, 0, 200, 200);

// 	const imageData = ctx.getImageData(0,0,200,200);
// 	const data = imageData.data;
// 	console.log("=-----> [index.ts:28]: ", data);

// 	for (let i = 0; i < data.length; i += 4) {
// 		const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;

// 		data[i] = avg; // red
// 		data[i + 1] = avg; // green
// 		data[i + 2] = avg; // blue
// 	}
// 	ctx.putImageData(imageData, 210, 0);
// };