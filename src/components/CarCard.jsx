import { useRef } from "react";

import { Link } from "react-router-dom";

import { MdAttachMoney } from "react-icons/md";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const CarCard = ({ car }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div>
      <Link to={`/details/${car.id}`}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform,
          }}
          className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-blue-300 to-violet-400"
        >
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-4 grid place-content-center rounded-xl bg-gradient-to-bl from-teal-300 to-red-300 shadow-lg"
          >
            <p
              style={{
                transform: "translateZ(50px)",
              }}
              className="flex items-center justify-center text-3xl font-bold"
            >
              {" "}
              <MdAttachMoney color="green" size={30} />
              {car.price}
            </p>
            <img
              src={car.image[0]}
              alt={car.model}
              style={{
                transform: "translateZ(75px)",
              }}
              className="mx-auto text-4xl"
            />
            <h1
              style={{
                transform: "translateZ(50px)",
              }}
              className="text-center text-2xl font-bold"
            >
              {car.model}
            </h1>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default CarCard;

// OLD CODE

{
  /* <div className="w-[305px] z-0 border-2 border-dashed border-sky-500 hover:border-dotted hover:border-blue-500  rounded-2x1 group">
<div
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className="w-[300px] z-0 p-5 bg-gray-200 space-y-5 rounded-2x1 group-hover:bg-gray-300 hover:text-blue-600"
>
  <h1 className="text-2xl font-bold ">{car.model}</h1>
  <h1 className="flex items-start">
    <span className="flex items-start text-3xl">
      <MdAttachMoney />
    </span>
    <span className="text-3xl text-green-500 font-bold hover:text-red-500">
      {car.price}
    </span>
  </h1>
  <div className="flex flex-col items-center">
    <img src={car.image[0]} alt={car.model} />
  </div>
  {isHovered ? (
    <button className="w-full p-3 bg-blue-700 text-white rounded-full">
      Buy Now
    </button>
  ) : (
    <div className="flex justify-between">
      <div className="flex flex-col items-center space-y-2 text-sm text-gray-500">
        <GiSteeringWheel size={26} />
        <p>Automatic</p>
      </div>
      <div className="flex flex-col items-center space-y-2 text-sm text-gray-500">
        <BsCalendar2DateFill size={26} />
        <p>2020</p>
      </div>
      <div className="flex flex-col items-center space-y-2 text-sm text-gray-500">
        <FaGasPump size={26} />
        <p>Diesel</p>
      </div>
    </div>
  )}
</div>
</div> */
}
