import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const coursesData = [
  {
    id: 1,
    name: "Web Development Course",
    title: "Web Development",
    price: 4999,
    points: [
      "HTML, CSS, JavaScript",
      "Responsive & Modern UI",
      "Frontend + Backend Basics",
      "Live Projects",
      "Career Guidance",
    ],
  },
  {
    id: 2,
    name: "App Development Course",
    title: "App Development",
    price: 6999,
    points: [
      "Android App Development",
      "Kotlin / Java / Flutter",
      "UI Design & API Integration",
      "Real-Time Projects",
      "Real-Time Projects",
      "Placement Support",
    ],
  },
];

const Courses = () => {
  const token = localStorage.getItem("token");

  // ✅ Payment logic
  const handlePayment = async (amount, course) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_Backend_url}/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ amount }),
        },
      );

      const order = await res.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_API_KEY,
        amount: order.amount,
        currency: "INR",
        name: "ArraySoft",
        description: course.name,
        order_id: order.id,

        // ✅ Payment success
        handler: async function (response) {
          // after creating Razorpay and in handler:
          const resp = await fetch(
            `${import.meta.env.VITE_Backend_url}/payment/verify`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                courseName: course.name,
                courseAmount: course.price,
              }),
            },
          );
          const result = await resp.json();
          if (!result.success) {
            toast.error(result.message || "Payment verification failed ❌");
            return;
          }
          toast.success("Payment Successful 🎉");
        },

        theme: { color: "#f97316" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      toast.error("Payment Failed ❌");
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
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-[#151515] p-12 rounded-xl border border-white/10 
            hover:border-orange-500/50 hover:-translate-y-1 transition"
          >
            <h2 className="text-3xl font-semibold mb-6">
              {course.title.split(" ")[0]}{" "}
              <span className="text-orange-500">
                {course.title.split(" ")[1]}
              </span>
            </h2>

            <ul className="space-y-3 text-gray-300 mb-10">
              {course.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            {/* 🔥 TOKEN CONDITION HERE */}
            <button
              onClick={() => {
                if (!token) {
                  toast.error("Not logged in, please first log in");
                  return;
                }
                handlePayment(course.price, course);
              }}
              className=" cursor-pointer inline-block bg-orange-500 text-black px-10 py-4 rounded
              font-semibold hover:bg-orange-600 transition"
            >
              Enroll for {course.title}
            </button>
          </div>
        ))}
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
        </div>
      </div>
    </section>
  );
};

export default Courses;
