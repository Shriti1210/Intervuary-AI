import React, { useRef, useState, useEffect } from "react";
import { BsRobot } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showTop, setShowTop] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // 🔹 Only ONE scroll function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function handleNewsletter(e) {
    e.preventDefault();
    setEmail("");
    inputRef.current?.blur();
    alert("Thanks — we'll keep you posted!");
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle =
    "text-sm text-gray-500 hover:text-black transition duration-200";

  return (
    <>
      <footer className="bg-[#f3f3f3] pt-12 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-linear-to-r from-transparent via-green-200 to-transparent opacity-40 mb-6" />

          <div className="bg-white rounded-[20px] shadow-sm border border-gray-200 px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* BRAND */}
              <div className="flex flex-col gap-4">
                <div
                  onClick={() => navigate("/")}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="bg-black text-white p-2 rounded-lg">
                    <BsRobot size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Intervuary.AI
                    </h3>
                    <p className="text-xs text-gray-400">
                      AI interview practice that builds confidence.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 max-w-sm">
                  AI-driven mock interviews, role-based questions,
                  real-time feedback and detailed performance reports.
                </p>

                <div className="flex gap-3 mt-2">
                  <a href="https://github.com" target="_blank" rel="noreferrer"
                     className="p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                     className="p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition">
                    <FaLinkedin />
                  </a>
                </div>
              </div>

              {/* LINKS */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Product
                  </h4>
                  <ul className="space-y-2">
                    <li><Link to="/features" className={linkStyle}>Features</Link></li>
                    <li><Link to="/pricing" className={linkStyle}>Pricing</Link></li>
                    <li><Link to="/modes" className={linkStyle}>Interview Modes</Link></li>
                    <li><Link to="/docs" className={linkStyle}>Docs</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Company
                  </h4>
                  <ul className="space-y-2">
                    <li><Link to="/about" className={linkStyle}>About</Link></li>
                    <li><Link to="/careers" className={linkStyle}>Careers</Link></li>
                    <li><Link to="/contact" className={linkStyle}>Contact</Link></li>
                    <li><Link to="/legal" className={linkStyle}>Privacy & Terms</Link></li>
                  </ul>
                </div>
              </div>

              {/* NEWSLETTER */}
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-gray-700">
                  Stay in the loop
                </h4>

                <p className="text-sm text-gray-500">
                  Get interview tips, feature updates and AI insights.
                </p>

                <form onSubmit={handleNewsletter} className="mt-3 flex gap-2">
                  <input
                    ref={inputRef}
                    type="email"
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-black text-white text-sm hover:opacity-95 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} Intervuary.AI
              </div>

              <div className="flex items-center gap-5">
                <Link to="/legal" className="text-sm text-gray-500 hover:text-black transition">
                  Privacy & Terms
                </Link>

                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-black transition"
                >
                  <FiChevronUp /> Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full shadow-xl hover:bg-green-700 transition flex items-center justify-center z-50"
        >
          <FiChevronUp size={22} />
        </button>
      )}
    </>
  );
}