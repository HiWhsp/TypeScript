export interface IPoint {
  readonly x: number
  readonly y: number
}

export interface Iviewer {
  show: () => void
  remove: () => void
}

/**
 * 形状
 */

export type Shape = IPoint[]