import React from "react";
import { Link } from "react-router";
import { fetchDestinasi, deleteDestinasi } from "./api";

export default function DestinasiList() {
    const destinasiList = fetchDestinasi();

    return (
        <div className="max-w-xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Destinasi Kota Tuban</h1>
                <Link
                    to="/destinasi/new"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    + New
                </Link>
            </div>

            {destinasiList.length === 0 && (
                <p className="text-gray-500">No destinasi yet.</p>
            )}

            <ul className="space-y-3">
                {destinasiList.map((d) => (
                    <li key={d.id} className="flex justify-between items-center p-4 border rounded-lg">
                        <span>{d.title}</span>
                        <Link
                            to={`/destinasi/${d.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            View
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}