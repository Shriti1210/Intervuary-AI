// src/pages/About.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-semibold">
            About Intervuary.AI
          </motion.h1>
          <p className="text-gray-500 mt-4">
            Intervuary is built to help candidates practice interviews with realistic prompts and actionable feedback.
            Our mission is to make interview prep efficient and measurable.
          </p>

          <section className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold mb-2">Our Story</h3>
              <p className="text-sm text-gray-600">Small team, big ambition — we care about helping people land roles by practicing better.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-sm text-gray-600">hi@intervuary.ai</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}