import { useNavigate } from "react-router";

export default function Pagina404() {
  const navigate = useNavigate();
  return (
    <div className="mt-18">
      <div className="flex bg-muted/10 py-13 justify-around items-center">
        <h3>404 - PAGE NOT FOUND</h3>
        <span className="font-serif text-secondary">Barista / Error 404</span>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-9xl mt-20">404</h1>
        <span className="border-b-3 w-32 mt-10 border-secondary"></span>
        <h3 className="uppercase mt-5">page your are looking is not found</h3>
        <p className="mt-5 font-light text-base max-w-3xl text-center font-secondary">
          The page you are looking for does not exist. It may have been moved,
          or removed altogether. Perhaps you can return back to the site's
          homepage and see if you can find what you are looking for.
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="mt-5 py-4 px-10 bg-secondary hover:bg-tertiary transition-colors text-white font-bold tracking-widest"
        >
          HOMEPAGE
        </button>
      </div>
    </div>
  );
}
