import Banner from "./components/Banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Jobs from "./components/jobs/Jobs";
import Bannerlast from "./components/last-banner/Bannerlast";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Slider from "./components/Slider/Slider";
import './styles/index.scss';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Slider></Slider>
      <Section2></Section2>
      <Section3></Section3>  
      <Jobs></Jobs>
      <Bannerlast></Bannerlast>
      <Footer></Footer>
    </div>
  );
}

export default App;
