export interface IPoint {
  readonly x: number
  readonly y: number
}

export interface Iviewer {
  isRemove?: boolean
  show: () => void
  remove: () => void
}