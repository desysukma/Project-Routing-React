import { getDestinasi, saveDestinasi } from "../lib/storage";
import { v4 as uuid } from "uuid";
import { DestinasiSchema, CreateDestinasiSchema } from "./schema";

export const fetchDestinasi = () => getDestinasi();

export const createDestinasi = (data) => {
    const parsed = CreateDestinasiSchema.parse(data);

    const destinasi = getDestinasi ();
    const newDestinasi = { ...parsed, id: uuid()};

    saveDestinasi([...destinasi, newDestinasi]);
    return newDestinasi;
}

export const getDestinasiById = (id) => {
    const destinasi = getDestinasi().find((t) => t.id === id);
    
    if (!destinasi) {
        throw new Error(`Destinasi with id "${id}" not found`);
    }

    return DestinasiSchema.parse(destinasi); 
};

export const updateDestinasi = (id, data) =>{
    const destinasi = getDestinasi();
    const updated = destinasi.map((t) => (t.id === id ? { ...t,...data} :t));

    saveDestinasi(updated);
};

export const deleteDestinasi = (id) => {
    const destinasi = getDestinasi().filter((t) => t.id !== id);

    saveDestinasi(destinasi);
};