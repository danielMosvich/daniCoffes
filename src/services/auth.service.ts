import { CONFIG } from "../config/index";
export const loginService = async (email: string, password: string) => {
  const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.LOGIN}`;
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Error en la solicitud de inicio de sesión");
  }
  return await response.json();
};
