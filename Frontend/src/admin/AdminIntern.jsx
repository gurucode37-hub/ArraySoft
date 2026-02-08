import React, { useEffect, useState } from "react";
import internships from "../../data/internships.js";

const AdminIntern = () => {
  // ADD FORM STATES
  const [email, setEmail] = useState("");
  const [internship, setInternship] = useState("");
  const [duration, setDuration] = useState("");

  // LIST
  const [list, setList] = useState([]);

  // EDIT STATES
  const [editId, setEditId] = useState(null);
  const [editInternship, setEditInternship] = useState("");
  const [editDuration, setEditDuration] = useState("");

  const token = localStorage.getItem("token");
  const backendUrl = import.meta.env.VITE_Backend_url;

  /* ================= ADD ================= */
  const selectedIntern = internships.find(
    (item) => item.title === internship
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${backendUrl}/my/intern`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email,
        internshipName: internship,
        duration: Number(duration),
      }),
    });

    setEmail("");
    setInternship("");
    setDuration("");
    fetchData();
  };

  /* ================= GET ================= */
  const fetchData = async () => {
    const res = await fetch(`${backendUrl}/my/getAllIntern`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ================= UPDATE ================= */
  const handleUpdate = async (id) => {
    await fetch(`${backendUrl}/my/intern/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        internshipName: editInternship,
        duration: Number(editDuration),
      }),
    });

    setEditId(null);
    fetchData();
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    await fetch(`${backendUrl}/my/intern/delete/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchData();
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          Internship Management
        </h2>

        {/* ================= ADD FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] border border-orange-500/30 rounded-xl p-6 grid md:grid-cols-4 gap-4"
        >
          <input
            type="email"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black border border-orange-500/40 px-4 py-2 rounded text-white focus:outline-none"
            required
          />

          <select
            value={internship}
            onChange={(e) => {
              setInternship(e.target.value);
              setDuration("");
            }}
            className="bg-black border border-orange-500/40 px-4 py-2 rounded"
            required
          >
            <option value="">Select Internship</option>
            {internships.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            disabled={!internship}
            className="bg-black border border-orange-500/40 px-4 py-2 rounded disabled:opacity-50"
            required
          >
            <option value="">Select Duration</option>
            {selectedIntern?.durations.map((d, i) => (
              <option key={i} value={parseInt(d)}>
                {d}
              </option>
            ))}
          </select>

          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded px-4">
            Add
          </button>
        </form>

        {/* ================= LIST ================= */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-orange-400">
          Internship Records
        </h3>

        <div className="space-y-4">
          {list.map((item) => {
            const isEditing = editId === item.internId;

            const isChanged =
              editInternship !== item.internshipName ||
              Number(editDuration) !== item.duration;

            const editInternData = internships.find(
              (i) => i.title === editInternship
            );

            return (
              <div
                key={item.internId}
                className="bg-[#1a1a1a] border border-orange-500/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center"
              >
                {/* EMAIL (READ ONLY) */}
                <p className="md:w-1/4 text-gray-300">{item.email}</p>

                {/* INTERNSHIP */}
                {isEditing ? (
                  <select
                    value={editInternship}
                    onChange={(e) => {
                      setEditInternship(e.target.value);
                      setEditDuration("");
                    }}
                    className="bg-black border border-orange-500/40 px-3 py-2 rounded md:w-1/4"
                  >
                    {internships.map((i) => (
                      <option key={i.id} value={i.title}>
                        {i.title}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="md:w-1/4">{item.internshipName}</p>
                )}

                {/* DURATION */}
                {isEditing ? (
                  <select
                    value={editDuration}
                    onChange={(e) => setEditDuration(e.target.value)}
                    className="bg-black border border-orange-500/40 px-3 py-2 rounded md:w-1/6"
                  >
                    {editInternData?.durations.map((d, i) => (
                      <option key={i} value={parseInt(d)}>
                        {d}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="md:w-1/6">{item.duration}</p>
                )}

                {/* ACTIONS */}
                <div className="flex gap-2">
                  {!isEditing ? (
                    <>
                      <button
                        onClick={() => {
                          setEditId(item.internId);
                          setEditInternship(item.internshipName);
                          setEditDuration(item.duration);
                        }}
                        className="bg-orange-500 text-black px-4 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.internId)}
                        className="bg-red-600 px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        disabled={!isChanged}
                        onClick={() => handleUpdate(item.internId)}
                        className={`px-4 py-1 rounded ${
                          isChanged
                            ? "bg-green-500 text-black"
                            : "bg-gray-600 cursor-not-allowed"
                        }`}
                      >
                        Update
                      </button>

                      <button
                        onClick={() => setEditId(null)}
                        className="bg-red-600 px-4 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminIntern;
