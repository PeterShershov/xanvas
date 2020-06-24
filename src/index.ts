import { Xanvas } from "./xanvas";
import { Layer } from "./layer";

const xanvas = new Xanvas({ selector: "#root", width: 500, height: 500 });

const firstLayer = new Layer({
	name: "first",
	draw: context => {
		context.beginPath();
		context.arc(200, 500 / 2, 90, Math.PI * 2, 0);

		context.fillStyle = `tomato`;
		context.fill();
	}
});

const secondLayer = new Layer({
	name: "second",
	draw: context => {
		context.beginPath();
		context.arc(500 / 2, 500 / 2, 90, Math.PI * 2, 0);

		context.strokeStyle = `rgb(100, 255, 90)`;
		context.lineWidth = 5;
		context.stroke();
	}
});

const thirdLayer = new Layer({
	name: "third",
	draw: context => {
		context.beginPath();
		context.arc(500 / 1.8, 500 / 2, 90, Math.PI * 2, 0);

		context.fillStyle = `rgba(221, 222, 12, 0.3)`;
		context.fill();
	}
});
xanvas.addLayer(secondLayer);
xanvas.addLayer(firstLayer);
xanvas.addLayer(thirdLayer);

let isHidden = false;
setInterval(() => {
	isHidden ? xanvas.showLayer(secondLayer) : xanvas.hideLayer(secondLayer);
	isHidden = !isHidden;
}, 1000);

xanvas.draw();
