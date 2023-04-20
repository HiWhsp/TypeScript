
import { IPoint, Iviewer } from "./types"

export class Square {
  private _viewer?: Iviewer

  private _point: IPoint = {
    x: 0,
    y: 0
  }

  private _color: string = ""

  /**
   * 坐标
   */
  private get point() {
    return this._point;
  }
  private set point(val) {
    this._point = val;
    if (this._viewer) {
      this._viewer.show()
    }
  }

  /**
   * 颜色
   */
  private get color() {
    return this._color;
  }
  private set color(val) {
    this._color = val;
  }

  /**
   * 显示 隐藏
   */
  private get viewer() {
    return this._viewer
  }
  private set viewer(val) {
    this._viewer = val;
  }

}