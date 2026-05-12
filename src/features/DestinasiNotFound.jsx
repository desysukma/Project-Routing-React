import React from "react";
import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="max-w-xl mx-auto p-6 text-center mt-20">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page not found.</p>
            <Link
                to="/"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Back to Home
            </Link>
        </div>
    );
}