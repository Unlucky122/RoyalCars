import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 py-4 text-center">
        <div className="grid place-content-stretch container mx-auto">
          <h1 className="font-bold text-2xl flex justify-start mt-10 text-red-500">
            Call Us
          </h1>
          <p className="flex justify-start text-white">+40 (747099952)</p>
          <br />
          <h1 className="font-bold text-2xl flex justify-start mt-10 text-green-500">
            Email Us
          </h1>
          <p className="flex justify-start text-white">
            royalcarsimport@gmail.com
          </p>
          <h1 className="font-bold text-2xl mb-8 text-blue-600">
            Opening Hours
          </h1>
          <p className="text-white">
            Mon: 10:00 - 17:00 <br />
            Tue: 09:00 - 16:00 <br /> Wed: 12:00 - 19:00 <br /> Thu: 10:30 -
            16:30 <br />
            Fri: 15:00 - 22:00 <br />
            Sat: 14:00 - 23:00
            <br /> Sun: Closed
          </p>
          <div className="flex justify-start">
            <h1 className="font-bold text-2xl text-amber-500">Our Socials</h1>
          </div>
          <div className="flex justify-start">
            <a
              href="https://www.instagram.com/royalcarsimport/"
              target="_blank"
              className="text-5xl py-1 text-purple-500"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="grid place-content-end  ">
            <iframe
              width="300"
              height="200"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Satu%20Mare,%20Romania+(RoyalCars)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
          <p className="bg-clip-text cursor-pointer text-indigo-500">
            @2024 RoyalCars All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
