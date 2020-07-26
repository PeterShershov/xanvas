import { Xanvas } from "../xanvas";
import { Layer } from "../layer";

const xanvas = new Xanvas({ selector: "#root", width: 500, height: 500 });

let color = 0,
  x = 0,
  y = 0;

for (let i = 0; i < 50; i++) {
  const layer = new Layer({
    name: "first" + i,
    draw: (context) => {
      context.beginPath();
      context.arc(x++, y++, 50, Math.PI * 2, 0);

      context.fillStyle = `tomato`;
      context.fill();
    },
  });

  xanvas.addLayer(layer);
}

xanvas.draw();
