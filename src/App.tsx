// import { useEffect, useState } from "react";
import MainFooter from "./common/MainFooter";
import MainHeader from "./common/MainHeader";
import Historia from "./home/Historia";
import MainBanner from "./home/MainBanner";
// import Nosotros from "./home/Nosotros";
import Noticias from "./home/Noticias";
import NuestraEmpresa from "./home/NuestraEmpresa";
import Products from "./home/Products";
// import type { IProductCoffee } from "./types/product";

const App = () => {
  // const [data, setData] = useState<IProductCoffee[]>([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://danicoffeegd.alwaysdata.net/products.php",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         },
  //       );
  //       const response_transform = await response.json();
  //       setData(response_transform);
  //     } catch (error) {
  //       console.log("Algo esta mal con el servidor:", error);
  //     }
  //   };
  //   getProducts();
  // }, []);
  return (
    <>
      <MainHeader />
      <MainBanner />
      <Products />
      {/* <Nosotros /> */}
      <Noticias />
      <Historia />
      <NuestraEmpresa />
      <MainFooter />
    </>
  );
};

export default App;
