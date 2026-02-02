import { Link } from "react-router-dom";

const CustomWeb = () => {
  return (
    <section className="bg-black text-white">

      <div className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Customized <span className="text-orange-500">Website Designing</span>
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            We craft custom websites tailored to your business needs with modern design techniques and scalable functionality.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose <span className="text-orange-500">Customized Websites?</span>
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li>• Unique Branding</li>
            <li>• Tailored User Experience</li>
            <li>• Flexible Features</li>
            <li>• SEO & Performance Focused</li>
            <li>• Scalable Architecture</li>
          </ul>
        </div>

        <div className="bg-[#151515] p-10 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-6">
            What We <span className="text-orange-500">Deliver</span>
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li>✔ Custom UI/UX</li>
            <li>✔ Responsive Design</li>
            <li>✔ CMS Integration</li>
            <li>✔ SEO Optimization</li>
            <li>✔ Deployment Support</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-14">
            Our <span className="text-orange-500">Design Workflow</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Discovery",
              "Design Concept",
              "Development",
              "QA & Launch",
            ].map((step, i) => (
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5 hover:border-orange-500/50 hover:-translate-y-2 transition">
                <div className="text-orange-500 text-2xl font-bold mb-4">0{i + 1}</div>
                <p className="text-sm text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#111] p-14 rounded-xl flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl font-bold">
            Want a <span className="text-orange-500">Custom Website?</span>
          </h2>
          <Link to="/contact" className="bg-orange-500 text-black px-10 py-4 rounded text-lg font-semibold hover:bg-orange-600 transition">
            Get Quote
          </Link>
        </div>
      </div>

    </section>
  );
};

export default CustomWeb;
