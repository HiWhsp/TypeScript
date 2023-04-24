import { IPoint, Shape } from "../types/types";
import { Square } from "./Square";

export class SquareGroup {
  private _squares: readonly Square[]; // 方块类的数组
 
  public get squares() {
    return this._squares;
  }

  /**
   * 获取方块类中心点坐标
   */
  public get centerPoint() {
    return this._centerPoint;
  }

  /**
   * 设置方块类的中心点坐标
   */
  public set centerPoint(val: IPoint) {
    this._centerPoint = val;
    this._square.forEach((item, index) => {
      this._squares[index].point = {
        x: item.x + this._centerPoint.x,
        y: item.y + this._centerPoint.y
      }
    })
  }

  /**
   * 构造函数
   * @param _square 方块类的形状坐标 相对坐标
   * @param _centerPoint 方块类中心块坐标 页面展示的坐标
   * @param _color 方块组颜色
   */
  constructor(private _square: Shape, private _centerPoint: IPoint, private _color: string) {
    const arr: Square[] = []; // 存放小方块的数组
    this._square.forEach(item => {
      const sq = new Square();
      sq.point = {
        x: item.x + this._centerPoint.x,
        y: item.y + this._centerPoint.y
      }
      sq.color = this._color;
      arr.push(sq);
    })
    this._squares = arr;
  }
}