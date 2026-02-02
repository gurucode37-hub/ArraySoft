import { Link } from "react-router-dom";

const KotlinDev = () => {
  return (
    <section className="bg-black text-white">

      {/* Hero */}
      <div
        className="w-full h-72 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588690154757-badf4644190f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjEzOTV8MHwxfHNlYXJjaHwxfHxLb3RsaW58ZW58MHx8fHwxNzY4ODQwODI3fDA&ixlib=rb-4.1.0&q=80&w=400')",
        }}
      >
        <div className="bg-black/60 p-6 rounded-lg text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
            Kotlin <span className="text-white">Development</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose <span className="text-orange-500">Kotlin?</span>
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Modern Language</li>
            <li>• Fully Android Native</li>
            <li>• Null Safe & Concise</li>
            <li>• Easy Interop with Java</li>
            <li>• Official Android Support</li>
          </ul>
        </div>

        <div className="bg-[#151515] p-10 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-6">
            What We <span className="text-orange-500">Deliver</span>
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>✔ Kotlin App Logic</li>
            <li>✔ UI Integration</li>
            <li>✔ API & DB Support</li>
            <li>✔ Performance Optimization</li>
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
            {["Plan", "Code", "Test", "Launch"].map((step, i) => (
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
            Scale Your Android App with <span className="text-orange-500">Kotlin</span>
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

export default KotlinDev;
