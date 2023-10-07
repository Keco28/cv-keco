import React from 'react'

interface ProgressBarsProps {
        language: string;
        percentage: number;
    }

function ProgressBars({language, percentage}: ProgressBarsProps) {
  return (
    <div>
      <div className="flex justify-between">
        <h1>{language}</h1>
        <h1>{percentage}%</h1>
       </div>  
      <progress className="w-full rounded-lg" value={percentage} max="100">{language}</progress>
    </div>
  )
}

export {ProgressBars};