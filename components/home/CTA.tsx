"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SiFacebook,
  SiReddit,
} from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

const searchPlatforms = [
  {
    name: "Google",
    src: "/assets/image/google.svg",
    className: "bg-white",
    imageClassName: "h-[31px] w-[31px]",
  },
  {
    name: "ChatGPT",
    src: "/assets/image/gpt.svg",
    className: "bg-[#1c1c22]",
    imageClassName: "h-[25px] w-[25px] brightness-0 invert",
  },
  {
    name: "Gemini",
    src: "/assets/image/gemini.svg",
    className: "bg-[#1c1c22]",
    imageClassName: "h-[26px] w-[26px]",
  },
  {
    name: "Claude",
    src: "/assets/image/claude.svg",
    className: "bg-[#1c1c22]",
    imageClassName: "h-[26px] w-[26px]",
  },
  {
    name: "Perplexity",
    src: "/assets/image/perplexity-boundless-book.png",
    className: "bg-[#1c1c22]",
    imageClassName: "h-[27px] w-[27px] brightness-0 invert",
  },
  {
    name: "Microsoft Copilot",
    src: "/assets/image/microsoft-copilot.svg",
    className: "bg-[#1c1c22]",
    imageClassName: "h-[27px] w-[27px]",
  },
];

export default function CTA() {
  return (
    <section
      id="contact"
      aria-labelledby="foundly-closing-title"
      className="bg-white px-4 py-8 sm:px-8 sm:py-10"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Foundly.ai closing CTA panel */}
        <div className="relative flex min-h-[590px] flex-col items-center overflow-hidden rounded-[34px] bg-[radial-gradient(ellipse_at_top,_#1b1a29_0%,_#121216_50%,_#121216_100%)] px-5 pb-[72px] pt-[76px] text-center text-white sm:min-h-[590px] sm:px-10 sm:pt-[76px] bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/assets/image/bg/cta-bg.webp')" }}>
          {/* Search engine and AI platform logo stack */}
          <div className="flex items-center justify-center" aria-hidden="true">
            {searchPlatforms.map((platform, index) => (
              <span
                key={platform.name}
                title={platform.name}
                className={`relative -ml-[8px] flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-full border-[3px] border-[#111116] shadow-[0_3px_10px_rgba(0,0,0,0.22)] first:ml-0 ${platform.className}`}
                style={{ zIndex: 10 - index }}
              >
                <Image
                  src={platform.src}
                  alt=""
                  width={34}
                  height={34}
                  className={`object-contain ${platform.imageClassName}`}
                />
              </span>
            ))}
            <span className="relative -ml-[8px] z-[3] flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#111116] bg-[#0866ff] text-[36px] text-white shadow-[0_3px_10px_rgba(0,0,0,0.22)]">
              <SiFacebook />
            </span>
            <span className="relative -ml-[8px] z-[2] flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#111116] bg-[#ff4500] text-[35px] text-white shadow-[0_3px_10px_rgba(0,0,0,0.22)]">
              <SiReddit />
            </span>
          </div>

          {/* Main conversion message */}
          <div className="mt-[39px] max-w-[950px]">
            <h2
              id="foundly-closing-title"
              className="text-[38px] font-medium leading-[1.12] tracking-[-0.065em] sm:text-[48px] lg:text-[58px]"
            >
              <span className="block">Your customers are already asking.</span>
              <span className="mt-2 block bg-gradient-to-r from-[#c49af8] to-[var(--primary-color)] bg-clip-text text-transparent">
                Be the answer.
              </span>
            </h2>
            <p className="mx-auto mt-[23px] max-w-[620px] text-[16px] sm:text-[20px] leading-[1.8] text-[#c8c7d2] sm:text-[16px]">
              Foundly.ai gets your business named in Google results and AI
              answers, so the people looking for what you do find you first.
            </p>

            {/* Primary CTA link */}
            <Link
              href="/sign-up"
              className="mx-auto mt-[30px] inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[var(--primary-color)] px-[29px] text-[14px] sm:text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(108,92,255,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#5c4ce8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121216] focus-visible:ring-[#a99cff]"
            >
              Start Free <FiArrowUpRight className="h-[17px] w-[17px]" />
            </Link>

            <p className="mt-[19px] text-[12px] sm:text-[14px] leading-[1.5] text-[#ffffff]">
              Set up in minutes · No contracts · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
