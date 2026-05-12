import React from "react";
import { useParams, useNavigate } from "react-router";
import { getDestinasiById, updateDestinasi } from "./api";

export default function DestinasiEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    let destinasi;
    try {
        destinasi = getDestinasiById(id);
    } catch (e) {
        return (
            <div className="max-w-xl mx-auto p-6">
                <p className="text-red-500">Destinasi not found.</p>
                <button
                    onClick={() => navigate("/destinasi")}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Back to list
                </button>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        updateDestinasi(id, {
            title: form.get("title"),
        });

        navigate(`/destinasi/${id}`);
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Edit Destinasi</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="title"
                    defaultValue={destinasi.title}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                    Save
                </button>
            </form>
        </div>
    );
}