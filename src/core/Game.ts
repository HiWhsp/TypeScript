import { GameStatus, MoveDirection } from "../types/types";
import GameConfig from "./GameConfig";
import { Square } from "./Square";
import { SquareGroup } from "./SquareGroup";
import { createTeris } from "./Teris";
import { TerisRule } from "./TerisRule";
import { GamePageViewer } from "./viewer/GamePagesViewer";

export class Game {
  // 游戏状态
  _GameStatus: GameStatus = GameStatus.init;
  // 当前操作的方块
  _curTeris?: SquareGroup
  // 下一个方块
  _nextTeris: SquareGroup = createTeris({ x: 0, y: 0 })
  // 定时器
  _timer: any
  // 定时器执行时间 毫秒
  _delay: number = 1000
  // 当前游戏中已存在的方块
  private exists: Square[] = []

  constructor(private _viewer: GamePageViewer) {
    // this.resetCenterPoint(GameConfig.tipSize.width, this._nextTeris)
    this._viewer.showNext(this._nextTeris);
  }


  // 游戏开始
  start() {
    // 当前游戏状态 正在运行 无操作
    if (this._GameStatus === GameStatus.playing) {
      return;
    }
    this._GameStatus = GameStatus.playing;
    // 当前操作方块 如果没有值 将下一个方块赋值给当前操作的方块
    if (!this._curTeris) {
      this.switchTeris();
    }
    this.autoDrop();
  }

  // 游戏暂停
  pause() {
    clearInterval(this._timer)
    this._timer = null;
  }

  // 控制向左移动
  controlLeft() {
    if (this._timer || this._GameStatus !== GameStatus.playing) {
      TerisRule.move(this._curTeris!, MoveDirection.left, this.exists)
    }
  }
  // 控制向右移动
  controlRight() {
    if (this._timer || this._GameStatus !== GameStatus.playing) {
      TerisRule.move(this._curTeris!, MoveDirection.right, this.exists)
    }
  }
  // 控制向下移动
  controlDown() {
    if (this._timer || this._GameStatus !== GameStatus.playing) {
      TerisRule.moveDirection(this._curTeris!, this.exists);
      this.hitBottom();
    }
  }
  // 控制旋转
  controlRotate() {
    if (this._timer || this._GameStatus !== GameStatus.playing) {
      TerisRule.rotate(this._curTeris!, this.exists)
    }
  }

  // 方块自动下落
  private autoDrop() {
    if (this._timer || this._GameStatus !== GameStatus.playing) {
      return;
    }
    this._timer = setInterval(() => {
      if (this._curTeris) {
        if (!TerisRule.move(this._curTeris, MoveDirection.down, this.exists)) {
          this.hitBottom();
        }
      }
    }, this._delay)
  }

  // 触底后的操作
  hitBottom() {
    this.exists.push(...this._curTeris!.squares);
    this.switchTeris();
  }

  // 切换方块
  private switchTeris() {
    this._curTeris = this._nextTeris;
    this.resetCenterPoint(GameConfig.panelSize.width, this._curTeris)
    this._nextTeris = createTeris({ x: 0, y: 0 })
    this.resetCenterPoint(GameConfig.tipSize.width, this._nextTeris)
    this._viewer.switch(this._curTeris);
    this._viewer.showNext(this._nextTeris)
  }

  /**
   * 计算方块显示的地方
   * @param width 方块展示区域的宽
   * @param teris 目标方块
   */
  private resetCenterPoint(width: number, teris: SquareGroup) {
    const x = Math.ceil(width / 2) - 1;
    const y = 0;
    teris.centerPoint = { x, y };
    while (teris.squares.some(sq => sq.point.y < 0)) {
      teris.squares.forEach(it => it.point = {
        x: it.point.x,
        y: it.point.y + 1
      })
    }
  }
}