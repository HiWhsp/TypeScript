export {

}
import { Square } from "./core/Square";
import { SquarePagesViewer } from "./core/viewer/SquarePagesViewer";
import $ from 'jquery';

const sq = new Square();
const sqView = new SquarePagesViewer(sq, $('#root'));
sq.point = {
  x: 3,
  y: 4
}
sq.color = 'red';

setInterval(() => {
  sq.point = {
    x: sq.point.x,
    y: sq.point.y + 1
  }
  // sqView.show()
}, 500) 