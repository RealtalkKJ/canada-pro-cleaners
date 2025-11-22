"use client";

import { useState } from "react";


type Frequency = "one_time" | "weekly" | "biweekly" | "monthly";

export default function BookPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [postalCode, setPostalCode] = useState("");
  const [serviceType, setServiceType] = useState("standard");
  const [frequency, setFrequency] = useState<Frequency>("one_time");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [extras, setExtras] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleExtra = (extra: string) => {
    setExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const handleNext = () => {
    if (step === 1) {
      if (!postalCode || !serviceType) return;
      setStep(2);
    } else if (step === 2) {
      if (!date || !time) return;
      setStep(3);
    }
  };

  const handleBack = () => {
    setSubmitMessage(null);
    setSubmitError(null);
    setStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      // 👉 In Part B we will replace this with a real Supabase call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitMessage(
        "Thanks! Your request has been received. We’ll confirm by email/SMS shortly."
      );
      // Optional: reset form
      // setStep(1);
      // ...reset states here if you want
    } catch (err) {
      console.error(err);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">
        {/* LEFT CONTENT */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 mb-2">
            Book in under 60 seconds
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Instant house & condo cleaning in the GTA.
          </h1>
          <p className="text-slate-600 mb-6 max-w-xl">
            Tell us about your place, pick a time, and we’ll match you with a
            vetted, insured cleaner. No phone calls, no back-and-forth.
          </p>

          {/* Steps indicator */}
          <div className="flex gap-4 mb-8 text-sm">
            {[
              { id: 1, label: "Home details" },
              { id: 2, label: "Date & time" },
              { id: 3, label: "Contact details" },
            ].map((s) => (
              <div key={s.id} className="flex items-center gap-2">
                <div
                  className={`h-7 w-7 flex items-center justify-center rounded-full text-xs font-semibold ${
                    step === s.id
                      ? "bg-blue-600 text-white"
                      : step > s.id
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {s.id}
                </div>
                <span
                  className={
                    step === s.id
                      ? "text-slate-900 font-medium"
                      : "text-slate-500"
                  }
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Handy-style selling points */}
          <div className="grid gap-4 sm:grid-cols-3 mb-10">
            <div className="rounded-2xl bg-white border border-slate-100 p-4 text-sm">
              <div className="text-lg">⭐ 4.9 / 5</div>
              <p className="text-slate-500 text-xs mt-1">
                Average rating from GTA customers
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 p-4 text-sm">
              <div className="text-lg">2,300+</div>
              <p className="text-slate-500 text-xs mt-1">
                Cleans completed across the GTA
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 p-4 text-sm">
              <div className="text-lg">Vetted</div>
              <p className="text-slate-500 text-xs mt-1">
                Background-checked & insured cleaners
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-100 p-5 text-sm text-slate-700">
            <h2 className="font-semibold text-slate-900 mb-2">
              What&apos;s included?
            </h2>
            <p className="mb-2">
              Standard clean covers kitchens, bathrooms, bedrooms, living areas,
              floors, and surfaces. Add-ons like inside fridge, oven, or windows
              are available at checkout.
            </p>
            <p className="text-xs text-slate-500">
              For move-in/out or post-renovation cleaning, choose &quot;Deep /
              Move-out clean&quot; under service type.
            </p>
          </div>
        </section>

        {/* RIGHT – FORM CARD */}
        <section className="lg:sticky lg:top-24">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              Get your instant quote
            </h2>
            <p className="text-xs text-slate-500 mb-4">
              Prices are estimated based on home size and can be adjusted after
              the first visit if needed.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-sm">
              {/* STEP 1 – HOME DETAILS */}
              {step === 1 && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Postal code
                    </label>
                    <input
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                      placeholder="M5V 2T6"
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Service type
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="standard">Standard home / condo clean</option>
                      <option value="deep">Deep clean</option>
                      <option value="move">Move-in / move-out</option>
                      <option value="office">Small office / commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Frequency
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "one_time", label: "One-time" },
                        { id: "weekly", label: "Weekly" },
                        { id: "biweekly", label: "Bi-weekly" },
                        { id: "monthly", label: "Monthly" },
                      ].map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setFrequency(f.id as Frequency)}
                          className={`rounded-lg border px-2 py-2 text-xs text-left ${
                            frequency === f.id
                              ? "border-blue-600 bg-blue-50 text-blue-700"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Bedrooms
                      </label>
                      <input
                        type="number"
                        min={0}
                        max={10}
                        value={bedrooms}
                        onChange={(e) => setBedrooms(Number(e.target.value))}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Bathrooms
                      </label>
                      <input
                        type="number"
                        min={0}
                        max={10}
                        value={bathrooms}
                        onChange={(e) => setBathrooms(Number(e.target.value))}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Extras (optional)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Inside fridge",
                        "Inside oven",
                        "Inside cabinets",
                        "Interior windows",
                      ].map((extra) => (
                        <button
                          key={extra}
                          type="button"
                          onClick={() => toggleExtra(extra)}
                          className={`rounded-lg border px-2 py-2 text-xs text-left ${
                            extras.includes(extra)
                              ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {extra}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* STEP 2 – DATE & TIME */}
              {step === 2 && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Preferred date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Preferred arrival time
                      </label>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Notes for your cleaner (optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Parking details, buzzer code, special requests..."
                      rows={4}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </>
              )}

              {/* STEP 3 – CONTACT DETAILS */}
              {step === 3 && (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Mobile number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500">
                    We&apos;ll use this to send booking confirmations and updates.
                    No spam, ever.
                  </p>
                </>
              )}

              {/* FEEDBACK MESSAGES */}
              {submitMessage && (
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-2 text-xs">
                  {submitMessage}
                </div>
              )}
              {submitError && (
                <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 px-3 py-2 text-xs">
                  {submitError}
                </div>
              )}

              {/* BUTTONS */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 1 || isSubmitting}
                  className="text-xs text-slate-500 hover:text-slate-700 disabled:opacity-40"
                >
                  {step > 1 ? "← Back" : ""}
                </button>

                {step < 3 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="rounded-lg bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    Next →
                  </button>
                )}

                {step === 3 && (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Request booking"}
                  </button>
                )}
              </div>

              <p className="text-[10px] text-slate-400 text-center mt-3">
                By requesting a booking, you agree to our terms of service and
                privacy policy. You will not be charged until a cleaner is
                assigned and the visit is completed.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
