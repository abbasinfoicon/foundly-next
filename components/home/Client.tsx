import Image from "next/image"

type ClientLogo = {
  name: string
  src: string
  width?: number
  height?: number
}

const topRow: ClientLogo[] = [
  { name: "Vikram Sharma", src: "/assets/image/client-logos/01.webp" },
  { name: "Client crest", src: "/assets/image/client-logos/02.webp" },
  { name: "Mississauga Convention Centre", src: "/assets/image/client-logos/03.webp" },
  { name: "Bugman Plus", src: "/assets/image/client-logos/04.webp" },
  { name: "Palacio Event Centre", src: "/assets/image/client-logos/05.webp" },
  { name: "HouseUp", src: "/assets/image/client-logos/06.webp" },
  { name: "ABC Decorative", src: "/assets/image/client-logos/07.webp" },
  { name: "Ask Era Immigration", src: "/assets/image/client-logos/08.webp" },
   { name: "Gyre City", src: "/assets/image/client-logos/09.webp" },
  { name: "Oria Botanica", src: "/assets/image/client-logos/10.webp" },
  { name: "Client green wordmark", src: "/assets/image/client-logos/11.webp" },
  { name: "Mezbaan", src: "/assets/image/client-logos/12.webp" },
]

function LogoRow({ logos }: { logos: ClientLogo[] }) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-4 md:gap-3">
      {logos.map((logo, index) => (
        <div
          key={`${logo.name}-${logo.src}-${index}`}
          className="group flex min-h-[92px] w-full items-center justify-center rounded-2xl border border-[#245ae2]/[0.13] bg-gradient-to-br from-white via-white to-[#f4f7ff] px-3 py-4 shadow-[0_5px_16px_rgba(36,90,226,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#245ae2]/30 hover:shadow-[0_12px_24px_rgba(36,90,226,0.13)] sm:min-h-[108px] sm:rounded-[20px] sm:px-3.5 md:min-h-[112px]"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={136}
            height={66}
            className="max-h-[62px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:max-h-[68px]"
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 18vw, 136px"
          />
        </div>
      ))}
    </div>
  )
}

export default function Client() {
  return (
    <section
      aria-label="Foundly.ai clients"
      className="w-full bg-white px-5 py-14 text-[#111116] sm:px-8 sm:py-16 lg:px-10 lg:py-[68px]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />

            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.06)]">
              <span className="text-base leading-none">✦</span>
              Businesses growing with Foundly.ai
            </p>

            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>

        <h2 className="text-center text-[26px] font-medium leading-[1.25] tracking-[-0.055em] sm:text-[32px] md:text-[34px]">
          Join <span className="text-[var(--primary-color)]">1,000+ Businesses</span> already getting found
        </h2>
        <p className="desc mt-5 max-w-[991px] leading-[1.65] text-[#555463] text-center mx-auto">Trusted by fast-growing brands, local businesses, and industry leaders to boost visibility across search engines and AI platforms.</p>

        {/* Modern client-logo panel — heading above remains unchanged */}
        <div className="relative mt-8 overflow-hidden rounded-[28px] border border-white/90 bg-gradient-to-br from-[#f8faff] via-white to-[#f3f5ff] p-3 shadow-[0_18px_55px_rgba(36,90,226,0.12)] sm:mt-10 sm:rounded-[32px] sm:p-5 md:p-6">
          <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-[#245ae2]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-violet-300/20 blur-3xl" />
          <div className="relative space-y-3 sm:space-y-3.5">
            <LogoRow logos={topRow} />
          </div>
        </div>
      </div>
    </section>
  )
}
