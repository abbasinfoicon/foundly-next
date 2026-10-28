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
  { name: "Galaxy Liquor", src: "/assets/image/client-logos/05.webp" },
  { name: "AWG Landscape and Construction", src: "/assets/image/client-logos/06.webp" },
  { name: "Client emblem", src: "/assets/image/client-logos/07.webp" },
]

const middleRow: ClientLogo[] = [
  { name: "Palacio Event Centre", src: "/assets/image/client-logos/08.webp" },
  { name: "HouseUp", src: "/assets/image/client-logos/09.webp" },
  { name: "ABC Decorative", src: "/assets/image/client-logos/10.webp" },
  { name: "Ask Era Immigration", src: "/assets/image/client-logos/11.webp" },
  { name: "The Next", src: "/assets/image/client-logos/12.webp" },
  { name: "JDASS", src: "/assets/image/client-logos/13.webp" },
  { name: "Client green wordmark", src: "/assets/image/client-logos/14.webp" },
]

const bottomRow: ClientLogo[] = [
  { name: "Gyre City", src: "/assets/image/client-logos/15.webp" },
  { name: "Oria Botanica", src: "/assets/image/client-logos/16.webp" },
  { name: "Client green wordmark", src: "/assets/image/client-logos/17.webp" },
  { name: "Mezbaan", src: "/assets/image/client-logos/18.webp" },
  { name: "LunchLink", src: "/assets/image/client-logos/19.webp" },
  { name: "Dadhwal Realty", src: "/assets/image/client-logos/20.webp" },
  { name: "Vice-Roy", src: "/assets/image/client-logos/21.webp" },
]

function LogoRow({ logos }: { logos: ClientLogo[] }) {
  return (
    <div className="grid grid-cols-2 items-stretch justify-items-stretch sm:grid-cols-4 md:grid-cols-7">
      {logos.map((logo) => (
        <div
          key={logo.name + logo.src}
          className="flex min-h-[88px] w-full items-center justify-center border-r border-dashed border-b border-[#777777]/70 px-3 py-4 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(4n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r md:[&:nth-child(7n)]:border-r-0"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={136}
            height={66}
            className="max-h-[66px] w-full object-contain"
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
      <div className="mx-auto max-w-[1050px]">
        <h2 className="text-center text-[26px] font-medium leading-[1.25] tracking-[-0.055em] sm:text-[32px] md:text-[34px]">
          Join <span className="text-[var(--primary-color)]">1,000+ Businesses</span> already getting found
        </h2>

        <div className="mx-auto mt-12 flex max-w-[650px] items-center gap-4 sm:mt-[50px] sm:gap-5">
          <span className="h-px flex-1 bg-[#e9e8ed]" />
          <p className="shrink-0 text-center text-[11px] font-medium uppercase tracking-[0.08em] text-[#777583] sm:text-[12px]">
            Businesses growing with Foundly.ai
          </p>
          <span className="h-px flex-1 bg-[#e9e8ed]" />
        </div>

        <div className="mt-8 sm:mt-10 [&>div+div]:mt-0">
          <LogoRow logos={topRow} />
          <LogoRow logos={middleRow} />
          <LogoRow logos={bottomRow} />
        </div>
      </div>
    </section>
  )
}
