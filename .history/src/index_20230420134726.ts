export {

}
// 块类
import { Square } from "./core/Square"
import { IPoint, Iviewer } from "./types/types";

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
sq.viewer = new SquareShow(sq)
sq.viewer.show() // 初始化显示
sq.point = {
  x: 1,
  y: 2
}
sq.color = 'blue'
sq.point = {
  x: 2,
  y: 3
}