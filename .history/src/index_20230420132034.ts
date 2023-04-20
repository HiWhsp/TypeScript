export {

}

import { IPoint, Iviewer } from "./core/types";
class SquareShow implements Iviewer {
  show(val: IPoint) {
    console.log(val);
  };

  remove() {
    console.log("删除")
  };
}

// 块类
import { Square } from "./core/Square"

const sq = new Square();
sq.viewer = new SquareShow()
console.log(sq.point)
sq.viewer.show()