export interface IPoint {
  x: number
  y: number
}

export interface Iviewer {
  show: (val: IPoint) => void
  remove: () => void
}