import React, { useEffect, useState } from "react";

const WEB_STATUSES = [
  "Pending",
  "Requirement Discussion",
  "Approved",
  "Design Phase",
  "Development",
  "Testing",
  "Completed",
  "Live",
  "Rejected",
];

const AdminWeb = () => {
  // ADD FORM
  const [email, setEmail] = useState("");
  const [webName, setWebName] = useState("");
  const [status, setStatus] = useState("Pending");

  // LIST
  const [list, setList] = useState([]);

  // EDIT
  const [editId, setEditId] = useState(null);
  const [editWebName, setEditWebName] = useState("");
  const [editStatus, setEditStatus] = useState("");

  const token = localStorage.getItem("token");
  const backendUrl = import.meta.env.VITE_Backend_url;

  /* ================= ADD WEB ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${backendUrl}/my/web`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email,
        webName,
        status,
      }),
    });

    setEmail("");
    setWebName("");
    setStatus("Pending");
    fetchData();
  };

  /* ================= GET ALL ================= */
  const fetchData = async () => {
    const res = await fetch(`${backendUrl}/my/getAllWeb`, {
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
    await fetch(`${backendUrl}/my/web/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        webName: editWebName,
        status: editStatus,
      }),
    });

    setEditId(null);
    fetchData();
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    await fetch(`${backendUrl}/my/web/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchData();
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0f0f0f] dark:text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          Website Management
        </h2>

        {/* ADD FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 border border-gray-300
                     dark:bg-[#1a1a1a] dark:border-orange-500/30
                     rounded-xl p-6 grid md:grid-cols-4 gap-4"
        >
          <input
            type="email"
            placeholder="User Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border border-gray-300 text-black
                       dark:bg-black dark:border-orange-500/40 dark:text-white
                       px-4 py-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Website Name"
            value={webName}
            onChange={(e) => setWebName(e.target.value)}
            className="bg-white border border-gray-300 text-black
                       dark:bg-black dark:border-orange-500/40 dark:text-white
                       px-4 py-2 rounded"
            required
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-white border border-gray-300 text-black
                       dark:bg-black dark:border-orange-500/40 dark:text-white
                       px-4 py-2 rounded"
          >
            {WEB_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded px-4">
            Add
          </button>
        </form>

        {/* LIST */}
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-orange-400">
          Website Records
        </h3>

        <div className="space-y-4">
          {list.map((item) => {
            const isEditing = editId === item._id;

            const isChanged =
              editWebName !== item.webName ||
              editStatus !== item.status;

            return (
              <div
                key={item._id}
                className="bg-gray-100 border border-gray-300
                           dark:bg-[#1a1a1a] dark:border-orange-500/20
                           rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center"
              >
                {/* EMAIL */}
                <p className="md:w-1/4 text-gray-700 dark:text-gray-300">
                  {item.email}
                </p>

                {/* WEBSITE NAME */}
                {isEditing ? (
                  <input
                    value={editWebName}
                    onChange={(e) => setEditWebName(e.target.value)}
                    className="bg-white border border-gray-300 text-black
                               dark:bg-black dark:border-orange-500/40 dark:text-white
                               px-3 py-2 rounded md:w-1/4"
                  />
                ) : (
                  <p className="md:w-1/4">{item.webName}</p>
                )}

                {/* STATUS */}
                {isEditing ? (
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                    className="bg-white border border-gray-300 text-black
                               dark:bg-black dark:border-orange-500/40 dark:text-white
                               px-3 py-2 rounded md:w-1/6"
                  >
                    {WEB_STATUSES.map((s) => (
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
                          setEditWebName(item.webName);
                          setEditStatus(item.status);
                        }}
                        className="bg-orange-500 text-black px-4 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-600 text-white px-4 py-1 rounded"
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
                            : "bg-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Update
                      </button>

                      <button
                        onClick={() => setEditId(null)}
                        className="bg-red-600 text-white px-4 py-1 rounded"
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

export default AdminWeb;
