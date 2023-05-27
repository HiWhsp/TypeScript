import { IGameViewer } from "../../types/types";
import GameConfig from "../GameConfig";
import { SquareGroup } from "../SquareGroup";
import { SquarePagesViewer } from "./SquarePagesViewer";
import $ from "jquery"

export class GamePageViewer implements IGameViewer {
  showNext(teris: SquareGroup) {
    teris.squares.forEach(sq => {
      sq.viewer = new SquarePagesViewer(sq, $('#tip'))
      /**
       * 容器尺寸
       */
      $('#gameViewer').css({
        width: GameConfig.panelSize.width * GameConfig.SquareSize.width,
        height: GameConfig.panelSize.height * GameConfig.SquareSize.height
      })
      $("#tip").css({
        width: GameConfig.tipSize.width * GameConfig.SquareSize.width,
        height: GameConfig.tipSize.height * GameConfig.SquareSize.height
      })
    })
  };
  switch(teris: SquareGroup) {
    teris.squares.forEach(sq=>{
      sq.viewer?.remove();
      sq.viewer = new SquarePagesViewer(sq, $('#gameViewer'))
    })
  };
}