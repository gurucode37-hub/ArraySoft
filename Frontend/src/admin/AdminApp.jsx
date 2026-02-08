import React, { useEffect, useState } from "react";

const APP_STATUSES = [
  "Pending",
  "In Discussion",
  "Approved",
  "In Development",
  "Testing",
  "Completed",
  "Delivered",
  "Rejected",
];

const AdminApp = () => {
  // ADD FORM STATES
  const [email, setEmail] = useState("");
  const [appName, setAppName] = useState("");
  const [status, setStatus] = useState("Pending");

  // LIST
  const [list, setList] = useState([]);

  // EDIT STATES
  const [editId, setEditId] = useState(null);
  const [editAppName, setEditAppName] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const token = localStorage.getItem("token");
  const backendUrl = import.meta.env.VITE_Backend_url;

  /* ================= ADD APP ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${backendUrl}/my/app`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email,
        appName,
        status,
      }),
    });

    setEmail("");
    setAppName("");
    setStatus("Pending");
    fetchData();
  };

  /* ================= GET ALL ================= */
  const fetchData = async () => {
    const res = await fetch(`${backendUrl}/my/getAllApp`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ================= UPDATE ================= */
  const handleUpdate = async (id) => {
    await fetch(`${backendUrl}/my/app/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        appName: editAppName,
        status: editStatus,
      }),
    });

    setEditId(null);
    fetchData();
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    await fetch(`${backendUrl}/my/app/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchData();
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          Application Management
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
            className="bg-black border border-orange-500/40 px-4 py-2 rounded text-white"
            required
          />

          <input
            type="text"
            placeholder="Application Name"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            className="bg-black border border-orange-500/40 px-4 py-2 rounded"
            required
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-black border border-orange-500/40 px-4 py-2 rounded"
          >
            {APP_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded px-4">
            Add
          </button>
        </form>

        {/* ================= LIST ================= */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-orange-400">
          Application Records
        </h3>

        <div className="space-y-4">
          {list.map((item) => {
            const isEditing = editId === item._id;

            const isChanged =
              editAppName !== item.appName ||
              editStatus !== item.status;

            return (
              <div
                key={item._id}
                className="bg-[#1a1a1a] border border-orange-500/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center"
              >
                {/* EMAIL (READ ONLY) */}
                <p className="md:w-1/4 text-gray-300">{item.email}</p>

                {/* APP NAME */}
                {isEditing ? (
                  <input
                    value={editAppName}
                    onChange={(e) => setEditAppName(e.target.value)}
                    className="bg-black border border-orange-500/40 px-3 py-2 rounded md:w-1/4"
                  />
                ) : (
                  <p className="md:w-1/4">{item.appName}</p>
                )}

                {/* STATUS */}
                {isEditing ? (
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                    className="bg-black border border-orange-500/40 px-3 py-2 rounded md:w-1/6"
                  >
                    {APP_STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="md:w-1/6">{item.status}</p>
                )}

                {/* ACTIONS */}
                <div className="flex gap-2">
                  {!isEditing ? (
                    <>
                      <button
                        onClick={() => {
                          setEditId(item._id);
                          setEditAppName(item.appName);
                          setEditStatus(item.status);
                        }}
                        className="bg-orange-500 text-black px-4 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-600 px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        disabled={!isChanged}
                        onClick={() => handleUpdate(item._id)}
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

export default AdminApp;
