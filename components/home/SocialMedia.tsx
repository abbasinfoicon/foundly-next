"use client";

import Link from "next/link";
import {
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiWix,
  SiFramer,
  SiGoogle,
  SiInstagram,
  SiFacebook,
  SiX,
} from "react-icons/si";
import { FiCode, FiArrowUpRight } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

type Integration = {
  name: string;
  detail: string;
  href: string;
  icon: React.ReactNode;
  iconColor?: string;
  featured?: boolean;
};

const websiteIntegrations: Integration[] = [
  {
    name: "WordPress",
    detail: "Posts to the blog and category you pick",
    href: "/",
    icon: <SiWordpress />,
    iconColor: "#21759b",
  },
  {
    name: "Shopify",
    detail: "Articles on your store blog",
    href: "/",
    icon: <SiShopify />,
    iconColor: "#5e8e3e",
  },
  {
    name: "Webflow",
    detail: "Posts into your CMS collection",
    href: "/",
    icon: <SiWebflow />,
    iconColor: "#146ef5",
  },
  {
    name: "Wix",
    detail: "Blog posts, as drafts or live",
    href: "/",
    icon: <SiWix />,
    iconColor: "#0a0a0f",
  },
  {
    name: "Framer",
    detail: "Articles into your CMS collection",
    href: "/",
    icon: <SiFramer />,
    iconColor: "#0a0a0f",
  },
  {
    name: "Custom API",
    detail: "Your own site or content system",
    href: "/",
    icon: <FiCode />,
    iconColor: "#11111a",
  },
];

const socialIntegrations: Integration[] = [
  {
    name: "Google Business Profile",
    detail: "Local posts, profile and review replies",
    href: "/",
    icon: <SiGoogle />,
    iconColor: "#4285f4",
  },
  {
    name: "Instagram",
    detail: "Carousels and photo posts",
    href: "/",
    icon: <SiInstagram />,
    iconColor: "#e4405f",
  },
  {
    name: "Facebook",
    detail: "Photo posts for your page",
    href: "/",
    icon: <SiFacebook />,
    iconColor: "#1877f2",
  },
  {
    name: "LinkedIn",
    detail: "Posts for businesses",
    href: "/",
    icon: <SlSocialLinkedin />,
    iconColor: "#0a66c2",
  },
  {
    name: "X",
    detail: "Short posts with a photo",
    href: "/",
    icon: <SiX />,
    iconColor: "#0a0a0f",
  },
  {
    name: "See all integrations",
    detail: "Setup guides for each one",
    href: "/",
    icon: <FiArrowUpRight />,
    featured: true,
  },
];

function IntegrationArtwork({ index, featured }: { index: number; featured?: boolean }) {
  const accents = ["#3988ff", "#35d878", "#37a9f5", "#9a6cff", "#8794ad", "#fb8da8"];
  const accent = featured ? "#8065ff" : accents[index % accents.length];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 132"
      className="pointer-events-none absolute -bottom-[2px] -right-[2px] w-[230px] max-w-[100%]"
      fill="none"
    >
      <path d="M0 76C42 48 65 103 111 75C153 49 177 67 240 20V132H0V76Z" fill={accent} opacity=".075" />
      <path d="M0 91C44 66 68 115 117 88C164 62 189 83 240 43V132H0V91Z" fill={accent} opacity=".09" />
      <path d="M0 96C52 78 73 119 126 96C173 76 200 88 240 62" stroke={accent} strokeWidth="1.4" opacity=".24" />
      {index % 3 === 0 && (
        <g transform="translate(151 38) rotate(-5)">
          <rect x="0" y="0" width="67" height="76" rx="9" fill="white" stroke={accent} strokeOpacity=".18" />
          <rect x="10" y="12" width="47" height="8" rx="3" fill={accent} opacity=".28" />
          <rect x="10" y="29" width="39" height="5" rx="2.5" fill={accent} opacity=".22" />
          <rect x="10" y="41" width="45" height="5" rx="2.5" fill={accent} opacity=".18" />
          <rect x="10" y="53" width="29" height="5" rx="2.5" fill={accent} opacity=".16" />
        </g>
      )}
      {index % 3 === 1 && (
        <g transform="translate(163 27)">
          <path d="M8 20H58L65 83H1L8 20Z" fill="white" stroke={accent} strokeOpacity=".22" />
          <path d="M20 22C20 5 47 5 47 22" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <path d="M28 39H48M28 51H48" stroke={accent} strokeWidth="4" strokeLinecap="round" opacity=".35" />
        </g>
      )}
      {index % 3 === 2 && (
        <g transform="translate(153 35)">
          <rect x="0" y="0" width="76" height="54" rx="8" fill="white" stroke={accent} strokeOpacity=".2" />
          <rect x="0" y="0" width="76" height="11" rx="8" fill={accent} opacity=".18" />
          <circle cx="9" cy="5.5" r="2" fill={accent} />
          <rect x="10" y="20" width="24" height="25" rx="4" fill={accent} opacity=".16" />
          <path d="M41 24H65M41 33H65M41 42H59" stroke={accent} strokeWidth="3" strokeLinecap="round" opacity=".3" />
        </g>
      )}
      <circle cx="26" cy="103" r="3" fill={accent} opacity=".35" />
      <circle cx="43" cy="111" r="2" fill={accent} opacity=".25" />
    </svg>
  );
}

function IntegrationGroup({
  title,
  id,
  items,
}: {
  title: string;
  id: string;
  items: Integration[];
}) {
  return (
    <div className="mb-10 last:mb-0">
      <p
  id={id}
  className="relative mb-4 pl-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#536486] sm:text-[14px]
  after:content-[''] after:absolute after:top-1/2 after:h-px after:w-full after:-translate-y-1/2 after:bg-[#f3f3f3] overflow-hidden"
>
  {title} {'  '}
</p>

      <ul
        aria-labelledby={id}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {items.map((item, index) => (
          <li key={item.name} className="h-full min-w-0">
            <Link
              href={item.href}
              className={`group relative isolate flex h-[294px] w-full flex-col overflow-hidden rounded-[24px] border p-2 pb-0 text-left shadow-[0_10px_28px_rgba(50,83,150,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(50,83,150,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#245ae2] focus-visible:ring-offset-2 ${item.featured
                  ? "border-[#8c78ff] bg-gradient-to-br from-[#f5f2ff] via-white to-[#eee8ff] shadow-[0_8px_28px_rgba(112,87,255,0.12)]"
                  : "border-white/90 bg-white/90 hover:border-[#c9dcff]"
                }`}
            >
              <span
                aria-hidden="true"
                className={`relative z-10 flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-[23px] text-[42px] shadow-[inset_0_1px_0_rgba(255,255,255,.9)] ${item.featured
                    ? "bg-gradient-to-br from-[#4b43ff] to-[#754bff] text-white shadow-[0_9px_24px_rgba(93,77,255,.25)]"
                    : "bg-[#f1f5ff]"
                  }`}
                style={item.iconColor && !item.featured ? { color: item.iconColor } : undefined}
              >
                {item.icon}
              </span>

              <span className={`absolute right-2 top-2 z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/80 bg-white/75 text-[22px] text-[#245ae2] shadow-[0_3px_12px_rgba(40,90,180,.08)] backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#245ae2] group-hover:text-white ${item.featured ? "text-[#654dff]" : ""}`}>
                <FiArrowUpRight />
              </span>

              <span className="relative z-10 mt-[20px] block max-w-[190px] text-[18px] font-semibold leading-[1.2] tracking-[-0.035em] text-[#101a35]">
                {item.name}
              </span>
              <span className="relative z-10 mt-[7px] block max-w-[195px] text-[14px] leading-[1.45] text-[#687998]">
                {item.detail}
              </span>

              <IntegrationArtwork index={index} featured={item.featured} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SocialMedia() {
  return (
    <section
      id="platforms"
      aria-labelledby="foundly-platforms-title"
      className="relative isolate overflow-hidden px-4 py-16 text-[#11111a] sm:px-6 sm:py-[72px] lg:px-8"
    >
      <div className="relative mx-auto max-w-[1240px]">
        <header className="mx-auto mb-[58px] max-w-[620px] text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
            <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
              <span className="text-base leading-none">✦</span>
              SEAMLESS INTEGRATION
            </p>
            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
          </div>
          <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
            Connects effortlessly with {' '}
            <span className="text-[var(--primary-color)]">your existing stack</span>
          </h2>
          <p className="desc mx-auto mt-5 leading-[1.65] text-[#737381]">
            Automatically sync content to your CMS, keep your Google Business Profile active, and publish across your social networks.
          </p>
        </header>

        <IntegrationGroup
          title="Your website"
          id="foundly-platforms-website"
          items={websiteIntegrations}
        />
        <IntegrationGroup
          title="Google and social"
          id="foundly-platforms-social"
          items={socialIntegrations}
        />
      </div>
    </section>
  );
}
