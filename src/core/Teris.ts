/**
 *  生产提供者
 */
import { IPoint, Shape } from "../types/types";
import { Square } from "./Square";
import { SquareGroup } from "./SquareGroup";
import { getRandom } from "./util";

export class TShape extends SquareGroup {
  constructor(_contentPoint: IPoint, _color: string) {
    super([{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }], _contentPoint, _color);
  }
}

export class LShape extends SquareGroup {
  constructor(_contentPoint: IPoint, _color: string) {
    super([{ x: -2, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }], _contentPoint, _color);
  }
}

export class LMirrorShape extends SquareGroup {
  constructor(_contentPoint: IPoint, _color: string) {
    super([{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }], _contentPoint, _color);
  }
}

export class SShape extends SquareGroup {
  constructor(_contentPoint: IPoint, _color: string) {
    super([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }], _contentPoint, _color);
  }
  rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
}

export class SMirrorShape extends SquareGroup {
  constructor(_contentPoint: IPoint, _color: string) {
    super([{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }], _contentPoint, _color);
  }
  rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
}

export class SquareShape extends SquareGroup {
  constructor(_contentPoint: IPoint, _color: string) {
    super([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }], _contentPoint, _color);
  }
  afterRotateShape(): Shape {
    return this.shape;
  }
}

export class LineShape extends SquareGroup {
  constructor(_contentPoint: IPoint, _color: string) {
    super([{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }], _contentPoint, _color);
  }
  rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
}

export class UShape extends SquareGroup {
  constructor(_contentPoint: IPoint, _color: string) {
    super([{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: -1 }, { x: 1, y: -1 }], _contentPoint, _color);
  }
}
export const shapes = [
  TShape,
  LShape,
  LMirrorShape,
  SShape,
  SMirrorShape,
  SquareShape,
  LineShape,
  UShape
]

export const colors = [
  "red",
  "green",
  "blue",
  "orange"
]

export function createTeris(centerPoint: IPoint): SquareGroup {
  let index = getRandom(0, shapes.length);
  const shape = shapes[index]
  index = getRandom(0, colors.length)
  const color = colors[index];
  return new shape(centerPoint, color);
}