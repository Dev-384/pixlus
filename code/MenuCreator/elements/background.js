import { innerScreen } from "../../play/main.js";
import { image } from "../../play/preload/assets.js";

export default class Background {
	constructor(){
		this.img = {};
		this.img.source = "";
		this.img.tile = {};
		this.img.tile.width = 100;
		this.img.tile.height = 100;
		this.img.brightness = 1;
	}
	setSource(source=""){
		this.img.source = source;
		return(this);
	}
	setTileSize(tileWidth=0, tileHeight=0){
		this.img.tile.width = tileWidth;
		this.img.tile.height = tileHeight;
		return(this);
	}
	setBrightness(brightness=0){
		this.img.brightness = brightness;
		return(this);
	}
	async render(){
		let numOfTilesX = window.innerWidth / this.img.tile.width;

		let numOfTilesY = window.innerHeight / this.img.tile.height;
		for(let y = 0; y < numOfTilesY; y++){
			for(let x = 0; x < numOfTilesX; x++){
				image(
					"../../"+this.img.source,
					
					x * this.img.tile.width,
					y * this.img.tile.height,
					
					this.img.tile.width,
					this.img.tile.height,

					0, 0, 16, 16,
					
					{
						alpha: 1,
						brightness: this.img.brightness
					}
				);
			}
		}
		return(this);
	}
}