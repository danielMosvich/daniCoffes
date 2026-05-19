import MainBanner from "./MainBanner";
import More from "./More";
import Noticias from "./Noticias";
import Products from "./Products";
import Promotions from "./Promotions";

const Home = () => {
  return (
    <>
      {/* <MainHeader /> */}
      <MainBanner />
      <Promotions />
      <Products />
      <Noticias />
      <More />
      {/* <MainFooter /> */}
    </>
  );
};
export default Home;
