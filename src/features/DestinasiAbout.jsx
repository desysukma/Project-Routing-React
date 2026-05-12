import React from "react";
import { Link } from "react-router";

export default function DestinasiAbout() {
    return (
        <div className="max-w-2xl mx-auto p-6 mt-10">
            <h1 className="text-3xl font-bold mb-4">About</h1>
            <p className="text-gray-600 leading-relaxed mb-4">
                Destinasi is a simple app to help you track and manage your travel destinations.
                Add places you want to visit, update them as your plans change, and remove them
                once you've been there.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
                Built with React, React Router, and Tailwind CSS.
            </p>
            <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Back to Home
            </Link>
        </div>
    );
}