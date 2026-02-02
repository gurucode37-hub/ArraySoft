import { Link } from "react-router-dom";

const FlutterDev = () => {
  return (
    <section className="bg-black text-white">

      {/* Hero */}
      <div
        className="w-full h-72 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzOTV8MHwxfHNlYXJjaHwxfHxmbHV0dGVyfGVufDB8fHx8MTc2ODg0MTA4Mnww&ixlib=rb-4.1.0&q=80&w=400')",
        }}
      >
        <div className="bg-black/60 p-6 rounded-lg text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
            Flutter <span className="text-white">Development</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose <span className="text-orange-500">Flutter?</span>
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Single Codebase for iOS & Android</li>
            <li>• Fast Development with Hot Reload</li>
            <li>• Beautiful UI Widgets</li>
            <li>• Highly Performant Apps</li>
            <li>• Strong Community Support</li>
          </ul>
        </div>

        <div className="bg-[#151515] p-10 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-6">
            What We <span className="text-orange-500">Deliver</span>
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>✔ Cross-Platform Apps</li>
            <li>✔ Custom UI Screens</li>
            <li>✔ API Integration</li>
            <li>✔ State Management</li>
            <li>✔ Testing & Deployment</li>
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
            {["Plan", "Design", "Develop", "Launch"].map((step, i) => (
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
            Build Beautiful <span className="text-orange-500">Flutter Apps</span>
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

export default FlutterDev;
