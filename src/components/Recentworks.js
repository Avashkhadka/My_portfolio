import React from 'react'
import Rcardcomp from './Rcardcomp'

export default function Recentworks() {

  const works=[
    {
      header:"💻 Comprehensive student database.",
      title:"🏆 First Customer Demand Project: A student database web application for digitization.",
      link:"https://onedotsolutions.com.np/trivschool",
      image:"",
      lgfirst:"#073655",
      lglast:"#020A0D",
      lgimgfirst:"#3C9BD1",
      lgimgsec:"#123448",
    },
    {
      header:"💪 Efficient cooperative website, expertly built.",
      title:"Diyo Saving and Credit Cooperative Pvt. Ltd. | Empowering Financial Growth Together",
      link:"https://diyosaving.com.np/",
      image:"",
      lgfirst:"#510b0b",
      lglast:"#090202 ",
      lgimgfirst:"#B94E4E",
      lgimgsec:"#621515",
    },
    {
      header:"🖊 Advanced text manipulation website.",
      title:"Ultimate Text Utilities for Efficient Content Processing Edit, and Enhance Your Writing with Ease",
      link:"https://avashkhadka.com.np/react/textutils/",
      image:"",
      lgfirst:"#522d05",
      lglast:"#020809 ",
      lgimgfirst:"#A96114",
      lgimgsec:"#613607",
    },
  ]


  return (
    <div className='Recent-work'>
      <div className="r-header">
        Recent works
      </div>
    {
      works.map((item,index)=>{
        return(
          <Rcardcomp key={index} data={item} lgfirst={item.lgfirst}  lgsec={item.lglast} lgimgfirst={item.lgimgfirst} lgimgsec={item.lgimgsec}/>
        )
      })
    }

    </div>
  )
}
