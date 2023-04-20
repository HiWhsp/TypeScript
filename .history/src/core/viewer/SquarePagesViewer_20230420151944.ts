import { IPoint, Iviewer } from "../../types/types";
import { Square } from "../Square";
import $ from 'jquery';
import PageConfig from "./PageConfig";

export class SquarePagesViewer implements Iviewer {

  private dom?: JQuery<HTMLElement>

  /**
   * 传递的参数
   * @param Square 方框类
   * @param container 存放容器
   */
  constructor(private Square: Square, private container: JQuery<HTMLElement>) {

  }

  // 方块移除
  show(): void {
    if (!this.dom) {
      this.dom = $("<div>").css({
        position: 'absolute',
        width: PageConfig.SquareSize.width,
        height: PageConfig.SquareSize.height,
        border: '1px solid #ccc',
        boxSizing: 'border-box'
      }).appendTo(this.container);
    }

    this.dom.css({
      left: this.Square.point.x * PageConfig.SquareSize.width,
      top: this.Square.point.y * PageConfig.SquareSize.height,
      background: this.Square.color
    })
  };

  // 方块移除
  remove(): void { };

}