// app/services/page.tsx
import Navbar from "../components/Navbar";
import Link from "next/link";

type Service = {
  slug: string;
  name: string;
  short: string;
  badge?: string;
};

const services: Service[] = [
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    short: "Recurring weekly, bi-weekly or monthly housekeeping.",
    badge: "Most popular",
  },
  {
    slug: "condo-cleaning",
    name: "Condo & Apartment Cleaning",
    short: "Perfect for downtown condos and small apartments.",
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    short: "Top-to-bottom detailed clean for a fresh reset.",
  },
  {
    slug: "move-in-move-out",
    name: "Move In / Move Out",
    short: "Full clean before move-in or after move-out.",
  },
  {
    slug: "airbnb-cleaning",
    name: "Airbnb & Short-Term Rental",
    short: "Fast, reliable turnovers between guests.",
  },
  {
    slug: "office-cleaning",
    name: "Office & Commercial Cleaning",
    short: "Flexible schedules for offices and small businesses.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50">
        {/* Hero */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">
              Services
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Cleaning services for every home & schedule.
            </h1>
            <p className="text-slate-500 max-w-2xl">
              From quick refreshes to deep move-in cleans, Canada Pro Cleaners
              offers flexible, flat-rate pricing across the GTA. Choose the
              service that fits you best and get an instant quote on the booking page.
            </p>
          </div>
        </section>

        {/* Service cards */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-[2px] transition"
              >
                <div>
                  {service.badge && (
                    <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 mb-3">
                      {service.badge}
                    </span>
                  )}
                  <h2 className="text-lg font-semibold text-slate-900 mb-2">
                    {service.name}
                  </h2>
                  <p className="text-sm text-slate-500 mb-4">{service.short}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <Link
                    href={`/book?service=${service.slug}`}
                    className="text-sm font-semibold text-blue-600 group-hover:text-blue-700"
                  >
                    Get a quote →
                  </Link>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs text-slate-400 hover:text-slate-500"
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-8">
            Need something custom (post-construction, large offices, etc.)?
            <span className="font-medium text-slate-500"> Contact us</span> for a tailored quote.
          </p>
        </section>
      </main>
    </>
  );
}
