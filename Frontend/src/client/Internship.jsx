import React from "react";

const Internship = () => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  return (
    <>
      
      <div className="min-h-screen bg-black text-white p-10">
    {token && storedUser ? (
      <>
        <h1 className="text-2xl text-orange-400 mb-6">
          My Internships
        </h1>
  
        <div className="bg-[#111] border border-orange-500 rounded-xl p-6">
          <p className="text-gray-400">
            No active internships found.
          </p>
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

export default Internship;
