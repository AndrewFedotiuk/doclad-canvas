
export type TImageSettings = {
	url: string,
	score?: number,
	width: number,
	height: number,
	hasInteraction?: boolean,
	name: string
}

export type TImageFromCache = {
	image: HTMLImageElement,
	url: string,
	score?: number,
	width: number,
	height: number,
	hasInteraction?: boolean,
	name: string
}

class ImageLoader {
	imageStack: string[];
	imageCache: TImageFromCache[];
	loading: boolean;
	loadingCallback: () => void;

	constructor(loadingCallback: () => void) {
		this.imageStack = [];
		this.imageCache = [];
		this.loading = true;
		this.loadingCallback = loadingCallback;
	};

	checkLoaded(){
		if (this.imageCache.length === this.imageStack.length) {
			this.loading = false;
			this.loadingCallback();
		}
	}

	addImage(props: TImageSettings) {
		this.loading = true;

		if (this.imageStack.includes(props.url)){
			this.checkLoaded();
			return;
		};
		this.imageStack.push(props.url);

		const image = new Image();
		image.src = props.url;
		image.onload = () => {
			this.imageCache.push({
				image,
				...props,
			});

			this.checkLoaded();
		};
	}
}

export default ImageLoader;