"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SiFacebook,
  SiInstagram,
  SiX,
} from "react-icons/si";
import { FiArrowRight, FiX } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaWandMagicSparkles } from "react-icons/fa6";

const aiLogoItems = [
  { name: "Google", src: "/assets/image/google.svg" },
  { name: "ChatGPT", src: "/assets/image/gpt.svg" },
  { name: "Gemini", src: "/assets/image/gemini.svg" },
  { name: "Perplexity", src: "/assets/image/perplexity-boundless-book.png" },
];

export default function ClaimOffer() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <>
      {/* Reserve space so the fixed Foundly.ai offer bar does not cover page content. */}
      <div aria-hidden="true" className="h-[48px] w-full" />

      {/* Fixed promotional offer bar */}
      <aside
        aria-label="Foundly.ai limited-time offer"
        className="fixed inset-x-0 top-0 z-[100] h-[48px] overflow-hidden border-b border-white/15 bg-[linear-gradient(100deg,#0b0820_0%,#20174f_48%,#100d27_100%)] text-white shadow-[0_3px_10px_rgba(10,8,30,0.28)]"
      >
        {/* Soft highlight across the bar */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),transparent_48%,rgba(0,0,0,0.18))]"
        />

        <div className="relative mx-auto flex h-full max-w-[1540px] items-center justify-center gap-3 px-3 pr-10 sm:gap-4 sm:px-6 sm:pr-12">
          {/* Search, AI, and social platform marks */}
          <div className="hidden shrink-0 items-center gap-[4px] md:flex" aria-label="Supported platforms">
            {aiLogoItems.map((item) => (
              <span
                key={item.name}
                title={item.name}
                className="flex h-[27px] w-[27px] items-center justify-center rounded-full border border-[#dcd9e8] bg-white shadow-sm"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={15}
                  height={15}
                  className="h-[15px] w-[15px] object-contain"
                />
              </span>
            ))}
            <span title="Instagram" className="flex h-[27px] w-[27px] items-center justify-center rounded-full border border-[#e9e6f1] bg-white text-[#e4405f] shadow-sm">
              <SiInstagram size={15} />
            </span>
            <span title="Facebook" className="flex h-[27px] w-[27px] items-center justify-center rounded-full border border-[#e9e6f1] bg-white text-[#1877f2] shadow-sm">
              <SiFacebook size={15} />
            </span>
            <span title="LinkedIn" className="flex h-[27px] w-[27px] items-center justify-center rounded-full border border-[#e9e6f1] bg-white text-[#0a66c2] shadow-sm">
              <SlSocialLinkedin size={15} />
            </span>
            <span title="X" className="flex h-[27px] w-[27px] items-center justify-center rounded-full border border-[#e9e6f1] bg-white text-[#0a0a0f] shadow-sm">
              <SiX size={13} />
            </span>
          </div>

          <span aria-hidden="true" className="hidden h-[22px] w-px shrink-0 bg-white/20 md:block" />

          <span className="hidden shrink-0 items-center gap-1 rounded-full border border-[#9384ff]/50 bg-[#6958f5]/15 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.04em] text-[#d8d2ff] sm:inline-flex">
            <FaWandMagicSparkles className="h-3 w-3" />
            Limited time
          </span>

          <p className="flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap text-[12px] sm:gap-2 sm:text-[14px]">
            <span className="hidden font-semibold sm:inline">SEO + Social Media for</span>
            <span className="font-semibold sm:hidden">Foundly.ai · $49/mo</span>
            <s className="hidden text-white/55 sm:inline">$149</s>
            <strong className="text-[12px] font-semibold sm:text-[14px]">$49<span className="font-normal">/mo</span></strong>
          </p>

          <span aria-hidden="true" className="hidden h-[20px] w-px shrink-0 bg-white/20 lg:block" />

          <p className="hidden whitespace-nowrap text-[12px] sm:text-[14px] text-[#c5c1d8] lg:block">
            Locked in for as long as you stay subscribed
          </p>

          <Link
            href="/sign-up"
            className="inline-flex h-[29px] shrink-0 items-center justify-center gap-2 rounded-full bg-white px-3.5 text-[11px] sm:text-[13px] font-semibold text-[#17132e] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition hover:-translate-y-px hover:bg-[#eeeaff] sm:px-4"
          >
            <span className="hidden sm:inline">Claim offer</span>
            <span className="sm:hidden">Claim</span>
            <FiArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Dismiss the offer bar */}
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          aria-label="Dismiss offer"
          className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:right-3"
        >
          <FiX className="h-[14px] w-[14px]" />
        </button>
      </aside>
    </>
  );
}
