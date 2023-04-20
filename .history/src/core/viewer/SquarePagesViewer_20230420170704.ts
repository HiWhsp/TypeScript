import { Iviewer } from "../../types/types";
import { Square } from "../Square";
import $ from 'jquery'
import PageConfig from "./PageConfig";


export class SquarePagesViewer implements Iviewer {

  private dom?: JQuery<HTMLElement>;
  public isRemove: boolean = false; // 是否移除掉

  show() {
    if (!this.isRemove) {
      return;
    }
    if (!this.dom) {
      this.dom = $("<div>").css({
        position: 'absolute',
        boxSizing: 'border-box',
        width: PageConfig.SquareSize.width,
        height: PageConfig.SquareSize.height,
        border: '1px solid #ccc'
      }).appendTo(this.container)
    }
    this.dom.css({
      left: this.Square.point.x * PageConfig.SquareSize.width,
      top: this.Square.point.y * PageConfig.SquareSize.height,
      background: this.Square.color
    })
  };

  remove() {
    if (this.dom && !this.isRemove) {
      this.dom.remove();
      this.isRemove = false;
    }
  };

  constructor(private Square: Square, private container: JQuery<HTMLElement>) {
  }

}