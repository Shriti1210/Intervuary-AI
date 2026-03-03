// src/pages/Contact.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-semibold">
            Contact
          </motion.h1>

          <p className="text-gray-500 mt-2">Send us a note — we'll get back within a few business days.</p>

          <form className="mt-6 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <label className="block text-sm text-gray-700">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-2 p-3 rounded-md border border-gray-200" placeholder="you@example.com" />

            <label className="block text-sm text-gray-700 mt-4">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="w-full mt-2 p-3 rounded-md border border-gray-200" placeholder="Hi Intervuary team..." />

            <div className="mt-4 flex justify-end">
              <button type="button" onClick={() => { setMessage(""); setEmail(""); alert("Message sent (mock)."); }} className="px-4 py-2 bg-black text-white rounded-md">Send</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}