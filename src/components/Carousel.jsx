import React, { useState } from 'react'
import "./style.css"
import { ImArrowLeft, ImArrowRight } from "react-icons/im";

export const Carousel = ({data}) => {
    const [slide, setSlide] = useState(0)
    console.log(data);

    
    const prevSlide = () =>{};


    const nextSlide = () =>{};

  return (

    <div className='carousel'>
        <ImArrowLeft className='arrow arrow-left'/>
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
        <ImArrowRight className='arrow arrow-right'/>
        <span className='indicators'>
            {
                data.map((_,idx) =>{
                    return <button onClick={() => setSlide(idx)} key={idx} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                })
            }
        </span>
    </div>
  )
}
