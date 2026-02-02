import { Link } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../Layout/AuthModal.jsx";
import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const storedUser = localStorage.getItem("user");
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <nav className="bg-black px-12 py-5 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/arraysoft.png"
            alt="ArraySoft Logo"
            className="w-12 h-12"
          />
          <div className="leading-tight">
            <h1 className="text-white text-2xl font-semibold">ArraySoft</h1>
            <p className="text-orange-500 text-xs tracking-widest">
              TECHNOLOGY PVT. LTD.
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-base font-medium">
          {/* Web Development */}
          <div className="relative group">
            <span className="text-white hover:text-orange-500 cursor-pointer">
              Web Development
            </span>

            <div className="absolute top-10 left-0 w-64 bg-[#3b3f46] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="text-white text-xs">
                <Link to="/web/static">
                  <li className="py-3 px-4 border-b border-gray-600 hover:bg-orange-500 transition">
                    Static Website
                  </li>
                </Link>
                <Link to="/web/dynamic">
                  <li className="py-3 px-4 border-b border-gray-600 hover:bg-orange-500 transition">
                    Dynamic Website
                  </li>
                </Link>
                <Link to="/web/responsive">
                  <li className="py-3 px-4 border-b border-gray-600 hover:bg-orange-500 transition">
                    Responsive Website
                  </li>
                </Link>
                <Link to="/web/wordpress">
                  <li className="py-3 px-4 border-b border-gray-600 hover:bg-orange-500 transition">
                    WordPress Development
                  </li>
                </Link>
                <Link to="/web/custom">
                  <li className="py-3 px-4 hover:bg-orange-500 transition">
                    Customized Website
                  </li>
                </Link>
              </ul>
              <div className="h-1 bg-orange-500"></div>
            </div>
          </div>

          {/* Android Development */}
          <div className="relative group">
            <span className="text-white hover:text-orange-500 cursor-pointer">
              Android Development
            </span>

            <div className="absolute top-10 left-0 w-64 bg-[#3b3f46] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="text-white text-xs">
                <Link to="/android/jetpack">
                  <li className="py-3 px-4 border-b border-gray-600 hover:bg-orange-500 transition">
                    Jetpack Compose
                  </li>
                </Link>
                <Link to="/android/kotlin">
                  <li className="py-3 px-4 border-b border-gray-600 hover:bg-orange-500 transition">
                    Kotlin Development
                  </li>
                </Link>
                <Link to="/android/java">
                  <li className="py-3 px-4 border-b border-gray-600 hover:bg-orange-500 transition">
                    Java Development
                  </li>
                </Link>
                <Link to="/android/flutter">
                  <li className="py-3 px-4 hover:bg-orange-500 transition">
                    Flutter Development
                  </li>
                </Link>
              </ul>
              <div className="h-1 bg-orange-500"></div>
            </div>
          </div>

          <Link to="/internship" className="text-white hover:text-orange-500">
            Internship
          </Link>

          <Link to="/courses" className="text-white hover:text-orange-500">
            Courses
          </Link>

          <Link to="/contact" className="text-white hover:text-orange-500">
            Contact
          </Link>

          {localStorage.getItem("token") && storedUser ? (
            <div className="relative group">
            <span className="text-white hover:text-orange-500 cursor-pointer">
              <CgProfile className="text-white text-2xl"/>
            </span>

            <div className="absolute top-10 right-0 w-64 bg-[#3b3f46] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="text-white text-xs">
                <Link to="/client/profile">
                  <li className="py-3 px-4 border-b border-gray-600 hover:bg-orange-500 transition">
                    Profile
                  </li>
                </Link>
                <Link to="/client/website">
                  <li className="py-3 px-4 border-b border-gray-600 hover:bg-orange-500 transition">
                    Your Website
                  </li>
                </Link>
                <Link to="/client/application">
                  <li className="py-3 px-4 border-b border-gray-600 hover:bg-orange-500 transition">
                    Your Applications
                  </li>
                </Link>
                <Link to="/client/internship">
                  <li className="py-3 px-4 hover:bg-orange-500 transition">
                    Your Internship
                  </li>
                </Link>
                <Link to="/client/batch">
                  <li className="py-3 px-4 hover:bg-orange-500 transition">
                    Your Batch
                  </li>
                </Link>
                
              </ul>
              <div className="h-1 bg-orange-500"></div>
            </div>
          </div>
          ) : (
          <button
            onClick={() => setShowAuth(true)}
            className="cursor-pointer bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Login
          </button>
          )}
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full pb-30 w-full bg-black transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 md:hidden z-50 overflow-y-auto`}
      >
        <button
          className="text-white text-2xl absolute top-4 right-4"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="mt-20 text-white text-base">
          <div className="px-6 py-3 text-orange-500 font-semibold">
            Web Development
          </div>
          <Link
            to="/web/static"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Static Website
          </Link>
          <Link
            to="/web/dynamic"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Dynamic Website
          </Link>
          <Link
            to="/web/responsive"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Responsive Website
          </Link>
          <Link
            to="/web/wordpress"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            WordPress Development
          </Link>
          <Link
            to="/web/custom"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Customized Website
          </Link>

          <div className="px-6 py-3 mt-4 text-orange-500 font-semibold">
            Android Development
          </div>
          <Link
            to="/android/jetpack"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Jetpack Compose
          </Link>
          <Link
            to="/android/kotlin"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Kotlin Development
          </Link>
          <Link
            to="/android/java"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Java Development
          </Link>
          <Link
            to="/android/flutter"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Flutter Development
          </Link>

          <Link
            to="/internship"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Internship
          </Link>
          <Link
            to="/courses"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Contact
          </Link>
          {localStorage.getItem("token") ? (
            <>
            <div className="px-6 py-3 mt-4 text-orange-500 font-semibold">
            Profile
          </div>
            <Link
            to="/client/profile"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Your Profile
          </Link>
            <Link
            to="/client/website"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Your Website
          </Link>
            <Link
            to="/client/application"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Your Apllication
          </Link>
          <Link
            to="/client/internship"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Your Internship
          </Link>
          <Link
            to="/client/course"
            onClick={() => setOpen(false)}
            className="block px-6 py-3 hover:bg-orange-500"
          >
            Your Batch
          </Link>
            </>
          ) : ( 
          <button
            onClick={() => {
              setShowAuth(true);
              setOpen(false);
            }}
            className="cursor-pointer bg-orange-500 text-white px-5 py-2 mx-5 rounded-md hover:bg-orange-600 transition"
          >
            Login
          </button>
          )}
        </div>
      </div>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Nav;
