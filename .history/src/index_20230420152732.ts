export {

}
import { Square } from "./core/Square";
import { SquarePagesViewer } from "./core/viewer/SquarePagesViewer";
import $ from 'jquery';

const sq = new Square();
sq.point = {
  x: 3,
  y: 4
}
sq.color = 'red';

// sqView.show()

setTimeout(() => {
  sq.point = {
    x: sq.point.x,
    y: sq.point.y++
  }
  console.log(123);
  
  const sqView = new SquarePagesViewer(sq, $('#root'));
  sqView.show()
}, 500) 