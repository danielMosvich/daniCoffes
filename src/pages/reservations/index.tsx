import { useState, type FormEvent } from "react";
import {} from // deleteReservation,
// insertReservation,
// updateReservation,
"../../services/reservations.service";
import { inputStyles, tableStyles } from "../../utils/Constants";
import { useReservations } from "./useReservations";
import type { Reservation } from "../../types/Reservation";
import { PencilLineIcon, Trash2Icon, XIcon } from "lucide-react";
const Reservations = () => {
  const { reservations, isLoading, error, hasReservations } = useReservations();
  const { insertReservation, updateReservation, deleteReservation } =
    useReservations();
  const [modalState, setModalState] = useState<
    "closed" | "insert" | "update" | "delete"
  >("closed");
  const defaultReservation: Omit<Reservation, "created_at"> = {
    id: 0,
    name: "",
    phone: "",
    seats: 0,
    fecha: "",
    reservation_time: "",
    mail: "",
    notes: "",
  };
  const [currentReservation, setCurrentReservation] =
    useState<Omit<Reservation, "created_at">>(defaultReservation);
  const closeModal = () => setModalState("closed");

  //   ACTIONS modal
  const handleInsert = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await insertReservation({
        name: currentReservation.name,
        phone: currentReservation.phone,
        seats: currentReservation.seats,
        fecha: currentReservation.fecha,
        reservation_time: currentReservation.reservation_time,
        mail: currentReservation.mail,
        notes: currentReservation.notes,
      });
      closeModal();
    } catch {
      alert("Error al insertar la reserva. Por favor, inténtalo de nuevo.");
    }
  };
  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentReservation.id <= 0) return;
    try {
      await updateReservation({
        id: currentReservation.id,
        name: currentReservation.name,
        phone: currentReservation.phone,
        seats: currentReservation.seats,
        fecha: currentReservation.fecha,
        reservation_time: currentReservation.reservation_time,
        mail: currentReservation.mail,
        notes: currentReservation.notes,
      });
      closeModal();
    } catch {
      alert("Error al actualizar la reserva. Por favor, inténtalo de nuevo.");
    }
  };
  const handleDelete = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentReservation.id <= 0) return;
    try {
      await deleteReservation(currentReservation.id);
      closeModal();
    } catch {
      alert("Error al eliminar la reserva. Por favor, inténtalo de nuevo.");
    }
  };
  if (isLoading) {
    return (
      <section className="p-5 bg-background-secondary">
        <h2 className="text-foreground text-center my-10">
          Descubre los nuevos productos
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-162.5">
          {/* spiner xd */}
          <div className="w-16 h-16 border-4 border-muted/30 border-t-primary rounded-full animate-spin mb-6 shadow-sm"></div>
          <p className="text-xl text-foreground/80 font-bold tracking-widest animate-pulse">
            PREPARANDO EL CATÁLOGO...
          </p>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section className="p-5 bg-background-secondary">
        <h2 className="text-foreground text-center my-10">
          Descubre los nuevos productos
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-162.5">
          <p className="text-xl text-red-500">Error al obtener los productos</p>
        </div>
      </section>
    );
  }
  return (
    <div className="bg-background-secondary min-h-screen">
      <div className="pt-24 max-w-7xl mx-auto">
        <h2 className="text-foreground text-center my-10 border-b-4 w-fit mx-auto pb-3 border-secondary">
          Reservas
        </h2>
        {!hasReservations ? (
          <div>No hay reservas disponibles</div>
        ) : (
          <div className="flex flex-col items-end gap-5 pb-20">
            <button
              onClick={() => {
                setCurrentReservation(defaultReservation);
                setModalState("insert");
              }}
              className="px-4 py-2 bg-secondary rounded-lg w-fit"
            >
              Agregar Reserva
            </button>
            <table
              className={
                tableStyles.table +
                " ring-2 ring-muted/50 rounded-xl overflow-hidden"
              }
            >
              <thead className={tableStyles.thead}>
                <tr className={tableStyles.tr}>
                  <th className={tableStyles.th}>nombre</th>
                  <th className={tableStyles.th}>telefono</th>
                  <th className={tableStyles.th}>asientos</th>
                  <th className={tableStyles.th}>fecha</th>
                  <th className={tableStyles.th}>hora</th>
                  <th className={tableStyles.th}>email</th>
                  <th className={tableStyles.th}>notas</th>
                  <th className={tableStyles.th}>acciones</th>
                </tr>
              </thead>
              <tbody className={tableStyles.tbody}>
                {reservations.map((reservation) => (
                  <tr key={reservation.id} className={tableStyles.tr}>
                    <td className={tableStyles.td}>{reservation.name}</td>
                    <td className={tableStyles.td}>{reservation.phone}</td>
                    <td className={tableStyles.td}>{reservation.seats}</td>
                    <td className={tableStyles.td}>{reservation.fecha}</td>
                    <td className={tableStyles.td}>
                      {reservation.reservation_time}
                    </td>
                    <td className={tableStyles.td}>{reservation.mail}</td>
                    <td className={tableStyles.td}>{reservation.notes}</td>
                    <td className={tableStyles.td}>
                      <button
                        onClick={() => {
                          setCurrentReservation(reservation);
                          setModalState("update");
                        }}
                        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80"
                      >
                        <PencilLineIcon className="size-4" />
                      </button>
                      <button
                        className="bg-red-400 ml-2 text-white px-4 py-2 rounded-md hover:bg-primary/80"
                        onClick={() => {
                          setCurrentReservation(reservation);
                          setModalState("delete");
                        }}
                      >
                        <Trash2Icon className="size-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {modalState && modalState !== "closed" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in fade-in zoom-in duration-200">
            {/* header */}
            <div className="flex p-4 relative">
              <h3 className="border-b-2 border-secondary">
                {modalState === "delete" && "Eliminar Reserva"}
                {modalState === "update" && "Editar Reserva"}
                {modalState === "insert" && "Formulario de Reserva"}
              </h3>
              <button
                onClick={() => setModalState("closed")}
                className="text-gray-500 hover:text-gray-700 absolute right-2 top-2"
              >
                <XIcon />
              </button>
            </div>
            {/* body */}
            <div>
              {modalState === "delete" ? (
                <form onSubmit={handleDelete} className="space-y-4 p-6">
                  <p>¿Estás seguro de que deseas eliminar esta reserva?</p>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      className="bg-tertiary text-white px-7 py-3 disabled:bg-muted disabled:opacity-25 cursor-pointer"
                      onClick={() => setModalState("closed")}
                      disabled={isLoading}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="bg-secondary text-white px-7 py-3 disabled:bg-muted disabled:opacity-25 cursor-pointer"
                      disabled={isLoading}
                    >
                      Eliminar
                    </button>
                  </div>
                </form>
              ) : (
                <form
                  onSubmit={
                    modalState === "insert" ? handleInsert : handleUpdate
                  }
                  className="p-6 flex flex-col gap-4"
                >
                  <div className="flex gap-5">
                    <input
                      disabled={isLoading}
                      className={inputStyles.input}
                      placeholder="nombre"
                      required
                      type="text"
                      value={currentReservation.name}
                      onChange={(e) =>
                        setCurrentReservation((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                    <input
                      disabled={isLoading}
                      className={inputStyles.input}
                      placeholder="telefono"
                      type="text"
                      required
                      value={currentReservation.phone}
                      onChange={(e) =>
                        setCurrentReservation((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex gap-5">
                    <input
                      disabled={isLoading}
                      className={inputStyles.input}
                      placeholder="asientos"
                      type="number"
                      required
                      value={currentReservation.seats}
                      onChange={(e) =>
                        setCurrentReservation((prev) => ({
                          ...prev,
                          seats: Number(e.target.value),
                        }))
                      }
                    />
                    <input
                      disabled={isLoading}
                      className={inputStyles.input}
                      placeholder="fecha"
                      type="date"
                      required
                      value={currentReservation.fecha}
                      onChange={(e) =>
                        setCurrentReservation((prev) => ({
                          ...prev,
                          fecha: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex gap-5">
                    <input
                      disabled={isLoading}
                      className={inputStyles.input}
                      placeholder="hora"
                      type="time"
                      required
                      value={currentReservation.reservation_time}
                      onChange={(e) =>
                        setCurrentReservation((prev) => ({
                          ...prev,
                          reservation_time: e.target.value,
                        }))
                      }
                    />
                    <input
                      disabled={isLoading}
                      className={inputStyles.input}
                      placeholder="email"
                      type="email"
                      required
                      value={currentReservation.mail}
                      onChange={(e) =>
                        setCurrentReservation((prev) => ({
                          ...prev,
                          mail: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <textarea
                    disabled={isLoading}
                    className={inputStyles.input}
                    placeholder="notas"
                    value={currentReservation.notes ?? ""}
                    onChange={(e) =>
                      setCurrentReservation((prev) => ({
                        ...prev,
                        notes: e.target.value,
                      }))
                    }
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={() => setModalState("closed")}
                      className="bg-tertiary text-white px-7 py-3 disabled:bg-muted disabled:opacity-25 cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-secondary text-white px-7 py-3 disabled:bg-muted disabled:opacity-25 cursor-pointer"
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Reservations;
