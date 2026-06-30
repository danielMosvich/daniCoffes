import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  deleteReservation,
  fetchReservations,
  insertReservation,
  updateReservation,
} from "../../services/reservations.service";
export const useReservations = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["reservations"],
    queryFn: async ({ signal }) => fetchReservations(signal),
  });
  //insert
  const insertMutation = useMutation({
    mutationFn: ({
      name,
      phone,
      seats,
      fecha,
      reservation_time,
      mail,
      notes,
    }: {
      name: string;
      phone: string;
      seats: number;
      fecha: string;
      reservation_time: string;
      mail: string;
      notes: string | null;
    }) =>
      insertReservation(
        name,
        phone,
        seats,
        fecha,
        reservation_time,
        mail,
        notes,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
  });
  //update
  const updateMutation = useMutation({
    mutationFn: ({
      id,
      name,
      phone,
      seats,
      fecha,
      reservation_time,
      mail,
      notes,
    }: {
      id: number;
      name: string;
      phone: string;
      seats: number;
      fecha: string;
      reservation_time: string;
      mail: string;
      notes: string | null;
    }) =>
      updateReservation(
        id,
        name,
        phone,
        seats,
        fecha,
        reservation_time,
        mail,
        notes,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
  });
  // delete
  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteReservation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
  });

  return {
    reservations: Array.isArray(data) ? data : [],
    isLoading,
    error: error ? error.message : null,
    hasReservations: Array.isArray(data) && data.length > 0,
    insertReservation: insertMutation.mutateAsync,
    updateReservation: updateMutation.mutateAsync,
    deleteReservation: deleteMutation.mutateAsync,
  };
};
