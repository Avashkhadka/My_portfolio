import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function Blogpage() {
    const params=useParams()
    
console.log(params)
  return (
    <div>
        <h2 className="min-h-screen flex justify-center text-center items-center text-5xl">{params.slug}</h2>

        
    </div>
  )
}

export default Blogpage
