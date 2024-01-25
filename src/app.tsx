import { KochCurve } from '@/components/koch-curve'
import { useState } from 'react'
import { LevelController } from '@/components/level-controller'

export const App = () => {
  const [level, setLevel] = useState(0)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="text-3xl font-bold">snow flake</div>
        <LevelController level={level} setLevel={setLevel} />
      </div>

      <KochCurve level={level} />
    </div>
  )
}
