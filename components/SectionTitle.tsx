import React from 'react'

interface SectionTitleProps {
    title: string;
    description: string;
}

function SectionTitle({title, description}: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-6 place-items-center "> 
        <h1 style={{fontWeight: 700, fontSize: 32, color: "#2B2B2B"}}>{title}</h1>
        <h1 style={{fontWeight: 400, color: "#767676", textAlign: "center"}} className='flex w-4/12'>{description}</h1>
    </div>
  )
}

export {SectionTitle}