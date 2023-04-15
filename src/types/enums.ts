
export enum ChessType {
  none,
  red,
  black,
}

export enum GameStatus {
  /**
   * 游戏进行中
   */
  gaming,

  /**
   * 红方胜利
   */
  redWin,

  /**
   * 黑方胜利
   */
  blackWin,

  /**
   * 平局
   */
  draw
}