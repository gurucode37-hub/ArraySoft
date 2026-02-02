import { Link } from "react-router-dom";

const JavaDev = () => {
  return (
    <section className="bg-black text-white">

      {/* Hero */}
      <div
        className="w-full h-72 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="bg-black/60 p-6 rounded-lg text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
            Java <span className="text-white">Development</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose <span className="text-orange-500">Java?</span>
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Robust & Secure</li>
            <li>• Platform Independent</li>
            <li>• Large Ecosystem</li>
            <li>• OOP Best Practices</li>
            <li>• Scalable for Apps</li>
          </ul>
        </div>

        <div className="bg-[#151515] p-10 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-6">
            What We <span className="text-orange-500">Deliver</span>
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>✔ App Logic & Structure</li>
            <li>✔ UI Integration</li>
            <li>✔ API & Database Support</li>
            <li>✔ Testing & QA</li>
            <li>✔ Deployment Support</li>
          </ul>
        </div>
      </div>

      {/* Process */}
      <div className="bg-[#0f0f0f] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">
            Our <span className="text-orange-500">Development Flow</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {["Concept", "Implement", "Test", "Launch"].map((step, i) => (
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5 hover:border-orange-500/50 hover:-translate-y-2 transition">
                <div className="text-orange-500 text-2xl font-bold mb-4">
                  0{i + 1}
                </div>
                <p className="text-sm text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#111] p-14 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl font-bold">
            Boost Your App with <span className="text-orange-500">Java</span>
          </h2>
          <Link
            to="/contact"
            className="bg-orange-500 text-black px-10 py-4 rounded text-lg font-semibold hover:bg-orange-600 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

    </section>
  );
};

export default JavaDev;
