import Banner from "./components/Banner/Banner";
import Header from "./components/header/Header";
import Slider from "./components/Slider/Slider";
import './styles/index.scss';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Slider></Slider>
    </div>
  );
}

export default App;
