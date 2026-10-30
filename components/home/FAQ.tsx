"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMinus, FiPlus } from "react-icons/fi";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FAQItem[] = [
  {
    question: "What does Foundly.ai do for my SEO?",
    answer: (
      <>
        Foundly.ai learns your business, researches keywords, plans and writes
        SEO content, and helps publish it to your website. It also brings SEO
        audits, Google Business Profile workflows, and AI visibility tracking
        into the same workspace.
      </>
    ),
  },
  {
    question: "Can it help my business appear in AI answers?",
    answer: (
      <>
        Foundly.ai checks how your content is structured for answer engines and
        tracks mentions and citations across ChatGPT, Gemini, Claude, Perplexity,
        and Google AI. Use those insights to improve your content and see where
        your business is being discovered.
      </>
    ),
  },
  {
    question: "Can I review content before it goes live?",
    answer: (
      <>
        Yes. Review and edit your drafts before publishing. Your connected
        website and publishing settings determine where approved content goes,
        so you stay in control of your brand&apos;s voice and messaging.
      </>
    ),
  },
  {
    question: "Which website platforms can I connect?",
    answer: (
      <>
        Foundly.ai supports publishing workflows for WordPress, Shopify, and
        Webflow, alongside Google Business Profile and custom API connections.
        Connect the platforms you use during setup.
      </>
    ),
  },
  {
    question: "What can it do for Google Business Profile?",
    answer: (
      <>
        Connect your profile to create local posts, prepare review replies,
        update service information, and identify profile improvements. These
        workflows use the same business context as your website content.
      </>
    ),
  },
  {
    question: "How much do the plans cost?",
    answer: (
      <>
        For a limited time, SEO + Social Media is $49 USD per month (usually
        $149), per website. It&apos;s one all-in-one plan: SEO for Google and AI
        search, plus AI content creation and posting on X, LinkedIn, Facebook,
        and Instagram. Review your plan and billing during account setup.
      </>
    ),
  },
  {
    question: "How soon will I see results?",
    answer: (
      <>
        Your keyword plan, audits, and content work start during setup. Search
        visibility builds over time and depends on your website, competition,
        and publishing consistency. Use the dashboard to follow your progress;
        no specific ranking or AI placement is guaranteed.
      </>
    ),
  },
  {
    question: "Can I manage more than one business?",
    answer: (
      <>
        Yes. Keep each business&apos;s website, keywords, content, and
        integrations in its own workspace. This helps agencies and growing teams
        manage multiple businesses without mixing their brand context.
      </>
    ),
  },
];

export default function FAQ() {
  // The first FAQ is expanded by default to match the reference design.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="foundly-faq-title"
      className="bg-white px-4 py-16 text-[#101016] sm:px-6 sm:py-[82px] lg:px-8"
    >
      <div className="mx-auto max-w-[940px]">
        {/* Foundly.ai FAQ section heading */}
        <header className="mx-auto mb-[42px] max-w-[991px] text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
              <span className="text-base leading-none">✦</span>
              NEED HELP?
            </p>
            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
          <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
            Everything you {' '}
            <span className="text-[var(--primary-color)]">need to know</span> about Foundly.ai
          </h2>
          <p className="desc mx-auto mt-5 leading-[1.65] text-[#737381]">
            Have questions before getting started? Find quick answers to common queries here.
          </p>
        </header>

        {/* Accessible accordion list */}
        <div className="space-y-[9px]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `foundly-faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-[14px] border bg-white transition-colors duration-200 ${
                  isOpen
                    ? "border-[#d9d2ff] shadow-[0_5px_16px_rgba(108,92,255,0.08)]"
                    : "border-[#e9e9ee] hover:border-[#d9d2ff]"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex min-h-[55px] w-full items-center justify-between gap-5 px-[19px] py-4 text-left text-[16px] sm:text-[20px] font-medium leading-[1.4] tracking-[-0.025em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--primary-color)]"
                  >
                    <span>{item.question}</span>
                    <span className="shrink-0 text-[var(--primary-color)]">
                      {isOpen ? (
                        <FiMinus className="h-[16px] w-[16px]" />
                      ) : (
                        <FiPlus className="h-[16px] w-[16px]" />
                      )}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={`foundly-faq-question-${index}`}
                    className="px-[19px] pb-[18px] text-[12px] sm:text-[16px] leading-[1.65] text-[#424258]"
                  >
                    {item.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Consultation callout */}
        <div className="mt-[9px] flex items-center justify-between gap-4 rounded-[14px] border border-[#d9d2ff] bg-[var(--primary-color)] px-[19px] py-[17px]">
          <div className="min-w-0">
            <strong className="block text-[16px] sm:text-[20px] font-medium tracking-[-0.025em] text-white">
              Need an SEO walkthrough?
            </strong>
            <Link
              href="/contact"
              className="mt-1 block text-[12px] sm:text-[15px] text-white/70 hover:underline"
            >
              Book a free consultation
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-full border border-[#d6ceff] bg-white px-6 text-[12px] sm:text-[16px] font-medium text-[var(--primary-color)] transition hover:bg-[var(--primary-color)] hover:text-white"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
