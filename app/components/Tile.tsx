'use client'

interface Props {
  mark: string | null;
  position: number;
  xIsNext: boolean;
  onMove: () => void;
}

export default function Tile({ mark, position, xIsNext, onMove }: Props) {
  const hoverText = xIsNext ? "hover:after:content-['X']" : "hover:after:content-['O']"

  return (
    <div className={ 
      `w-[100px] h-[100px] flex items-center justify-center text-2xl hover:after:opacity-40
      ${mark ? '' : hoverText}
      ${(position === 3 || position ===5) ? 'border-y-2 border-black' : ''}
      ${position === 1 || position === 4 || position === 7 ? 'border-x-2 border-black' : ''}
      ${position === 4 ? 'border-2 border-black' : ''}
      `}
      onClick={onMove}
    >
      { mark }
    </div>
  )
}
