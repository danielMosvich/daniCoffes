import { useEffect } from "react";
import { useLocation } from "react-router";
import MainBanner from "./MainBanner";
import More from "./More";
import Noticias from "./Noticias";
import Products from "./Products";
import Promotions from "./Promotions";
import Location from "./Location";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Un pequeño retraso para asegurar que los componentes estén en el DOM
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);

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
