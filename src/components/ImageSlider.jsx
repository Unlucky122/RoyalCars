import { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const PrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 transfrom -translate-y-1/2 px-2 py-1"
        onClick={PrevSlide}
      >
        <IoIosArrowRoundBack color="white" size={28} />
      </button>
      <button
        className="absolute top-1/2 right-0 transfrom -translate-y-1/2 px-2 py-1"
        onClick={nextSlide}
      >
        <IoIosArrowRoundForward color="white" size={28} />
      </button>
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt=""
          className="w-full h-[400px] object-cover rounded-lg md:h-[200px] lg:w-[500px] lg:h-[250px] xl:w-[800px] xl:h-[300px] 2xl:w-full 2xl:h-[400px]"
        />
      </div>
      <div className="flex justify-center mt-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setCurrentIndex(index)}
            className={`w-28 mx-1 cursor-pointer border-4 rounded-lg md:h-[60px] md:w-[100px] lg:w-[120px] lg:h-[90px] ${
              currentIndex === index ? "border-indigo-600" : "border-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
