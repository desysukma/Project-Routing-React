import React from "react";

export default function DestinasiContact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        alert(`Message sent! We'll get back to ${form.get("email")} soon.`);
        e.target.reset();
    };

    return (
        <div className="max-w-xl mx-auto p-6 mt-10">
            <h1 className="text-3xl font-bold mb-2">Contact</h1>
            <p className="text-gray-600 mb-6">Have a question? Send us a message.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Your message..."
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}