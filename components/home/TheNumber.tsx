import Image from "next/image"
import { FaArrowRight, FaArrowTrendUp, FaChartSimple } from "react-icons/fa6"

type PlatformLogo = {
  name: string
  src: string
}

const aiPlatforms: PlatformLogo[] = [
  { name: "OpenAI", src: "/assets/image/gpt.svg" },
  { name: "Claude", src: "/assets/image/claude.svg" },
  { name: "Perplexity", src: "/assets/image/perplexity-boundless-book.png" },
  { name: "Microsoft Copilot", src: "/assets/image/microsoft-copilot.svg" },
]

const metrics = [
  {
    value: "250,000",
    label: "Keywords ranked on Page 1 of Google",
    platforms: [{ name: "Google", src: "/assets/image/google.svg" }],
    cardStyle: "from-[#e3f4ff]/90 via-white/90 to-[#d7eaff]/90",
    glow: "bg-[#74c7ff]/30",
  },
  {
    value: "29,000",
    label: "AI search answers featuring our clients",
    platforms: aiPlatforms,
    cardStyle: "from-[#f0eaff]/90 via-white/90 to-[#e7ddff]/90",
    glow: "bg-[#b59aff]/30",
  },
  {
    value: "25,000",
    label: "Organic client leads delivered to our clients",
    platforms: [],
    cardStyle: "from-[#e2f5ff]/90 via-white/90 to-[#d4e7ff]/90",
    glow: "bg-[#65c9ff]/30",
  },
]

export default function TheNumber() {
  return (
    <section
      id="results"
      aria-labelledby="foundly-stats-title"
      className="relative isolate w-full overflow-hidden bg-white bg-cover bg-center bg-no-repeat px-5 py-16 text-[#10143a] sm:px-8 sm:py-20 lg:py-[100px]"
      style={{ backgroundImage: "url('/assets/image/bg/client-bg.webp')" }}
    >
      {/* Soft ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-[#8baaff]/25 blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#b5a2ff]/25 blur-[100px]" />

      <div className="mx-auto max-w-[1240px]">
        {/* Heading intentionally kept unchanged */}
        <header className="mx-auto max-w-[820px] text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
              <span className="text-base leading-none">✦</span>
              PROVEN RESULTS
            </p>
            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>

          <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
            Proven growth across{" "}
            <span className="text-[var(--primary-color)]">Google and AI search engines</span>
          </h2>

          <p className="desc mx-auto mt-5 leading-[1.65] text-[#555463]">
            Real rankings, citations, and high-converting leads generated across all our client campaigns.
          </p>
        </header>

        {/* Modern 3D-style metric cards */}
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {metrics.map((metric, index) => (
            <li
              key={metric.value}
              className={`${index === 1 ? "-top-5" : "top-3"} group relative flex flex-col items-center overflow-hidden rounded-[30px] border border-white/90 bg-gradient-to-br ${metric.cardStyle} px-5 pb-7 pt-7 text-center shadow-[0_16px_45px_rgba(54,91,190,0.10)] ring-1 ring-[#c9dcff]/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(54,91,190,0.18)] sm:px-4 sm:pt-8 lg:px-6`}
            >
              {/* Card glow and orbital decoration */}
              <span aria-hidden="true" className={`pointer-events-none absolute -right-12 top-5 h-36 w-36 rounded-full ${metric.glow} blur-3xl`} />
              <span aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-white/70 blur-3xl" />

              {/* Platform artwork */}
              <div className="relative z-10 flex h-[122px] w-full items-center justify-center">
                {metric.platforms.length > 1 ? (
                  <div className="relative flex items-center justify-center">
                    {metric.platforms.map((platform, platformIndex) => (
                      <span
                        key={platform.name}
                        className={`relative flex h-[76px] w-[76px] items-center justify-center rounded-[24px] border border-white/90 bg-gradient-to-br from-white to-[#f6f7ff] shadow-[0_10px_20px_rgba(69,77,150,0.13)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-[-2deg] ${platformIndex > 0 ? "-ml-3" : ""}`}
                      >
                        <Image src={platform.src} alt={platform.name} width={42} height={42} className="h-10 w-10 object-contain drop-shadow-sm" />
                      </span>
                    ))}
                  </div>
                ) : metric.platforms.length === 1 ? (
                  <div className="relative flex h-[104px] w-[104px] items-center justify-center">
                    <span aria-hidden="true" className="absolute inset-0 rounded-[28px] border border-white bg-gradient-to-br from-white/95 to-[#e5f2ff] shadow-[0_12px_24px_rgba(50,115,210,0.16)]" />
                    <Image src={metric.platforms[0].src} alt="Google" width={62} height={62} className="relative z-10 h-[60px] w-[60px] object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />
                    <FaArrowTrendUp aria-hidden="true" className="absolute -right-5 -top-2 z-20 h-9 w-9 -rotate-12 text-[#245ae2] drop-shadow-[0_4px_5px_rgba(36,90,226,0.25)]" />
                  </div>
                ) : (
                  <div className="relative flex h-[104px] w-[104px] items-center justify-center">
                    <span aria-hidden="true" className="absolute inset-0 rounded-[28px] border border-white bg-gradient-to-br from-white/95 to-[#e4f2ff] shadow-[0_12px_24px_rgba(50,115,210,0.16)]" />
                    <FaChartSimple className="relative z-10 h-12 w-12 text-[#245ae2] drop-shadow-[0_4px_6px_rgba(36,90,226,0.18)] transition-transform duration-300 group-hover:scale-110" />
                    <FaArrowTrendUp aria-hidden="true" className="absolute -right-5 -top-2 z-20 h-9 w-9 -rotate-12 text-sky-500 drop-shadow-[0_4px_5px_rgba(36,90,226,0.25)]" />
                  </div>
                )}
              </div>

              <p className="relative z-10 mt-3 whitespace-nowrap text-[36px] font-semibold leading-none tracking-[-0.055em] text-[#10143a] sm:text-[34px] md:text-[38px] lg:text-[44px]">
                {metric.value}<span className="text-[var(--primary-color)]">+</span>
              </p>

              <p className="relative z-10 mt-4 max-w-[240px] text-[15px] leading-[1.55] text-[#626b89] sm:text-[14px] lg:text-[16px]">
                {metric.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
