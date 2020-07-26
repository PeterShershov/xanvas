import type { DrawFunction } from "./types";

export class Layer {
  public readonly id: string;
  public readonly draw: DrawFunction;
  constructor({ id, draw }: { id: string; draw: DrawFunction }) {
    this.id = id;
    this.draw = draw;
  }
}
