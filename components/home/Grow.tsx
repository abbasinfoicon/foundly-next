import React from "react";
import {
  FiGlobe,
  FiArrowRight,
  FiFileText,
  FiMapPin,
  FiMessageSquare,
  FiSearch,
  FiUsers,
  FiFilter,
  FiCheck,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

const growthPoints =
  "M0 70.5 L1.6 71.8 L3.3 70.5 L4.9 65.3 L6.6 70.5 L8.2 75.6 L9.9 75.6 L11.5 69.2 L13.2 67.9 L14.8 71.8 L16.5 67.9 L18.1 67.9 L19.8 71.8 L21.4 76.9 L23.1 69.2 L24.7 71.8 L26.4 67.9 L28 70.5 L29.7 67.9 L31.3 71.8 L33 75.6 L34.6 70.5 L36.3 75.6 L37.9 66.6 L39.6 74.3 L41.2 73 L42.9 74.3 L44.5 75.6 L46.2 67.9 L47.8 67.9 L49.5 66.6 L51.1 67.9 L52.7 67.9 L54.4 67.9 L56 74.3 L57.7 65.3 L59.3 61.4 L61 62.7 L62.6 67.9 L64.3 65.3 L65.9 71.8 L67.6 71.8 L69.2 62.7 L70.9 65.3 L72.5 65.3 L74.2 62.7 L75.8 62.7 L77.5 67.9 L79.1 67.9 L80.8 61.4 L82.4 61.4 L84.1 61.4 L85.7 61.4 L87.4 56.3 L89 62.7 L90.7 66.6 L92.3 60.2 L94 60.2 L95.6 61.4 L97.3 60.2 L98.9 61.4 L100.5 62.7 L102.2 67.9 L103.8 53.7 L105.5 58.9 L107.1 56.3 L108.8 56.3 L110.4 58.9 L112.1 58.9 L113.7 65.3 L115.4 57.6 L117 58.9 L118.7 55 L120.3 55 L122 65.3 L123.6 62.7 L125.3 61.4 L126.9 49.8 L128.6 57.6 L130.2 52.4 L131.9 49.8 L133.5 56.3 L135.2 61.4 L136.8 57.6 L138.5 56.3 L140.1 49.8 L141.8 52.4 L143.4 52.4 L145.1 51.1 L146.7 56.3 L148.4 64 L150 53.7 L151.6 51.1 L153.3 53.7 L154.9 49.8 L156.6 58.9 L158.2 62.7 L159.9 58.9 L161.5 48.5 L163.2 48.5 L164.8 53.7 L166.5 46 L168.1 47.3 L169.8 51.1 L171.4 55 L173.1 52.4 L174.7 47.3 L176.4 55 L178 51.1 L179.7 51.1 L181.3 52.4 L183 55 L184.6 44.7 L186.3 38.2 L187.9 40.8 L189.6 47.3 L191.2 51.1 L192.9 48.5 L194.5 53.7 L196.2 47.3 L197.8 36.9 L199.5 38.2 L201.1 42.1 L202.7 43.4 L204.4 47.3 L206 49.8 L207.7 30.5 L209.3 36.9 L211 35.6 L212.6 36.9 L214.3 36.9 L215.9 40.8 L217.6 46 L219.2 31.8 L220.9 36.9 L222.5 38.2 L224.2 38.2 L225.8 38.2 L227.5 46 L229.1 44.7 L230.8 30.5 L232.4 29.2 L234.1 35.6 L235.7 35.6 L237.4 34.4 L239 34.4 L240.7 42.1 L242.3 35.6 L244 26.6 L245.6 22.8 L247.3 33.1 L248.9 34.4 L250.5 40.8 L252.2 39.5 L253.8 26.6 L255.5 26.6 L257.1 22.8 L258.8 26.6 L260.4 26.6 L262.1 35.6 L263.7 35.6 L265.4 31.8 L267 25.3 L268.7 22.8 L270.3 22.8 L272 30.5 L273.6 38.2 L275.3 36.9 L276.9 26.6 L278.6 24 L280.2 18.9 L281.9 20.2 L283.5 21.5 L285.2 31.8 L286.8 27.9 L288.5 11.1 L290.1 12.4 L291.8 18.9 L293.4 26.6 L295.1 21.5 L296.7 27.9 L298.4 25.3 L300 15";

const SparkMarks = ({ className = "" }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none absolute h-8 w-8 ${className}`}
  >
    <i className="absolute left-1 top-0 h-3 w-[3px] rotate-[-38deg] rounded-full bg-[var(--primary-color)]" />
    <i className="absolute left-3.5 top-[-8px] h-4 w-[3px] rotate-[-5deg] rounded-full bg-[var(--primary-color)]" />
    <i className="absolute left-6 top-0 h-3 w-[3px] rotate-[32deg] rounded-full bg-[var(--primary-color)]" />
  </span>
);

const Grow = () => {
  return (
    <section
      id="steps"
      aria-labelledby="foundly-steps-title"
      className="w-full overflow-hidden bg-[#faf9ff] px-5 py-16 text-[#111116] sm:px-8 sm:py-20 lg:px-10 lg:pb-24 lg:pt-[94px]"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-5xl text-center">
        <h2
          id="foundly-steps-title"
          className="text-[34px] font-medium leading-[1.12] tracking-[-0.055em] sm:text-[42px] md:text-[48px] lg:text-[58px]"
        >
          3 steps to grow with{" "}
          <span className="font-normal text-[var(--primary-color)]">Foundly.ai</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[340px] text-[18px] sm:text-[20px] leading-[1.65] text-[#737381] sm:max-w-[390px]">
          You add your website. It writes and publishes. Customers find you.
        </p>
      </div>

      {/* Three-step layout */}
      <ol className="mx-auto mt-14 grid max-w-[1240px] grid-cols-1 gap-12 sm:mt-16 sm:gap-14 md:grid-cols-3 md:gap-8 lg:mt-[112px] lg:gap-[70px]">
        {/* Step 1: Add your business */}
        <li className="min-w-0 text-center">
          <div className="relative mx-auto flex h-[250px] w-full max-w-[340px] items-start justify-center sm:h-[260px] mb-[52px]">
            <SparkMarks className="-left-2 top-[-8px] sm:left-[-4px]" />
            <div className="relative mt-0 flex h-[236px] w-full max-w-[284px] flex-col justify-center rounded-[20px] border border-[#e9e8ef] bg-white px-[19px] shadow-[0_16px_42px_rgba(31,28,60,0.12)] sm:h-[236px] sm:px-[19px]">
              <p className="mb-[14px] text-left text-[16px] sm:text-[18px] font-medium tracking-[-0.035em]">
                Your business
              </p>
              <div className="flex h-[45px] items-center gap-[9px] rounded-[12px] border border-[#e3e2e9] bg-[#f7f7fa] px-[13px] text-[#898995]">
                <FiGlobe className="h-[16px] w-[16px] shrink-0" />
                <span className="text-[14px] font-medium text-[#555563]">
                  yourbusiness.com
                </span>
                <span className="h-[17px] w-[1.5px] animate-pulse bg-[var(--primary-color)]" />
              </div>
              <div className="mt-[13px] flex h-[49px] items-center justify-center gap-2 rounded-[12px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)] text-[16px] font-semibold text-white shadow-[0_12px_22px_rgba(104,86,245,0.25)]">
                Get started <FiArrowRight className="h-[17px] w-[17px]" />
              </div>
            </div>
          </div>
          <h3 className="mt-[2px] text-[20px] font-medium leading-tight tracking-[-0.045em] sm:text-[25px]">
            1. Add your business
          </h3>
          <p className="mx-auto mt-[11px] max-w-[330px] text-[14px] leading-[1.65] text-[#737381] sm:text-[16px]">
            Give it your website address. It learns what you do in minutes.
          </p>
        </li>

        {/* Step 2: AI content ideas */}
        <li className="min-w-0 text-center">
          <div className="relative mx-auto flex h-[250px] w-full max-w-[340px] items-start justify-center sm:h-[260px] mb-[52px]">
            <SparkMarks className="right-[-3px] top-[-8px]" />
            <div className="absolute right-[13px] top-[32px] h-[158px] w-[calc(100%-45px)] max-w-[260px] rounded-[20px] bg-[#efedff] rotate-[5deg]" />
            <div className="relative z-10 mt-0 w-full max-w-[284px] rounded-[20px] border border-[#e9e8ef] bg-white px-[19px] pb-[22px] pt-[23px] text-left shadow-[0_16px_42px_rgba(31,28,60,0.12)]">
              <header className="mb-[14px] flex items-center gap-[11px]">
                <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[11px] bg-[#f0eeff] text-[var(--primary-color)]">
                  <HiOutlineSparkles className="h-[20px] w-[20px]" />
                </span>
                <p className="text-[16px] sm:text-[18px] font-medium tracking-[-0.035em]">
                  AI Content Ideas
                </p>
              </header>
              <ul className="space-y-[8px]">
                <li className="flex h-[42px] items-center gap-[9px] rounded-[12px] border border-[#e8e7ed] px-[11px]">
                  <FiFileText className="h-[15px] w-[15px] shrink-0 text-[var(--primary-color)]" />
                  <span className="whitespace-nowrap text-[14px] font-medium tracking-[-0.025em]">
                    Blog post
                  </span>
                  <span className="h-[7px] flex-1 rounded-full bg-[#efeff3]" />
                </li>
                <li className="flex h-[42px] items-center gap-[9px] rounded-[12px] border border-[#e8e7ed] px-[11px]">
                  <FiMapPin className="h-[15px] w-[15px] shrink-0 text-[var(--primary-color)]" />
                  <span className="whitespace-nowrap text-[14px] font-medium tracking-[-0.04em]">
                    Google listing update
                  </span>
                  <span className="h-[7px] min-w-4 flex-1 rounded-full bg-[#efeff3]" />
                </li>
                <li className="flex h-[42px] items-center gap-[9px] rounded-[12px] border border-[#e8e7ed] px-[11px]">
                  <FiMessageSquare className="h-[15px] w-[15px] shrink-0 text-[var(--primary-color)]" />
                  <span className="whitespace-nowrap text-[14px] font-medium tracking-[-0.025em]">
                    Social post
                  </span>
                  <span className="h-[7px] flex-1 rounded-full bg-[#efeff3]" />
                </li>
              </ul>
            </div>
            <div className="absolute bottom-[-2px] right-[-2px] z-20 flex h-[42px] items-center gap-[9px] rounded-full bg-white px-[15px] text-[14px] font-medium shadow-[0_12px_28px_rgba(31,28,60,0.13)] sm:right-[-7px]">
              <span className="flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[var(--primary-color)] text-white">
                <FiCheck className="h-[13px] w-[13px]" />
              </span>
              Approve &amp; publish
            </div>
            <svg
              className="absolute bottom-[-16px] right-[-14px] z-30 h-[22px] w-[20px] fill-[#111116] drop-shadow-sm"
              viewBox="0 0 20 22"
              aria-hidden="true"
            >
              <path d="M1.5 1 18 11.2l-7.1 1.5L7.8 20Z" />
            </svg>
          </div>
          <h3 className="mt-[2px] text-[20px] font-medium leading-tight tracking-[-0.045em] sm:text-[22px]">
            2. It writes your content
          </h3>
          <p className="mx-auto mt-[11px] max-w-[340px] text-[14px] leading-[1.65] text-[#737381] sm:text-[15px]">
            Pages for your site, posts for social, and your Google listing kept right.
          </p>
        </li>

        {/* Step 3: Growth dashboard */}
        <li className="min-w-0 text-center">
          <div className="relative mx-auto flex h-[250px] w-full max-w-[340px] items-start justify-center sm:h-[260px] mb-[52px]">
            <SparkMarks className="right-[-3px] top-[-8px]" />
            <div className="relative mt-0 h-[236px] w-full max-w-[284px] rounded-[20px] border border-[#e9e8ef] bg-white px-[18px] pb-[15px] pt-[18px] text-left shadow-[0_16px_42px_rgba(31,28,60,0.12)]">
              <header className="flex items-center justify-between">
                <p className="text-[16px] sm:text-[18px] font-medium tracking-[-0.035em]">Growth</p>
                <span className="rounded-[8px] border border-[#e8e7ed] px-[10px] py-[6px] text-[12px] text-[#777783]">
                  Last 6 months
                </span>
              </header>
              <div className="mt-[10px] grid grid-cols-3 gap-[7px]">
                <div className="flex h-[83px] flex-col rounded-[12px] bg-[#f0eeff] px-[8px] py-[8px]">
                  <FiSearch className="mb-[5px] h-[14px] w-[14px] text-[var(--primary-color)]" />
                  <strong className="text-[17px] font-medium leading-[1.1] tracking-[-0.05em]">+248%</strong>
                  <span className="mt-[3px] text-[10px] leading-[1.25] text-[#737381]">Search visibility</span>
                </div>
                <div className="flex h-[83px] flex-col rounded-[12px] bg-[#f0eeff] px-[7px] py-[8px]">
                  <FiUsers className="mb-[5px] h-[14px] w-[14px] text-[var(--primary-color)]" />
                  <strong className="text-[17px] font-medium leading-[1.1] tracking-[-0.05em]">+141%</strong>
                  <span className="mt-[3px] text-[10px] leading-[1.25] text-[#737381]">Website visitors</span>
                </div>
                <div className="flex h-[83px] flex-col rounded-[12px] bg-[#f0eeff] px-[7px] py-[8px]">
                  <FiFilter className="mb-[5px] h-[14px] w-[14px] text-[var(--primary-color)]" />
                  <strong className="text-[17px] font-medium leading-[1.1] tracking-[-0.05em]">+92%</strong>
                  <span className="mt-[3px] text-[10px] leading-[1.25] text-[#737381]">New customers</span>
                </div>
              </div>
              <div className="mt-[17px] h-[65px] w-full">
                <svg
                  viewBox="0 0 300 104"
                  preserveAspectRatio="none"
                  className="h-full w-full overflow-visible"
                  aria-hidden="true"
                >
                  <line x1="0" x2="300" y1="26" y2="26" stroke="#ececf1" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                  <line x1="0" x2="300" y1="52" y2="52" stroke="#ececf1" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                  <line x1="0" x2="300" y1="78" y2="78" stroke="#ececf1" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                  <line x1="0" x2="300" y1="104" y2="104" stroke="#dadce0" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                  <path
                    d={growthPoints}
                    pathLength="1"
                    fill="none"
                    stroke="#4285f4"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h3 className="mt-[2px] text-[20px] font-medium leading-tight tracking-[-0.045em] sm:text-[22px]">
            3. Get found, get customers
          </h3>
          <p className="mx-auto mt-[11px] max-w-[340px] text-[14px] leading-[1.65] text-[#737381] sm:text-[15px]">
            You show up when people search, and more of them become customers.
          </p>
        </li>
      </ol>
    </section>
  );
};

export default Grow;
