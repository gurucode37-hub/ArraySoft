import { Link } from "react-router-dom";

const Courses = () => {

  const handlePayment = async (amount, courseName) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_Backend_url}/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        }
      );

      const order = await res.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_API_KEY,
        amount: order.amount,
        currency: "INR",
        name: "ArraySoft",
        description: courseName,
        order_id: order.id,
        handler: function (response) {
          alert("Payment Successful 🎉");
          console.log("Payment Response:", response);
        },
        theme: {
          color: "#f97316",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error(error);
      alert("Payment Failed ❌");
    }
  };

  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-orange-500">Courses</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Industry-oriented courses designed to build strong practical skills
            and prepare you for real-world IT careers.
          </p>
        </div>
      </div>

      {/* COURSES */}
      <div className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-14">

        {/* Web Development */}
        <div className="bg-[#151515] p-12 rounded-xl border border-white/10 
        hover:border-orange-500/50 hover:-translate-y-1 transition">
          <h2 className="text-3xl font-semibold mb-6">
            Web <span className="text-orange-500">Development</span>
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Learn to design and develop modern, responsive websites using
            industry-standard tools and frameworks.
          </p>

          <ul className="space-y-3 text-gray-300 mb-10">
            <li>• HTML, CSS, JavaScript</li>
            <li>• Responsive & Modern UI</li>
            <li>• Frontend + Backend Basics</li>
            <li>• Live Projects</li>
            <li>• Career Guidance</li>
          </ul>

          <button
            onClick={() => handlePayment(4999, "Web Development Course")}
            className="inline-block bg-orange-500 text-black px-10 py-4 rounded
            font-semibold hover:bg-orange-600 transition"
          >
            Enroll for Web Development
          </button>
        </div>

        {/* App Development */}
        <div className="bg-[#151515] p-12 rounded-xl border border-white/10 
        hover:border-orange-500/50 hover:-translate-y-1 transition">
          <h2 className="text-3xl font-semibold mb-6">
            App <span className="text-orange-500">Development</span>
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Build powerful mobile applications with modern technologies and
            real-world development practices.
          </p>

          <ul className="space-y-3 text-gray-300 mb-10">
            <li>• Android App Development</li>
            <li>• Kotlin / Java / Flutter</li>
            <li>• UI Design & API Integration</li>
            <li>• Real-Time Projects</li>
            <li>• Placement Support</li>
          </ul>

          <button
            onClick={() => handlePayment(6999, "App Development Course")}
            className="inline-block bg-orange-500 text-black px-10 py-4 rounded
            font-semibold hover:bg-orange-600 transition"
          >
            Enroll for App Development
          </button>
        </div>

      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#1a1a1a] to-[#111] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Your <span className="text-orange-500">IT Career</span> Today
          </h2>
          <p className="text-gray-400 mb-8">
            Learn from industry professionals and work on real projects.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-black px-12 py-4 rounded
            font-semibold text-lg hover:bg-orange-600 transition"
          >
            Enroll Now
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Courses;
