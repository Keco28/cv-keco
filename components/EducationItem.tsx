import React from 'react'

interface EducationItemProps {
        institution: string;
        dates: string;
        certificate: string;
        description: string;
    }
function EducationItem({institution, dates, certificate, description}: EducationItemProps) {
  return (
    <div className="flex p-9">
        <div className="flex flex-col w-2/5 gap-5">
            <h1 style={{fontWeight: 500, fontSize: 18}}>{institution}</h1>
            <div className="flex flex-between place-items-center gap-10">
              <h1>Student</h1>
              <h1 className="px-1" style={{color: 'white', backgroundColor: "#2D8F1D", fontSize: 12}}>{dates}</h1>
            </div>
        </div>
        <div className='flex flex-col w-3/5 gap-5'>
            <h1 style={{fontWeight: 500, fontSize: 18}}>{certificate}</h1>
            <h1 style={{color: "#767676"}}>{description}</h1>
        </div>
    </div>
  )
}

export {EducationItem}