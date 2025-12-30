import { useEffect, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import API_BASE_URL from "./services/api";
import HomePage from "./components/HomePage";
import logoImg from "./assets/images/logo.jpeg";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "contact", label: "Contact" },
];

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);
  return active;
}

export default function App() {
  const [sent, setSent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const active = useActiveSection(navItems.map((n) => n.id));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const payload = Object.fromEntries(formData.entries());
    try {
      setLoading(true);
      setSent(null);
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      const result = await res.json();
      setSent(
        "✅ Message sent successfully! Please check your email for confirmation."
      );
      formRef.current.reset();
    } catch (err) {
      setSent("❌ Sorry, something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-poppins text-gray-900">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-gradient-to-b from-black/20 to-transparent py-4"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 group"
          >
            <img
              src={logoImg}
              alt="ICFN Logo"
              className={`rounded-full object-cover border-2 transition-all duration-300 ${
                scrolled
                  ? "w-10 h-10 border-green-700"
                  : "w-12 h-12 border-white shadow-lg"
              }`}
            />
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-tight transition-colors ${
                  scrolled ? "text-green-800" : "text-white drop-shadow-md"
                }`}
              >
                ICFN
              </span>
              <span
                className={`text-xs font-medium transition-colors ${
                  scrolled ? "text-gray-600" : "text-white/90 drop-shadow"
                }`}
              >
                Canada Branch
              </span>
            </div>
          </button>
          <ul className="flex gap-1 md:gap-2">
            {navItems.map((n) => (
              <li key={n.id}>
                <button
                  className={`px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === n.id
                      ? scrolled
                        ? "bg-green-800 text-white shadow-md"
                        : "bg-white text-green-800 shadow-md"
                      : scrolled
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white hover:bg-white/20"
                  }`}
                  onClick={() => scrollTo(n.id)}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main className="pt-20">
        {/* Home */}
        <HeroSection onLearnMore={() => scrollTo("about")} />
        <HomePage />

        {/* About */}
        <section id="about" className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              About ICFN
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border bg-white shadow-sm">
                <h3 className="font-semibold text-primary">Our Identity</h3>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  Ideato Nation is a geo-political entity located around the
                  Northeast of Orlu Senatorial Zone in Imo State, Nigeria. The
                  area is culturally occupied by three prominent Igbo ethnic
                  groups: Mbanaasa (Nkalu), Nwabosi (Isu), and Arodiuzougu
                  (Aros). United by heritage and tradition, Ideato people are
                  known for their commitment to community, agriculture, and
                  progress.
                </p>
              </div>
              <div className="p-6 rounded-xl border bg-white shadow-sm">
                <h3 className="font-semibold text-primary">Vision Statement</h3>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  Only a small group of committed people can change the society.
                  We are committed to that change.
                </p>
              </div>
              <div className="p-6 rounded-xl border bg-white shadow-sm">
                <h3 className="font-semibold text-primary">
                  Mission Statement
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  To propagate at all times and places an indivisible Ideato;
                  one Voice, one Destiny, one Nation, through a resourceful and
                  committed membership for the transparent development of Ideato
                  Nation and the optimal satisfaction of socio-political needs.
                </p>
              </div>
              <div className="p-6 rounded-xl border bg-white shadow-sm">
                <h3 className="font-semibold text-primary">Core Values</h3>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm md:text-base">
                  {["Patriotism", "Unity", "Friendship", "Progress"].map(
                    (v) => (
                      <li key={v} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        {v}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl border bg-white shadow-sm">
              <h3 className="font-semibold text-primary">Aims & Objectives</h3>
              <ol className="mt-3 list-[lower-alpha] pl-6 space-y-2 text-sm md:text-base text-gray-700">
                <li>
                  Promote unity and friendship among Ideato sons and daughters
                  in Canada.
                </li>
                <li>
                  Advance cultural heritage and mutual assistance within the
                  community.
                </li>
                <li>Encourage education, youth empowerment, and leadership.</li>
                <li>
                  Support community development projects in Ideato Nation.
                </li>
                <li>
                  Uphold transparent, accountable organizational practices.
                </li>
                <li>
                  Collaborate with allied organizations for social impact.
                </li>
                <li>
                  Provide a platform for dialogue on socio-political needs.
                </li>
                <li>Foster charitable outreach and welfare support.</li>
                <li>Represent Ideato interests responsibly within Canada.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="py-20 bg-primary/5">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Programs
            </h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white shadow-sm border">
                <h3 className="font-semibold text-primary">Monthly Meetings</h3>
                <p className="mt-3 text-sm md:text-base text-gray-700">
                  Every last Sunday of the month. Membership open only to Ideato
                  sons resident in Canada and its environs.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white shadow-sm border">
                <h3 className="font-semibold text-canada">Upcoming Event</h3>
                <p className="mt-3 text-sm md:text-base text-gray-700">
                  Inauguration of Members (First Ever in Canada)
                </p>
                <p className="mt-2 text-sm">📅 Saturday, August 1st, 2026</p>
                <p className="text-sm">
                  📍 Dreams Convention Center, #75 Hedgedale Rd, Brampton
                  Ontario.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white shadow-sm border">
                <h3 className="font-semibold text-primary">Community Goals</h3>
                <p className="mt-3 text-sm md:text-base text-gray-700">
                  Supporting youth empowerment, cultural preservation, and
                  charitable outreach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Contact Us
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="p-6 rounded-xl border bg-white shadow-sm space-y-4"
              >
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button
                  disabled={loading}
                  className="rounded-full bg-canada text-white px-6 py-3 shadow hover:bg-red-700 transition disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
                {sent && <p className="text-sm text-green-700">{sent}</p>}
              </form>
              <div className="p-6 rounded-xl border bg-white shadow-sm">
                <h3 className="font-semibold text-primary">Official Contact</h3>
                <p className="mt-3 text-sm md:text-base text-gray-700">
                  147 Kingswood Drive, L6V2X5, Brampton, Ontario, Canada.
                </p>
                <p className="mt-2 text-sm md:text-base text-gray-700">
                  Phone: 647-787-7599
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  Email: icfncanada@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm">
          © 2025 Ideato Committee of Friends of Nigeria (ICFN) – Canada Branch |
          Friendship and Progress
        </div>
      </footer>
    </div>
  );
}
