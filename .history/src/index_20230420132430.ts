export {

}
// 块类
import { Square } from "./core/Square"
import { IPoint, Iviewer } from "./core/types";

class SquareShow implements Iviewer {
  /**
   * 传递一个块类
   * @param Square 
   */
  constructor(private square: Square) {

  }
  show() {
    console.log(this.square.point);
  };

  remove() {
    console.log("删除")
  };
}



const sq = new Square();
sq.viewer = new SquareShow()
console.log(sq.point)
sq.viewer.show({ x: 1, y: 2 })