import { getRandomBetween } from "./src/helpers/randomFrom";
export { };
import Game from "./src/components/Game";
import ImageLoader from "./src/components/imageLoader";
import { imageList } from "./src/helpers/imageList";
import { showLoadingScreen } from "./src/helpers/showLoadingScreen";
const canvas = <HTMLCanvasElement>document.getElementById("mainCanvas");

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

showLoadingScreen(ctx, canvas);

let REF;
const game = new Game(canvas);

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";

setInterval(() => {
	if(game.gameItems.length >= 100) return;
	const activeIndex = getRandomBetween(0, imageLoaderInstance.imageCache.length - 1);
	game.addGameItem(imageLoaderInstance.imageCache[activeIndex]);
}, 3000)

const gameLoop = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillText(`Score: ${game.score}`, 10, 40);

	for (let index = 0; index < game.gameItems.length; index++) {
		const fruit = game.gameItems[index];
		fruit.update(ctx);
	}

	REF = requestAnimationFrame(gameLoop);
};

const startGame = () => {
	gameLoop();
	game.addGameItem(imageLoaderInstance.imageCache[getRandomBetween(0, imageLoaderInstance.imageCache.length - 1)]);
	game.addGameItem(imageLoaderInstance.imageCache[getRandomBetween(0, imageLoaderInstance.imageCache.length - 1)]);
	game.addGameItem(imageLoaderInstance.imageCache[getRandomBetween(0, imageLoaderInstance.imageCache.length - 1)]);
	game.addGameItem(imageLoaderInstance.imageCache[getRandomBetween(0, imageLoaderInstance.imageCache.length - 1)]);
}

const imageLoaderInstance = new ImageLoader(startGame);

for (let index = 0; index < imageList.length; index++) {
	const fruit = imageList[index];
	imageLoaderInstance.addImage(fruit);
};




