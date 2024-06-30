import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ShimmerCard from "./components/ShimmerCard";

const cars = [
  {
    id: 1,
    model: "BMW 5 Series",
    year: 2018,
    price: 39.999,
    image: ["/G30.jpeg", "/g303.jpg", "/g302.jpg", "/g302.jpg"],
    // image1:
    // image2:
    // image3:
    km: 167.493,
  },
  {
    id: 2,
    model: "Mercedes-Benz E class",
    year: 2019,
    price: 38000,
    image: ["/E-220.jpeg", "/E-2202.jpeg", "/E-2203.jpeg"],
    // image1: "/E-2202.jpeg",
    // image2: "/E-2203.jpeg",
    km: 170.232,
    icon: "FaCalendar",
  },
  {
    id: 3,
    model: "BMW X4",
    year: 2019,
    price: 35000,
    image: ["/X4.jpeg", "/X42.jpeg", "/X43.jpeg"],
    // image1: "/X42.jpeg",
    // image2: "/X43.jpeg",
    km: 129.451,
  },
  {
    id: 4,
    model: "BMW 4 Series",
    year: 2018,
    price: 42000,
    image: ["/s4.jpg", "/s42.jpeg", "/s43.jpeg"],
    // image1: "/s42.jpeg",
    // image2: "/s43.jpeg",
    km: 184.495,
  },
  {
    id: 5,
    model: "Mercedes-AMG A45",
    year: 2016,
    price: 90000,
    image: ["/A45.jpeg", "/A452.jpeg", "/A453.jpeg"],
    // image1: "/A452.jpeg",
    // image2: "/A453.jpeg",
    km: 160.467,
  },
  {
    id: 6,
    model: "BMW X4",
    year: 2015,
    price: 38000,
    image: ["/x44.jpeg"],
    km: 240.483,
  },
  {
    id: 7,
    model: "Audi A7",
    year: 2013,
    price: 75000,
    image: ["/a7.jpeg"],
    km: 217.822,
  },
  {
    id: 8,
    model: "Jaguar XE",
    year: 2015,
    price: 27000,
    image: ["/jaguar.jpeg"],
    km: 163.221,
  },
  {
    id: 9,
    model: "Audi A4",
    year: 2017,
    price: 110000,
    image: ["/a4.jpeg"],
    km: 154.571,
  },
  {
    id: 10,
    model: "BMW X4",
    year: 2014,
    price: 40000,
    image: ["/x444.jpeg"],
    km: 201.487,
  },
  {
    id: 11,
    model: "Audi A6",
    year: 2014,
    price: 22000,
    image: ["/a6.jpeg"],
    km: 226.759,
  },
  {
    id: 12,
    model: "Mercedes-Benz C class",
    year: 2015,
    price: 45000,
    image: ["/c63.jpeg"],
    km: 178.143,
  },
  {
    id: 13,
    model: "BMW X4",
    year: 2015,
    price: 24000,
    image: ["/x4444.jpeg"],
    km: 198.323,
  },
  {
    id: 14,
    model: "Mercedes-Benz E class",
    year: 2019,
    price: 48000,
    image: ["/e220.jpg"],
    km: 138.948,
  },
];

const carData = {
  audi: [
    {
      model: "A3",
      photos: ["a4.jpeg", "a6.jpeg", "audi_a3_3.jpg"],
      details: "Compact luxury sedan",
    },
    {
      model: "A4",
      photos: ["audi_a4_1.jpg", "audi_a4_2.jpg"],
      details: "Compact executive car",
    },
    {
      model: "A5",
      photos: ["audi_a5_1.jpg", "audi_a5_2.jpg"],
      details: "Compact executive coupe",
    },
    {
      model: "Q7",
      photos: ["audi_q7_1.jpg", "audi_q7_2.jpg"],
      details: "Full-size luxury SUV",
    },
  ],
  bmw: [
    {
      model: "X1",
      photos: ["bmw_x1_1.jpg", "bmw_x1_2.jpg"],
      details: "Subcompact luxury crossover",
    },
    {
      model: "X3",
      photos: ["bmw_x3_1.jpg", "bmw_x3_2.jpg"],
      details: "Compact luxury crossover",
    },
    {
      model: "X5",
      photos: ["bmw_x5_1.jpg", "bmw_x5_2.jpg"],
      details: "Mid-size luxury crossover",
    },
    {
      model: "X7",
      photos: ["bmw_x7_1.jpg", "bmw_x7_2.jpg"],
      details: "Full-size luxury crossover",
    },
  ],
  //
};

function App() {
  // const [selectedMake, setSelectedMake] = useState("");
  // const [models, setModels] = useState([]);
  // const [selectedModel, setSelectedModel] = useState(null);

  // const handleMakeChange = (event) => {
  //   const make = event.target.value;
  //   setSelectedMake(make);
  //   setModels(carData[make] || []);
  //   setSelectedModel(null);
  // };

  // const handleModelChange = (event) => {
  //   const model = event.target.value;
  //   const modelData = models.find((m) => m.model === model);
  //   setSelectedModel(modelData);
  // };
  return (
    // <>
    //   {/* <Navbar />
    //   <Outlet /> */}
    // </>
    // <>
    //   <div className="App">
    //     <div className="dropdown">
    //       <label htmlFor="car-make">Choose a car make:</label>
    //       <select id="car-make" name="car-make" onChange={handleMakeChange}>
    //         <option value="">Select Make</option>
    //         {Object.keys(carData).map((make) => (
    //           <option key={make} value={make}>
    //             {make.charAt(0).toUpperCase() + make.slice(1).replace("-", " ")}
    //           </option>
    //         ))}
    //       </select>
    //     </div>
    //     {selectedMake && (
    //       <div className="dropdown">
    //         <label htmlFor="car-model">Choose a model:</label>
    //         <select
    //           id="car-model"
    //           name="car-model"
    //           onChange={handleModelChange}
    //         >
    //           <option value="">Select Model</option>
    //           {models.map((model) => (
    //             <option key={model.model} value={model.model}>
    //               {model.model}
    //             </option>
    //           ))}
    //         </select>
    //       </div>
    //     )}
    //     {selectedModel && (
    //       <div className="model-details">
    //         <h2>{selectedModel.model}</h2>
    //         <div className="photo-gallery">
    //           {selectedModel.photos.map((photo, index) => (
    //             <img
    //               key={index}
    //               src={photo}
    //               alt={`${selectedModel.model} ${index + 1}`}
    //             />
    //           ))}
    //         </div>
    //         <p>{selectedModel.details}</p>
    //       </div>
    //     )}
    //   </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cars={cars} />} />
          <Route path="/details/:carId" element={<Details cars={cars} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
