import { Xanvas } from "../xanvas";
import { Layer } from "../layer";

const xanvas = new Xanvas({ selector: "#root", width: 500, height: 500 });

for (let i = 10; i <= 30; i++) {
  const layer = new Layer({
    name: `layer-${i}`,
    draw: (context) => {
      context.beginPath();
      context.arc(i * 10, i * 10, 30, Math.PI * 2, 0);
      context.strokeStyle = `rgb(${i * 10}, ${i * 2}, ${255 - i})`;
      context.lineWidth = 3;
      context.stroke();
    },
  });
  xanvas.addLayer(layer);

  setInterval(() => {
    setInterval(() => {
      xanvas.hideLayer(layer);
    }, Math.random() * 10000);
    xanvas.showLayer(layer);
  }, Math.random() * 10000);
}

xanvas.draw();
