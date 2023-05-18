/**
 *  该类提供各种规则方法，判断各种情况
 */

import { IPoint, Shape } from "../types/types";
import GameConfig from "./GameConfig";

export class TerisRule {
  /**
   * 判断某个形状的方块，是否能移动到指定位置
   * @param shape 移动的方块
   * @param targetPoint 指定位置
   * @returns 
   */
  static canIMove(shape: Shape, targetPoint: IPoint): boolean {
    // 算出达到的目标位置
    const targetSquarePoint = shape.map((it) => {
      return {
        x: it.x + targetPoint.x,
        y: it.y + targetPoint.y
      }
    })
    // 边界判断
    const result = targetSquarePoint.some((it) => {
      return it.x < 0 || it.x > GameConfig.panelSize.width - 1 ||
        it.y < 0 || it.y > GameConfig.panelSize.height - 1;
    })

    // 为真达到边界不能移动
    return result
  }
}