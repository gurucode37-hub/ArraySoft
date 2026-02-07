import { toast } from "react-toastify";
import internships from "../../data/internships.js";

const Internship = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleApply = (internship, selectedMode, selectedDuration) => {
    if (!token || !user) {
      toast.error("Please login to apply for internship 🔐");
      return;
    }

    if (!selectedMode || !selectedDuration) {
      toast.error("Please select mode and duration first ⚠️");
      return;
    }

    const subject = `Internship Application - ${internship.title}`;

    const body = `
Hello ArraySoft Technology Team,

I would like to apply for the following internship:

Internship: ${internship.title}
Mode: ${selectedMode}
Duration: ${selectedDuration}

Applicant Details:
Name: ${user.username}
Email: ${user.email}

Please guide me with the next steps.

Thank you,
${user.username}
    `;

    window.location.href = `mailto:info@arraysofttechnology.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="bg-black text-white">
      {/* HERO */}
      <div className="py-28 px-6 bg-gradient-to-br from-zinc-900 to-black text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Internship at{" "}
          <span className="text-orange-500">ArraySoft Technology</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Apply for industry-focused internships with real exposure and
          professional mentorship.
        </p>
      </div>

      {/* INTERNSHIP CARDS */}
      <div className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {internships.map((item) => {
          let selectedMode = "";
          let selectedDuration = "";

          return (
            <div
              key={item.id}
              className="bg-zinc-900/70 backdrop-blur rounded-2xl p-8
              border border-white/10 transition-all duration-500
              hover:-translate-y-2 hover:border-orange-500/50
              hover:shadow-xl hover:shadow-orange-500/10"
            >
              <h2 className="text-2xl font-semibold mb-4 text-orange-500">
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* MODE DROPDOWN */}
              <div className="mb-3">
                <label className=" block text-xs text-gray-400 mb-1">Mode</label>
                <select
                  onChange={(e) => (selectedMode = e.target.value)}
                  className=" bg-zinc-800 border border-white/10
    rounded-md px-3 py-2 text-xs
    focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select</option>
                  {item.modes.map((mode, i) => (
                    <option key={i} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
              </div>

              {/* DURATION DROPDOWN */}
              <div className="mb-5">
                <label className="block text-xs text-gray-400 mb-1">
                  Duration
                </label>
                <select
                  onChange={(e) => (selectedDuration = e.target.value)}
                  className=" bg-zinc-800 border border-white/10
    rounded-md px-3 py-2 text-xs
    focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select</option>
                  {item.durations.map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* BENEFITS */}
              <ul className="text-sm text-gray-300 space-y-2 mb-8">
                {item.benefits.slice(0, 3).map((b, i) => (
                  <li key={i}>✔ {b}</li>
                ))}
              </ul>

              {/* APPLY BUTTON */}
              <button
                onClick={() =>
                  handleApply(item, selectedMode, selectedDuration)
                }
                className="w-full bg-orange-500 text-black
  py-2 cursor-pointer text-sm rounded-md font-medium
  transition hover:bg-orange-600 active:scale-95"
              >
                Apply
              </button>
            </div>
          );
        })}
      </div>

      {/* FOOTER CTA */}
      <div className="py-20 bg-gradient-to-r from-zinc-900 to-black text-center">
        <h2 className="text-3xl font-bold mb-4">
          Take the First Step Towards Your{" "}
          <span className="text-orange-500">Career</span>
        </h2>
        <p className="text-gray-400">
          Choose your internship, apply easily, and get started.
        </p>
      </div>
    </section>
  );
};

export default Internship;
