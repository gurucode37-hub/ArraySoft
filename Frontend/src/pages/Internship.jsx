import { Link } from "react-router-dom";

const Internship = () => {
  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Internship at <span className="text-orange-500">ArraySoft Technology</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Gain industry-ready experience, work on real-world projects, and
            grow your technical skills in a professional IT environment.
          </p>
        </div>
      </div>

      {/* WHY INTERN WITH US */}
      <div className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold mb-14">
          Why Choose <span className="text-orange-500">ArraySoft?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300">
          {[
            "Tech-focused real-world environment",
            "Advanced projects in Web, Python & AI",
            "Strong mentor & peer connections",
            "Quick onboarding & smooth workflow",
            "Exposure to multiple tech domains",
            "Career-focused practical learning",
            "Commitment to long-term growth",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#151515] p-6 rounded-lg border border-white/10 
              hover:border-orange-500/50 hover:-translate-y-1 transition"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </div>

      {/* INTERNSHIP TYPES */}
      <div className="bg-[#0f0f0f] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-14">
            Internship <span className="text-orange-500">Programs</span>
          </h2>

          <div className="space-y-16">

            {/* College Internship */}
            <div className="bg-[#151515] p-10 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-2xl font-semibold mb-4">College Internship</h3>
              <p className="text-gray-400 mb-6">
                Duration: <span className="text-white">1–2–3–4–6 Months</span> |
                Mode: <span className="text-white">Online / Offline</span>
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                <li>• Hands-on Learning</li>
                <li>• Skill Development</li>
                <li>• Collaborative Work Culture</li>
                <li>• Diverse Live Projects</li>
              </ul>
            </div>

            {/* Job Oriented Internship */}
            <div className="bg-[#151515] p-10 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-2xl font-semibold mb-4">Job Oriented Internship</h3>
              <p className="text-gray-400 mb-6">
                Designed for students & freshers to bridge the gap between
                academics and industry needs.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                <li>• Targeted Skill Development</li>
                <li>• Professional Mentorship</li>
                <li>• Strong Resume Alignment</li>
                <li>• Higher Employment Chances</li>
              </ul>
            </div>

            {/* Summer Internship */}
            <div className="bg-[#151515] p-10 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-2xl font-semibold mb-4">Summer Internship</h3>
              <p className="text-gray-400 mb-6">
                Duration: <span className="text-white">2–3 Months</span> |
                Ideal for productive & skill-focused summers.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                <li>• Career Clarity</li>
                <li>• Resume & Portfolio Boost</li>
                <li>• Confidence Building</li>
                <li>• Multi-domain Exposure</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold mb-14">
          Technologies <span className="text-orange-500">You Will Work With</span>
        </h2>

        <div className="flex flex-wrap gap-4 text-sm">
          {[
            "Python", "JavaScript", "Java", "C++", "PHP",
            "HTML5", "CSS3", "Go", "Ruby",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full bg-[#151515] border border-white/10
              hover:border-orange-500 hover:text-orange-500 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CONTACT + CTA */}
      <div className="bg-gradient-to-r from-[#1a1a1a] to-[#111] py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Ready to <span className="text-orange-500">Enroll?</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Give your career the right direction with industry-focused
              internships at ArraySoft Technology.
            </p>
            <p className="text-gray-300">
              📞 +91 73831 09386 <br />
              ✉ info@arraysofttechnology.com <br />
              📍 Gandhinagar, Gujarat
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              to="/contact"
              className="bg-orange-500 text-black text-center py-4 rounded-lg
              font-semibold text-lg hover:bg-orange-600 transition"
            >
              Internship Registration – Enroll Now
            </Link>

            <a
              href="mailto:info@arraysofttechnology.com"
              className="border border-orange-500 text-orange-500 text-center py-4
              rounded-lg font-semibold hover:bg-orange-500 hover:text-black transition"
            >
              Apply via Email
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Internship;
