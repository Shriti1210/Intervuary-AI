import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ServerUrl } from "../App";
import { setUserData } from "../redux/userSlice";
import AuthModel from "./AuthModel";

function useOnClickOutside(refs = [], handler) {
  useEffect(() => {
    const listener = (e) => {
      // if any ref contains target -> ignore
      for (const r of refs) {
        if (!r || !r.current) continue;
        if (r.current.contains(e.target)) return;
      }
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}

export default function Navbar() {
  const { userData } = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [showCreditPopup, setShowCreditPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const creditRef = useRef(null);
  const userRef = useRef(null);
  const wrapperRef = useRef(null);

  // close dropdowns on outside click
  useOnClickOutside([creditRef, userRef, wrapperRef], () => {
    setShowCreditPopup(false);
    setShowUserPopup(false);
  });

  // close on route change (clean UX)
  useEffect(() => {
    setShowCreditPopup(false);
    setShowUserPopup(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await axios.get(ServerUrl + "/api/auth/logout", { withCredentials: true });
      dispatch(setUserData(null));
      setShowCreditPopup(false);
      setShowUserPopup(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  // small number format helper
  const shortNumber = (n) => (typeof n === "number" && n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n);

  return (
    <>
      <div className="bg-[#f3f3f3] flex justify-center px-4 py-6">
        <motion.header
          ref={wrapperRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-6xl bg-white rounded-[20px] shadow-md border border-gray-200 px-6 md:px-8 py-4 md:py-5 flex items-center justify-between"
          role="banner"
        >
          {/* left: logo */}
          <button
            onClick={() => navigate("/")}
            aria-label="Intervuary home"
            className="flex items-center gap-3 focus:outline-none"
          >
            <div className="bg-black text-white p-2 rounded-lg flex items-center justify-center transform-gpu transition-transform hover:scale-105">
              <BsRobot size={18} />
            </div>
            <div className="hidden md:flex flex-col leading-none">
              <span className="font-semibold text-lg">Intervuary.AI</span>
              <span className="text-xs text-gray-400 -mt-0.5">AI Interview Prep</span>
            </div>
          </button>

         

          {/* right: credits + avatar */}
          <div className="flex items-center gap-4">
            {/* Credits */}
            <div className="relative" ref={creditRef}>
              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  setShowCreditPopup((v) => !v);
                  setShowUserPopup(false);
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-sm shadow-sm hover:shadow-md transition"
                aria-haspopup="menu"
                aria-expanded={showCreditPopup}
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-md bg-white border border-gray-200">
                  <BsCoin size={16} className="text-yellow-500" />
                </div>

                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xs text-gray-500">Credits</span>
                  <div className="flex items-center gap-2">
                    <strong className="text-sm">{shortNumber(userData?.credits || 0)}</strong>
                    <span className={`w-2 h-2 rounded-full ${userData?.credits > 0 ? "bg-green-400" : "bg-gray-300"}`} />
                  </div>
                </div>

                <span className="ml-1 text-gray-400">
                  {showCreditPopup ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </motion.button>

              <AnimatePresence>
                {showCreditPopup && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 6, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-3 w-72 bg-white shadow-xl border border-gray-200 rounded-xl p-4 z-50"
                    role="dialog"
                    aria-label="Credit actions"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-green-50">
                        <BsCoin size={20} className="text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Credits</p>
                        <p className="text-xs text-gray-500">Use credits to unlock premium mock interviews and detailed reports.</p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => navigate("/pricing")}
                        className="col-span-1 py-2 rounded-lg bg-black text-white text-sm hover:opacity-95 transition"
                      >
                        Buy Credits
                      </button>
                      <button
                        onClick={() => {
                          setShowCreditPopup(false);
                          navigate("/credits-history");
                        }}
                        className="col-span-1 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50 transition"
                      >
                        Credit History
                      </button>
                    </div>

                    <div className="mt-3">
                      <small className="text-xs text-gray-400">Tip: Try a free sample interview — no credits required.</small>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Avatar / user menu */}
            <div className="relative" ref={userRef}>
              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  setShowUserPopup((v) => !v);
                  setShowCreditPopup(false);
                }}
                whileTap={{ scale: 0.98 }}
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold focus:outline-none ring-0 ring-offset-2 ring-gray-100"
                aria-haspopup="menu"
                aria-expanded={showUserPopup}
                aria-label="User menu"
              >
                {userData ? userData?.name.slice(0, 1).toUpperCase() : <FaUserAstronaut size={16} />}
              </motion.button>

              <AnimatePresence>
                {showUserPopup && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 6, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute right-0 mt-3 w-56 bg-white shadow-xl border border-gray-200 rounded-xl p-3 z-50"
                    role="menu"
                    aria-label="User menu"
                  >
                    <div className="mb-2">
                      <div className="text-sm font-medium text-gray-700">{userData?.name}</div>
                      <div className="text-xs text-gray-400">{userData?.email}</div>
                    </div>
                    <div className="py-1 border-t border-gray-100 -mx-3 px-3">
                      <button
                        onClick={() => navigate("/history")}
                        className="w-full text-left text-sm py-2 hover:bg-gray-50 rounded-md px-1 transition"
                      >
                        Interview History
                      </button>
                      <button
                        onClick={() => navigate("/profile")}
                        className="w-full text-left text-sm py-2 hover:bg-gray-50 rounded-md px-1 transition"
                      >
                        Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left text-sm py-2 text-red-500 flex items-center gap-2 hover:bg-gray-50 rounded-md px-1 transition"
                      >
                        <HiOutlineLogout /> Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.header>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
    </>
  );
}