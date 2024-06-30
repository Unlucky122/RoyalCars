import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Cars from "../components/Cars";
import Footer from "../components/Footer";
import AnimatedText from "../components/AnimatedText";

const Home = (prop) => {
  return (
    <div className="bg-slate-800">
      <Navbar />
      {/* <Search /> */}
      <AnimatedText />
      <Cars cars={prop.cars} />
      <Footer />
    </div>
  );
};

export default Home;
