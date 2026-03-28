import Slider from "../Components/component/Slider/Slider";
import Header from "../Components/component/Header/header";
import Cards from "../Components/component/Cards/Cards";
import Propertycard from "../Components/component/PropertyCard";
import Accordian from "../Components/component/Accordain";
import Ytvideo from "../Components/ytvideo";
import Threecols from "../Components/component/Threecols";
import Footer from "../Components/component/Footer";
import Map from "../Components/component/Map";
import Ytpic from "../Components/component/ytvideopic";
import Mapandform from "../Components/component/mapnadform";
import Counter from "../Components/component/counter";
function HomePage() {
  return (
    <>
      <Header />
      <Slider />

      <Accordian />
      <Ytvideo />
      <Ytpic />
      <Threecols />

      <Propertycard one="Apartment" two="Villa House" three="Beach House" />
      <Cards
        title="|View Video"
        desc="We Provide"
        desk=" The Best"
        dek="Property You Like"
      />
      <Cards title="" />
      <Map />
      <Mapandform />
      <Footer />
    </>
  );
}

export default HomePage;
