import React from "react";
import { useNavigate } from "react-router";
import { createDestinasi } from "./api";

export default function DestinasiCreate(){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = new FormData(e.target);

        createDestinasi({
            title: from.get("title"),
            completed: false,
        });

        navigate("/");
    };

    return(
        <div className="max-w-x1 mx-auto p-6">
            <h1 className="text-2x1 font-bold mb-4">Create Destinasi</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                name="title"
                palceholder="Destinasi title..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/> 
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Create
            </button>
            </form>
        </div>
    );
}