"use client"

import { useState } from "react"
import FilterBar from "./FilterBar"

export default function HomePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqData = [
    {
      question: "How quickly can this app help fix my appliance?",
      answer:
        "Most users find the right solution in under 2 minutes! Just enter your appliance brand and error code — or describe the problem in your own words — and the app instantly provides step-by-step repair guidance. It`s faster than waiting for a technician and works 95% of the time.",
    },
    {
      question: "How much money can I actually save with this app?",
      answer:
        "On average, homeowners save between $15 and $40 per repair — about the same as one technician visit. By fixing issues yourself, you save money, avoid long waits, and keep your appliances running smoothly.",
    },
    {
      question: "Do I need any tools or repair experience to use it?",
      answer:
        "Not at all! The app is designed for everyone — even first-time users. You`ll get clear step-by-step instructions, helpful visuals, and easy tips to guide you through every repair safely and confidently.",
    },
    {
      question: "What if my appliance error code isn`t listed?",
      answer:
        "If your specific error code isn`t available, the app will show general troubleshooting steps that fix most problems. You can also submit query form with your code — we'll quickly review and add it so others can benefit too.",
    },
    {
      question: "Does this app work with my appliance brand?",
      answer:
        "Yes! The app supports over 10+ major appliance brands, including Samsung, LG, Whirlpool, Haier, Voltas and few others. In fact, 95% of users successfully fix their appliance on the first try using our repair guides.",
    },
  ]

  return (
    <main className="bg-gradient-to-b from-[#EAF8FB] to-white py-10">
      {/* HERO SECTION */}
      <article className="max-w-8xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left w-full lg:max-w-[700px]">
          <header>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#007EA7] leading-tight mb-2">
              Technicians Don`t Like This App –
            </h1>
            <h2 className="text-xl sm:text-4xl text-gray-900 font-extrabold mb-8">
              Smart Homeowners Save More with This Repair Assistant App
            </h2>
          </header>

          <p className="text-gray-700 text-base sm:text-lg mb-8">
            Join thousands who discovered an easier way to fix appliances. This app shows you how to repair common problems fast—no tools, no costly service calls, no stress. Get started today and take control of your home repairs!
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <aside className="flex-1 w-full flex flex-col items-center">
          <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md">
            <img
              src="/images/homepage-washing-repair.jpg"
              alt="Homeowner using repair assistant app to fix a washing machine"
              className="rounded-xl w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="mt-4 bg-[#101828] text-white font-medium text-sm px-6 py-2 rounded-full shadow-sm">
            🔧 5,000+ homeowners helped | 10+ brands
          </div>
        </aside>
      </article>
      {/* HOW IT WORKS */}
      <section className="flex-1 max-w-8xl mx-auto px-6 lg:px-8 flex flex-col items-start gap-2" aria-labelledby="how-it-works">
        <h2 id="how-it-works" className="text-2xl font-semibold text-gray-700 mb-4">
          How It Works — Two Easy Ways to Find Your Fix
        </h2>

        <div className="bg-white rounded-2xl shadow-md p-6 w-half">
          <p className="text-gray-700 mb-4">
            There are two simple ways to use this app to get your repair solution:
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-[#007EA7] mb-2">1. Quick Search</h3>
              <p className="text-gray-700">
                Just enter your appliance`s error code — or type what`s going wrong in your own words.
                The app instantly finds matching issues and shows a list of possible causes.
                Choose your issue to get the right fix within seconds.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#007EA7] mb-2">2. Step-by-Step Guide</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Select your <strong>appliance brand</strong></li>
                <li>Choose your <strong>specific appliance</strong> (e.g., washing machine, fridge, etc.)</li>
                <li>Find your <strong>related error code</strong></li>
                <li>Click to view <strong>detailed repair instructions</strong> with clear steps and visuals</li>
              </ol>
            </div>
          </div>

          <p className="italic text-gray-500 mt-6">
            It`s fast, accurate, and designed for everyone — even if yo`ve never repaired anything before.
          </p>
        </div>
      </section>
      {/* FILTER BAR */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-1xl font-semibold text-gray-700 mb-4">In many cases, appliance error codes or issues are similar across different brands.
          If you don`t find a solution for your specific appliance, try checking the fixes listed under other brands — they often work for the same problem</h3>
        <FilterBar />
      </section>

      {/* FAQ SECTION */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="pt-5 pb-10 bg-gray-50 border-t border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 id="faq-heading" className="text-3xl font-extrabold text-gray-900">
              Quick Answers — Fix It Fast with This App
            </h3>
            <p className="mt-3 text-gray-600">
              Get instant answers to common appliance issues and start saving on service calls today.
            </p>
          </div>

          <div className="space-y-4">
            { faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none hover:bg-gray-50"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-5 border-t border-gray-200"
                  >
                    <p className="text-gray-700 mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* TRUST SECTION */}
    <section className="bg-white py-5 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
          Trusted by Thousands of Homeowners
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Over <strong>5,000+</strong> users rely on this app for quick, accurate, and free appliance fixes.
          We`re proud to make home repairs simple and stress-free.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/images/brand-samsung.jpeg" style={{"width" : "135px" }} alt="Samsung" className="h-12 opacity-80" />
          <img src="/images/brand-lg.jpeg" alt="LG" style={{"width" : "135px" }} className="h-12 opacity-80" />
          <img src="/images/brand-whirepool.jpeg" style={{"width" : "135px" }} alt="Whirlpool" className="h-12 opacity-80" />
          <img src="/images/brand-voltas.jpeg" style={{"width" : "135px" }} alt="Voltas" className="h-12 opacity-80" />
          <img src="/images/brand-haier.jpeg" style={{"width" : "135px" }} alt="Haier" className="h-12 opacity-80" />
        </div>
      </div>
    </section>

    </main>
  )
}
