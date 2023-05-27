export { }
import $ from 'jquery';
import { Game } from './core/Game';
import { TerisRule } from "./core/TerisRule";
import { GamePageViewer } from './core/viewer/GamePagesViewer';
import { MoveDirection } from "./types/types";

const g = new Game(new GamePageViewer())

g.start();


$("body").on("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      g.controlRotate();
      break;
    case "ArrowLeft":
      g.controlLeft();
      break;
    case "ArrowRight":
      g.controlRight();
      break;
    case "ArrowDown":
      g.controlDown();
      break;
  }
})
