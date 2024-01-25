import { snowFlake } from '@/util/snow-flake'
import { Fragment, useMemo } from 'react'

type Props = {
  level: number
}

export const KochCurve = ({ level }: Props) => {
  const points = useMemo(() => {
    const points = [
      { x: 0, y: -40 },
      { x: -20 * Math.sqrt(3), y: 20 },
      { x: 20 * Math.sqrt(3), y: 20 },
    ].map(({ x, y }) => ({ x: x + 50, y: y + 50 }))

    return snowFlake(points, level)
  }, [level])

  return (
    <svg
      className="h-[800px] w-[800px]"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect width="100%" height="100%" className="fill-slate-50" /> */}
      {/* <line
        x1="0"
        y1="80"
        x2="100"
        y2="20"
        className="stroke-slate-600 stroke-[0.5px]"
      />
      <circle cx="50" cy="50" r="1" className="fill-teal-900" /> */}
      {points.map((point1, index) => {
        const point2 = points[(index + 1) % points.length]
        return (
          <Fragment key={index}>
            <circle
              cx={point1.x}
              cy={point1.y}
              r="0.1"
              className="fill-teal-900"
            />
            <line
              x1={point1.x}
              y1={point1.y}
              x2={point2.x}
              y2={point2.y}
              className="stroke-slate-600 stroke-[0.1px]"
            />
          </Fragment>
        )
      })}
    </svg>
  )
}
