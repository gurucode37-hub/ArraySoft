import React from "react";

const AdminProfile = () => {
  const role = localStorage.getItem("role");
  const storedAdmin = localStorage.getItem("user");

  const admin =
    storedAdmin && storedAdmin !== "undefined"
      ? JSON.parse(storedAdmin)
      : null;

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  if (role !== "admin" || !admin) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center text-black dark:text-white">
        <p className="text-gray-600 dark:text-gray-400">Not an admin</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md
                      bg-gray-100 border border-gray-300
                      dark:bg-[#111] dark:border-orange-500
                      rounded-xl p-8 shadow-lg">

        <h1 className="text-2xl font-semibold text-orange-500 mb-6 text-center">
          Admin Profile
        </h1>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Name</p>
            <p className="text-lg font-medium">{admin.username}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
            <p className="text-lg font-medium">{admin.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Role</p>
            <p className="inline-block mt-1 px-3 py-1 text-sm rounded-full bg-orange-500 text-black font-semibold">
              Admin
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-8 bg-orange-500 text-black py-3 rounded-lg font-semibold
                     hover:bg-orange-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
