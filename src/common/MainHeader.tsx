const MainHeader = () => {
  return (
    <header className="bg-background/80 backdrop-blur-xl fixed top-0 w-full z-50">
      <div className="px-3 py-2">
        <nav className="flex justify-between">
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
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-10 font-semibold text-lg uppercase justify-between w-full">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#products">Menu</a>
              </li>
              <li>
                <a href="#news">Nuevo producto</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            {/* separator */}
            <div className="w-0.5 h-1/2 bg-muted"></div>
            {/* icons */}
            <div className="flex gap-4">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeWidth="2"
                    d="M1 2h3l3 11l-1 4h15M7 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm14 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM7 13h12l3-9H4.545z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M15.803 15.803A7.5 7.5 0 1 1 5.197 5.197a7.5 7.5 0 0 1 10.606 10.606" />
                    <path
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeWidth="2"
                      d="m15.803 15.804l5.303 5.303m-5.303-5.304A7.5 7.5 0 1 1 5.197 5.197a7.5 7.5 0 0 1 10.606 10.606Z"
                    />
                  </g>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:hidden flex pr-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default MainHeader;
