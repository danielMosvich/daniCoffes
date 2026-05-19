import { Outlet } from "react-router";
import MainFooter from "./common/MainFooter";
import MainHeader from "./common/MainHeader";

const App = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
};

export default App;
