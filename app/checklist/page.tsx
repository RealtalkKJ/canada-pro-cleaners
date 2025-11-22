// app/checklist/page.tsx
import Navbar from "../components/Navbar";

const checklistSections = [
  {
    title: "Kitchen",
    items: [
      "Wipe and sanitize counters & backsplash",
      "Clean stove top & exterior of appliances",
      "Clean microwave inside & out",
      "Wipe cabinet exteriors & handles",
      "Sweep & mop floors",
      "Empty garbage & replace liner",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Scrub & disinfect toilet, tub & shower",
      "Clean sinks & countertops",
      "Polish mirrors & chrome fixtures",
      "Wipe cabinet exteriors",
      "Empty garbage",
      "Sweep & mop floors",
    ],
  },
  {
    title: "Bedrooms & Living Areas",
    items: [
      "Dust all reachable surfaces",
      "Wipe light switches & door handles",
      "Vacuum carpets & rugs",
      "Sweep & mop hard floors",
      "Make beds / tidy linens (on request)",
    ],
  },
  {
    title: "Extras (On Request)",
    items: [
      "Inside fridge",
      "Inside oven",
      "Inside cabinets",
      "Baseboards & doors",
      "Interior windows",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50">
        <section className="max-w-5xl mx-auto px-4 pt-24 pb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">
            Cleaning Checklist
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            What&apos;s included in your clean
          </h1>
          <p className="text-slate-500 max-w-2xl mb-10">
            Every visit follows a detailed checklist so you know exactly what to expect.
            Deep cleans, move-in / move-out, and extras can be added during booking.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {checklistSections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl bg-white shadow-sm border border-slate-100 p-6"
              >
                <h2 className="text-lg font-semibold text-slate-900 mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2 text-sm text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-4 w-4 rounded-full border border-blue-500 flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-8">
            * Checklists may be adjusted slightly based on your home and the service type
            (standard, deep clean, move in / move out, etc.).
          </p>
        </section>
      </main>
    </>
  );
}
