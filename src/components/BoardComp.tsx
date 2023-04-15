import { ChessType } from "../types/enums";
import { ChessComp } from "./ChessComp";
import "./ChessComp.css"

interface Iprops {
  chesses: ChessType[]
  isGameOver?: boolean
  onchick?: (i: number) => void
}

export function BoardComp(props: Iprops) {
  const isGameOver = props.isGameOver!;
  const list = props.chesses.map((type, i) => <ChessComp
    type={type}
    key={i}
    onClick={() => {
      if (props.onchick && !isGameOver) {
        props.onchick(i)
      }
    }}
  ></ChessComp>)
  return (
    <div className="chessboard">
      {list}
    </div>
  )
}