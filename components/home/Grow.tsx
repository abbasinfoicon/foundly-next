import Image from "next/image";
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
      <header className="relative z-40 mx-auto max-w-[820px] text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
          <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
            <span className="text-base leading-none">✦</span>
            EASY AUTOMATION
          </p>
          <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
        </div>

        <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
          3 simple steps to grow {" "}
          <span className="font-normal text-[var(--primary-color)]">with Foundly.ai</span>
        </h2>
        <p className="desc mx-auto mt-5 leading-[1.65] text-[#737381]">
          No marketing team needed. Just plug in your business and let AI scale your presence.
        </p>
      </header>

      {/* Three-step layout */}
      <ol className="mx-auto mt-12 grid max-w-[1240px] grid-cols-1 sm:mt-14 md:grid-cols-3 lg:mt-16">
        {/* Step 1: Add your business */}
        <li className="min-w-0 text-center">
          <div className="relative mx-auto flex w-full items-start justify-center mb-[52px]">
            <Image src="/assets/image/bg/image-1.webp" alt="bg-image" width="414" height="297" className="w-full"/>
          </div>

          <div className="relative max-w-[340px]">
            <h3 className="mt-[2px] text-[20px] font-medium leading-tight tracking-[-0.045em] sm:text-[25px]">
              1. Add your website
            </h3>
            <p className="mx-auto mt-[11px] text-[14px] leading-[1.65] text-[#737381] sm:text-[16px]">
              Enter your business website address. Foundly.ai learns your brand voice, services, and industry in minutes.
            </p>
          </div>
        </li>

        {/* Step 2: AI content ideas */}
        <li className="min-w-0 text-center">
          <div className="relative mx-auto flex w-full items-start justify-center mb-[52px]">
            <Image src="/assets/image/bg/image-2.webp" alt="bg-image" width="414" height="297" className="w-full"/>
          </div>

          <div className="relative max-w-[340px]">
            <h3 className="mt-[2px] text-[20px] font-medium leading-tight tracking-[-0.045em] sm:text-[22px]">
              2. AI writes & creates content
            </h3>
           <p className="mx-auto mt-[11px] text-[14px] leading-[1.65] text-[#737381] sm:text-[16px]">
              Get high-ranking blog posts, updated Google Business listings, and engaging social posts generated for you.
            </p>
          </div>
        </li>

        {/* Step 3: Growth dashboard */}
        <li className="min-w-0 text-center">
          <div className="relative mx-auto flex w-full items-start justify-center mb-[52px]">
            <Image src="/assets/image/bg/image-3.webp" alt="bg-image" width="414" height="297" className="w-full"/>
          </div>

          <div className="relative max-w-[340px]">
            <h3 className="mt-[2px] text-[20px] font-medium leading-tight tracking-[-0.045em] sm:text-[22px]">
              3. Get found & gain customers
            </h3>
           <p className="mx-auto mt-[11px] text-[14px] leading-[1.65] text-[#737381] sm:text-[16px]">
              Rank higher on Google and AI search engines to turn high-intent searchers into paying clients.
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default Grow;
