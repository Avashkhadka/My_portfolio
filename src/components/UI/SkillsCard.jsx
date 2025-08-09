import React from 'react'

function SkillsCard({data}) {

    
  return (
    <div className='skillcard-content'>
        <span className='SkillCard-Hover_name'>{data.name}</span>
        {data.icon}
    </div>
  )
}

export default SkillsCard
