import type { DrawFunction } from "./types";

export class Layer {
	public readonly name: string;
	public readonly draw: DrawFunction;
	constructor({
		name,
		draw,
	}: {
		name: string;
		draw: DrawFunction;
	}) {
		this.name = name;
		this.draw = draw;
	}
}
