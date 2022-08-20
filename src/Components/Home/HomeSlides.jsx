import React from "react";
import { useNavigate } from "react-router-dom";
import men1 from "../../assets/men1.webp";
import men2 from "../../assets/men2.webp";
import women1 from "../../assets/women.webp";

import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

const slides = [
  { url: men1, cat: "men" },
  { url: men2, cat: "men" },
  { url: women1, cat: "women" },
];

export default function HomeSlides() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const navigate = useNavigate();
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const changeSlideToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const autoSlide = () => {
    changeSlideToNext();
  };
  React.useEffect(() => {
    setTimeout(() => autoSlide(), 4000);
  }, [currentIndex]);
  const changeSlideToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex items-center justify-start w-full h-[40vh] md:h-[70vh] select-none">
      <div className="w-full group h-[240px] sm:h-[480px] mx-auto relative">
        <div
          onClick={changeSlideToPrevious}
          className="absolute top-[50%] text-black left-[18px] z-10 text-4xl md:text-7xl opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-200"
        >
          <IoMdArrowDropleft />
        </div>
        <div
          style={slideStyles}
          className="flex flex-col justify-center text-black p-8"
        >
          <h1 className="text-3xl font-bold pl-4 md:text-6xl md:pl-20 capitalize ">
            Best {`${slides[currentIndex].cat}'s`} <br />
            Collection
          </h1>
          <button onClick={() => navigate("/products")} className="slides_btn">
            Shop Now
          </button>
        </div>
        <div
          onClick={changeSlideToNext}
          className="absolute top-[50%] text-black right-[18px] z-10 text-4xl md:text-7xl opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <IoMdArrowDropright />
        </div>
      </div>
    </div>
  );
}
