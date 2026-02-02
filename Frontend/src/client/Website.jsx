import React from "react";

const Website = () => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");
  
  return (
    <>
    <div className="min-h-screen bg-black text-white p-10">
    {token && storedUser ? (
      <>
      <h1 className="text-2xl text-orange-400 mb-6">
        My Websites
      </h1>

      <div className="grid gap-4">
        <div className="bg-[#111] border border-orange-500 rounded-xl p-6">
          <h2 className="font-semibold">Portfolio Website</h2>
          <p className="text-gray-400 text-sm">
            HTML • CSS • React
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

export default Website;
