import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_Backend_url}/admin/req`,
        formData
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setFormData({
          username: "",
          email: "",
          number: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <section className="bg-black text-white">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* MAP */}
      <div className="px-6 pt-28 pb-20">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-xl border border-white/10">
          <iframe
            title="ArraySoft Location"
            src="https://www.google.com/maps?q=ArraySoft%20Technology%20Pvt%20Ltd%20Gandhinagar&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-[#0f0f0f] rounded-xl p-12
          grid md:grid-cols-3 gap-10 text-center border border-white/10">

          <div>
            <FaPhoneAlt className="text-orange-500 text-3xl mx-auto mb-4" />
            <p className="font-semibold mb-1">Phone</p>
            <p className="text-gray-400">+91 7383669390</p>
          </div>

          <div>
            <FaMapMarkerAlt className="text-orange-500 text-3xl mx-auto mb-4" />
            <p className="font-semibold mb-1">Address</p>
            <p className="text-gray-400 text-sm">
              407–408, Megh Malhar Complex, <br />
              Sector-11, Gandhinagar, Gujarat
            </p>
          </div>

          <div>
            <FaEnvelope className="text-orange-500 text-3xl mx-auto mb-4" />
            <p className="font-semibold mb-1">Email</p>
            <p className="text-gray-400">
              info@arraysofttechnology.com
            </p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="px-6 pb-28">
        <div className="max-w-4xl mx-auto bg-[#0f0f0f] rounded-xl p-12
          border border-white/10">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Get In <span className="text-orange-500">Touch</span>
          </h2>

          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="bg-[#1a1a1a] p-4 rounded border border-white/10 outline-none focus:border-orange-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="bg-[#1a1a1a] p-4 rounded border border-white/10 outline-none focus:border-orange-500"
              />
            </div>

            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="bg-[#1a1a1a] p-4 rounded border border-white/10 outline-none focus:border-orange-500"
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="bg-[#1a1a1a] p-4 rounded border border-white/10 outline-none focus:border-orange-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 text-black py-4 rounded-lg
              font-semibold text-lg hover:bg-orange-600 transition"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
