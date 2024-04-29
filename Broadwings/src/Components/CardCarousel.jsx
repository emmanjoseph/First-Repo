import React, { useRef } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { cards } from '../Utilities/Utilities';


const CardSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  return (
    
    <div className='w-full md:w-[1200px] mx-auto px-2 md:px-0 py-14 relative'>
      <div className="flex justify-between items-center ">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
        >
          <FaAngleLeft className="h-8 w-8 text-gray-500" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
        >
          <FaAngleRight className="h-8 w-8 text-gray-500" />
        </button>
      </div>
      <div className="flex overflow-x-auto gap-8 scrollbar-hide"
      style={{scrollBehavior:"smooth"}}
      ref={sliderRef}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 "
          >
            <div className="bg-white shadow-lg rounded-lg p-6 w-[300px] h-[350px]">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
