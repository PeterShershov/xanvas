import { Layer } from "./layer";

interface InteractiveLayer extends Layer {
  hidden?: boolean;
}

export class Xanvas {
  private layers: InteractiveLayer[] = [];
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(
    private config: {
      selector: string;
      height: number;
      width: number;
    }
  ) {
    const canvasElement = document.querySelector(config.selector);

    if (!canvasElement) {
      throw new Error(`cannot find canvas element using: ${config.selector}`);
    }

    if (!(canvasElement instanceof HTMLCanvasElement)) {
      throw new Error(
        `selector ${canvasElement} points to a non canvas element`
      );
    }

    this.canvas = canvasElement;

    const context = this.canvas.getContext("2d");

    if (!context) {
      throw new Error(`cannot get context of ${config.selector} element`);
    }

    this.context = context;

    requestAnimationFrame(() => {
      this.canvas.style.width = this.config.width + "px";
      this.canvas.style.height = this.config.height + "px";
      this.canvas.width = this.config.width * window.devicePixelRatio;
      this.canvas.height = this.config.height * window.devicePixelRatio;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
    });
  }

  public draw() {
    requestAnimationFrame(() => {
      this.context.clearRect(0, 0, this.config.height, this.config.width);
      for (const layer of this.layers) {
        !layer.hidden && layer.draw(this.context);
      }

      this.draw();
    });
  }

  public addLayer(layer: Layer) {
    this.layers.push(layer);
  }

  public removeLayer(layer: Layer) {
    const layerIndex = this.layers.indexOf(layer);

    if (layerIndex < 0) {
      console.warn(`cannot find layer: ${layer.id}`);
    } else {
      this.layers.splice(layerIndex);
    }
  }

  public hideLayer(id: string) {
    console.log(id);
    const layerToHide = this.getLayer(id);
    layerToHide.hidden = true;
  }
  public showLayer(id: string) {
    const layerToHide = this.getLayer(id);
    layerToHide.hidden = false;
  }

  private getLayer(id: string) {
    const layerIndex = this.layers.findIndex((layer) => layer.id === id);

    if (layerIndex < 0) {
      throw new Error(`cannot find layer: ${id}`);
    }

    return this.layers[layerIndex];
  }
}
