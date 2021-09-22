export const showLoadingScreen = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
	ctx.save();
	ctx.strokeStyle = "white"
	ctx.font = "48px serif";
	ctx.textAlign = "center";
	ctx.fillText("Loading...", canvas.width / 2, canvas.height / 2);
	ctx.strokeText("Loading...", canvas.width / 2, canvas.height / 2);
	ctx.restore();
}