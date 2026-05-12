import React from "react";
import { Link, Outlet } from "react-router";

export default function Layout() {
    return (
        <div>
            <nav className="w-full border-b px-6 py-3 flex items-center justify-between mb-8">
                <Link to="/" className="text-lg font-bold text-blue-600">Tuban Wisata</Link>
                <div className="flex gap-4 text-sm">
                    <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                    <Link to="/destinasi/about" className="text-gray-600 hover:text-blue-600">About</Link>
                    <Link to="/destinasi/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}