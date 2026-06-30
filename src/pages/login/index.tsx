import { useMutation } from "@tanstack/react-query";
import { loginService } from "../../services/auth.service";
import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({
      correo,
      password,
    }: {
      correo: string;
      password: string;
    }) => loginService(correo, password),
  });
  const handleSubmit = async (formData: FormData) => {
    setMessage(null);
    const correo = formData.get("correo") as string;
    const password = formData.get("password") as string;
    try {
      const result = await mutateAsync({ correo, password });
      if (result === -1) {
        setMessage("La cuenta no existe");
      } else if (result === -2) {
        setMessage("La contraseña es incorrecta");
      } else if (Array.isArray(result) && result.length > 0) {
        const userData = result[0];
        login(userData);
        navigate("/profile");
      }
    } catch {
      setMessage(
        "Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.",
      );
    }
  };

  return (
    <div>
      <h2 className="mt-20 text-center">Login</h2>
      <section className="flex flex-col max-w-xl mx-auto bg-secondary/20 p-10 rounded-2xl mb-20">
        <div>
          <p className="text-red-500">{message}</p>
        </div>
        <form action={handleSubmit} className="flex flex-col gap-4 mt-4">
          <div>
            <input
              type="text"
              name="correo"
              placeholder="Correo"
              required
              disabled={isPending}
              className="w-full px-4 py-2 ring ring-muted rounded-lg outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              required
              disabled={isPending}
              className="w-full px-4 py-2 ring ring-muted rounded-lg outline-none"
            />
          </div>
          <div>
            <button
              className="w-full bg-primary cursor-pointer hover:bg-tertiary transition-colors text-white py-2 rounded-full"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
export default Login;
