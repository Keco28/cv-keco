import React from 'react'

interface PercentageBarProps {
        language: string;
        percentage: number;
    }

function PercentageBar({language, percentage}: PercentageBarProps) {
  const percentageBarStyle = {
    width: `${percentage}%`,
    height: '100%',
    backgroundColor: '#2D8F1D',
    borderRadius: '5px'
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1 style={{color: "#767676"}}>{language}</h1>
        <h1 style={{color: "#767676"}}>{percentage}%</h1>
      </div>
      <div className=" flex flex-col justify-center w-full rounded border-[1.5px] px-[1px] py-[1px] h-[6px] border-[#2D8F1D]">
        <div style={percentageBarStyle}/>
      </div>
    </div>
  )
}

export {PercentageBar};