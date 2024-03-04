import React, { useState } from 'react'
import "./style.css"

export const Carousel = ({data}) => {
    const [slide, setSlide] = useState(0)
    console.log(data);

  return (

    <div className='carousel'>
            {
                data.map((item,idx) => {
                    return (
                        <img 
                            className={slide === idx ? "slide" : "slide slide-hiden"}
                            key={idx}
                            alt={item.alt}
                            src={item.src}
                        />
                    )
                })
            }
    </div>
  )
}
