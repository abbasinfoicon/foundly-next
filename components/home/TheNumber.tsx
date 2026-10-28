import Image from "next/image"
import { FaChartSimple } from "react-icons/fa6"

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
    label: "Google rankings improved for our clients",
    platforms: [{ name: "Google", src: "/assets/image/google.svg" }],
  },
  {
    value: "29,000",
    label: "AI citations and mentions earned",
    platforms: aiPlatforms,
  },
  {
    value: "25,000",
    label: "Leads generated for our clients",
    platforms: [],
  },
]

export default function TheNumber() {
  return (
    <section
      id="results"
      aria-labelledby="foundly-stats-title"
      className="w-full bg-white px-5 py-16 text-[#101014] sm:px-8 sm:py-20 lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1040px]">
        {/* Foundly.ai results heading */}
        <header className="mx-auto max-w-[720px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--primary-color)] sm:text-[13px]">
            The numbers
          </p>

          <h2
            id="foundly-stats-title"
            className="mt-4 text-[38px] font-medium leading-[1.08] tracking-[-0.065em] sm:text-[48px] md:text-[58px]"
          >
            Our clients show up
            <span className="block text-[var(--primary-color)]">
              everywhere people search
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[390px] text-[18px] leading-[1.65] text-[#73727f] sm:text-[20px]">
            Rankings, AI mentions and leads, added up across every client we work with.
          </p>
        </header>

        {/* Three key performance metrics */}
        <ul className="mt-12 grid grid-cols-1 sm:mt-14 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <li
              key={metric.value}
              className={`flex flex-col items-center px-5 py-7 text-center sm:px-6 sm:py-1 ${index !== 2 ? "sm:border-r sm:border-[#e9e8ee]" : ""
                } ${index !== 0 ? "border-t border-[#e9e8ee] sm:border-t-0" : ""
                }`}
            >
              <div
                className="flex h-[42px] items-center justify-center"
                aria-hidden="true"
              >
                {metric.platforms.length > 0 ? (
                  <div className="flex items-center justify-center">
                    {metric.platforms.map((platform, platformIndex) => (
                      <span
                        key={platform.name}
                        className={`relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#e9e8ee] bg-white shadow-[0_3px_10px_rgba(20,18,35,0.06)] ${platformIndex > 0 ? "-ml-[10px]" : ""
                          }`}
                      >
                        <Image
                          src={platform.src}
                          alt=""
                          width={20}
                          height={20}
                          className="h-5 w-5 object-contain"
                        />
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#e7e1ff] bg-[#f1edff] text-[var(--primary-color)]">
                    <FaChartSimple className="h-[17px] w-[17px]" />
                  </span>
                )}
              </div>

              <p className="mt-4 whitespace-nowrap text-[38px] font-medium leading-none tracking-[-0.055em] sm:text-[42px] md:text-[46px]">
                {metric.value}
                <span className="text-[var(--primary-color)]">+</span>
              </p>

              <p className="mt-3 max-w-[190px] text-[15px] leading-[1.55] text-[#73727f] sm:text-[14px]">
                {metric.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
