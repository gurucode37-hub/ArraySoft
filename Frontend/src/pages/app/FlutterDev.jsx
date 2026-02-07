import { flutterAppData } from "../../../data/app";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaLayerGroup,
  FaTools,
  FaRocket,
} from "react-icons/fa";

const FlutterDev = () => {
  const { hero, sections, cta } = flutterAppData;

  return (
    <section className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <div
        className="relative py-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-6xl mx-auto animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-6 text-orange-500">
            {hero.title}
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg">
            {hero.desc}
          </p>
        </div>
      </div>

      {/* WHY + FEATURES */}
      <div className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16">
        <div className="animate-slideInLeft">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaMobileAlt className="text-orange-500" />
            {sections.why.title}
          </h2>
          <ul className="space-y-4 text-gray-300">
            {sections.why.points.map((item, i) => (
              <li key={i} className="hover:translate-x-2 transition">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#151515] p-10 rounded-xl border border-white/10
        hover:border-orange-500 transition animate-slideInRight">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <FaLayerGroup className="text-orange-500" />
            {sections.features.title}
          </h3>
          <ul className="space-y-3 text-gray-400">
            {sections.features.list.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* DELIVER + TECH STACK */}
      <div className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-8">
              {sections.deliver.title}
            </h2>
            <ul className="space-y-4 text-gray-300 mb-6">
              {sections.deliver.list.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
            <p className="text-gray-400">{sections.deliver.sideText}</p>
          </div>

          <div className="bg-[#151515] p-10 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FaTools className="text-orange-500" />
              {sections.techStack.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {sections.techStack.items.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-black border border-white/10
                  rounded text-sm hover:border-orange-500 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* PROCESS */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-14 flex items-center gap-3">
            <FaRocket className="text-orange-500" />
            {sections.process.title}
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {sections.process.steps.map((step, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5
                hover:border-orange-500 hover:-translate-y-2 transition"
              >
                <div className="text-orange-500 text-2xl font-bold mb-3">
                  0{i + 1}
                </div>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r
        from-orange-500 to-orange-600 p-14 rounded-xl
        flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl font-bold text-black">
            {cta.text}
          </h2>
          <Link
            to={cta.link}
            className="bg-black text-white px-10 py-4 rounded
            font-semibold hover:scale-105 transition"
          >
            {cta.button}
          </Link>
        </div>
      </div>

    </section>
  );
};

export default FlutterDev;
