import React, { useEffect, useState } from "react";

const Internship = () => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  const backendUrl = import.meta.env.VITE_Backend_url;

  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  // user email nikalo
  const email = storedUser ? JSON.parse(storedUser).email : null;

  /* ================= GET USER INTERNSHIPS ================= */
  const fetchInternships = async () => {
    try {
      const res = await fetch(`${backendUrl}/my/user/intern`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setInternships(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && email) {
      fetchInternships();
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
        My Internships
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : internships.length === 0 ? (
        <div className="bg-[#111] border border-orange-500 rounded-xl p-6">
          <p className="text-gray-400">
            No active internships found.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {internships.map((item) => (
            <div
              key={item.internId}
              className="bg-[#111] border border-orange-500 rounded-xl p-6"
            >
              <p className="text-sm text-gray-400 mb-1">
                Internship ID: {item.internId}
              </p>

              <h2 className="text-xl font-semibold text-orange-300">
                {item.internshipName}
              </h2>

              <p className="text-gray-300 mt-2">
                Duration: {item.duration} months
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Internship;
