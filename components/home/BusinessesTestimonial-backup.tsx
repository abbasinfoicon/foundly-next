"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

type Story = {
  name: string;
  role: string;
  meta: string;
  avatar: string;
  quote: React.ReactNode;
  date: string;
  verified?: boolean;
  rich?: "chart" | "metrics";
};

const stories: Story[] = [
  {
    name: "Aisha Khan",
    role: "Owner, Toronto Smile Dental",
    meta: "Dental Clinic • Toronto, ON",
    avatar: "/assets/image/aisha-khan.svg",
    verified: true,
    rich: "chart",
    quote: <>We&apos;ve been getting <mark>noticeably more calls from Google</mark> since using Foundly.ai. Our visibility in local search has improved a lot and we&apos;re showing up for the right keywords. It&apos;s been a game changer for our clinic.</>,
    date: "Toronto, ON · Sep 15, 2026",
  },
  {
    name: "Marco Silva",
    role: "Owner, Silva Catering",
    meta: "Catering & Events • Toronto, ON",
    avatar: "/assets/image/aisha-khan.svg",
    verified: true,
    quote: <>Google and AI search are finally <mark>sending us qualified leads</mark>. Foundly.ai has made a huge difference for our catering business: <mark>more inquiries, more events</mark>, and less time worrying about SEO.</>,
    date: "Toronto, ON · Nov 11, 2024",
  },
  {
    name: "Daniel Romero",
    role: "Owner, Whitby Physio & Wellness",
    meta: "Physiotherapy Clinic • Whitby, ON",
    avatar: "/assets/image/aisha-khan.svg",
    verified: true,
    quote: <>Foundly.ai helped us show up more often in local search and we&apos;ve <mark>booked significantly more new patients</mark>. The setup was simple and the results have been consistent.</>,
    date: "Whitby, ON · Jan 22, 2025",
  },
  {
    name: "Emily Chen",
    role: "Owner, CleanNest Services",
    meta: "Home Cleaning • Richmond Hill, ON",
    avatar: "/assets/image/aisha-khan.svg",
    quote: <>Super easy to set up and we started <mark>seeing growth within a few weeks</mark>. Foundly.ai takes care of the technical stuff so I can focus on running my business. Highly recommend!</>,
    date: "Richmond Hill, ON · Feb 8, 2025",
  },
  {
    name: "Nadia Boulos",
    role: "Owner, Bright Lane Optometry",
    meta: "Optometry • Oakville, ON",
    avatar: "/assets/image/aisha-khan.svg",
    quote: <>We used to rely on word of mouth alone. Now <mark>people find us on Google</mark> before they have even asked a friend, and the booking calendar shows it.</>,
    date: "Oakville, ON · Mar 4, 2025",
  },
  {
    name: "Omar Hassan",
    role: "Founder, Levant Home Renovations",
    meta: "Contractor • Vaughan, ON",
    avatar: "/assets/image/aisha-khan.svg",
    verified: true,
    rich: "metrics",
    quote: <>We replaced our manual SEO work with Foundly.ai and now get <mark>steady visibility across Google and AI search</mark>. More qualified leads, less effort, and a clear ROI.</>,
    date: "Vaughan, ON · Sep 10, 2026",
  },
  {
    name: "Priya Mehta",
    role: "Manager, The Grand Oak Events",
    meta: "Event Venue • Mississauga, ON",
    avatar: "/assets/image/aisha-khan.svg",
    quote: <>We&apos;ve seen <mark>a real improvement in our Google rankings</mark> and <mark>a steady increase in inbound leads</mark> since switching to Foundly.ai. It&apos;s helped more people discover our venue, especially through local and AI search.</>,
    date: "Mississauga, ON · Dec 3, 2024",
  },
];

function VerifiedMark() {
  return <FiCheckCircle aria-label="Verified customer" className="ml-1 inline-block h-[12px] w-[12px] text-sky-500" />;
}

function TrendChart() {
  const points = Array.from({ length: 92 }, (_, i) => {
    const x = (i / 91) * 260;
    const baseline = 74 - i * 0.57;
    const noise = Math.sin(i * 2.7) * 4 + Math.sin(i * 0.91) * 5 + (i > 50 ? Math.sin(i * 4.4) * 7 : 0);
    return `${x.toFixed(1)},${Math.max(7, Math.min(83, baseline + noise)).toFixed(1)}`;
  }).join(" ");
  const area = `0,92 ${points} 260,92`;

  return (
    <div className="mt-3 rounded-xl border border-violet-200/80 bg-gradient-to-b from-[#fbfaff] to-[#f3f0ff] p-2.5">
      <div className="flex items-start justify-between gap-2 text-[12px] sm:text-[14px] leading-[1.45] text-[#555568]">
        <span>People finding this business on Google<small className="mt-0.5 block text-[10px] sm:text-[12px] text-[#777789]">More local customers are discovering the clinic.</small></span>
      </div>
      <div className="mt-1 flex items-center gap-1 text-[28px] sm:text-[32px] font-medium leading-none tracking-[-0.04em] text-emerald-600">
        <FiArrowUpRight className="h-5 w-5" />204%
      </div>
      <svg viewBox="0 0 260 92" preserveAspectRatio="none" className="mt-2 h-[170px] w-full overflow-visible" aria-label="Illustrative Google visibility growth chart" role="img">
        <defs>
          <linearGradient id="foundly-trend-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4285f4" stopOpacity=".22" />
            <stop offset="100%" stopColor="#4285f4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[23, 46, 69, 92].map((y) => <line key={y} x1="0" x2="260" y1={y} y2={y} stroke={y === 92 ? "#dadce0" : "#ececf1"} strokeWidth="1" vectorEffect="non-scaling-stroke" />)}
        <polygon points={area} fill="url(#foundly-trend-fill)" />
        <polyline points={points} fill="none" stroke="#4285f4" strokeWidth="1.7" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <circle cx="260" cy={Math.max(7, Math.min(83, 74 - 91 * .57 + Math.sin(91 * 2.7) * 4 + Math.sin(91 * .91) * 5 + Math.sin(91 * 4.4) * 7))} r="2.7" fill="#fff" stroke="#4285f4" strokeWidth="1.5" />
      </svg>
      <div className="flex justify-between px-0.5 text-[10px] sm:text-[12px] text-[#858598]"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div>
    </div>
  );
}

function PerformanceMetrics() {
  const metrics = [
    ["Total Clicks", "8.4K", "52%"],
    ["Impressions", "210K", "73%"],
    ["Avg. Position", "6.2", "4.1"],
    ["Leads from Search", "327", "61%"],
  ];
  return (
    <div className="mt-3 rounded-xl border border-violet-200/80 bg-[#fbfaff] p-2.5">
      <div className="flex items-center justify-between gap-2 text-[11px] sm:text-[14px] text-[#454558]">
        <span>Search Performance</span><span className="rounded-md border border-[#e7e5f1] px-2 py-1 text-[10px] sm:text-[12px] text-[#777789]">Last 6 months</span>
      </div>
      <div className="mt-1.5 grid grid-cols-2 gap-1.5">
        {metrics.map(([label, value, increase]) => (
          <div key={label} className="min-h-[92px] rounded-lg bg-[#f4f3fa] p-2">
            <span className="text-[10px] sm:text-[13px] text-[#666679]">{label}</span>
            <p className="mt-1 flex flex-wrap items-baseline gap-1 text-[#11111a]"><strong className="text-[18px] sm:text-[23px] font-medium tracking-[-0.04em]">{value}</strong><span className="text-[10px] sm:text-[12px] font-medium text-emerald-600">↑ {increase}</span></p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-2 rounded-lg bg-[#f0edff] p-2 text-[var(--primary-color)]">
        <LuSparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        <div><strong className="block text-[12px] sm:text-[14px] font-medium">Now appearing in AI search</strong><span className="mt-0.5 block text-[10px] sm:text-[13px] text-[#66617d]">Mentioned in ChatGPT, Gemini and more.</span></div>
      </div>
    </div>
  );
}

function TestimonialCard({ story }: { story: Story }) {
  return (
    <figure className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[22px] border border-white/90 bg-white/90 p-5 shadow-[0_12px_32px_rgba(48,70,150,0.09)] ring-1 ring-[#dce6ff]/70 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(55,90,190,0.14)] sm:p-6">
      <span aria-hidden="true" className="pointer-events-none absolute right-5 top-3 text-[76px] font-serif leading-[0.9] text-[#e7e2ff] sm:text-[84px]">“</span>
      <header className="relative z-[1] flex items-center gap-3 pr-8">
        <Image src={story.avatar} alt="" width={64} height={64} className="h-12 w-12 shrink-0 rounded-full border-2 border-white object-cover shadow-[0_3px_12px_rgba(36,90,226,0.14)] sm:h-16 sm:w-16" />
        <div className="min-w-0">
          <p className="flex items-center text-[15px] sm:text-[18px] font-medium leading-[1.35] tracking-[-0.02em] text-[#11111a]">{story.name}{story.verified && <VerifiedMark />}</p>
          <p className="mt-0.5 text-[12px] sm:text-[15px] leading-[1.4] text-[#353548]">{story.role}</p>
          <p className="mt-0.5 text-[10px] sm:text-[13px] leading-[1.4] text-[#777789]">{story.meta}</p>
        </div>
      </header>
      <blockquote className="relative z-[1] mt-4 text-[15px] leading-[1.62] tracking-[-0.012em] text-[#202b49] sm:text-[17px] [&_mark]:rounded-[5px] [&_mark]:bg-[#e8edff] [&_mark]:px-1 [&_mark]:py-[1px] [&_mark]:text-[#245ae2]">
        {story.quote}
      </blockquote>
      {story.rich === "chart" && <TrendChart />}
      {story.rich === "metrics" && <PerformanceMetrics />}
      <figcaption className="mt-3 border-t border-[#e9edf7] pt-3 text-[11px] leading-[1.4] text-[#7b86a4] sm:text-[13px]">{story.date}</figcaption>
    </figure>
  );
}

export default function BusinessesTestimonial() {
  return (
    <section id="testimonials" aria-labelledby="foundly-testimonials-title" className="bg-[#fbfaff] px-4 py-12 text-[#11111a] sm:px-6 sm:py-14 lg:px-8 lg:py-12 bg-cover" style={{backgroundImage: "url(/assets/image/bg/testimonial-bg.webp)"}}>
      <div className="mx-auto max-w-[1240px]">
        <header className="relative z-40 mx-auto max-w-[767px] text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
              <span className="text-base leading-none">✦</span>
              PROVEN IMPACT
            </p>
            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
          <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
            Real results  from real <span className="text-[var(--primary-color)]">business owners</span>
          </h2>
          <p className="desc mx-auto mt-5 leading-[1.65] text-[#737381]">
            See how brands use Foundly.ai to dominate search results and turn impressions into loyal customers.
          </p>
        </header>

        <div className="mt-[50px] grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {/* Left column: featured growth story + shorter testimonial */}
          <div className="flex flex-col gap-5 lg:h-[980px]">
            <div className="min-h-0 flex-[2.05]">
              <TestimonialCard story={stories[0]} />
            </div>
            <div className="min-h-0 flex-1">
              <TestimonialCard story={stories[1]} />
            </div>
          </div>

          {/* Center column: three balanced testimonial cards */}
          <div className="flex flex-col gap-5 lg:h-[980px]">
            <div className="min-h-0 flex-[1.12]">
              <TestimonialCard story={stories[2]} />
            </div>
            <div className="min-h-0 flex-1">
              <TestimonialCard story={stories[3]} />
            </div>
            <div className="min-h-0 flex-[0.9]">
              <TestimonialCard story={stories[4]} />
            </div>
          </div>

          {/* Right column: performance story + shorter testimonial */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1 lg:h-[980px]">
            <div className="min-h-0 flex-[1.7]">
              <TestimonialCard story={stories[5]} />
            </div>
            <div className="min-h-0 flex-1">
              <TestimonialCard story={stories[6]} />
            </div>
          </div>
        </div>

        <div className="mt-7 flex justify-center">
          <Link href="/case-studies" className="inline-flex items-center gap-3 rounded-full border border-[#eeedf4] bg-white py-2 pl-3 pr-2 shadow-[0_5px_18px_rgba(36,30,90,0.08)] transition hover:-translate-y-0.5">
            <span className="flex -space-x-1.5" aria-hidden="true">
              {["aisha-khan", "aisha-khan2", "aisha-khan3", "aisha-khan4"].map((avatar) => (
                <Image key={avatar} src={`/assets/image/aisha-khan.svg`} alt="" width={20} height={20} className="h-5 w-5 rounded-full border-2 border-white object-cover" />
              ))}
            </span>
            <span className="text-[12px] sm:text-[15px] font-medium text-[#171727]">1,000+ businesses trust Foundly.ai</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#f0edff] px-3 py-2 text-[11px] sm:text-[14px] font-medium text-[var(--primary-color)]">View more <FiArrowUpRight className="h-3 w-3" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
