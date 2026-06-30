import type { Reservation } from "../types/Reservation";
import { CONFIG } from "../config/index";
export const fetchReservations = async (
  signal?: AbortSignal,
): Promise<Reservation[]> => {
  const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.RESERVATIONS}`;
  const reponse = await fetch(API_URL, { signal });
  if (!reponse.ok) {
    throw new Error(
      `Error al obtener las reservas: ${reponse.status} ${reponse.statusText}`,
    );
  }
  return (await reponse.json()) as Reservation[];
};
export const insertReservation = async (
  name: string,
  phone: string,
  seats: number,
  fecha: string,
  reservation_time: string,
  mail: string,
  notes: string | null,
): Promise<Reservation> => {
  const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.RESERVATIONS_INSERT}`;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("seats", seats.toString());
  formData.append("fecha", fecha);
  formData.append("reservation_time", reservation_time);
  formData.append("mail", mail);
  if (notes) {
    formData.append("notes", notes);
  }
  const response = await fetch(API_URL, {
    body: formData,
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Error al insertar la reserva");
  }
  return (await response.json()) as Reservation;
};
export const updateReservation = async (
  id: number,
  name: string,
  phone: string,
  seats: number,
  fecha: string,
  reservation_time: string,
  mail: string,
  notes: string | null,
): Promise<Reservation> => {
  const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.RESERVATIONS_UPDATE}`;
  const formData = new FormData();
  formData.append("id", id.toString());
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("seats", seats.toString());
  formData.append("fecha", fecha);
  formData.append("reservation_time", reservation_time);
  formData.append("mail", mail);
  if (notes) {
    formData.append("notes", notes);
  }
  const response = await fetch(API_URL, {
    body: formData,
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Error al actualizar la reserva");
  }
  return (await response.json()) as Reservation;
};
export const deleteReservation = async (id: number): Promise<void> => {
  const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.RESERVATIONS_DELETE}`;
  const formData = new FormData();
  formData.append("id", id.toString());
  const response = await fetch(API_URL, {
    body: formData,
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar la reserva");
  }
  return (await response.json()) as void;
};
