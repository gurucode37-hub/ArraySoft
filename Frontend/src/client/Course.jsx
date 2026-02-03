import React, { useEffect, useState } from "react";

const Course = () => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token || !storedUser) {
      setLoading(false);
      return;
    }

    const fetchMyCourses = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_Backend_url}/payment/my-courses`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (data.success) {
          setCourses(data.courses || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyCourses();
  }, [token, storedUser]);

  // 🔄 Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // ❌ Not logged in
  if (!token || !storedUser) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Not logged in
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-2xl text-orange-400 mb-6">
        My Courses
      </h1>

      {/* ❌ No courses */}
      {courses.length === 0 ? (
        <p className="text-gray-400">
          You have no courses
        </p>
      ) : (
        <div className="grid gap-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-[#111] border border-orange-500 rounded-xl p-6"
            >
              <h2 className="text-lg font-semibold">
                {course.courseName}
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Amount Paid: ₹{course.courseAmount}
              </p>

              <p className="text-xs text-green-400 mt-2">
                Status: {course.paymentStatus}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Course;
