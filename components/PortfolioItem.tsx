import React, { Dispatch, SetStateAction, useState } from 'react'
import { PortfolioDialog } from './Dialogs/PortfolioDialog';
import { FaUnderline } from 'react-icons/fa';

interface PortfolioItemProps {
        icon: string;
        title: string;
        description: string;
        link?: string;
    }

function PortfolioItem({icon, title, description, link}: PortfolioItemProps) {

  const [PortfolioDialogOpen, setPortfolioDialogOpen] = useState<boolean>(false)

  const handlePortfolioClick = () => {
    setPortfolioDialogOpen(true)
  }
  
  return (
    <div className="flex flex-col gap-5 py-[20px] bg-white">
      <div className="flex w-[320px] h-[300px] justify-center place-items-center">
        <img style={{color: "#2D8F1D"}} src={icon} alt="Portfolio item" className='flex max-h-full max-w-full'/>
      </div>
      <div className='flex flex-col gap-2 px-7'>
          <h1 style={{fontWeight: 500, fontSize: 18}}>{title}</h1>
          <h1 style={{color: "#767676"}}>{description.slice(0, Math.floor(description.length * 0.2))} ...</h1>
          <a className="hover:underline" style={{fontWeight: 500, fontSize: 18, color: "#2D8F1D"}} onClickCapture={handlePortfolioClick}>Learn More &gt;</a>
          <PortfolioDialog open={PortfolioDialogOpen} setPortfolioDialogOpen={setPortfolioDialogOpen} link={link} image={icon} description={description}/>
      </div>
    </div>
  )
}

export {PortfolioItem}