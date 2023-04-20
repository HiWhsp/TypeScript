
import { IPoint, Iviewer } from "../types/types"

export class Square {
  private _viewer?: Iviewer

  private _point: IPoint = {
    x: 0,
    y: 0
  }

  private _color: string = "blue"

  /**
   * 坐标
   */
  public get point() {
    return this._point;
  }
  public set point(val) {
    this._point = val;
    if (this._viewer) {
      this._viewer.show()
    }
  }

  /**
   * 颜色
   */
  public get color() {
    return this._color;
  }
  public set color(val) {
    this._color = val;
  }

  /**
   * 显示 隐藏
   */
  public get viewer() {
    return this._viewer
  }
  public set viewer(val) {
    this._viewer = val;
  }

}