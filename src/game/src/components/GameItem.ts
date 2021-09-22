import { getRandomBetween } from "../helpers/randomFrom";
import { TImageFromCache } from "./imageLoader";

export type TGameItem = TImageFromCache & {
	x: number,
	y: number,
	angle: number
}

export class GameItem {
	x: number;
	y: number;
	angle: number;
	image: HTMLImageElement;
	url: string;
	name: string;
	hasInteraction?: boolean;
	score?: number;
	width: number;
	height: number;
	onPick: boolean;
	speed: number;
	canvas: HTMLCanvasElement;
	direction: "left" | "right";
	accelerationRate: number;
	gravity: number;
	rotateCoef: number;

	constructor(gameItem: TGameItem, canvas: HTMLCanvasElement) {
		this.x = getRandomBetween(0, canvas.width - gameItem.width * 1.5);
		this.y = canvas.height + gameItem.height * 1.5;
		this.width = gameItem.width;
		this.height = gameItem.height;
		this.angle = 0;
		this.image = gameItem.image;
		this.url = gameItem.url;
		this.name = gameItem.name;
		this.hasInteraction = gameItem.hasInteraction;
		this.score = gameItem.score;
		this.onPick = false;
		this.speed = this.setDefaultSpeed();
		this.canvas = canvas;
		this.direction = this.getDirection();
		this.accelerationRate = (getRandomBetween(28, 45) / 1000);
		this.gravity = 1;
		this.rotateCoef = Math.round(Math.random()) ? getRandomBetween(1, 6) : -getRandomBetween(3, 6);
	};

	update(ctx: CanvasRenderingContext2D) {
		this.angle += this.rotateCoef;
		if (this.angle >= 360) {
			this.angle = 0;
		}

		ctx.save();
		const dx = this.x + this.width / 2;
		const dy = this.y + this.height / 2;
		ctx.translate(dx, dy);
		ctx.rotate((this.angle * Math.PI) / 180);

		ctx.translate(-dx, -dy);
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		ctx.restore();



		if (this.onPick) {
			this.moveDown();
		} else if (this.speed < 0.1) {
			this.onPick = true;
		} else {
			if (this.direction === "right") {
				this.x += this.gravity;
			} else {
				this.x -= this.gravity;
			}
			this.y -= (this.speed -= this.accelerationRate);
		}
	};

	moveDown() {
		if (this.direction === "right") {
			this.x += this.gravity;
		} else {
			this.x -= this.gravity;
		}
		this.y += (this.speed += this.accelerationRate);

		if (this.y >= this.canvas.height + this.height * 2) {
			this.onPick = false;
			this.x = getRandomBetween(0, this.canvas.width);
			this.direction = this.getDirection();
			this.speed = this.setDefaultSpeed();
		}
	}

	setDefaultSpeed() {
		return getRandomBetween(38, 47) / 7.5;
	}

	getDirection() {
		return this.x <= this.canvas.width / 2 ? "right" : "left";
	}
}