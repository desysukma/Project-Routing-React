import React from "react"; 
import { useParams, Link } from "react-router";
import { getDestinasiById, deleteDestinasi } from "./api";
import { useNavigate } from "react-router";

export default function DestinasiDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const destinasi = getDestinasiById(id);

    const handleDelete = () => {
        deleteDestinasi(id);
        navigate("/");
    };

    return(
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">{destinasi.title}</h1>

            <div className="flex gap-3">
                <Link
                to={`/destinasi/${id}/edit`}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                    Edit
                </Link>

                <button 
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                    Delete
                </button>
            </div>


        </div>
    );
}