import React from 'react'
import { IconBaseProps, IconType } from 'react-icons';

interface LinkButtonProps extends IconBaseProps {
    text : string;
    icon : IconType;
    }

const LinkButton = ({icon, text}: LinkButtonProps) => {
  return <button className='m-2 flex justify-center place-items-center w-[48px] h-[48px] bg-[#2D8F1D] rounded-full ' onClick={()=>window.open(text)}> 
                {icon({size: 28})}
        </button>
}

export {LinkButton};