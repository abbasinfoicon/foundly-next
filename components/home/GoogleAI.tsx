import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiSearch,
  FiPackage,
  FiUsers,
  FiBriefcase,
  FiCoffee,
  FiShield,
  FiChevronRight,
} from "react-icons/fi";
import { SiGoogle } from "react-icons/si";

type Tag = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

type SearchResult = {
  query: string;
  brand: string;
  domain: string;
  favicon: string;
  title: string;
  description: string;
  tags: Tag[];
  stats: string;
  href: string;
};

const results: SearchResult[] = [
  {
    query: "cabinet makers Brampton",
    brand: "Altima Kitchens and Closets",
    domain: "altimakitchensandclosets.com",
    favicon: "/design-v3/brands/altima/favicon.jpg",
    title: "Altima Kitchens And Closets: GTA's Top Renovation &",
    description:
      "Altima Kitchens and Closets are GTA's trusted leaders in top-notch renovation & remodeling. Crafting custom spaces tailored to your desires.",
    tags: [
      { label: "Kitchens", icon: FiPackage  },
      { label: "Cabinetry", icon: FiPackage },
      { label: "Closets", icon: FiPackage },
    ],
    stats: "58 pages published, 187 internal links",
    href: "/case-studies/altima-kitchens",
  },
  {
    query: "corporate event venue Mississauga",
    brand: "Mississauga Convention Centre",
    domain: "mississaugaconvention.com",
    favicon: "/design-v3/brands/mississauga-convention/favicon.png",
    title: "Event Venue in Mississauga | Corporate & Social events",
    description:
      "Host unforgettable weddings, corporate events, conferences and celebrations at Mississauga Convention Centre with elegant venues and catering.",
    tags: [
      { label: "Conferences", icon: FiUsers },
      { label: "Meetings", icon: FiBriefcase },
      { label: "Catering", icon: FiCoffee },
    ],
    stats: "53 pages published, 8.7k local actions",
    href: "/case-studies/mississauga-convention",
  },
  {
    query: "business insurance Ontario",
    brand: "Chase Insurance Brokers",
    domain: "chaseinsurancebrokers.ca",
    favicon: "/design-v3/brands/chase-insurance/favicon.png",
    title: "Chase Insurance Broker | Best Insurance Broker in Toronto",
    description:
      "Best Insurance Broker in Toronto provide Auto Insurance, Home Insurance, Supervise Insurance, Visitor Insurance & more.",
    tags: [
      { label: "Business", icon: FiBriefcase },
      { label: "Commercial", icon: FiPackage },
      { label: "Personal", icon: FiShield },
    ],
    stats: "80 pages published, 30 keyword targets",
    href: "/case-studies/chase-insurance",
  },
  {
    query: "virtual reality London Ontario",
    brand: "The Next Level",
    domain: "thenextlevelvr.ca",
    favicon: "/design-v3/brands/next-level/favicon.png",
    title: "The Next Level | Virtual Reality Arcade in London, Ontario",
    description:
      "Equipped with 25 HTC VIVE™ headsets and a wide selection of the latest VR gaming experiences, The Next Level is one of the largest and most advanced virtual reality facilities in Canada.",
    tags: [
      { label: "VR games", icon: FiChevronRight },
      { label: "Group events", icon: FiUsers },
      { label: "Parties", icon: FiChevronRight },
    ],
    stats: "55 pages published, 21.3k profile views",
    href: "/case-studies/the-next-level",
  },
];

const aiLogos = [
  { src: "/assets/image/gpt.svg", alt: "ChatGPT" },
  { src: "/assets/image/gemini.svg", alt: "Gemini" },
  { src: "/assets/image/claude.svg", alt: "Claude" },
  { src: "/assets/image/perplexity-boundless-book.png", alt: "Perplexity" },
  { src: "/assets/image/microsoft-copilot.svg", alt: "Copilot" },
];

function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${className}`}>
      <Image
        src="/assets/image/google.svg"
        alt="Google"
        width={19}
        height={19}
        className="h-[19px] w-[19px] object-contain"
      />
    </span>
  );
}

function SearchCard({ result }: { result: SearchResult }) {
  return (
    <article className="flex h-full w-[352px] shrink-0 flex-col rounded-[19px] border border-[#e9e9ee] bg-white px-[22px] pb-[23px] pt-[22px] shadow-[0_4px_10px_rgba(17,17,25,0.06)] hover:shadow-[0_4px_10px_rgba(17,17,25,0.1)] transition-all duration-500 ease-in-out mt-[5px] hover:mt-[0px]">
      {/* Search query bar */}
      <div className="flex h-[41px] min-w-0 items-center gap-[9px] rounded-full border border-[#e9e9ee] px-[13px] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <GoogleMark />
        <span className="min-w-0 flex-1 truncate text-[12px] sm:text-[15px] font-medium tracking-[-0.025em] text-[#17171c]">
          {result.query}
        </span>
        <FiSearch className="h-[15px] w-[15px] shrink-0 text-[#9393a0]" />
      </div>

      {/* Search result source */}
      <div className="mt-[13px] flex min-w-0 items-center gap-[10px]">
        <span className="flex h-[35px] w-[35px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#ededf1] bg-white">
          <Image
            src="/assets/image/logo.png"
            alt=""
            width={35}
            height={35}
            className="h-full w-full object-contain"
          />
        </span>
        <div className="flex min-w-0 flex-col gap-[3px]">
          <strong className="truncate text-[12px] sm:text-[14px] font-medium leading-[1.2] tracking-[-0.035em] text-[#202027]">
            {result.brand}
          </strong>
          <span className="truncate text-[10px] sm:text-[12px] leading-[1.2] text-[#777783]">
            {result.domain}
          </span>
        </div>
      </div>

      {/* Search result title and description */}
      <h3 className="mt-3 line-clamp-2 min-h-[48px] text-[17px] sm:text-[20px] font-normal leading-[1.32] tracking-[-0.045em] text-[var(--primary-color)]">
        {result.title}
      </h3>
      <p className="mt-3 line-clamp-3 min-h-[53px] text-[12px] sm:text-[14px] leading-[1.55] tracking-[-0.015em] text-[#555563]">
        {result.description}
      </p>

      {/* Topic tags */}
      <ul className="mt-3 mb-3 flex min-h-[61px] flex-wrap content-start gap-[6px]">
        {result.tags.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="inline-flex h-[30px] items-center gap-[5px] rounded-full bg-[#f0eeff] px-[11px] text-[10px] sm:text-[13px] font-medium text-[var(--primary-color)]"
          >
            <Icon className="h-[12px] w-[12px]" />
            {label}
          </li>
        ))}
      </ul>

      {/* Published content metrics and case study link */}
      <div className="mt-auto border-t border-[#ececf0] pt-[12px]">
        <p className="truncate text-[11px] sm:text-[13px] font-medium tracking-[-0.025em] text-[#202027]">
          {result.stats}
        </p>
        <Link
          href={result.href}
          className="mt-[5px] inline-flex items-center gap-1 text-[10px] sm:text-[12px] text-[var(--primary-color)] hover:text-[#4533e9]"
        >
          Read the case study
          <FiChevronRight className="h-[11px] w-[11px]" />
        </Link>
      </div>
    </article>
  );
}

const GoogleAI = () => {
  return (
    <section
      id="content"
      aria-labelledby="foundly-found-title"
      className="w-full overflow-hidden bg-white px-5 pb-[72px] pt-[89px] text-[#101014] sm:px-8 sm:pt-[94px] lg:pb-[76px]"
    >
      {/* Section heading */}
      <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
        <h2
          id="foundly-found-title"
          className="flex flex-col items-center text-[38px] font-medium leading-[1.13] tracking-[-0.06em] sm:text-[48px] lg:text-[58px]"
        >
          <span>Pages that get found</span>
          <span className="mt-[8px] flex flex-wrap items-center justify-center gap-x-[9px]">
            <span>on</span>
            <span className="inline-flex items-center gap-0">
              <GoogleMark className="[&_img]:!h-[45px] [&_img]:!w-[45px]" />
              <span>oogle</span>
            </span>
            <span>&amp;</span>
            <em className="not-italic font-normal text-[var(--primary-color)]">AI</em>
          </span>
        </h2>

        {/* Search platform logos */}
        <div className="mt-[18px] flex h-[34px] items-center justify-center gap-[12px]">
          {aiLogos.map((logo) => (
            <span
              key={logo.alt}
              title={logo.alt}
              className="flex h-[41px] w-[41px] items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={41}
                height={41}
                className="h-[41px] w-[41px] object-contain"
              />
            </span>
          ))}
        </div>

        <p className="mt-[17px] max-w-[460px] text-[18px] sm:text-[20px] leading-[1.6] tracking-[-0.02em] text-[#737381]">
          We write the page that answers the search, in a way Google and AI can quote.
        </p>
      </div>

      {/* Horizontal examples strip, matching the clipped card row in the reference */}
      <div className="mx-auto mt-[58px] max-w-[1240px] overflow-x-auto pb-[6px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-[60px] lg:mt-[59px]">
        <div className="flex w-max gap-[23px]">
          {results.map((result) => (
            <SearchCard key={result.domain} result={result} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleAI;
