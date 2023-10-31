'use client'

import { getStrike } from "../helper";
import Strike from "./Strike"
import Tile from "./Tile"



interface Props {
  tiles: (string|null)[];
  xIsNext: boolean;
  onPlay: (newTiles: (string|null)[]) => void;
  gameOver: boolean;
  line: number[];
}

export default function Board({tiles, xIsNext, onPlay, gameOver, line}: Props) {
  const strike = getStrike(line)
  
  function handleMove(idx: number) { 
    if(tiles[idx] || gameOver) {
      return
    }

    const newTiles = tiles.slice()

    if(xIsNext) {
      newTiles[idx] = 'X'
    } else {
      newTiles[idx] = 'O'
    }
    
    onPlay(newTiles)
  }

  return (
    <>
      <div className="relative">
        <div className='grid grid-cols-3'>
          {
            tiles.map((tile, idx) => (
              <Tile 
                key={idx}
                mark={tile} 
                position={idx}
                xIsNext={xIsNext}
                onMove={ () => handleMove(idx) } 
              />
            ))
          }
        </div>
        <Strike strikeType={strike} />
      </div>
    </>
  )
}
