"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
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
import { FiCheck, FiCalendar, FiArrowUpRight } from "react-icons/fi";

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
  const points = values.map((value, index) => `${(index / (values.length - 1)) * 100},${26 - (value / 100) * 22}`).join(" ");
  return (
    <svg viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden="true" className={`h-[28px] w-full ${active ? "text-[#4285f4]" : "text-[#b6bfd1]"}`}>
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function MeasuredResults() {
  const [selectedId, setSelectedId] = useState("chase");
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
          backgroundColor: "rgba(98, 53, 189, 0.035)",
          borderWidth: 1.6,
          pointRadius: 0,
          pointHoverRadius: 3,
          tension: 0.12,
          yAxisID: "y1",
          fill: false,
        },
        {
          label: "Total clicks",
          data: clicks,
          borderColor: "#4285f4",
          backgroundColor: "rgba(66, 133, 244, 0.04)",
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3,
          tension: 0.12,
          yAxisID: "y",
          fill: false,
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
          maxTicksLimit: 3,
          maxRotation: 0,
          font: { size: 10 },
        },
      },
      y: {
        position: "left",
        min: 0,
        max: Math.max(180, selected.clickBase * 9),
        grid: { color: "#ececf2", drawTicks: false },
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
    <section id="results-proof" aria-labelledby="measured-results-title" className="w-full overflow-hidden bg-[#faf9ff] px-5 pb-[78px] pt-[84px] text-[#111116] sm:px-8 sm:pt-[88px] lg:pb-[80px]">
      {/* Foundly.ai measured results heading */}
      <header className="mx-auto flex max-w-[720px] flex-col items-center text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />

            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.06)]">
              <span className="text-base leading-none">✦</span>
              PROVEN IMPACT
            </p>

            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
        <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
          Real results from real  <span className="text-[var(--primary-color)]">business owners</span>
        </h2>
        <p className="desc mt-5 max-w-[991px] leading-[1.65] text-[#555463] text-center mx-auto">
          See how brands use Foundly.ai to dominate search results and turn impressions into loyal customers.
        </p>
      </header>

      {/* Select a client property using accessible tabs */}
      <div className="mx-auto mt-[50px] max-w-[1240px]">
        <div role="tablist" aria-label="Choose a client property" className="flex justify-between gap-[9px] overflow-x-auto pb-[13px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {businesses.map((business) => {
            const active = selectedId === business.id;
            return (
              <button
                key={business.id}
                id={`business-tab-${business.id}`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="business-panel"
                onClick={() => setSelectedId(business.id)}
                className={`flex h-auto max-w-[246px] shrink-0 flex-col rounded-[14px] border bg-white px-[12px] pb-[9px] pt-[10px] text-left shadow-[0_3px_9px_rgba(25,20,60,0.07)] transition-all duration-200 ${active ? "border-[#a69bff] ring-1 ring-[var(--primary-color)] shadow-[0_7px_16px_rgba(101,83,255,0.12)]" : "border-[#e8e7ef] hover:border-[#c9c3ff]"}`}
              >
                <span className="flex w-full min-w-0 items-center gap-[8px]">
                  <span className="flex h-[27px] w-[27px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#efeff3] bg-white">
                    <Image src={business.logo} alt="" width={27} height={27} className="h-full w-full object-contain" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="block line-clamp-2 text-[12px] sm:text-[14px] font-medium leading-[1.3] tracking-[-0.025em] text-[#202027]">{business.name}</strong>
                    <span className="mt-[3px] block truncate text-[10px] sm:text-[12px] leading-[1.2] text-[#777786]">{business.category} · {business.location}</span>
                  </span>
                </span>
                <span className="mt-auto block w-full">
                  <Sparkline values={business.spark} active={active} />
                  <span className="mt-3 block text-[10px] sm:text-[12px] font-medium text-[#686877]">{business.clicks} clicks</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected business performance panel */}
        <div id="business-panel" role="tabpanel" aria-labelledby={`business-tab-${selected.id}`} className="mt-[18px] rounded-[20px] border border-[#e7e5ee] bg-white px-[18px] pb-[24px] pt-[22px] shadow-[0_15px_35px_rgba(65,49,140,0.12)] sm:px-[22px] sm:pb-[27px] sm:pt-[24px]">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-[16px] sm:text-[21px] font-medium leading-[1.3] tracking-[-0.035em] text-[#17171d]">{selected.name}</h3>
              <p className="mt-[4px] text-[11px] sm:text-[14px] text-[#747483]">{selected.category} · {selected.location}</p>
            </div>
            <span className="inline-flex h-[27px] items-center gap-[6px] rounded-[8px] border border-[#ecebf1] px-[10px] text-[10px] sm:text-[11px] font-medium text-[#777785]">
              <FiCalendar className="h-[12px] w-[12px]" />
              Last 12 months
            </span>
          </div>

          {/* Google Search Console-style KPI tiles */}
          <div className="mt-[15px] grid grid-cols-1 overflow-hidden rounded-[11px] sm:grid-cols-3">
            <div className="min-h-[76px] bg-[#4285f4] px-[12px] py-[10px] text-white sm:px-[13px]">
              <p className="flex items-center gap-[6px] text-[10px] sm:text-[13px] font-medium"><FiCheck className="h-[11px] w-[11px] rounded-[2px] bg-white p-[1px] text-[#4285f4]" />Total clicks</p>
              <p className="mt-[5px] text-[30px] sm:text-[38px] font-medium leading-none tracking-[-0.06em]">{selected.clicks}</p>
            </div>
            <div className="min-h-[76px] bg-[#6036b3] px-[12px] py-[10px] text-white sm:px-[13px]">
              <p className="flex items-center gap-[6px] text-[10px] sm:text-[13px] font-medium"><FiCheck className="h-[11px] w-[11px] rounded-[2px] bg-white p-[1px] text-[#6036b3]" />Total impressions</p>
              <p className="mt-[5px] text-[30px] sm:text-[38px] font-medium leading-none tracking-[-0.06em]">{selected.impressions}</p>
            </div>
            <div className="min-h-[76px] bg-[#f0f1f2] px-[12px] py-[10px] text-[#62666c] sm:px-[13px]">
              <p className="flex items-center gap-[6px] text-[10px] sm:text-[13px] font-medium"><span className="h-[11px] w-[11px] rounded-[2px] border border-[#a6aab0]" />Average CTR</p>
              <p className="mt-[5px] text-[30px] sm:text-[38px] font-medium leading-none tracking-[-0.06em]">{selected.ctr}</p>
            </div>
          </div>

          {/* Responsive Chart.js clicks and impressions chart */}
          <div className="mt-[15px]">
            <div className="mb-[2px] flex justify-between px-[44px] text-[10px] sm:text-[13px] text-[#858596]">
              <span>Clicks</span>
              <span>Impressions</span>
            </div>
            <div className="relative h-[245px] w-full sm:h-[275px] lg:h-[278px]">
              <Line data={chartData} options={chartOptions} />
              <div className="pointer-events-none absolute left-[21.8%] top-[2px] hidden h-[calc(100%-23px)] border-l border-dashed border-[#7965ff] sm:block" />
              <div className="pointer-events-none absolute left-[21.8%] top-[3px] hidden rounded-[4px] border border-[#ded9ff] bg-white px-[6px] py-[2px] text-[10px] sm:text-[12px] text-[#4c4c5c] shadow-sm sm:block">
                <span className="font-semibold text-[var(--primary-color)]">foundly.ai</span> starts
              </div>
            </div>
          </div>

          <div className="mt-[10px] flex flex-wrap items-center justify-between gap-2 border-t border-[#f0eff4] pt-[12px]">
            <p className="text-[12px] sm:text-[14px] text-[#858596]">Illustrative performance visualization based on the selected customer metrics.</p>
            <Link href={selected.href} className="inline-flex items-center gap-1 text-[12px] sm:text-[14px] font-medium text-[var(--primary-color)] transition hover:text-[#4937dc]">
              Explore case study <FiArrowUpRight className="h-[13px] w-[13px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
