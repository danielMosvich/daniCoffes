import { useNavigate } from "react-router";
import { useAuth } from "../../context/useAuth";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  if (!user) return;
  return (
    <>
      <div className="mt-24 mx-auto max-w-xl ">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-tertiary text-white rounded-full flex justify-center items-center text-2xl font-black shadow-lg shadow-black/30">
            {user.name.slice(0, 1).toUpperCase() +
              user.name.slice(1, 2).toLowerCase()}
          </div>
          <div className=" flex flex-col">
            <h3>{user.name}</h3>
            <p className="mb-0">correo: {user.email}</p>
            <p className="mb-0">teléfono: {user.phone}</p>
            <p className="mb-0">rol: {user.role}</p>
          </div>
        </div>
        <div className="flex gap-5 w-full my-10">
          <button
            className="bg-red-400 hover:bg-red-500 cursor-pointer w-full text-white px-7 py-3 disabled:bg-muted disabled:opacity-25"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="bg-tertiary hover:bg-tertiary/80 cursor-pointer w-full text-white px-7 py-3 disabled:bg-muted disabled:opacity-25"
            onClick={() => {
              alert("Función de editar perfil aún no implementada");
            }}
          >
            Editar
          </button>
        </div>

      </div>
    </>
  );
};
export default Profile;
