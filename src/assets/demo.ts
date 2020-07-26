import { Xanvas } from "../xanvas";
import { Layer } from "../layer";

const xanvas = new Xanvas({ selector: "#root", width: 500, height: 500 });

for (let i = 0; i <= 10; i++) {
  const layer = new Layer({
    id: `layer-${i}`,
    draw: (context) => {
      context.beginPath();
      context.arc((i + 10) * 10, (i + 10) * 10, 30, Math.PI * 2, 0);
      context.strokeStyle = i === 5 ? "tomato" : `rgb(240, 240, 240)`;
      context.lineWidth = i === 5 ? 5 : 3;
      context.stroke();
    },
  });
  xanvas.addLayer(layer);
}

xanvas.draw();

let visible = true;

setInterval(() => {
  visible ? xanvas.hideLayer("layer-5") : xanvas.showLayer("layer-5");
  visible = !visible;
}, 1000);
