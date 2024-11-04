import React, { useState } from "react";
import KindowordsContainerItem from "./KindowordsContainerItem";

export default function Kindwords() {
  let kindwordsArr = [
    {
        "remarks": "You possess impressive coding skills and a strong willingness to learn, which will benefit your career greatly.",
        "name": "Alex Martinez",
        "company": "TechWave Solutions",
        "image": "https://r2.erweima.ai/imgcompressed/compressed_3bd8a54079628cbf3098ca951c74a939.webp"
    },
    {
        "remarks": "Your strong front-end knowledge and excellent communication skills make you an invaluable asset to any team.",
        "name": "Sarah Chen",
        "company": "CodeCrafters Inc.",
        "image": "https://img.freepik.com/premium-photo/professional-cv-photo-confident-business-woman-formal-attire_981640-67310.jpg"
    },
    {
        "remarks": "With a solid understanding of back-end technologies, you have great potential for rapid career growth ahead.",
        "name": "Michael Thompson",
        "company": "DevExperts",
        "image": "https://image7.photobiz.com/4062/8_20190716211353_10469804_large.jpg"
    }
]




  let [isindex, setisindex] = useState(0);
  const HandleChangefuncdec = () => {
    setisindex(isindex > 0 ? isindex - 1 : kindwordsArr.length - 1);
  };
  const HandleChangefuncinc = () => {
    setisindex(isindex < kindwordsArr.length - 1 ? isindex + 1 : 0);
  };

  return (
    <div className="kind-words-container">
      <p>Kind Words <sub className="demo-kindwords">(Demo)</sub></p>

      <KindowordsContainerItem
        data={kindwordsArr[isindex]}
        HandleChangefuncinc={HandleChangefuncinc}
        HandleChangefuncdec={HandleChangefuncdec}
      />
    </div>
  );
}
