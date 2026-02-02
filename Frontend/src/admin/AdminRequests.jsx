import { useEffect, useState } from "react";
import axios from "axios";

const AdminRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_Backend_url}/admin/show-req`
        );

        if (res.data.success) {
          setRequests(res.data.requests);
        }
      } catch (error) {
        console.error("Failed to fetch requests");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">
        Contact Requests
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : requests.length === 0 ? (
        <p className="text-gray-400">No requests found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-white/10 rounded-lg">
            <thead className="bg-[#111]">
              <tr className="text-orange-400 text-left">
                <th className="p-3 border-b border-white/10">#</th>
                <th className="p-3 border-b border-white/10">Name</th>
                <th className="p-3 border-b border-white/10">Email</th>
                <th className="p-3 border-b border-white/10">Phone</th>
                <th className="p-3 border-b border-white/10">Message</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req, index) => (
                <tr
                  key={req._id}
                  className="hover:bg-[#111] transition"
                >
                  <td className="p-3 border-b border-white/10">
                    {index + 1}
                  </td>
                  <td className="p-3 border-b border-white/10">
                    {req.username}
                  </td>
                  <td className="p-3 border-b border-white/10">
                    {req.email}
                  </td>
                  <td className="p-3 border-b border-white/10">
                    {req.number}
                  </td>
                  <td className="p-3 border-b border-white/10 max-w-md">
                    {req.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminRequests;
