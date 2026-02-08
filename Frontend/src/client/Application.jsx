import React, { useEffect, useState } from "react";

const Application = () => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const backendUrl = import.meta.env.VITE_Backend_url;

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // user email
  const email = storedUser ? JSON.parse(storedUser).email : null;

  /* ================= GET USER APPLICATIONS ================= */
  const fetchApplications = async () => {
    try {
      const res = await fetch(`${backendUrl}/my/user/app`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setApplications(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && email) {
      fetchApplications();
    } else {
      setLoading(false);
    }
  }, []);

  /* ================= UI ================= */
  if (!token || !email) {
    return (
      <div className="min-h-screen flex items-center justify-center
        bg-white text-black
        dark:bg-black dark:text-white">
        <p>Not logged in</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-10
      bg-white text-black
      dark:bg-black dark:text-white"
    >
      <h1 className="text-2xl text-orange-500 mb-6">
        My Applications
      </h1>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-400">
          Loading...
        </p>
      ) : applications.length === 0 ? (
        <div
          className="rounded-xl p-6 border
          bg-gray-100 border-orange-400
          dark:bg-[#111] dark:border-orange-500"
        >
          <p className="text-gray-600 dark:text-gray-400">
            You have not applied to any course or application yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((item) => (
            <div
              key={item.appId}
              className="rounded-xl p-6 border
              bg-gray-100 border-orange-400
              dark:bg-[#111] dark:border-orange-500"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Application ID: {item.appId}
              </p>

              <h2 className="text-xl font-semibold text-orange-500">
                {item.appName}
              </h2>

              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Status:{" "}
                <span className="text-orange-500 font-medium">
                  {item.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Application;
