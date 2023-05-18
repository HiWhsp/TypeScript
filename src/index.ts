export { }
import { SquarePagesViewer } from "./core/viewer/SquarePagesViewer";
import { createTeris } from "./core/Teris";
import $ from 'jquery';
import { TerisRule } from "./core/TerisRule";
import { SquareGroup } from "./core/SquareGroup"
import { IPoint } from "./types/types";
import GameConfig from "./core/GameConfig";


const group = createTeris({ x: 4, y: 5 });
group.squares.forEach(sq => {
  sq.viewer = new SquarePagesViewer(sq, $('#root'))

  /**
   * 容器尺寸
   */
  $('#root').css({
    width: GameConfig.panelSize.width * GameConfig.SquareSize.width,
    height: GameConfig.panelSize.height * GameConfig.SquareSize.height
  })
})


$("body").on("keydown", function (e) {
  let resulePoint: IPoint = {
    x: 0,
    y: 0
  }
  switch (e.code) {
    case "ArrowUp":
      resulePoint = {
        x: group.centerPoint.x,
        y: group.centerPoint.y - 1
      }
      break;
    case "ArrowLeft":
      resulePoint = {
        x: group.centerPoint.x - 1,
        y: group.centerPoint.y
      }
      break;
    case "ArrowRight":
      resulePoint = {
        x: group.centerPoint.x + 1,
        y: group.centerPoint.y
      }
      break;
    case "ArrowDown":
      resulePoint = {
        x: group.centerPoint.x,
        y: group.centerPoint.y + 1
      }
      break;
  }
  if (!TerisRule.canIMove(group.shape, resulePoint)) {
    group.centerPoint = resulePoint;
  }
})

$("#btnDown").on('click', () => {
  const resulePoint = {
    x: group.centerPoint.x,
    y: group.centerPoint.y + 1
  }
  if (!TerisRule.canIMove(group.shape, resulePoint)) {
    group.centerPoint = resulePoint;
  }
})

$("#btnLeft").on('click', () => {
  const resulePoint = {
    x: group.centerPoint.x - 1,
    y: group.centerPoint.y
  }
  if (!TerisRule.canIMove(group.shape, resulePoint)) {
    group.centerPoint = resulePoint;
  }
})

$("#btnRight").on('click', () => {
  const resulePoint = {
    x: group.centerPoint.x + 1,
    y: group.centerPoint.y
  }
  if (!TerisRule.canIMove(group.shape, resulePoint)) {
    group.centerPoint = resulePoint;
  }
})

$("#btnTop").on('click', () => {
  const resulePoint = {
    x: group.centerPoint.x,
    y: group.centerPoint.y - 1
  }
  if (!TerisRule.canIMove(group.shape, resulePoint)) {
    group.centerPoint = resulePoint;
  }
})