import { type Point } from '@/type'

/**
 *
 * If your base segment is AB, with A(Ax,Ay) and B(Bx,By), then the 4 sub-segments will be AP, PQ, QR, RB as defined below.
 * First define two orthogonal vectors of same length:

 * U(Bx-Ax,By-Ay) and
 * V(Ay-By,Bx-Ax)
 * Then the points:

 * P=A+(1/3)*U
 * Q=A+(1/2)*U+(sqrt(3)/6)*V
 * R=A+(2/3)*U
 *
 * @param p1
 *
 * @param p5
 * @returns
 */

const curvePoints = (p1: Point, p5: Point) => {
  const deltaX = p5.x - p1.x
  const deltaY = p5.y - p1.y

  const p2 = { x: p1.x + deltaX / 3, y: p1.y + deltaY / 3 }

  const p3 = {
    x: 0.5 * (p1.x + p5.x) + (Math.sqrt(3) * (p1.y - p5.y)) / 6,
    y: 0.5 * (p1.y + p5.y) + (Math.sqrt(3) * (p5.x - p1.x)) / 6,
  }

  const p4 = { x: p1.x + (2 * deltaX) / 3, y: p1.y + (2 * deltaY) / 3 }

  return [p1, p2, p3, p4, p5]
}

export const snowFlake = (points: Point[], level: number): Point[] => {
  if (level === 0) {
    return points
  }

  const newPoints = points.flatMap((point1, index) => {
    const point5 = points[(index + 1) % points.length]
    return curvePoints(point1, point5)
  })

  return snowFlake(newPoints, level - 1)
}
