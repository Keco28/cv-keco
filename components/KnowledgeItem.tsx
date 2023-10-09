import React from 'react'

interface KnowledgeItemProps {
        icon: string;
        title: string;
        description: string;
    }
function KnowledgeItem({icon, title, description}: KnowledgeItemProps) {
  return (
    <div className="flex flex-col gap-5 justify-center place-items-center w-[310px] h-[225px] bg-white hover:scale-95 ">
        <img style={{color: "#2D8F1D"}} src={icon} alt="Knowledge item" className="w-[70px] h-[70px] "/>
        <div className='w-3/4'>
            <h1 style={{fontWeight: 500, fontSize: 18, textAlign: 'center'}}>{title}</h1>
            <h1 style={{color: "#767676", textAlign: 'center'}}>{description}</h1>
        </div>
    </div>
  )
}

export {KnowledgeItem}