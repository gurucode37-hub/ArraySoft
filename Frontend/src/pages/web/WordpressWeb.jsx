import { wordpressWebData } from "../../../data/web";
import { Link } from "react-router-dom";
import { FaWordpress, FaPlug, FaTools } from "react-icons/fa";

const WordpressWeb = () => {
  const { hero, sections, cta } = wordpressWebData;

  return (
    <section className="bg-white text-black dark:bg-black dark:text-white overflow-hidden">

      {/* HERO */}
      <div
        className="py-28 px-6 bg-gradient-to-br
        from-sky-500/20 via-white to-indigo-300/20
        dark:from-sky-500/20 dark:via-black dark:to-indigo-500/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <FaWordpress className="text-sky-500 text-5xl" />
            <h1 className="text-5xl font-bold">{hero.title}</h1>
          </div>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
            {hero.desc}
          </p>
        </div>
      </div>

      {/* WHY */}
      <div className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold mb-14 text-center">
          {sections.why.title.split(" ")[0]}{" "}
          <span className="text-sky-500">
            {sections.why.title.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {sections.why.cards.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border transition
              bg-gray-100 border-black/10
              dark:bg-[#151515] dark:border-white/10
              hover:border-sky-500 hover:-translate-y-2"
            >
              <FaPlug className="text-sky-500 text-3xl mb-5" />
              <p className="text-gray-700 dark:text-gray-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DELIVER */}
      <div className="py-24 px-6 bg-gray-100 dark:bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-10">
              {sections.deliver.title.split(" ")[0]}{" "}
              <span className="text-sky-500">
                {sections.deliver.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <ul className="space-y-5 text-gray-700 dark:text-gray-300">
              {sections.deliver.list.map((item, i) => (
                <li
                  key={i}
                  className="hover:translate-x-2 transition"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-12 rounded-xl border
            bg-gradient-to-br from-sky-500/20 to-indigo-500/20
            border-black/10 dark:border-white/10"
          >
            <FaTools className="text-sky-500 text-4xl mb-6" />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {sections.deliver.sideText}
            </p>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-14 text-center">
            Our <span className="text-sky-500">{sections.process.title}</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {sections.process.steps.map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border transition
                bg-gray-100 border-black/10
                dark:bg-[#1a1a1a] dark:border-white/5
                hover:border-sky-500 hover:-translate-y-2"
              >
                <div className="text-sky-500 text-2xl font-bold mb-4">
                  0{i + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-6">
        <div
          className="max-w-6xl mx-auto bg-gradient-to-r
          from-sky-500 to-indigo-500 p-14 rounded-xl
          flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <h2 className="text-3xl font-bold text-black">
            {cta.text}
          </h2>
          <Link
            to={cta.link}
            className="bg-black text-white px-10 py-4 rounded
            text-lg font-semibold hover:scale-105 transition"
          >
            {cta.button}
          </Link>
        </div>
      </div>

    </section>
  );
};

export default WordpressWeb;
