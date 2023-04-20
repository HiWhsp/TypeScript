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

const sqView = new SquarePagesViewer(sq, $('#root'));
sqView.show