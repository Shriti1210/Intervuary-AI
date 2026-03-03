// src/pages/InterviewModes.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

// import the same assets you're already using on Home.
// Keep these imports — replace images in your assets folder if you want to swap visuals.
import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";

const modes = [
  {
    id: "hr",
    title: "HR Interview Mode",
    subtitle: "Behavioral & communication-focused evaluation",
    desc:
      "HR mode emphasizes behavioral questions, situational responses, cultural-fit, and soft-skill evaluation. The AI prompts follow-ups to dig deeper into past experiences, leadership examples, conflict resolution, and career motivations.",
    img: hrImg,
    points: [
      "Behavioral STAR-question prompts",
      "Follow-up probing for depth",
      "Communication & coherence scoring"
    ]
  },
  {
    id: "technical",
    title: "Technical Mode",
    subtitle: "Role-specific deep technical questioning",
    desc:
      "Technical mode generates role-aligned questions (algorithms, system design, domain-specific problems) derived from resume keywords and selected experience level. The difficulty adapts based on previous answers.",
    img: techImg,
    points: [
      "Role-based question generation",
      "Adaptive difficulty (easy → medium → hard)",
      "Code & system-design style prompts"
    ]
  },
  {
    id: "confidence",
    title: "Confidence Detection",
    subtitle: "Tone, clarity, and presence analysis",
    desc:
      "This mode records your answers and evaluates non-verbal indicators: tone, pace, and clarity. The AI produces a confidence score and targeted tips to improve delivery.",
    img: confidenceImg,
    points: [
      "Tone & pace analysis",
      "Confidence scoring",
      "Micro-tips to improve delivery"
    ]
  },
  {
    id: "credits",
    title: "Credits System",
    subtitle: "Control access & premium sessions",
    desc:
      "A clear credit-based model lets users pay for premium interview sessions. Credits can be purchased in bundles and used to unlock special mock types and detailed reports.",
    img: creditImg,
    points: [
      "Buy credits via Razorpay",
      "Preview cost before spending credits",
      "Bundle discounts for bulk credits"
    ]
  }
];

export default function InterviewModes() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <h1 className="text-4xl md:text-5xl font-semibold mb-3">Multiple Interview Modes</h1>
            <p className="text-gray-500 max-w-2xl mb-8">
              Various interview modes that fit your practice goal. Each mode has tailored prompts, scoring, and follow-ups.
            </p>
          </motion.div>

          <div className="space-y-12">
            {modes.map((m, idx) => (
              <motion.section
                key={m.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
              >
                <div className="md:flex items-center gap-8">
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold">{m.title}</h2>
                    <p className="text-sm text-green-600 font-medium mt-2">{m.subtitle}</p>
                    <p className="text-gray-600 mt-4 leading-relaxed">{m.desc}</p>

                    <ul className="mt-4 text-sm text-gray-600 space-y-2">
                      {m.points.map((pt, i) => (
                        <li key={i}>• {pt}</li>
                      ))}
                    </ul>

                  </div>

                  <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
                    {/* Image placeholder — replace or keep: you said you'll include images; these imports use your assets folder. */}
                    <div className="w-64 h-64 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center">
                      <img src={m.img} alt={m.title} className="w-full h-full object-contain p-6" />
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}