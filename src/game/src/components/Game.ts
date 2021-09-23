import { getRandomBetween } from "../helpers/randomFrom";
import { GameItem } from "./GameItem";
import type { TImageFromCache } from "./imageLoader";

export default class Game {
	gameItems: GameItem[];
	score: number;
	canvas: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement) {
		this.gameItems = [];
		this.score = 0;
		this.canvas = canvas;

		canvas.addEventListener("click", (event) => {
			const {top, left} = canvas.getBoundingClientRect();

			const x = (event.clientX - left);
			const y = (event.clientY - top);

			for (let index = 0; index < this.gameItems.length; index++) {
				const fruit = this.gameItems[index];

				if (this.isInteracted(x,y,fruit) && fruit.hasInteraction){
					if(fruit.score === -Infinity){
						alert(`You score is ${this.score}!`);
						location.reload();
					}
					if (fruit.score){
						this.updateScore(fruit.score)
					}
					this.removeGameItem(index);
				}

			}

		})
	};

	addGameItem(gameItem: TImageFromCache) {
		this.gameItems.push(new GameItem({
			...gameItem,
			x: getRandomBetween(0, this.canvas.width - gameItem.width * 1.5),
			y: getRandomBetween(0, this.canvas.height - gameItem.height * 1.5),
			angle: 0,
		}, this.canvas))
	};

	removeGameItem(index: number) {
		this.gameItems.splice(index, 1);
	}

	isInteracted(positionX: number, positionY: number, fruit: GameItem) {
		return positionX > fruit.x && positionX < fruit.x + fruit.width &&
			positionY > fruit.y && positionY < fruit.y + fruit.height
	}

	updateScore(updater: number){
		this.score += updater;
	}
}