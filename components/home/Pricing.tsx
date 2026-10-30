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
      className={`flex min-h-[76px] gap-4 rounded-[17px] border border-[#e9ebf4] bg-white/75 px-3.5 py-3 shadow-[0_3px_12px_rgba(35,55,110,0.025)] transition duration-200 hover:-translate-y-0.5 hover:border-[#d8dfff] hover:bg-white hover:shadow-[0_10px_24px_rgba(73,91,170,0.08)] sm:px-4 ${feature.highlighted ? "ring-1 ring-inset ring-[#eeeaff]" : ""
        }`}
    >
      <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1765f5] to-[#7449ed] text-white shadow-[0_4px_9px_rgba(47,91,226,0.22)]">
        <FiCheck className="h-3 w-3" strokeWidth={3} />
      </span>
      <span className="min-w-0">
        <strong className="block text-[13px] font-semibold leading-[1.35] tracking-[-0.025em] text-[#101a36] sm:text-[16px]">
          {feature.title}
        </strong>
        <span className="mt-1 block text-[12px] leading-[1.45] text-[#687492] sm:text-[14px]">
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
      className="flex h-[39px] w-[39px] items-center justify-center rounded-[11px] border border-[#e4e8f2] bg-white text-[22px] shadow-[0_2px_5px_rgba(27,47,90,0.035)]"
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
      className="bg-[#faf9ff] px-4 py-16 text-[#101016] sm:px-6 sm:py-[88px] lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url(/assets/image/bg/hero-bg.webp)"}}
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Foundly.ai pricing section heading */}
        <header className="mx-auto mb-[42px] max-w-[620px] text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
              <span className="text-base leading-none">✦</span>
              TRANSPARENT PLANS
            </p>
            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
          <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
            One flat monthly price,  <span className="text-[var(--primary-color)]">endless search visibility</span>
          </h2>
          <p className="desc mx-auto mt-5 leading-[1.65] text-[#737381]">
            Complete AI-powered SEO, content creation, and social distribution without hidden fees.
          </p>
        </header>

        {/* Main offer card */}
        <div className="overflow-hidden rounded-[28px] border border-[#e2eaff] bg-white shadow-[0_22px_65px_rgba(66,93,170,0.12)]">
          <div className="grid min-h-[610px] grid-cols-1 lg:grid-cols-[minmax(320px,31%)_minmax(0,1fr)]">
            {/* Pricing and call to action */}
            <div className="relative isolate flex min-h-[540px] flex-col items-start justify-center overflow-hidden border-b border-[#e7edfb] bg-[linear-gradient(145deg,#f3faff_0%,#f7f8ff_54%,#f0edff_100%)] px-5 pb-[220px] pt-10 text-left sm:px-7 sm:pt-12 lg:border-b-0 lg:border-r lg:px-9">
              <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-[#b9d5ff]/45 blur-3xl" />
              <div className="pointer-events-none absolute -left-28 bottom-10 -z-10 h-64 w-64 rounded-full bg-[#c7c0ff]/40 blur-3xl" />
              <h3 className="mt-7 text-[36px] font-bold leading-[1.02] tracking-[-0.055em] text-[#101a3c] sm:text-[43px]">
                SEO + <span className="block bg-gradient-to-r from-[#1765f5] via-[#4255f5] to-[#853df0] bg-clip-text text-transparent">Social Media</span>
              </h3>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dce7ff] bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#245ae2] shadow-[0_5px_18px_rgba(70,111,220,0.08)] sm:text-[13px]">
                <FaWandMagicSparkles className="h-3 w-3" />
                Limited-time offer
              </span>
              <p className="mt-4 max-w-[310px] text-[15px] leading-[1.55] text-[#657292] sm:text-[16px]">
                All in one: search and social media, one price
              </p>

              <div className="mt-7 flex items-end gap-3">
                <s className="text-[20px] sm:text-[24px] text-[#9999a9] decoration-[#ef7e86] decoration-2">
                  $149
                </s>
                <strong className="bg-gradient-to-b from-[#1766ff] to-[#2750dc] bg-clip-text text-[76px] font-bold leading-[0.9] tracking-[-0.075em] text-transparent sm:text-[88px] pr-1">
                  $49
                </strong>
                <span className="pt-2 text-left text-[11px] sm:text-[13px] leading-[1.25] text-[#11111a]">
                  <b className="block font-medium">USD</b>
                  <span>per month</span>
                </span>
              </div>

              <Link
                href="/sign-up"
                className="mt-7 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#145cf4] via-[#3658f2] to-[#8751ef] px-5 text-[15px] font-bold text-white shadow-[0_12px_26px_rgba(58,91,239,0.28)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(58,91,239,0.34)] sm:text-[17px]"
              >
                Get SEO + Social Media <FiArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-[12px] text-[#7e88a4] text-center w-full">Cancel anytime.</p>


              <svg
                viewBox="0 0 420 220"
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-[210px] w-full"
              >
                <defs>
                  <linearGradient
                    id="offerWave"
                    x1="0"
                    y1="0"
                    x2="420"
                    y2="220"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#83B9FF" stopOpacity=".42" />
                    <stop offset="1" stopColor="#8D72FF" stopOpacity=".2" />
                  </linearGradient>

                  <linearGradient
                    id="offerPanel"
                    x1="80"
                    y1="55"
                    x2="310"
                    y2="190"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#E8F1FF" />
                  </linearGradient>
                </defs>

                <path
                  d="M0 105C60 68 83 110 130 93C190 70 228 8 284 37C340 65 354 112 420 71V220H0V105Z"
                  fill="url(#offerWave)"
                />

                <path
                  d="M0 150C65 110 88 155 150 129C215 102 250 67 310 95C355 116 385 105 420 82V220H0V150Z"
                  fill="#D9E9FF"
                  fillOpacity=".55"
                />

                <g transform="rotate(-8 208 129)">
                  <rect
                    x="66"
                    y="55"
                    width="284"
                    height="142"
                    rx="22"
                    fill="url(#offerPanel)"
                    stroke="#D6E5FF"
                    strokeWidth="2"
                  />

                  <path
                    d="M91 91H314M91 112H260"
                    stroke="#D8E4F8"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />

                  {/* Blue growth line - fixed */}
                  <path
                    d="M91 158L132 139L166 148L207 111L242 123L292 72"
                    fill="none"
                    stroke="#2879F6"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Blue arrow head - fixed */}
                  <path
                    d="M274 73L295 68L291 91"
                    fill="none"
                    stroke="#2879F6"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <rect x="103" y="169" width="18" height="15" rx="5" fill="#8AB8FF" />
                  <rect x="132" y="157" width="18" height="27" rx="5" fill="#77A9FF" />
                  <rect x="161" y="145" width="18" height="39" rx="5" fill="#6098FA" />
                  <rect x="190" y="131" width="18" height="53" rx="5" fill="#4D89F5" />
                </g>

                {/* Google-style icon */}
                <g>
                  <rect x="46" y="39" width="55" height="55" rx="16" fill="white" stroke="#E3EBFF" strokeWidth="2" />
                  <circle cx="73.5" cy="66.5" r="18" fill="#F5F9FF" />
                  <path
                    d="M88 66.5C88 74.5 81.5 81 73.5 81C65.5 81 59 74.5 59 66.5C59 58.5 65.5 52 73.5 52"
                    fill="none"
                    stroke="#4285F4"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M73 52L79 52L76 59"
                    fill="none"
                    stroke="#EA4335"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Website icon */}
                  <rect x="323" y="54" width="55" height="55" rx="16" fill="white" stroke="#E3EBFF" strokeWidth="2" />
                  <path d="M337 69H365V91H337V69Z" fill="#1677C8" />
                  <path d="M342 75H360M342 81H356" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </g>

                {/* Instagram icon */}
                <rect x="28" y="137" width="57" height="57" rx="17" fill="white" stroke="#E3EBFF" strokeWidth="2" />
                <rect x="42" y="151" width="29" height="29" rx="9" fill="#E1306C" />
                <circle cx="56.5" cy="165.5" r="7" fill="none" stroke="white" strokeWidth="3" />
                <circle cx="66" cy="156" r="2" fill="white" />

                {/* Facebook icon */}
                <rect x="354" y="137" width="52" height="52" rx="16" fill="#1877F2" />
                <path
                  d="M383 189V166H391L392 158H383V154C383 151 384 149 388 149H393V142C391 142 388 141 385 141C377 141 373 146 373 154V158H366V166H373V189H383Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Features and platform icons */}
            <div className="flex min-w-0 flex-col bg-[linear-gradient(145deg,#ffffff_0%,#fcfdff_100%)] px-5 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-[24px] font-bold tracking-[-0.045em] text-[#101a3c] sm:text-[29px]">What’s included</h3>
                  <span className="mt-3 block h-[3px] w-10 rounded-full bg-gradient-to-r from-[#1765f5] to-[#8051f1]" />
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ece7ff] bg-[#f5f0ff] px-4 py-2.5 text-[12px] font-semibold text-[#5835d9] shadow-[0_5px_18px_rgba(100,74,220,0.07)] sm:text-[13px]">
                  <FaWandMagicSparkles className="text-[16px]" /> Everything you need to grow online
                </span>
              </div>

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
              <div className="mt-6 grid grid-cols-1 gap-5 border-t border-[#e8ebf4] pt-5 sm:grid-cols-3 sm:gap-3">
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
        <div className="relative isolate mt-5 flex flex-col gap-5 overflow-hidden rounded-[22px] bg-gradient-to-r from-[#2456ee] via-[#285ef0] to-[#7448ef] px-6 py-6 text-white shadow-[0_16px_35px_rgba(49,86,225,0.22)] sm:flex-row sm:items-center sm:px-9 sm:py-5">
          <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1200 130" preserveAspectRatio="none" aria-hidden="true">
            <path d="M650 130C760 78 785 18 910 -8C1035 -35 1090 42 1200 5V130H650Z" fill="#9B8BFF" fillOpacity=".28" />
            <path d="M760 130C850 65 900 15 1010 -2C1090 -14 1140 22 1200 36V130H760Z" fill="#77B9FF" fillOpacity=".2" />
            <path d="M0 0H1200" stroke="white" strokeOpacity=".12" />
          </svg>
          <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[17px] border border-white/20 bg-white/15 text-[28px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
            <FiPercent />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[16px] sm:text-[21px] font-semibold tracking-[-0.03em]">
              More websites, <span className="text-white/70">less per website</span>
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
              className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-white px-7 text-[14px] font-bold text-[#17234b] shadow-[0_6px_18px_rgba(20,35,100,0.14)] transition hover:-translate-y-0.5 hover:bg-[#f1f3ff] sm:text-[16px]"
            >
              Talk to us <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
