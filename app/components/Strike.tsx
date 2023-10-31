'use client'

export type STRIKE = 'row_1'|'row_2'|'row_3'|'col_1'|'col_2'|'col_3'|'slash'|'backSlash'|''

interface Props {
  strikeType: STRIKE;
  // boardWidth?: number
}

export default function Strike({strikeType}: Props) {
  const common = 'absolute border-2 border-orange-500'
  // const slashLength = Math.round(Math.sqrt(2)*boardWidth) + '%'

  const dynamic = {
    row_1: 'top-[16%] w-full',
    row_2: 'top-[50%] w-full',
    row_3: 'bottom-[16%] w-full',
    col_1: 'left-[16%] top-0 bottom-0',
    col_2: 'left-[50%] top-0 bottom-0',
    col_3: 'right-[16%] top-0 bottom-0',
    backSlash: `bottom-[50%] rotate-45 w-full`,
    slash: `bottom-[50%] rotate-[-45deg] w-full`
  }

  return (
    <div className={`${!strikeType && 'hidden'} ${common} ${strikeType && dynamic[strikeType]}`}   />
  )
}
