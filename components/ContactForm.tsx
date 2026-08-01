"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SERVICES } from "@/lib/services";
import { EASE_IN_OUT, EASE_OUT } from "@/components/motion/tokens";

const serviceOptions = ["General Inquiry", ...SERVICES.map((s) => s.title)];

const inputClass =
  "w-full rounded-[10px] border border-navy/20 px-3.5 py-3.5 text-[15px] outline-none focus:border-terracotta";
const labelClass = "mb-2 block text-[13px] font-bold text-navy";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const panel = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: EASE_IN_OUT } },
  };

  // `mode="wait"` so the form finishes leaving before the receipt arrives;
  // `initial={false}` leaves the first paint to the page's own entrance.
  return (
    <AnimatePresence mode="wait" initial={false}>
      {submitted ? (
        <motion.div
          key="submitted"
          {...panel}
          className="rounded-2xl border border-navy/10 bg-white px-11 py-14 text-center"
        >
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.12,
              type: "spring",
              stiffness: 260,
              damping: 16,
            }}
            className="mb-4 text-4xl text-terracotta"
          >
            ✓
          </motion.div>
          <h2 className="mb-3 font-serif text-2xl font-semibold text-navy">
            Thank you — message received.
          </h2>
          <p className="mb-7 text-[15px] text-muted">
            A member of our team will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="rounded-full border-[1.5px] border-navy px-6 py-3 text-sm font-bold text-navy hover:bg-navy hover:text-white"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          {...panel}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col gap-5 rounded-2xl border border-navy/10 bg-white p-11"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="service">
              Service of Interest
            </label>
            <select
              id="service"
              name="service"
              className={`${inputClass} bg-white`}
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project or requirement..."
              className={`${inputClass} resize-y`}
            />
          </div>
          <button
            type="submit"
            className="self-start rounded-full bg-terracotta px-7 py-4 text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-terracotta-dark"
          >
            Send Message
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
