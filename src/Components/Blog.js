import React from 'react'
import ReactPlayer from 'react-player'

function Blog() {
  const data = [{
   id:1,
   name:"Payanam",
   url: "https://www.youtube.com/watch?v=Zhlt03wb-Bk"
  },
  {
    id:2,
    name:"Unnai Ninaithu",
    url: "https://www.youtube.com/watch?v=FoET-1AQq7g"
   },
   {
    id:3,
    name:"Chillena",
    url: "https://www.youtube.com/watch?v=A3yJvZHOPdM"
   },
   {
    id:4,
    name:"Kekuren",
    url: "https://www.youtube.com/watch?v=q-Zj42G5RH4"
   },
   {
    id:5,
    name:"Urimayin Kural",
    url: "https://www.youtube.com/watch?v=p2kmYqfhdp8&t=1s"
   },
   {
    id:6,
    name:"Cafeteria Kadhal",
    url: "https://www.youtube.com/watch?v=f4bT45yopu8"
   },
   {
    id:7,
    name:"Kaloori Kaalam",
    url: "https://www.youtube.com/watch?v=WwqSZwWx5YY"
   },
   {
    id:8,
    name:"Instagram Story",
    url: "https://www.youtube.com/watch?v=kpoB7cw8RFc"
   },
]
  return (
    <div>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-14 h-full p-5">
        
  {
    data.map((val) =>(
      
      <div class="lg:h-96 h-full  bg-black" key={val.id}>
    
        <div class="font-bold text-white align-middle text-2xl flex justify-center ">{val.name}</div>
      <ReactPlayer
          url={val.url}
          className="react-player"
          playing={false}
          width="100%"
          height="100%"
        />
      </div>
    )
    )
  }
</div>
    </div>
  )
}

export default Blog