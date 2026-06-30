import MainNav from "./MainNav";

const MainHeader = () => {
  return (
    <header className="bg-background/80 backdrop-blur-xl fixed top-0 w-full z-50">
      <div className="px-3 py-2">
        <div className="flex justify-between">
          <div className="logo flex items-center gap-0">
            <figure className="w-14 h-14">
              <img
                className="w-full h-full scale-150"
                src="/images/logo-2.png"
                alt=""
              />
            </figure>
            <figure className="hidden sm:flex">
              <img className="h-12 mb-2" src="/images/logo-1.png" alt="" />
            </figure>
          </div>
          <MainNav />
        </div>
      </div>
    </header>
  );
};
export default MainHeader;
