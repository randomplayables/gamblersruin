import React from 'react'

type ChartProps = {
  data: number[]
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const width = 500
  const height = 200
  const maxValue = data.length > 0 ? Math.max(...data) : 0
  const minValue = data.length > 0 ? Math.min(...data) : 0
  const points = data.map((value, index) => {
    const x = data.length > 1 ? (index / (data.length - 1)) * width : 0
    const y = maxValue === minValue
      ? height / 2
      : height - ((value - minValue) / (maxValue - minValue)) * height
    return `${x},${y}`
  }).join(' ')

  return (
    <svg className="chart" width={width} height={height}>
      <polyline
        fill="none"
        stroke="#0074d9"
        strokeWidth={2}
        points={points}
      />
    </svg>
  )
}

export default Chart