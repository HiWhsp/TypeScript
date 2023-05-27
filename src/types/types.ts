import { SquareGroup } from "../core/SquareGroup"

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

export enum MoveDirection {
  down,
  left,
  right
}

/**
 * 游戏状态
 */
export enum GameStatus {
  init, // 游戏未开始
  playing, // 游戏进行中
  pause, // 游戏暂停
  over // 游戏结束
}

// 游戏显示
export interface IGameViewer {
  showNext: (teris: SquareGroup) => void
  switch: (teris: SquareGroup) => void
}