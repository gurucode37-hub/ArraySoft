import { useEffect, useState } from "react";
import axios from "axios";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `${import.meta.env.VITE_Backend_url}/admin/show-course`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.success) {
          setCourses(res.data.courses);
        }
      } catch (error) {
        console.error("Failed to fetch courses", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6 text-orange-500">
        Courses
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : courses.length === 0 ? (
        <p className="text-gray-400">No courses found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-white/10 rounded-lg">
            <thead className="bg-[#111]">
              <tr className="text-orange-400 text-left">
                <th className="p-3">User Id</th>
                <th className="p-3">Course Name</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Order Id</th>
                <th className="p-3">Time</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr key={course._id} className="hover:bg-[#111]">
                  <td className="p-3">{course.user_id}</td>
                  <td className="p-3">{course.courseName}</td>
                  <td className="p-3">₹{course.courseAmount}</td>
                  <td className="p-3">{course.order_id}</td>
                  <td className="p-3">
                    {new Date(course.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3 text-green-400">
                    {course.paymentStatus}
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

export default AdminCourses;
