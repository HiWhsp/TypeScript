export {

}
import { Square } from "./core/Square";
import { SquarePagesViewer } from "./core/viewer/SquarePagesViewer";
import $ from 'jquery';

import { SquareGroup } from "./core/SquareGroup"

let isRemove = false;

const group = new SquareGroup([{ x: 0, y: -1 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 1 }], { x: 4, y: 5 }, "red");
group.squares.forEach(sq => {
  sq.viewer = new SquarePagesViewer(sq, $('#root'))
})


$("#btnDown").on('click', () => {
  group.centerPoint = {
    x: group.centerPoint.x,
    y: group.centerPoint.y + 1
  }
})

// $("#btnRemove").on('click', () => {
//   if (sq.viewer) {
//     sq.viewer.remove();
//     isRemove = true;
//   }
// })

// $("#btnAdd").on('click', () => {
//   if (!isRemove) {
//     return;
//   }
//   isRemove = false
//   sq.viewer = new SquarePagesViewer(sq, $("#root"));
// })