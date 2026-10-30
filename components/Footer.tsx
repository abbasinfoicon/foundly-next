import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaArrowUpRightDots, FaXTwitter } from "react-icons/fa6";

const footerGroups = [
  {
    title: "Platform",
    links: ["How it works", "What we publish", "Client results", "Customer stories", "Works with"],
  },
  {
    title: "Product",
    links: [
      "Social Media",
      "AI SEO Agent",
      "AI Blog Writer",
      "Local SEO",
      "Local SEO Services",
      "Backlinks",
      "Auto Linking Tool",
      "Keyword Research",
    ],
  },
  { title: "AI search", links: ["Rank on ChatGPT"] },
  { title: "Integrations", links: ["WordPress", "Shopify", "Webflow", "All integrations"] },
  { title: "Resources", links: ["Help center", "SEO glossary", "Industries", "Case studies"] },
  {
    title: "Compare",
    links: ["Outrank", "SEObot", "Surfer SEO", "Jasper AI", "Frase", "All comparisons"],
  },
  { title: "Company", links: ["Pricing", "Blog", "Affiliate program", "Contact"] },
];

function FooterGrowthArtwork() {
  return (
    <div className="pointer-events-none relative mx-auto hidden h-[180px] w-full max-w-[430px] lg:block" aria-hidden="true">
      <svg viewBox="0 0 430 190" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="footer-card" x1="90" y1="12" x2="340" y2="178" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A9C8FF" stopOpacity=".34" />
            <stop offset="1" stopColor="#805CFF" stopOpacity=".16" />
          </linearGradient>
          <linearGradient id="footer-bar" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#37C7FF" />
            <stop offset="1" stopColor="#6D55FF" />
          </linearGradient>
          <linearGradient id="footer-arrow" x1="140" y1="115" x2="300" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#328BFF" />
            <stop offset="1" stopColor="#42D6FF" />
          </linearGradient>
          <filter id="footer-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <ellipse cx="215" cy="102" rx="190" ry="61" stroke="#4D63FF" strokeOpacity=".7" strokeWidth="1.5" />
        <ellipse cx="215" cy="102" rx="160" ry="48" stroke="#2E9BFF" strokeOpacity=".28" strokeDasharray="4 7" />
        <circle cx="27" cy="101" r="4" fill="#48B9FF" filter="url(#footer-glow)" />
        <circle cx="397" cy="75" r="5" fill="#6E6BFF" filter="url(#footer-glow)" />
        <g transform="rotate(-8 214 94)">
          <rect x="91" y="25" width="250" height="143" rx="19" fill="url(#footer-card)" stroke="#8296FF" strokeOpacity=".65" strokeWidth="1.4" />
          <rect x="110" y="43" width="210" height="9" rx="4.5" fill="#A9B9FF" fillOpacity=".18" />
          <rect x="110" y="62" width="124" height="7" rx="3.5" fill="#A9B9FF" fillOpacity=".13" />
          <rect x="110" y="78" width="86" height="7" rx="3.5" fill="#A9B9FF" fillOpacity=".13" />
          <rect x="126" y="125" width="22" height="27" rx="6" fill="url(#footer-bar)" opacity=".55" />
          <rect x="160" y="108" width="22" height="44" rx="6" fill="url(#footer-bar)" opacity=".7" />
          <rect x="194" y="91" width="22" height="61" rx="6" fill="url(#footer-bar)" opacity=".82" />
          <rect x="228" y="73" width="22" height="79" rx="6" fill="url(#footer-bar)" />
          <path d="M123 113L169 93L207 100L251 56L286 38" stroke="url(#footer-arrow)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#footer-glow)" />
          <path d="M265 39L289 35L285 59" stroke="#39BFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g filter="url(#footer-glow)">
          <rect x="88" y="2" width="57" height="57" rx="17" fill="#F8FAFF" stroke="#9CB8FF" strokeOpacity=".65" />
          <path d="M116 14C108 14 102 20 102 28C102 36 108 42 116 42C123 42 129 37 130 30H116V24H137C138 26 138 28 138 30C138 42 129 51 116 51C103 51 94 41 94 28C94 16 104 7 116 7C122 7 128 10 132 14L127 19C124 16 120 14 116 14Z" fill="#4285F4" />
          <path d="M116 14C120 14 124 16 127 19L132 14C128 10 122 7 116 7V14Z" fill="#EA4335" />
          <path d="M102 28C102 20 108 14 116 14V7C104 7 94 16 94 28H102Z" fill="#34A853" />
          <path d="M116 42C108 42 102 36 102 28H94C94 41 103 51 116 51V42Z" fill="#FBBC05" />
        </g>
        <g>
          <rect x="294" y="108" width="55" height="55" rx="17" fill="#342A91" fillOpacity=".72" stroke="#8D7CFF" strokeOpacity=".8" />
          <path d="M321 119C314 119 309 125 309 132C309 139 314 144 321 144C328 144 333 139 333 132C333 125 328 119 321 119Z" stroke="#E8E8FF" strokeWidth="2.3" />
          <path d="M316 132C319 128 324 128 327 132M316 136C319 140 324 140 327 136" stroke="#E8E8FF" strokeWidth="2" strokeLinecap="round" />
        </g>
        <rect x="45" y="78" width="47" height="47" rx="15" fill="#4033B9" fillOpacity=".75" stroke="#8276FF" />
        <path d="M68 90L70 98L78 100L70 103L68 111L65 103L57 100L65 98L68 90Z" fill="#D8D7FF" />
      </svg>
    </div>
  );
}

const Footer = () => {
  return (
    <footer
      className="relative isolate w-full overflow-hidden bg-[#080D25] bg-cover bg-bottom bg-no-repeat text-[#D6D9F0]"
      style={{ backgroundImage: "url('/assets/image/bg/footer-bg.webp')" }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1588px] px-5 pt-7 pb-4 sm:px-8 lg:px-0 lg:pt-8">
        {/* CTA panel */}
        <section className="relative grid min-h-[180px] overflow-hidden rounded-[22px] border border-[#647cff]/35 bg-[linear-gradient(0deg,rgba(20,31,76,.86),rgba(16,17,51,.58)_52%,rgba(22,17,60,.72))] px-7 shadow-[0_18px_70px_rgba(27,56,180,.16),inset_0_1px_0_rgba(255,255,255,.10)] backdrop-blur-xl sm:px-10 lg:grid-cols-[1.25fr_1fr_auto] lg:items-center lg:gap-8 lg:px-10">
          <div className="relative z-10">
            <h2 className="text-[26px] font-semibold leading-[1.15] tracking-[-0.045em] text-white sm:text-[34px] lg:text-[38px]">
              A little AI. A lot more <span className="bg-gradient-to-r from-[#36C8FF] to-[#A36BFF] bg-clip-text text-transparent">visibility.</span>
            </h2>
            <p className="mt-4 max-w-[550px] text-[15px] leading-[1.65] text-[#C9D0F0] sm:text-[17px]">
              Get found in search. Stay present on social media.
              <br className="hidden sm:block" /> Grow your business with one connected AI tool.
            </p>
          </div>

          <FooterGrowthArtwork />

          <Link
            className="relative z-10 mt-5 inline-flex h-[58px] min-w-[166px] items-center justify-center gap-3 self-center rounded-full bg-gradient-to-r from-[#1260FF] via-[#4265FF] to-[#9B58F6] px-8 text-[16px] font-semibold text-white shadow-[0_0_32px_rgba(76,91,255,.42)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_42px_rgba(91,104,255,.6)] lg:mt-0"
            href="/"
          >
            Start Free <FaArrowUpRightDots className="h-5 w-5" />
          </Link>
        </section>

        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#65709D]/45 to-transparent sm:my-8" />

        {/* Footer navigation */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[1.35fr_repeat(7,minmax(0,1fr))] lg:gap-x-7">
          <div className="col-span-2 flex flex-col items-start sm:col-span-1">
            <Link className="transition-opacity hover:opacity-80" href="/">
              <img className="h-auto w-[160px] object-contain" src="/assets/image/logo-white.png" alt="Foundly AI" />
            </Link>
            <Link className="mt-6 text-[14px] text-[#C5CBE4] transition hover:text-white" href="mailto:info@upliftai.co">
              info@upliftai.co
            </Link>
            <ul className="mt-8 flex items-center gap-2.5" aria-label="Follow Foundly AI on social media">
              {[
                { label: "Instagram", Icon: FaInstagram },
                { label: "Facebook", Icon: FaFacebookF },
                { label: "LinkedIn", Icon: FaLinkedinIn },
                { label: "X", Icon: FaXTwitter },
              ].map(({ label, Icon }) => (
                <li key={label}>
                  <Link
                    href="/"
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label={`Foundly AI on ${label}`}
                    className="flex h-[54px] w-[54px] items-center justify-center rounded-[14px] border border-[#66709D]/35 bg-[#151B3A]/35 text-[#C7CDE8] transition duration-200 hover:-translate-y-1 hover:border-[#7789FF] hover:bg-[#26336A]/60 hover:text-white"
                  >
                    <Icon size={21} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} className="flex flex-col items-start gap-[15px] text-[14px] leading-[1.3] text-[#C5CBE4]" aria-label={`Footer ${group.title}`}>
              <strong className="mb-1 text-[15px] sm:text-[18px] font-semibold text-white">{group.title}</strong>
              {group.links.map((label) => (
                <Link key={label} className="transition-colors duration-200 hover:translate-x-0.5 hover:text-white" href="/">
                  {label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 pt-6 text-[13px] text-[#C5CBE4] sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <span>© 2026 foundly AI. All rights reserved.</span>
          <nav className="flex items-center gap-6" aria-label="Legal">
            <Link className="transition-colors hover:text-white" href="/">Privacy policy</Link>
            <span className="h-4 w-px bg-[#7580A8]/50" />
            <Link className="transition-colors hover:text-white" href="/">Terms of service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
