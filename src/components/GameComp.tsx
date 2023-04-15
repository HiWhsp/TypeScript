import React from 'react';
import { ChessType, GameStatus } from '../types/enums';
import { BoardComp } from './BoardComp';
import { GameStatusComp } from './GameStatusComp';

interface IState {
  chesses: ChessType[] // 棋子数组
  gameStatus: GameStatus // 游戏状态
  nextChess: ChessType.black | ChessType.red // 下一个棋子
}

export class GameComp extends React.Component {
  state: IState = {
    chesses: [],
    gameStatus: GameStatus.gaming,
    nextChess: ChessType.black
  }

  componentDidMount(): void {
    this.init();
  }

  // 初始化函数
  init() {
    // 初始化棋子
    const arr = [];
    for (let i = 0; i < 9; i++) {
      arr.push(ChessType.none);
    }
    this.setState({
      chesses: arr,
      gameStatus: GameStatus.gaming
    })
  }

  // 点击棋子之后的操作
  handleNextChess(i: number) {
    const chesses: ChessType[] = [...this.state.chesses];
    chesses[i] = this.state.nextChess;
    this.setState({
      chesses: chesses,
      nextChess: this.state.nextChess === ChessType.red ? ChessType.black : ChessType.red,
      gameStatus: this.getStatus(chesses, i)
    })
  }

  // 判断游戏状态
  getStatus(chesses: ChessType[], index: number): GameStatus {
    const horMin = Math.floor(index / 3) * 3 // 横向最小值
    const verMin = index % 3 // 竖向最小值

    // 判断是否一方胜利
    if ((chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2]) // 横向结果
      || (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6]) // 竖向结果
      || (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none)
      || (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none)
    ) {
      if (chesses[index] === ChessType.red) {
        return GameStatus.redWin; // 红方胜利
      } else {
        return GameStatus.blackWin; // 黑方胜利
      }
    }
    // 平局
    if (!chesses.includes(ChessType.none)) {
      return GameStatus.draw;
    }
    // 游戏进行中
    return GameStatus.gaming;
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>井字棋游戏</h1>
        <GameStatusComp
          status={this.state.gameStatus}
          next={this.state.nextChess}
        />
        <BoardComp chesses={this.state.chesses} onchick={this.handleNextChess.bind(this)} isGameOver={this.state.gameStatus !== GameStatus.gaming}></BoardComp>
        <button onClick={() => {
          this.init();
        }}>重新开始</button>
      </div>
    )
  }
}