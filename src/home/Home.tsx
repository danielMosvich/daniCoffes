import MainBanner from "./MainBanner";
import More from "./More";
import Noticias from "./Noticias";
import Products from "./Products";
import Promotions from "./Promotions";
import Location from "./Location";

const Home = () => {
  return (
    <>
      {/* <MainHeader /> */}
      <MainBanner />
      <Promotions />
      <Products />
      <Noticias />
      <Location />
      <More />
      {/* <MainFooter /> */}
    </>
  );
};
export default Home;
