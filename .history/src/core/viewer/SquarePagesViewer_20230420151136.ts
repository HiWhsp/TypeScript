import { IPoint, Iviewer } from "../../types/types";
import { Square } from "../Square";
import $ from 'jquery';

export class SquarePagesViewer implements Iviewer {

  /**
   * 传递的参数
   * @param Square 方框类
   * @param container 存放容器
   */
  constructor(private Square: Square, container: JQuery<HTMLElement>) {

  }

  show() { };
  remove() { };

}