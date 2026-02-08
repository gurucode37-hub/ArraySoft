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
      <div
        className="min-h-screen flex items-center justify-center
        bg-white text-black
        dark:bg-black dark:text-white"
      >
        Loading...
      </div>
    );
  }

  // ❌ Not logged in
  if (!token || !storedUser) {
    return (
      <div
        className="min-h-screen flex items-center justify-center
        bg-white text-black
        dark:bg-black dark:text-white"
      >
        Not logged in
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
        My Courses
      </h1>

      {/* ❌ No courses */}
      {courses.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          You have no courses
        </p>
      ) : (
        <div className="grid gap-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="rounded-xl p-6 border
              bg-gray-100 border-orange-400
              dark:bg-[#111] dark:border-orange-500"
            >
              <h2 className="text-lg font-semibold">
                {course.courseName}
              </h2>

              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                Amount Paid: ₹{course.courseAmount}
              </p>

              <p className="text-xs mt-2 text-green-600 dark:text-green-400">
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
