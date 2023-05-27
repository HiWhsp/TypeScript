/**
 *  该类提供各种规则方法，判断各种情况
 */

import { IPoint, MoveDirection, Shape } from "../types/types";
import GameConfig from "./GameConfig";
import { Square } from "./Square";
import { SquareGroup } from "./SquareGroup";

function isPoint(obj: any): obj is IPoint {
  if (typeof obj.x === "undefined") {
    return false;
  }
  return true;
}

export class TerisRule {
  /**
   * 判断某个形状的方块，是否能移动到指定位置
   * @param shape 移动的方块
   * @param targetPoint 指定位置
   * @returns 
   */
  static canIMove(shape: Shape, targetPoint: IPoint, exists: Square[]): boolean {
    // 算出达到的目标位置
    const targetSquarePoint = shape.map((it) => {
      return {
        x: it.x + targetPoint.x,
        y: it.y + targetPoint.y
      }
    })
    // 边界判断
    let result = targetSquarePoint.some((it) => {
      return it.x < 0 || it.x > GameConfig.panelSize.width - 1 ||
        it.y < 0 || it.y > GameConfig.panelSize.height - 1;
    })

    let resultExists = targetSquarePoint.some(t => exists.some(e => t.x === e.point.x && t.y === e.point.y))
    // 为真达到边界不能移动
    return result || resultExists
  }

  /**
   * 移动到目标位置
   * @param teris 移动的方块
   * @param targetPointOrDirection 移动的目标位置 | 移动的方向
   */
  static move(teris: SquareGroup, targetPoint: IPoint, exists: Square[]): boolean;
  static move(teris: SquareGroup, targetPointOrDirection: MoveDirection, exists: Square[]): boolean;
  static move(teris: SquareGroup, targetPointOrDirection: IPoint | MoveDirection, exists: Square[]): boolean {
    // 移动的坐标
    if (isPoint(targetPointOrDirection)) {
      if (!this.canIMove(teris.shape, targetPointOrDirection, exists)) {
        teris.centerPoint = targetPointOrDirection;
        return true;
      }
      return false;
    } else {
      // 移动的方向
      const direction = targetPointOrDirection;
      let resulePoint: IPoint = {
        x: teris.centerPoint.x,
        y: teris.centerPoint.y
      }
      if (direction === MoveDirection.down) {
        resulePoint = {
          x: teris.centerPoint.x,
          y: teris.centerPoint.y + 1
        }
      } else if (direction === MoveDirection.left) {
        resulePoint = {
          x: teris.centerPoint.x - 1,
          y: teris.centerPoint.y
        }
      } else if (direction === MoveDirection.right) {
        resulePoint = {
          x: teris.centerPoint.x + 1,
          y: teris.centerPoint.y
        }
      }
      return this.move(teris, resulePoint, exists);
    }
  }

  /**
   * 移动到最后
   * @param teris 
   * @param targetPointOrDirection
   */
  static moveDirection(teris: SquareGroup, exists: Square[]) {
    while (this.move(teris, MoveDirection.down, exists));
  }


  /**
   * 方块能否旋转
   * @param teris 目标方块
   */
  static rotate(teris: SquareGroup, exists: Square[]) {
    const newShape = teris.afterRotateShape();
    if (!this.canIMove(newShape, teris.centerPoint, exists)) {
      teris.rotate();
      return;
    }
  }
}