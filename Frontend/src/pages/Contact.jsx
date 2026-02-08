import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  contactInfo,
  mapData,
  initialFormData,
} from "../../data/contactData.js";

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_Backend_url}/form/req`,
        formData
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setFormData(initialFormData);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* MAP */}
      <div className="px-6 pt-28 pb-20">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
          <iframe
            title={mapData.title}
            src={mapData.url}
            className="w-full h-[420px]"
            loading="lazy"
          />
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="px-6 pb-24">
        <div
          className="max-w-6xl mx-auto 
          bg-gray-100 dark:bg-[#0f0f0f] 
          rounded-xl p-12
          grid md:grid-cols-3 gap-10 text-center 
          border border-black/10 dark:border-white/10"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id}>
                <Icon className="text-orange-500 text-3xl mx-auto mb-4" />
                <p className="font-semibold mb-1">
                  {item.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* FORM */}
      <div className="px-6 pb-28">
        <div
          className="max-w-4xl mx-auto 
          bg-gray-100 dark:bg-[#0f0f0f] 
          rounded-xl p-12 
          border border-black/10 dark:border-white/10"
        >
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
                className="bg-white dark:bg-[#1a1a1a] 
                p-4 rounded border 
                border-black/10 dark:border-white/10 
                outline-none focus:border-orange-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="bg-white dark:bg-[#1a1a1a] 
                p-4 rounded border 
                border-black/10 dark:border-white/10 
                outline-none focus:border-orange-500"
              />
            </div>

            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="bg-white dark:bg-[#1a1a1a] 
              p-4 rounded border 
              border-black/10 dark:border-white/10 
              outline-none focus:border-orange-500"
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="bg-white dark:bg-[#1a1a1a] 
              p-4 rounded border 
              border-black/10 dark:border-white/10 
              outline-none focus:border-orange-500 resize-none"
            />

            <button
              type="submit"
              className="bg-orange-500 text-black py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
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
