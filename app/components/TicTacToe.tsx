'use client'

import { useState } from 'react'
import Board from './Board'

import { calculateWinner } from "../helper"

export default function TicTacToe() {
  const [ histories, setHistories ] = useState([Array(9).fill(null)])
  const [xIsNext, setxIsNext] = useState(true)
  const [ currentMove, setCurrentMove ] = useState(0)

  const currentTiles = histories[currentMove] 

  const {winner, line} = calculateWinner(currentTiles)

  let status = winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')

  function handlePlay(newTiles: (string|null)[]) {
    let nextHistory 
    if(histories.length < 2) {
      nextHistory = [ ...histories.slice(), newTiles ] 
    } else {
      nextHistory = [...histories.slice(1), newTiles]
    }
   
    setHistories(nextHistory)
    setCurrentMove(1)
    setxIsNext(!xIsNext)
  }

  function handleBack() {
    if(histories.length < 2 || winner) return
    setCurrentMove(0);
    setHistories([...histories.slice(0,1)])
    setxIsNext(!xIsNext)
  }

  function handleReset() {
    setCurrentMove(0)
    setxIsNext(true)
    setHistories([Array(9).fill(null)])
  }

  return (
    <div className='text-center'>
        <div className='font-bold text-3xl my-9'>
          Tic-Tac-Toe Game
        </div>
        <div className='text-center py-14'>{ status }</div>
        <Board
          tiles={currentTiles} 
          xIsNext={xIsNext}
          onPlay={handlePlay}
          gameOver={!!winner}
          line={line}
        />
        <div className='flex items-center justify-between text-white'>
          <button className={`mt-20 bg-sky-500 ${winner ? 'text-slate-400 bg-slate-300 cursor-not-allowed' : 'hover:bg-sky-400' } px-6 py-2 rounded-lg text-xl`}
            onClick={ handleBack }
            disabled={ winner ? true : false }
          >
            Back
          </button>
          <button className='mt-20 bg-sky-500 hover:bg-sky-400 px-6 py-2 rounded-lg text-xl'
            onClick={handleReset }
          >
            Reset
          </button>
        </div>
    </div>
  )
}
