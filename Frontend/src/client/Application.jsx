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
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Not logged in</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-2xl text-orange-400 mb-6">
        My Applications
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : applications.length === 0 ? (
        <div className="bg-[#111] border border-orange-500 rounded-xl p-6">
          <p className="text-gray-400">
            You have not applied to any course or application yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((item) => (
            <div
              key={item.appId}
              className="bg-[#111] border border-orange-500 rounded-xl p-6"
            >
              <p className="text-sm text-gray-400 mb-1">
                Application ID: {item.appId}
              </p>

              <h2 className="text-xl font-semibold text-orange-300">
                {item.appName}
              </h2>

              <p className="text-gray-300 mt-2">
                Status:{" "}
                <span className="text-orange-400 font-medium">
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
