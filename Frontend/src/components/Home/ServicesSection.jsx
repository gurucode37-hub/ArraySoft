import { Link } from "react-router-dom";

const ServicesSections = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-28 px-6 space-y-32">

      {/* Web Development */}
      <div className="max-w-7xl mx-auto" id="web-development">
        <h2 className="text-4xl font-bold mb-16">
          Web <span className="text-orange-500">Development</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Static Website Development", link: "/web/static" },
            { title: "Dynamic Website Development", link: "/web/dynamic" },
            { title: "Responsive Website Development", link: "/web/responsive" },
            { title: "WordPress Development", link: "/web/wordpress" },
            { title: "Customized Website Development", link: "/web/custom" },
          ].map((item, i) => (
            <div
              key={i}
              className="group 
              bg-gray-100 dark:bg-gradient-to-b dark:from-[#1c1c1c] dark:to-[#141414]
              p-8 rounded-lg border border-black/10 dark:border-white/5
              hover:-translate-y-2 hover:border-orange-500/60
              hover:shadow-[0_20px_60px_-15px_rgba(255,115,0,0.35)]
              transition-all duration-500"
            >
              <h3 className="text-xl font-semibold mb-8 leading-snug">
                {item.title}
              </h3>

              <Link
                to={item.link}
                className="inline-flex items-center justify-center 
                bg-orange-500 text-black px-6 py-2 rounded
                font-medium tracking-wide
                group-hover:bg-orange-600
                transition-all duration-300"
              >
                View Details →
              </Link>

              <div className="mt-8 h-[3px] w-0 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Android Development */}
      <div className="max-w-7xl mx-auto" id="android-development">
        <h2 className="text-4xl font-bold mb-16">
          Android <span className="text-orange-500">Development</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "Jetpack Compose Development", link: "/android/jetpack" },
            { title: "Kotlin Development", link: "/android/kotlin" },
            { title: "Java Development", link: "/android/java" },
            { title: "Flutter Development", link: "/android/flutter" },
          ].map((item, i) => (
            <div
              key={i}
              className="group 
              bg-gray-100 dark:bg-gradient-to-b dark:from-[#1c1c1c] dark:to-[#141414]
              p-8 rounded-lg border border-black/10 dark:border-white/5
              hover:-translate-y-2 hover:border-orange-500/60
              hover:shadow-[0_20px_60px_-15px_rgba(255,115,0,0.35)]
              transition-all duration-500"
            >
              <h3 className="text-lg font-semibold mb-8">
                {item.title}
              </h3>

              <Link
                to={item.link}
                className="inline-flex items-center justify-center 
                bg-orange-500 text-black px-6 py-2 rounded
                font-medium tracking-wide
                group-hover:bg-orange-600
                transition-all duration-300"
              >
                View Details →
              </Link>

              <div className="mt-8 h-[3px] w-0 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div
        id="courses"
        className="max-w-7xl mx-auto 
        bg-gray-100 dark:bg-gradient-to-r dark:from-[#111] dark:to-[#1a1a1a]
        p-14 rounded-xl border border-orange-500/30
        flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <h2 className="text-4xl font-bold">
          Professional <span className="text-orange-500">Courses</span>
        </h2>
        <Link
          to="/courses"
          className="bg-orange-500 text-black px-12 py-4 rounded
          text-lg font-semibold hover:bg-orange-600
          hover:scale-105 transition-all duration-300"
        >
          View Courses
        </Link>
      </div>

      {/* Internship */}
      <div
        id="internship"
        className="max-w-7xl mx-auto 
        bg-gray-100 dark:bg-gradient-to-r dark:from-[#111] dark:to-[#1a1a1a]
        p-14 rounded-xl border border-orange-500/30
        flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <h2 className="text-4xl font-bold">
          Internship <span className="text-orange-500">Program</span>
        </h2>
        <Link
          to="/internship"
          className="bg-orange-500 text-black px-12 py-4 rounded
          text-lg font-semibold hover:bg-orange-600
          hover:scale-105 transition-all duration-300"
        >
          Apply Now
        </Link>
      </div>

    </section>
  );
};

export default ServicesSections;
