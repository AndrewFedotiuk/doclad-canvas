import type { TImageSettings } from "./../components/imageLoader";
import sandiaImg from "../../../../pictures/fruits/sandia.png";
import appleImg from "../../../../pictures/fruits/apple.png";
import bananaImg from "../../../../pictures/fruits/banana.png";
import basahaImg from "../../../../pictures/fruits/basaha.png";
import peachImg from "../../../../pictures/fruits/peach.png";
import boomImg from "../../../../pictures/fruits/boom.png";


export const imageList: TImageSettings[] = [
	{
		url: sandiaImg,
		score: 50,
		width: 98,
		height: 85,
		hasInteraction: true,
		name: "sandia",
	},
	{
		url: appleImg,
		score: 100,
		width: 33,
		height: 33,
		hasInteraction: true,
		name: "apple",
	},
	{
		url: bananaImg,
		score: 200,
		width: 63,
		height: 25,
		hasInteraction: true,
		name: "banana",
	},
	{
		url: boomImg,
		score: -Infinity,
		width: 33,
		height: 34,
		hasInteraction: true,
		name: "boom",
	},
	{
		url: basahaImg,
		score: 300,
		width: 34,
		height: 36,
		hasInteraction: true,
		name: "basaha",
	},
	{
		url: peachImg,
		score: 250,
		width: 31,
		height: 29.5,
		hasInteraction: true,
		name: "peach",
	}
]