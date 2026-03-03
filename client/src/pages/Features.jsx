import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function Features() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.header initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Features</h1>
            <p className="text-gray-500 max-w-2xl">
              Everything Intervuary offers: role-specific question generation, live voice mocks, adaptive difficulty,
              downloadable reports, analytics, and more.
            </p>
          </motion.header>

          <section className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: "Resume-Based Questions", desc: "AI reads your resume and generates targeted questions." },
              { title: "Smart Voice Interview", desc: "Recorded voice answers, waveform UI and confidence scoring." },
              { title: "Adaptive Difficulty", desc: "Questions adapt to your level during the session." },
              { title: "Downloadable Reports", desc: "PDF summaries with strengths, weaknesses and suggestions." },
              { title: "History & Analytics", desc: "Track progress across sessions with charts and topics." },
              { title: "Credit System", desc: "Pay-per-session credits with quick Razorpay checkout." }
            ].map((f, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </motion.article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}