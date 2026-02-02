import { Link } from "react-router-dom";

const StaticWeb = () => {
  return (
    <section className="bg-black text-white">

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Static <span className="text-orange-500">Website Development</span>
          </h1>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            We design fast, secure, and cost-effective static websites that
            deliver clear information and strong online presence for businesses,
            startups, and individuals.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose <span className="text-orange-500">Static Websites?</span>
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>• Lightning fast loading speed</li>
            <li>• Highly secure (no database required)</li>
            <li>• SEO-friendly structure</li>
            <li>• Low maintenance cost</li>
            <li>• Perfect for portfolios & business profiles</li>
          </ul>
        </div>

        {/* Right */}
        <div className="bg-[#151515] p-10 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-6">
            What We <span className="text-orange-500">Deliver</span>
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li>✔ Custom UI Design</li>
            <li>✔ Responsive Layout (Mobile-friendly)</li>
            <li>✔ Clean HTML, CSS & JavaScript</li>
            <li>✔ Contact Form Integration</li>
            <li>✔ Deployment & Hosting Support</li>
          </ul>
        </div>
      </div>

      {/* Process */}
      <div className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-14">
            Our <span className="text-orange-500">Development Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Requirement Analysis",
              "Design & Layout",
              "Development",
              "Launch & Support",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] p-6 rounded-lg 
                border border-white/5 hover:border-orange-500/50
                hover:-translate-y-2 transition"
              >
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
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#111] 
        p-14 rounded-xl flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl font-bold">
            Need a <span className="text-orange-500">Static Website?</span>
          </h2>

          <Link
            to="/contact"
            className="bg-orange-500 text-black px-10 py-4 rounded 
            text-lg font-semibold hover:bg-orange-600 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

    </section>
  );
};

export default StaticWeb;
