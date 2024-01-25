import { type Dispatch, type SetStateAction } from 'react'

type Props = {
  level: number
  setLevel: Dispatch<SetStateAction<number>>
}

export const LevelController = ({ level, setLevel }: Props) => {
  const MIN_LEVEL = 0
  const MAX_LEVEL = 5

  const increaseLevel = () => {
    setLevel(Math.min(MAX_LEVEL, level + 1))
  }

  const decreaseLevel = () => {
    setLevel(Math.max(MIN_LEVEL, level - 1))
  }

  return (
    <div className="flex flex-row gap-2">
      <button
        className="py1 cursor-pointer rounded-md bg-slate-100 px-4 hover:bg-slate-300"
        onClick={decreaseLevel}
      >
        -
      </button>
      <span>{level}</span>
      <button
        className="py1 cursor-pointer rounded-md bg-slate-100 px-4 hover:bg-slate-300"
        onClick={increaseLevel}
      >
        +
      </button>
    </div>
  )
}
