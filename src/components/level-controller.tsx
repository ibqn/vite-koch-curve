import { type Dispatch, type SetStateAction } from 'react'
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'

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
    <div className="flex flex-row items-center gap-2">
      <button
        className="cursor-pointer rounded-md bg-slate-400 px-4 py-1 hover:bg-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
        disabled={MIN_LEVEL >= level}
        onClick={decreaseLevel}
      >
        <MinusIcon />
      </button>
      <div className="w-4 text-center">{level}</div>
      <button
        className="cursor-pointer rounded-md bg-slate-300 px-4 py-1 hover:bg-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
        disabled={MAX_LEVEL <= level}
        onClick={increaseLevel}
      >
        <PlusIcon />
      </button>
    </div>
  )
}
