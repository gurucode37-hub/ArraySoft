import { useEffect, useState } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_Backend_url}/admin/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.success) {
          setUsers(res.data.users);
          setTotalUsers(res.data.totalUsers);
        }
      } catch (err) {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const formatDate = (date) => {
    if (!date) return "—";
    return new Date(date).toLocaleString();
  };

  const formatTime = (seconds) => {
    if (!seconds) return "0 min";
    return `${Math.floor(seconds / 60)} min`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center">
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-red-500 flex items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white p-8">
      <h1 className="text-3xl text-orange-500 dark:text-orange-400 mb-2">
        Admin Panel
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Total Users: {totalUsers}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 dark:border-white/10 text-sm">
          <thead className="bg-gray-100 dark:bg-[#111] text-orange-500 dark:text-orange-400">
            <tr>
              <th className="p-3 border border-gray-300 dark:border-white/10">
                #
              </th>
              <th className="p-3 border border-gray-300 dark:border-white/10">
                Username
              </th>
              <th className="p-3 border border-gray-300 dark:border-white/10">
                Email
              </th>
              <th className="p-3 border border-gray-300 dark:border-white/10">
                Joined
              </th>
              <th className="p-3 border border-gray-300 dark:border-white/10">
                Last Login
              </th>
              <th className="p-3 border border-gray-300 dark:border-white/10">
                Last Logout
              </th>
              <th className="p-3 border border-gray-300 dark:border-white/10">
                Time Spent
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-200 dark:hover:bg-[#111] transition"
              >
                <td className="p-3 border border-gray-300 dark:border-white/10">
                  {index + 1}
                </td>
                <td className="p-3 border border-gray-300 dark:border-white/10">
                  {user.username}
                </td>
                <td className="p-3 border border-gray-300 dark:border-white/10">
                  {user.email}
                </td>
                <td className="p-3 border border-gray-300 dark:border-white/10">
                  {formatDate(user.joinedAt)}
                </td>
                <td className="p-3 border border-gray-300 dark:border-white/10">
                  {formatDate(user.lastLogin)}
                </td>
                <td className="p-3 border border-gray-300 dark:border-white/10">
                  {formatDate(user.lastLogout)}
                </td>
                <td className="p-3 border border-gray-300 dark:border-white/10">
                  {formatTime(user.totalTimeSpent)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
