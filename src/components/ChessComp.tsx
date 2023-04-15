import { ChessType } from "../types/enums";
import "./ChessComp.css";
interface Iprops {
  type: ChessType,
  onClick?: () => void
}
export function ChessComp({ type, onClick }: Iprops) {
  let chessItem = null;
  if (type === ChessType.red) {
    chessItem = <div className='red chess-item'></div>
  } else if (type === ChessType.black) {
    chessItem = <div className='black chess-item'></div>
  }

  return (
    <div className="chess" onClick={() => {
      if (type === ChessType.none && onClick) {
        onClick()
      }
    }}>
      {chessItem}
    </div>
  )
}