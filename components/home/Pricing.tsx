"use client";

import Link from "next/link";
import { FaWandMagicSparkles } from "react-icons/fa6";
import {
  FiArrowRight,
  FiCheck,
  FiPercent,
} from "react-icons/fi";
import {
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiWix,
  SiInstagram,
  SiFacebook,
  SiX,
  SiGoogle,
} from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

type Feature = {
  title: string;
  description: React.ReactNode;
  highlighted?: boolean;
};

const featuresLeft: Feature[] = [
  {
    title: "Content calendar and scheduling",
    description: <>A clear plan for what goes out and when</>,
  },
  {
    title: "Automatic keyword research",
    description: <>We find the terms customers use before we write</>,
    highlighted: true,
  },
  {
    title: "CMS integration",
    description: (
      <>
        Publish to WordPress, Shopify, Webflow and more.{" "}
        <Link href="/integrations" className="font-medium text-[var(--primary-color)] hover:underline">
          See integrations
        </Link>
      </>
    ),
  },
  {
    title: "120+ pieces of content published",
    description: <>Across your website and social media</>,
    highlighted: true,
  },
  {
    title: "You stay in control",
    description: <>Review content and track results in one dashboard</>,
  },
];

const featuresRight: Feature[] = [
  {
    title: "30 SEO-optimized articles every month",
    description: <>Written around the searches that matter</>,
    highlighted: true,
  },
  {
    title: "Content in 150+ languages",
    description: <>Reach customers in the language they use</>,
  },
  {
    title: "High-DR backlinks, built on autopilot",
    description: <>Authority-building work handled for you</>,
    highlighted: true,
  },
  {
    title: "Carousel posts for all four channels",
    description: <>Instagram, Facebook, LinkedIn and X</>,
  },
  {
    title: "Ad-ready social creatives",
    description: <>Designed for Meta and Google campaigns</>,
    highlighted: true,
  },
];

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <li
      className={`flex min-h-[53px] gap-2.5 rounded-xl px-2 py-2 ${
        feature.highlighted
          ? "border border-[#ded7ff] bg-gradient-to-b from-white to-[#f8f6ff] shadow-[0_6px_12px_rgba(108,92,255,0.10)]"
          : "border border-transparent"
      }`}
    >
      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[var(--primary-color)] text-white">
        <FiCheck className="h-3 w-3" strokeWidth={3} />
      </span>
      <span className="min-w-0">
        <strong className="block text-[13px] sm:text-[16px] font-medium leading-[1.45] text-[#11111a]">
          {feature.title}
        </strong>
        <span className="mt-0.5 block text-[12px] sm:text-[15px] leading-[1.45] text-[#55556c]">
          {feature.description}
        </span>
      </span>
    </li>
  );
}

function PlatformMark({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className="flex h-[27px] w-[27px] items-center justify-center rounded-[7px] border border-[#e8e7ee] bg-white text-[16px]"
    >
      {children}
    </span>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="foundly-pricing-title"
      className="bg-[#faf9ff] px-4 py-16 text-[#101016] sm:px-6 sm:py-[88px] lg:px-8"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Foundly.ai pricing section heading */}
        <header className="mx-auto mb-[42px] max-w-[520px] text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
              <span className="text-base leading-none">✦</span>
              Pricing
            </p>
            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
          <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
            Everything you need to <span className="text-[var(--primary-color)]">get found online</span>
          </h2>
          <p className="desc mx-auto mt-5 leading-[1.65] text-[#737381]">
            30 SEO-optimized articles, backlinks and social posts — all for one
            price, every month.
          </p>
        </header>

        {/* Main offer card */}
        <div className="overflow-hidden rounded-[21px] border border-[#e8e7ed] bg-white shadow-[0_12px_32px_rgba(27,24,53,0.05)]">
          <div className="grid min-h-[524px] grid-cols-1 lg:grid-cols-[343px_minmax(0,1fr)]">
            {/* Pricing and call to action */}
            <div className="flex flex-col items-center justify-center border-b border-[#ecebf1] px-7 py-10 text-center lg:border-b-0 lg:border-r lg:px-[34px]">
              <h3 className="text-[24px] sm:text-[28px] font-medium tracking-[-0.04em]">
                SEO + Social Media
              </h3>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#efecff] px-2.5 py-1 text-[11px] sm:text-[13px] font-medium text-[var(--primary-color)]">
                <FaWandMagicSparkles className="h-3 w-3" />
                Limited-time offer
              </span>
              <p className="mt-3 text-[13px] sm:text-[15px] text-[#55556b]">
                All in one: search and social media, one price
              </p>

              <div className="mt-5 flex items-center justify-center gap-2">
                <s className="text-[20px] sm:text-[24px] text-[#9999a9] decoration-[#ef7e86] decoration-2">
                  $149
                </s>
                <strong className="text-[64px] sm:text-[80px] font-medium leading-none tracking-[-0.07em] text-[var(--primary-color)]">
                  $49
                </strong>
                <span className="pt-2 text-left text-[11px] sm:text-[13px] leading-[1.25] text-[#11111a]">
                  <b className="block font-medium">USD</b>
                  <span>per month</span>
                </span>
              </div>

              <Link
                href="/sign-up"
                className="mt-5 flex min-h-[43px] w-full items-center justify-center gap-2 rounded-full bg-[var(--primary-color)] px-4 text-[14px] sm:text-[16px] font-semibold text-white shadow-[0_10px_20px_rgba(108,92,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#5b4be9]"
              >
                Get SEO + Social Media <FiArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-2 text-[10px] sm:text-[12px] text-[#9998a8]">Cancel anytime.</p>
            </div>

            {/* Features and platform icons */}
            <div className="flex min-w-0 flex-col px-5 py-7 sm:px-7 lg:px-[34px] lg:py-[34px]">
              <h3 className="border-b border-[#ecebf1] pb-3 text-[16px] sm:text-[19px] font-medium">
                What’s included
              </h3>

              <div className="mt-0 grid flex-1 grid-cols-1 gap-x-6 sm:grid-cols-2">
                <ul className="flex flex-col gap-1.5 pt-2">
                  {featuresLeft.map((feature) => (
                    <FeatureItem key={feature.title} feature={feature} />
                  ))}
                </ul>
                <ul className="flex flex-col gap-1.5 pt-2">
                  {featuresRight.map((feature) => (
                    <FeatureItem key={feature.title} feature={feature} />
                  ))}
                </ul>
              </div>

              {/* Integration/platform marks */}
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#ecebf1] pt-3">
                <div>
                  <p className="mb-2 text-[10px] sm:text-[12px] uppercase tracking-[0.07em] text-[#66667c]">
                    Publishes to
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <PlatformMark label="WordPress"><SiWordpress className="text-[#21759b]" /></PlatformMark>
                    <PlatformMark label="Shopify"><SiShopify className="text-[#5e8e3e]" /></PlatformMark>
                    <PlatformMark label="Webflow"><SiWebflow className="text-[#146ef5]" /></PlatformMark>
                    <PlatformMark label="Wix"><SiWix className="text-[#11111a]" /></PlatformMark>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-[10px] sm:text-[12px] uppercase tracking-[0.07em] text-[#66667c]">
                    Posts on
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <PlatformMark label="Instagram"><SiInstagram className="text-[#e4405f]" /></PlatformMark>
                    <PlatformMark label="Facebook"><SiFacebook className="text-[#1877f2]" /></PlatformMark>
                    <PlatformMark label="LinkedIn"><SlSocialLinkedin className="text-[#0a66c2]" /></PlatformMark>
                    <PlatformMark label="X"><SiX className="text-[#11111a]" /></PlatformMark>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-[10px] sm:text-[12px] uppercase tracking-[0.07em] text-[#66667c]">
                    Found in
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <PlatformMark label="Google"><SiGoogle className="text-[#4285f4]" /></PlatformMark>
                    <PlatformMark label="ChatGPT"><span className="text-[12px] font-bold text-[#11111a]">◎</span></PlatformMark>
                    <PlatformMark label="Gemini"><FaWandMagicSparkles className="text-[var(--primary-color)]" /></PlatformMark>
                    <PlatformMark label="Claude"><span className="text-[12px] text-[#ed7959]">✳</span></PlatformMark>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Volume discount contact strip */}
        <div className="mt-4 flex flex-col gap-5 rounded-[16px] bg-[#111114] px-5 py-5 text-white shadow-[0_12px_30px_rgba(22,20,43,0.12)] sm:flex-row sm:items-center sm:px-7">
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] border border-white/10 bg-white/10 text-[24px] text-white">
            <FiPercent />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[16px] sm:text-[21px] font-semibold tracking-[-0.03em]">
              More websites, <span className="text-[var(--primary-color)]">less per website</span>
            </p>
            <p className="mt-1 text-[12px] sm:text-[15px] text-[#dedde7]">
              Volume discounts apply automatically
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="text-[12px] sm:text-[15px] text-[#efedf5]">
              Running an agency or many sites?
            </p>
            <Link
              href="/contact"
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full bg-white px-6 text-[13px] sm:text-[16px] font-medium text-[#111114] transition hover:bg-[#efecff]"
            >
              Talk to us <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
