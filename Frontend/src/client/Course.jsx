import React from "react";

const Course = () => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  return (
    <>
    <div className="min-h-screen bg-black text-white p-10">
    {token && storedUser ? (
      <>
      <h1 className="text-2xl text-orange-400 mb-6">
        My Courses
      </h1>

      <div className="grid gap-4">
        <div className="bg-[#111] border border-orange-500 rounded-xl p-6">
          <h2 className="text-lg font-semibold">Frontend Development</h2>
          <p className="text-gray-400 text-sm mt-1">
            HTML, CSS, JavaScript, React
          </p>
        </div>
      </div>
      </>
    ) : (
      <div>
        <p className="text-center">Not logged in</p>
      </div>
    ) }
    </div>
    </>
  );
};

export default Course;
