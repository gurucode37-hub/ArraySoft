import { toast } from "react-toastify";
import courses from "../../data/Course.js";

const Courses = () => {
  const token = localStorage.getItem("token");

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
        }
      );

      const order = await res.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_API_KEY,
        amount: order.amount,
        currency: "INR",
        name: "ArraySoft",
        description: course.title,
        order_id: order.id,

        handler: async function (response) {
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
                courseName: course.title,
                courseAmount: course.amount,
              }),
            }
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
    } catch {
      toast.error("Payment Failed ❌");
    }
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white">
      {/* HERO */}
      <div className="py-28 text-center bg-gradient-to-br 
        from-gray-100 to-white 
        dark:from-zinc-900 dark:to-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Professional <span className="text-orange-500">Courses</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Learn industry-ready skills with real-world projects and certification.
        </p>
      </div>

      {/* COURSES */}
      <div className="max-w-7xl mx-auto py-24 px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group 
            bg-gray-100 dark:bg-zinc-900/60 
            backdrop-blur rounded-2xl p-10
            border border-black/10 dark:border-white/10
            hover:border-orange-500/50
            transition-all duration-500
            hover:-translate-y-2
            hover:shadow-2xl hover:shadow-orange-500/10"
          >
            <h2 className="text-2xl font-semibold mb-5">
              {course.title}
            </h2>

            <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-8">
              {course.syllabus.slice(0, 5).map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-bold text-orange-500">
                ₹{course.amount}
              </span>

              <button
                onClick={() => {
                  if (!token) {
                    toast.error("Please login first 🔐");
                    return;
                  }
                  handlePayment(course.amount, course);
                }}
                className="bg-orange-500 text-black px-6 py-3 rounded-lg font-semibold
                transition hover:bg-orange-600 hover:scale-105 active:scale-95"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="py-20 text-center bg-gradient-to-r 
        from-gray-100 to-white 
        dark:from-zinc-900 dark:to-black">
        <h2 className="text-3xl font-bold mb-3">
          Start Your <span className="text-orange-500">IT Career</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Learn. Build. Get Certified. Get Hired.
        </p>
      </div>
    </section>
  );
};

export default Courses;
