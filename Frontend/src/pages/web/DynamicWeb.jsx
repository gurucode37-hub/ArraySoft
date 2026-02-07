import { dynamicWebData } from "../../../data/web";
import { Link } from "react-router-dom";
import { FaDatabase, FaCogs } from "react-icons/fa";

const DynamicWeb = () => {
  const { hero, sections, cta } = dynamicWebData;

  return (
    <section className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <div className="py-28 px-6 bg-gradient-to-br from-blue-500/20 via-black to-indigo-600/20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            {hero.title}
          </h1>
          <p className="text-gray-400 max-w-3xl">
            {hero.desc}
          </p>
        </div>
      </div>

      {/* WHY DYNAMIC */}
      <div className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold mb-14 flex items-center gap-3">
          <FaDatabase className="text-blue-500" />
          {sections.why.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {sections.why.cards.map((item, i) => (
            <div
              key={i}
              className="bg-[#151515] p-8 rounded-xl border border-white/10
              hover:border-blue-500 transition"
            >
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHAT WE DELIVER */}
      <div className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-8">
              {sections.deliver.title}
            </h2>

            <ul className="space-y-4 text-gray-300">
              {sections.deliver.list.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#141414] p-10 rounded-xl border border-white/10">
            <p className="text-gray-400 leading-relaxed">
              {sections.deliver.sideText}
            </p>
          </div>

        </div>
      </div>

      {/* PROCESS */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-14 flex items-center gap-3">
            <FaCogs className="text-blue-500" />
            {sections.process.title}
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {sections.process.steps.map((step, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5
                hover:border-blue-500 transition"
              >
                <div className="text-blue-500 text-2xl font-bold mb-3">
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
        <div
          className="max-w-6xl mx-auto bg-gradient-to-r
          from-blue-500 to-indigo-500 p-14 rounded-xl
          flex flex-col md:flex-row items-center justify-between gap-10"
        >
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

export default DynamicWeb;
