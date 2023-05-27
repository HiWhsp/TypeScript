import { IPoint, Shape } from "../types/types";
import { Square } from "./Square";
export class SquareGroup {
  // 存放方块组的数组
  private _squares: Square[] = []

  // 是否顺时针旋转
  protected isClock = true;

  // 获取方块组数据
  public get squares() {
    return this._squares;
  }

  // 获取方块形状位置
  public get shape() {
    return this._shape;
  }
  // 获取中心点坐标
  public get centerPoint() {
    return this._contentPoint;
  }

  // 设置中心点坐标
  public set centerPoint(val: IPoint) {
    this._contentPoint = val;
    this.setSquaresPoint();
  }

  /**
   * 设置小方块位置
   */
  private setSquaresPoint() {
    // 循环形状数组 实例化小方块，对应页面位置
    this._shape.forEach((it, i) => {
      this._squares[i].point = {
        x: this._contentPoint.x + it.x,
        y: this._contentPoint.y + it.y
      }
    })
  }

  // 旋转方法
  afterRotateShape(): Shape {
    const list = this._shape;
    // 顺时针旋转
    if (this.isClock) {
      return list.map((it, i) => {
        return {
          x: -it.y,
          y: it.x,
        }
      })
    } else {
      return list.map((it, i) => {
        return {
          x: it.y,
          y: -it.x,
        }
      })
    }
  }

  rotate() {
    const newShape = this.afterRotateShape(); // 生成新的形状
    this._shape = newShape;
    this.setSquaresPoint();
  }


  /**
   * 方块类的构造函数
   * @param _shape 方块组的形状数组
   * @param _contentPoint 方块组的中心点坐标
   * @param _color 方块组的样色 
   */
  constructor(private _shape: Shape, private _contentPoint: IPoint, private _color: string) {
    const arr: Square[] = []; // 存放方块的数组
    // 循环形状数组 实例化小方块，对应页面位置
    this._shape.forEach((it) => {
      const sq = new Square();
      sq.color = this._color;
      arr.push(sq);
    })
    this._squares = arr;
    this.setSquaresPoint();
  }
}
