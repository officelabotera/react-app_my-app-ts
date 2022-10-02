import { Repeat } from 'typescript-tuple'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type SquareState = 'O' | 'X' | null

type BoardState = Repeat<SquareState, 9>

interface Step {
    squares: BoardState
    xIsNext: boolean
}

export interface GameState {
    history: Step[]
    stepNumber: number
}

const initialState: GameState = {
    history: [
        {
          squares: [null, null, null, null, null, null, null, null, null],
          xIsNext: true,
        },
      ],
      stepNumber: 0,
}

export const gameSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleClick: (state, index) => {
        console.log(1111);
        console.log(index);
        // if (winner || current.squares[i]) {
        //   return
        // }
    
        // const next: Step = (({ squares, xIsNext }) => {
        //   const nextSquares = squares.slice() as BoardState
        //   nextSquares[i] = xIsNext ? 'X' : 'O'
        //   return {
        //     squares: nextSquares,
        //     xIsNext: !xIsNext,
        //   }
        // })(current)
    
        // setState(({ history, stepNumber }) => {
        //   const newHistory = history.slice(0, stepNumber + 1).concat(next)
    
        //   return {
        //     history: newHistory,
        //     stepNumber: newHistory.length - 1,
        //   }
        // })
      },
  },
})

//   const jumpTo = (move: number) => {
//     setState(prev => ({
//       ...prev,
//       stepNumber: move,
//     }))
//   }

//   const moves = state.history.map((step, move) => {
//     const desc = move > 0 ? `Go to move #${move}` : 'Go to game start'
//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{desc}</button>
//       </li>
//     )
//   })

  // Action creators are generated for each case reducer function
export const { handleClick} = gameSlice.actions

export default gameSlice.reducer