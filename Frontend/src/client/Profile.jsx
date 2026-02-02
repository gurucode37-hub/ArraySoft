import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Profile = () => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.username || "");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("dark"); // light | dark

  // 🔹 check if anything actually changed
  const isChanged =
    user && (name !== user.username || password.trim().length > 0);

  /* ================= SAVE CHANGES ================= */
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (!isChanged) return;

    try {
      // 🔸 Change name
      if (name !== user.username) {
        const res = await axios.post(
          `${import.meta.env.VITE_Backend_url}/api/changename`,
          {
            email: user.email,
            username: name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.success) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      }

      // 🔸 Change password
      if (password.trim().length > 0) {
        await axios.post(
          `${import.meta.env.VITE_Backend_url}/api/changepassword`,
          {
            email: user.email,
            password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      toast.success("Profile updated successfully!");
      setIsEditing(false);
      setPassword("");

    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

/* ================= LOGOUT ================= */
const handleLogout = async () => {
  try {
     await axios.post(
      `${import.meta.env.VITE_Backend_url}/api/logout`,
      { email: user.email },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully!");

    setTimeout(() => {
     window.location.href = "/";
    }, 800);

  } catch (error) {
    toast.error("Logout failed");
  }
};


  /* ================= THEME TOGGLE ================= */
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("Light");
      toast.info("Light mode coming soon ☀️");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <ToastContainer position="top-right" autoClose={2000} />

      {token && user ? (
        <div className="max-w-xl mx-auto bg-[#111] border border-orange-500 rounded-xl p-8">
          
          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl text-orange-400">
              Profile
            </h1>

            <div className="flex gap-3">
              {/* Theme Button */}
              <button
                onClick={toggleTheme}
                className="border border-orange-500 text-orange-400 px-3 py-1 rounded
                           hover:bg-orange-500 hover:text-black transition text-sm"
              >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded
                           hover:bg-red-600 transition text-sm"
              >
                Logout
              </button>
            </div>
          </div>

          {/* DARK MODE COMING SOON */}
          {theme === "light" && (
            <p className="text-center text-gray-400 mb-6">
              ☀️ Light mode UI is coming soon...
            </p>
          )}

          {/* VIEW MODE */}
          {!isEditing && (
            <>
              <p className="mb-2">
                <span className="text-gray-400">Name:</span>{" "}
                {user.username}
              </p>

              <p className="mb-6">
                <span className="text-gray-400">Email:</span>{" "}
                {user.email}
              </p>

              <button
                onClick={() => setIsEditing(true)}
                className="bg-orange-500 text-black px-6 py-2 rounded
                           font-semibold hover:bg-orange-600 transition"
              >
                Edit Profile
              </button>
            </>
          )}

          {/* EDIT MODE */}
          {isEditing && (
            <form onSubmit={handleSaveChanges} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-white/20 p-3 rounded
                             outline-none focus:border-orange-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full bg-[#1a1a1a] border border-white/10 p-3 rounded
                             cursor-not-allowed text-gray-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Leave empty to keep current password"
                  className="w-full bg-black border border-white/20 p-3 rounded
                             outline-none focus:border-orange-500"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={!isChanged}
                  className={`px-6 py-2 rounded font-semibold transition
                    ${
                      isChanged
                        ? "bg-orange-500 text-black hover:bg-orange-600"
                        : "bg-gray-600 text-gray-300 cursor-not-allowed"
                    }`}
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setName(user.username);
                    setPassword("");
                  }}
                  className="border border-orange-500 text-orange-400 px-6 py-2 rounded
                             hover:bg-orange-500 hover:text-black transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <p className="text-center">Not logged in</p>
      )}
    </div>
  );
};

export default Profile;
