import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { FaStar } from "react-icons/fa";

import Footer from "../components/Footer";
import ShimmerCard from "../components/ShimmerCard";
import BubbleText from "../components/BubbleText";

import LoadAndErrorButton from "../components/LoadButton";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Details = (prop) => {
  const { carId } = useParams();
  const selectedCar = prop.cars.find((car) => car.id === Number(carId));

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
    <>
      <div>
        <Navbar />

        <div className="w-11/12 md:w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between md:space-x-10 bg-slate-800">
          <div className="md:w-1/2 space-y-5">
            <p className="text-lg text-white ">
              <Link to="/">Home</Link> {">"} Cars {">"}{" "}
              <span className="font-semibold text-indigo-500">Details</span>
            </p>
            <h1 className="text-4xl text-white font-bold text-center">
              {selectedCar.model}
            </h1>
            <h1 className="text-3xl font-bold text-green-500 text-center">
              ${selectedCar.price}
            </h1>
            <div className="w-full resize-none">
              <ImageSlider images={selectedCar.image} />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-between p-4">
            <div className="py-5 border-b space-y-2">
              <h1 className="text-2xl text-white font-semibold">
                Rating & Reviews
              </h1>
              <div className="flex space-x-5 items-center">
                <div className="flex items-center space-x-1 text-amber-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-white">
                  <span className="font-bold ">4.8</span>(140 reviews)
                </p>
              </div>
            </div>
            <div className="py-5 border-b space-y-2">
              <h1 className="text-2xl text-white font-semibold">Colors</h1>
              <div className="flex space-x-5 items-center">
                <div className="w-6 h-6 rounded-full cursor-pointer bg-blue-500 hover:bg-blue-400"></div>
                <div className="w-6 h-6 rounded-full cursor-pointer bg-red-500 hover:bg-red-400"></div>
                <div className="w-6 h-6 rounded-full cursor-pointer bg-black hover:bg-gray-800"></div>
                <div className="w-6 h-6 rounded-full cursor-pointer bg-green-600 hover:bg-green-500"></div>
                <div className="w-6 h-6 rounded-full cursor-pointer bg-yellow-600 hover:bg-yellow-500"></div>
              </div>
            </div>
            <div className="py-5 border-b space-y-2">
              <h1 className="text-2xl font-semibold text-white">Description</h1>
              <p className="text-sm text-teal-600">
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham.
              </p>
            </div>
            <div className="py-5 border-b  space-y-2 flex justify-between">
              <div>
                <h1 className="md:text-2xl font-semibold text-white">
                  {selectedCar.model}
                </h1>
                <p className="text-green-500 text-4xl py-3  md:text-2x1 font-bold">
                  ${selectedCar.price}
                </p>
              </div>
              <LoadAndErrorButton />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <BubbleText />
      </div>
      <div className="grid grid-cols-5 mt-2">
        <ShimmerCard />
      </div>
      <div className="mt-1">
        <Footer />
      </div>
    </>
  );
};

export default Details;
