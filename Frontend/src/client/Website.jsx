import React, { useEffect, useState } from "react";

const Website = () => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  const backendUrl = import.meta.env.VITE_Backend_url;

  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(true);

  // user email
  const email = storedUser ? JSON.parse(storedUser).email : null;

  /* ================= GET USER WEBSITES ================= */
  const fetchWebsites = async () => {
    try {
      const res = await fetch(`${backendUrl}/my/user/web`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setWebsites(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && email) {
      fetchWebsites();
    } else {
      setLoading(false);
    }
  }, []);

  /* ================= UI ================= */
  if (!token || !email) {
    return (
      <div
        className="min-h-screen flex items-center justify-center
        bg-white text-black
        dark:bg-black dark:text-white"
      >
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
        My Websites
      </h1>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-400">
          Loading...
        </p>
      ) : websites.length === 0 ? (
        <div
          className="rounded-xl p-6 border
          bg-gray-100 border-orange-400
          dark:bg-[#111] dark:border-orange-500"
        >
          <p className="text-gray-600 dark:text-gray-400">
            You have not created any website yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {websites.map((item) => (
            <div
              key={item.webId}
              className="rounded-xl p-6 border
              bg-gray-100 border-orange-400
              dark:bg-[#111] dark:border-orange-500"
            >
              <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">
                Website ID: {item.webId}
              </p>

              <h2 className="font-semibold text-orange-500">
                {item.webName}
              </h2>

              <p className="text-sm mt-1 text-gray-700 dark:text-gray-400">
                Status:{" "}
                <span className="text-orange-500">
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

export default Website;
