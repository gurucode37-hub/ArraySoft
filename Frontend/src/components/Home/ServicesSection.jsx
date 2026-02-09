import { Link } from "react-router-dom";

const ServicesSections = () => {
  return (
    <section
      className="
      bg-gradient-to-b from-white via-gray-50 to-white
      dark:from-black dark:via-[#0f0f0f] dark:to-black
      text-black dark:text-white
      py-28 px-6 space-y-36
      "
    >
      {/* ================= WEB DEVELOPMENT ================= */}
      <div className="max-w-7xl mx-auto" id="web-development">
        <h2 className="text-4xl font-bold mb-3">
          Web <span className="text-orange-500">Development</span>
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-16 max-w-xl">
          High-performance, scalable and modern web solutions designed to grow
          your business.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Static Website Development", link: "/web/static" },
            { title: "Dynamic Website Development", link: "/web/dynamic" },
            {
              title: "Responsive Website Development",
              link: "/web/responsive",
            },
            { title: "WordPress Development", link: "/web/wordpress" },
            { title: "Customized Website Development", link: "/web/custom" },
          ].map((item, i) => (
            <div
              key={i}
              className="
              group relative overflow-hidden
              bg-white dark:bg-[#121212]
              p-8 rounded-xl
              border border-black/10 dark:border-white/10
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_-20px_rgba(255,115,0,0.35)]
              transition-all duration-500
              "
            >
              <span className="absolute top-0 left-0 h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-500"></span>

              <h3 className="text-xl font-semibold mb-6 leading-snug">
                {item.title}
              </h3>

              <Link
                to={item.link}
                className="
                inline-flex items-center gap-2
                text-sm font-medium text-orange-500
                group-hover:gap-3
                transition-all duration-300
                "
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ANDROID DEVELOPMENT ================= */}
      <div className="max-w-7xl mx-auto" id="android-development">
        <h2 className="text-4xl font-bold mb-3">
          Android <span className="text-orange-500">Development</span>
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-16 max-w-xl">
          Native and cross-platform Android apps built for speed, stability and
          scale.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "Jetpack Compose Development", link: "/android/jetpack" },
            { title: "Kotlin Development", link: "/android/kotlin" },
            { title: "Java Development", link: "/android/java" },
            { title: "Flutter Development", link: "/android/flutter" },
          ].map((item, i) => (
            <div
              key={i}
              className="
              group relative overflow-hidden
              bg-white dark:bg-[#121212]
              p-8 rounded-xl
              border border-black/10 dark:border-white/10
              hover:-translate-y-2
              hover:shadow-[0_25px_60px_-20px_rgba(255,115,0,0.35)]
              transition-all duration-500
              "
            >
              <span className="absolute top-0 left-0 h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-500"></span>

              <h3 className="text-lg font-semibold mb-6">{item.title}</h3>

              <Link
                to={item.link}
                className="
                inline-flex items-center gap-2
                text-sm font-medium text-orange-500
                group-hover:gap-3
                transition-all duration-300
                "
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ================= COURSES ================= */}
      <div
        className="
  max-w-7xl mx-auto
  bg-white dark:bg-[#121212]
  border border-black/10 dark:border-white/10
  p-12 rounded-2xl
  flex items-center justify-between
  shadow-sm
  "
      >
        <h2 className="text-3xl font-bold">
          Professional <span className="text-orange-500">Courses</span>
        </h2>

        <Link
          to="/courses"
          className="
    border border-orange-500
    text-orange-500
    px-10 py-3 rounded-lg
    font-semibold
    hover:bg-orange-500 hover:text-black
    transition
    "
        >
          View Courses
        </Link>
      </div>

      {/* ================= INTERNSHIP ================= */}
      <div
        className="
  max-w-7xl mx-auto
  bg-white dark:bg-[#121212]
  border border-black/10 dark:border-white/10
  p-12 rounded-2xl
  flex items-center justify-between
  shadow-sm
  "
      >
        <h2 className="text-3xl font-bold">
          Internship <span className="text-orange-500">Program</span>
        </h2>

        <Link
          to="/internship"
          className="
    border border-orange-500
    text-orange-500
    px-10 py-3 rounded-lg
    font-semibold
    hover:bg-orange-500 hover:text-black
    transition
    "
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default ServicesSections;
