export {

}
import { Square } from "./core/Square";
import { SquarePagesViewer } from "./core/viewer/SquarePagesViewer";
import $ from 'jquery';

const sq = new Square();
sq.viewer = new SquarePagesViewer(sq, $('#root'));
sq.color = 'red';
sq.point = { 
  x: 3,
  y: 4
}

setInterval(() => {
  sq.point = {
    x: sq.point.x,
    y: sq.point.y + 1
  }
}, 500) 