// src/pages/Legal.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function Legal() {
  const effectiveDate = "March 3, 2026";

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <h1 className="text-4xl md:text-5xl font-semibold mb-2">Privacy & Terms</h1>
            <p className="text-gray-500 mb-6">
              Effective date: <strong>{effectiveDate}</strong>. This page combines our Privacy Policy and Terms of Service for
              Intervuary.AI. It explains how we collect and use data, and the rules for using the service.
            </p>
          </motion.div>

          {/* ===== PRIVACY ===== */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-semibold mb-3">Privacy Policy — What we collect & why</h2>

            <p className="text-gray-600 mb-3">
              Intervuary.AI ("we", "us", "the Service") respects your privacy. We collect information to provide, secure and
              improve our services, and to personalize your experience.
            </p>

            <h3 className="font-semibold mt-4">1. Information you provide</h3>
            <p className="text-gray-600 mt-2">
              When you sign up or use our service we may collect:
            </p>
            <ul className="list-disc mt-2 ml-6 text-gray-600 space-y-1">
              <li>Account details (name, email, profile information).</li>
              <li>Uploaded files (resumes in PDF or other supported formats) you provide to generate interview questions.</li>
              <li>Voice or recorded answers when you use mock interview modes (audio files may be temporarily stored to generate analysis).</li>
              <li>Payment information as needed to process purchases — we do not store full card details; payments are processed via third parties (e.g., Razorpay).</li>
            </ul>

            <h3 className="font-semibold mt-4">2. Automatic & usage data</h3>
            <p className="text-gray-600 mt-2">
              We automatically collect usage data such as session timestamps, IP address, device and browser information, and
              analytics events (e.g., which features you use, errors, performance metrics). This helps us improve the product.
            </p>

            <h3 className="font-semibold mt-4">3. How we use data</h3>
            <ul className="list-disc mt-2 ml-6 text-gray-600 space-y-1">
              <li>To generate role-based interview questions and feedback using our AI models.</li>
              <li>To analyze audio responses for confidence, clarity, and content to produce reports.</li>
              <li>To authenticate users, manage accounts, process purchases, and prevent abuse.</li>
              <li>To improve and personalize the service and for research and development.</li>
            </ul>

            <h3 className="font-semibold mt-4">4. Third-party services</h3>
            <p className="text-gray-600 mt-2">
              We rely on third-party providers for hosting, analytics, payments, and other infrastructure. These providers
              may process some of your data under their terms. For payments, we use Razorpay (or other payment processors)
              — payment details are handled by them, not stored on our servers.
            </p>

            <h3 className="font-semibold mt-4">5. Data retention & deletion</h3>
            <p className="text-gray-600 mt-2">
              We retain data as long as necessary to provide the service, comply with legal obligations, or resolve disputes.
              You may request deletion of your account and associated data by contacting <a href="mailto:hi@intervuary.ai" className="text-gray-800 underline">hi@intervuary.ai</a> —
              we will act on valid requests in accordance with applicable law.
            </p>

            <h3 className="font-semibold mt-4">6. Security</h3>
            <p className="text-gray-600 mt-2">
              We take reasonable technical and organizational measures to protect data. However, no internet service is completely secure;
              we cannot guarantee absolute security.
            </p>

            <h3 className="font-semibold mt-4">7. AI-generated content & disclaimers</h3>
            <p className="text-gray-600 mt-2">
              The platform uses AI models to generate interview questions, scoring and feedback. AI outputs are automated suggestions
              and should be treated as guidance — they do not guarantee interview success. You are responsible for how you use the outputs.
            </p>
          </section>

          {/* ===== TERMS ===== */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-semibold mb-3">Terms of Service — Rules for using Intervuary.AI</h2>

            <h3 className="font-semibold mt-3">1. Acceptance</h3>
            <p className="text-gray-600 mt-2">
              By accessing or using Intervuary.AI, you agree to these Terms. If you do not agree, do not use the Service.
            </p>

            <h3 className="font-semibold mt-3">2. Eligibility</h3>
            <p className="text-gray-600 mt-2">
              You must be 13+ to use the Service. Minors may use the Service with parental consent where required.
            </p>

            <h3 className="font-semibold mt-3">3. Accounts</h3>
            <p className="text-gray-600 mt-2">
              You are responsible for maintaining the security of your account & credentials. Notify us immediately of unauthorized access.
            </p>

            <h3 className="font-semibold mt-3">4. Payments & credits</h3>
            <p className="text-gray-600 mt-2">
              Some features require credits or payment. All purchases are processed by our payment providers (e.g., Razorpay).
              Refunds and cancellations are subject to our Refund Policy (contact support for requests). We may provide promotional credits
              that are non-transferable.
            </p>

            <h3 className="font-semibold mt-3">5. User content</h3>
            <p className="text-gray-600 mt-2">
              You retain ownership of content you upload (e.g., resumes, recordings). By uploading, you grant Intervuary.AI a limited license
              to store, process, and use that content to provide the service (including using anonymized data to improve models).
            </p>

            <h3 className="font-semibold mt-3">6. Acceptable use</h3>
            <p className="text-gray-600 mt-2">
              You agree not to use the Service for illegal activities, harassment, or to upload malicious files. We may suspend or terminate
              accounts that violate these Terms.
            </p>

            <h3 className="font-semibold mt-3">7. Intellectual property</h3>
            <p className="text-gray-600 mt-2">
              The Service and its original content (excluding user content) are owned or licensed by Intervuary.AI. You may not reproduce or redistribute
              proprietary content without permission.
            </p>

            <h3 className="font-semibold mt-3">8. Disclaimers</h3>
            <p className="text-gray-600 mt-2">
              The Service is provided "as is" without warranties to the fullest extent permitted by law. We do not guarantee interview outcomes
              or that the Service will be error-free or uninterrupted.
            </p>

            <h3 className="font-semibold mt-3">9. Limitation of liability</h3>
            <p className="text-gray-600 mt-2">
              To the maximum extent permitted by law, Intervuary.AI's liability for any claim arising from use of the Service is limited to
              amounts paid by you in the last 12 months (if any). We are not liable for indirect, incidental or consequential damages.
            </p>

            <h3 className="font-semibold mt-3">10. Indemnity</h3>
            <p className="text-gray-600 mt-2">
              You agree to indemnify Intervuary.AI from claims arising out of your breach of these Terms or your misuse of the Service.
            </p>

            <h3 className="font-semibold mt-3">11. Changes</h3>
            <p className="text-gray-600 mt-2">
              We may modify these Terms & Privacy. We will post updates here and, where appropriate, notify you. Continued use after changes
              means you accept the updated terms.
            </p>

            <h3 className="font-semibold mt-3">12. Governing law</h3>
            <p className="text-gray-600 mt-2">
              These Terms are governed by the laws of the jurisdiction where Intervuary.AI is incorporated (please adapt to your actual jurisdiction).
            </p>

            <h3 className="font-semibold mt-3">13. Contact</h3>
            <p className="text-gray-600 mt-2">
              For questions about privacy or these terms contact: <a href="mailto:hi@intervuary.ai" className="underline text-gray-800">hi@intervuary.ai</a>
            </p>

            <p className="text-xs text-gray-400 mt-6">
              Last updated: {effectiveDate}. This document is a comprehensive template and should be reviewed by legal counsel before use.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}