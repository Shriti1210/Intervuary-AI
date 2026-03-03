// src/pages/Careers.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-semibold">
            Careers
          </motion.h1>

          <p className="text-gray-500 mt-4">We're a small, remote-first team. If you love building products that help people, reach out.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold">Frontend Engineer</h3>
              <p className="text-sm text-gray-600 mt-2">React, Tailwind, experience building production UIs.</p>
              <div className="mt-4"><button className="px-4 py-2 bg-black text-white rounded-lg">Apply</button></div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold">Backend Engineer</h3>
              <p className="text-sm text-gray-600 mt-2">Node, Express, MongoDB, payment integrations.</p>
              <div className="mt-4"><button className="px-4 py-2 bg-black text-white rounded-lg">Apply</button></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}