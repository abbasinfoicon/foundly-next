"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useMemo, useState  } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FiCalendar, FiArrowUpRight } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type Business = {
  id: string;
  name: string;
  category: string;
  location: string;
  logo: string;
  clicks: string;
  impressions: string;
  ctr: string;
  clickBase: number;
  impressionBase: number;
  href: string;
  spark: number[];
};

const businesses: Business[] = [
  {
    id: "chase",
    name: "Chase Insurance Brokers",
    category: "Business insurance",
    location: "Ontario",
    logo: "/assets/image/logo.png",
    clicks: "14.1K",
    impressions: "1.16M",
    ctr: "1.2%",
    clickBase: 14,
    impressionBase: 500,
    href: "/",
    spark: [20, 20, 21, 20, 22, 22, 23, 23, 24, 26, 25, 28, 29, 28, 32, 34, 35, 34, 40, 41, 44, 43, 50, 53, 56, 54, 62, 64, 61, 72, 76, 82, 79, 93, 100],
  },
  {
    id: "mississauga",
    name: "Mississauga Convention Centre",
    category: "Event venue",
    location: "Mississauga, ON",
    logo: "/assets/image/logo.png",
    clicks: "12.5K",
    impressions: "980K",
    ctr: "1.3%",
    clickBase: 12,
    impressionBase: 450,
    href: "/",
    spark: [18, 18, 19, 17, 19, 18, 20, 19, 22, 23, 22, 25, 26, 28, 27, 31, 35, 37, 39, 42, 41, 44, 49, 52, 51, 58, 60, 59, 64, 70, 68, 74, 79, 77, 85],
  },
  {
    id: "altima",
    name: "Altima Kitchens and Closets",
    category: "Custom cabinetry",
    location: "Brampton, ON",
    logo: "/assets/image/logo.png",
    clicks: "9.6K",
    impressions: "740K",
    ctr: "1.3%",
    clickBase: 10,
    impressionBase: 400,
    href: "/",
    spark: [16, 15, 16, 15, 17, 16, 18, 18, 17, 18, 19, 18, 20, 21, 21, 23, 24, 24, 26, 28, 30, 34, 36, 38, 41, 44, 48, 52, 57, 62, 67, 72, 78, 83, 88],
  },
  {
    id: "houseup",
    name: "HouseUp",
    category: "Real estate listings",
    location: "Ontario",
    logo: "/assets/image/logo.png",
    clicks: "30.4K",
    impressions: "2.08M",
    ctr: "1.5%",
    clickBase: 20,
    impressionBase: 700,
    href: "/",
    spark: [20, 20, 19, 21, 22, 21, 23, 23, 24, 23, 25, 26, 28, 29, 30, 34, 35, 38, 39, 43, 46, 49, 52, 55, 58, 61, 64, 69, 72, 76, 80, 84, 87, 90, 94],
  },
  {
    id: "next-level",
    name: "The Next Level",
    category: "VR entertainment",
    location: "London, ON",
    logo: "/assets/image/logo.png",
    clicks: "13.9K",
    impressions: "1.04M",
    ctr: "1.3%",
    clickBase: 13,
    impressionBase: 500,
    href: "/",
    spark: [17, 17, 18, 17, 18, 17, 19, 19, 18, 20, 21, 20, 22, 22, 25, 24, 28, 31, 30, 34, 38, 37, 41, 44, 47, 50, 49, 56, 61, 64, 68, 75, 78, 82, 87],
  },
];

const monthLabels = [
  "9/15/25", "10/15/25", "11/15/25", "12/15/25", "1/15/26", "2/15/26",
  "3/16/26", "4/15/26", "5/15/26", "6/15/26", "7/15/26", "8/15/26", "9/14/26",
];

function Sparkline({ values, active }: { values: number[]; active: boolean }) {
  const gradientId = useId().replace(/:/g, "");

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * 100;
    const y = 25 - ((value - min) / range) * 19;
    return `${x},${y}`;
  });

  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point}`)
    .join(" ");

  const areaPath = `${linePath} L 100,28 L 0,28 Z`;

  return (
    <svg
      viewBox="0 0 100 28"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="h-[42px] w-full overflow-visible"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Gradient area */}
      <path
        d={areaPath}
        fill={`url(#${gradientId})`}
      />

      {/* Trend line */}
      <path
        d={linePath}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function MeasuredResults() {
  const [selectedId, setSelectedId] = useState("next-level");
  const selected = businesses.find((business) => business.id === selectedId) ?? businesses[0];

  const chartData = useMemo<ChartData<"line">>(() => {
    const growth = selected.clickBase;
    const clicks = Array.from({ length: 52 }, (_, i) => {
      const progress = i / 51;
      const ramp = Math.max(0, progress - 0.22) / 0.78;
      const noise = Math.sin(i * 2.7) * (1.8 + progress * 7) + Math.cos(i * 1.33) * 2.1;
      return Math.max(2, Math.round(growth + ramp * (growth * 6.4) + noise));
    });
    const impressions = clicks.map((value, i) => Math.max(100, Math.round(value * 52 + Math.sin(i * 1.8) * 170)));
    return {
      labels: Array.from({ length: 52 }, (_, i) => monthLabels[Math.min(12, Math.floor((i / 51) * 12))]),
      datasets: [
        {
          label: "Total impressions",
          data: impressions,
          borderColor: "#6235bd",
          backgroundColor: "rgba(129, 81, 237, 0.10)",
          borderWidth: 1.6,
          pointRadius: 0,
          pointHoverRadius: 3,
          tension: 0.12,
          yAxisID: "y1",
          fill: true,
        },
        {
          label: "Total clicks",
          data: clicks,
          borderColor: "#4285f4",
          backgroundColor: "rgba(22, 139, 255, 0.13)",
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3,
          tension: 0.12,
          yAxisID: "y",
          fill: true,
        },
      ],
    };
  }, [selected]);

  const chartOptions = useMemo<ChartOptions<"line">>(() => ({
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false, mode: "index" },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#171721",
        padding: 10,
        titleFont: { size: 11 },
        bodyFont: { size: 11 },
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#9293a3",
          maxTicksLimit: 12,
          maxRotation: 0,
          font: { size: 10 },
        },
      },
      y: {
        position: "left",
        min: 0,
        max: Math.max(180, selected.clickBase * 9),
        grid: { color: "rgba(221,229,245,0.75)", drawTicks: false },
        border: { display: false },
        ticks: { color: "#9293a3", count: 4, padding: 8, font: { size: 10 } },
      },
      y1: {
        position: "right",
        min: 0,
        max: Math.max(9000, selected.impressionBase * 15),
        grid: { drawOnChartArea: false, drawTicks: false },
        border: { display: false },
        ticks: {
          color: "#9293a3",
          count: 4,
          padding: 8,
          font: { size: 10 },
          callback: (value) => Number(value) >= 1000 ? `${Number(value) / 1000}K` : value,
        },
      },
    },
  }), [selected]);

  return (
    <section id="results-proof" aria-labelledby="measured-results-title" className="mr-results-section w-full overflow-hidden bg-[#f3f6ff] px-4 pb-[76px] pt-[84px] text-[#101936] sm:px-6 lg:px-8 bg-contain bg-right-top bg-no-repeat" style={{backgroundImage: "url('/assets/image/bg/chart-bg.webp')"}}>
      {/* Keep the existing section heading exactly as supplied */}
      <header className="mx-auto flex max-w-[720px] flex-col items-center text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
          <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.06)]">
            <span className="text-base leading-none">✦</span>PROVEN IMPACT
          </p>
          <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
        </div>
        <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
          Real results from real <span className="text-[var(--primary-color)]">business owners</span>
        </h2>
        <p className="desc mx-auto mt-5 max-w-[991px] text-center leading-[1.65] text-[#555463]">
          See how brands use Foundly.ai to dominate search results and turn impressions into loyal customers.
        </p>
      </header>

      <div className="mx-auto mt-[50px] max-w-[1240px]">
        {/* Client selector cards */}
        <div role="tablist" aria-label="Choose a client property" className="mr-client-grid grid grid-cols-1 gap-2 pb-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {businesses.map((business, index) => {
            const active = selectedId === business.id;
            const growth = [18, 24, 12, 36, 28][index];
            const tones = [
              "text-[#398cff] from-[#dcecff]",
              "text-[#8b5cf6] from-[#eee4ff]",
              "text-[#ff987c] from-[#ffebe3]",
              "text-[#21c7c1] from-[#dcfbf7]",
              "text-[#398cff] from-[#dcecff]",
            ];
            return (
              <button
                key={business.id}
                id={`business-tab-${business.id}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="business-panel"
                onClick={() => setSelectedId(business.id)}
                className={`mr-client-card group relative flex min-h-[188px] min-w-0 w-full flex-col rounded-[19px] border bg-white p-[17px] text-left shadow-[0_7px_22px_rgba(38,60,120,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(38,60,120,0.13)] ${active ? "border-[#397bff] ring-2 ring-[#397bff]/20 shadow-[0_10px_25px_rgba(57,123,255,0.20)]" : "border-[#e8edf7]"}`}
              >
                {active && <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#168bff] to-[#625cff] text-white shadow-lg"><BsArrowRight/></span>}
                <span className="flex min-w-0 items-center gap-3 pr-7">
                  <span className="flex h-[43px] w-[43px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-white shadow-[0_3px_12px_rgba(37,70,130,0.12)]">
                    <Image src={business.logo} alt="" width={43} height={43} className="h-full w-full object-contain p-1" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="block line-clamp-2 text-[12px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#111a35] sm:text-[14px]">{business.name}</strong>
                    <span className="mt-1 block truncate text-[10px] leading-tight text-[#77829f] sm:text-[12px]">{business.category} · {business.location}</span>
                  </span>
                </span>
                <span className="mt-3 block w-full">
                  <span className={`block ${tones[index].split(" ")[0]}`}>
                    <Sparkline values={business.spark} active={active} />
                  </span>
                </span>
                <span className="mt-auto flex items-center gap-2 pt-2">
                  <strong className="text-[18px] font-bold tracking-[-0.04em] text-[#111a35]">{business.clicks}</strong>
                  <span className="rounded-full bg-[#e9fbf2] px-2 py-0.5 text-[10px] sm:text-[12px] font-semibold text-[#07934f]">↑ {growth}%</span>
                </span>
                <span className="text-[11px] text-[#7c87a2]">Total clicks</span>
              </button>
            );
          })}
        </div>

        {/* Selected client dashboard */}
        <div id="business-panel" role="tabpanel" aria-labelledby={`business-tab-${selected.id}`} className="relative overflow-hidden rounded-[25px] border border-white/90 bg-white/75 p-4 shadow-[0_18px_50px_rgba(45,67,130,0.12)] backdrop-blur-2xl sm:p-4 lg:p-6 bg-contain bg-right-top bg-no-repeat" style={{backgroundImage: "url('/assets/image/bg/chart-bg.webp')"}}>
          <div className="pointer-events-none absolute -right-10 -top-24 h-[340px] w-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(142,112,255,0.24),rgba(84,170,255,0.13)_45%,transparent_72%)] blur-2xl" />
          <div className="pointer-events-none absolute right-[9%] top-[-35px] h-[240px] w-[300px] rotate-[-18deg] rounded-[48%] bg-gradient-to-br from-[#d8c5ff]/70 via-[#b8dfff]/50 to-transparent blur-xl" />

          <div className="relative z-10 flex flex-wrap items-start justify-between gap-5">
            <div className="flex min-w-0 items-center gap-4 sm:gap-7">
              <span className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-white shadow-[0_7px_24px_rgba(54,83,150,0.12)] sm:h-[100px] sm:w-[100px]">
                <Image src={selected.logo} alt="" width={100} height={100} className="h-full w-full object-contain p-3" />
              </span>
              <div className="min-w-0">
                <h3 className="text-[20px] font-bold leading-tight tracking-[-0.055em] text-[#101936] sm:text-[24px]">{selected.name}</h3>
                <p className="text-[12px] text-[#7b86a4] sm:text-[16px]">{selected.category} · {selected.location}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["VR games", "Group events", "Parties"].map((tag, i) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-[#e7efff] px-3 py-1.5 text-[11px] font-semibold text-[#2464e9] sm:text-[13px]">
                      <span>{["◈", "◎", "⊙"][i]}</span>{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <span className="relative z-10 inline-flex h-[52px] items-center gap-3 rounded-[18px] border border-white bg-white/90 px-5 text-[14px] font-semibold text-[#182342] shadow-[0_6px_20px_rgba(52,70,130,0.09)]">
              <FiCalendar className="h-5 w-5 text-[#475a8b]" />Last 12 months <span className="text-[#7b86a4]"><BiChevronDown className="h-5 w-5 text-[#475a8b]"/></span>
            </span>
          </div>

          {/* Large colorful metric cards */}
          <div className="relative z-10 mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="mr-kpi-card relative min-h-[153px] overflow-hidden rounded-[19px] bg-gradient-to-br from-[#168fff] via-[#3289f7] to-[#4168f5] p-5 text-white shadow-[0_10px_25px_rgba(34,126,255,0.25)] sm:p-6">
              <div className="absolute -bottom-5 right-3 flex h-28 items-end gap-1.5 opacity-20">{[35, 52, 70, 90].map((h, i) => <span key={i} style={{ height: `${h}px` }} className="w-[18px] rounded-t-md bg-white" />)}</div>
              <div className="relative flex items-center gap-3"><span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/20 text-[27px]">↖</span><span className="text-[15px] font-semibold">Total clicks <span className="ml-1 text-white/70">ⓘ</span></span></div>
              <p className="relative mt-2 text-[39px] font-bold leading-none tracking-[-0.06em] sm:text-[43px]">{selected.clicks}</p>
              <p className="relative mt-2 inline-flex rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-[#078b50]">↑ 28% <span className="ml-2 font-medium text-[#314b77]">vs previous 12 months</span></p>
            </div>
            <div className="mr-kpi-card relative min-h-[153px] overflow-hidden rounded-[19px] bg-gradient-to-br from-[#8151e7] via-[#7041d2] to-[#5d35bb] p-5 text-white shadow-[0_10px_25px_rgba(105,61,205,0.24)] sm:p-6">
              <div className="absolute -bottom-5 right-3 flex h-28 items-end gap-1.5 opacity-20">{[40, 58, 78, 96].map((h, i) => <span key={i} style={{ height: `${h}px` }} className="w-[18px] rounded-t-md bg-white" />)}</div>
              <div className="relative flex items-center gap-3"><span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/20 text-[25px]">◉</span><span className="text-[15px] font-semibold">Total impressions <span className="ml-1 text-white/70">ⓘ</span></span></div>
              <p className="relative mt-2 text-[39px] font-bold leading-none tracking-[-0.06em] sm:text-[43px]">{selected.impressions}</p>
              <p className="relative mt-2 inline-flex rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-[#078b50]">↑ 42% <span className="ml-2 font-medium text-[#51466f]">vs previous 12 months</span></p>
            </div>
            <div className="mr-kpi-card relative min-h-[153px] overflow-hidden rounded-[19px] border border-white bg-white/80 p-5 text-[#101936] shadow-[0_8px_22px_rgba(52,70,130,0.08)] sm:p-6">
              <div className="absolute -bottom-5 right-3 flex h-28 items-end gap-1.5 opacity-15">{[35, 54, 76, 98].map((h, i) => <span key={i} style={{ height: `${h}px` }} className="w-[18px] rounded-t-md bg-[#338cff]" />)}</div>
              <div className="relative flex items-center gap-3"><span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#edf3ff] text-[25px] text-[#111a35]">▥</span><span className="text-[15px] font-semibold">Average CTR <span className="ml-1 text-[#8c98b4]">ⓘ</span></span></div>
              <p className="relative mt-2 text-[39px] font-bold leading-none tracking-[-0.06em] sm:text-[43px]">{selected.ctr}</p>
              <p className="relative mt-2 inline-flex rounded-full bg-[#e9fbf2] px-3 py-1 text-[12px] font-bold text-[#078b50]">↑ 12% <span className="ml-2 font-medium text-[#7b86a4]">vs previous 12 months</span></p>
            </div>
          </div>

          {/* Chart panel */}
          <div className="mr-chart-panel relative z-10 mt-5 rounded-[20px] border border-white bg-white/90 p-4 shadow-[0_8px_25px_rgba(46,67,125,0.07)] sm:p-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-6 text-[13px] font-semibold text-[#596789]">
                <span className="inline-flex items-center gap-2"><i className="h-3.5 w-3.5 rounded-full bg-[#168bff]" />Clicks</span>
                <span className="inline-flex items-center gap-2"><i className="h-3.5 w-3.5 rounded-full bg-[#8151ed]" />Impressions</span>
              </div>
              <div className="flex rounded-xl border border-[#e9edfa] bg-[#f7f9ff] p-1 text-[12px] font-semibold text-[#667393]">
                <span className="rounded-lg px-4 py-1.5">Day</span><span className="rounded-lg px-4 py-1.5">Week</span><span className="rounded-lg bg-gradient-to-r from-[#398cff] to-[#7060f5] px-4 py-1.5 text-white shadow">Month</span>
              </div>
            </div>
            <div className="relative h-[260px] w-full sm:h-[310px] lg:h-[330px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="relative z-10 mt-5 flex flex-wrap items-center justify-between gap-3 px-1">
            <p className="inline-flex items-center gap-3 text-[12px] text-[#7b86a4] sm:text-[14px]"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[20px] text-[#8656ff] shadow">♧</span>Illustrative performance visualization based on the selected customer metrics.</p>
            <Link href={selected.href} className="inline-flex items-center gap-3 rounded-full border border-[#dce7ff] bg-white px-5 py-3 text-[13px] font-bold text-[#1768ff] shadow-[0_5px_18px_rgba(50,110,255,0.12)] transition hover:-translate-y-0.5 hover:shadow-lg sm:text-[15px]">
              Explore case study <FiArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
