"use client";

import Link from "next/link";
import Image from "next/image";
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
    <div className="mb-9 last:mb-0">
      <p
        id={id}
        className="mb-3 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.09em] text-[#62627a]"
      >
        {title}
      </p>

      <ul
        aria-labelledby={id}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {items.map((item) => (
          <li key={item.name} className="min-w-0">
            <Link
              href={item.href}
              className={`group flex min-h-[164px] h-full flex-col items-start rounded-[17px] border p-[19px] text-left shadow-[0_7px_18px_rgba(24,24,40,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(24,24,40,0.10)] ${
                item.featured
                  ? "border-[#d9d2ff] bg-gradient-to-b from-[#f5f2ff] to-white"
                  : "border-[#e9e8ee] bg-white"
              }`}
            >
              <span
                aria-hidden="true"
                className={`mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-[13px] text-[25px] ${
                  item.featured
                    ? "bg-[var(--primary-color)] text-white"
                    : "bg-[#f4f4f8]"
                }`}
                style={item.iconColor && !item.featured ? { color: item.iconColor } : undefined}
              >
                {item.icon}
              </span>
              <span
                className={`text-[14px] sm:text-[16px] font-medium leading-[1.35] tracking-[-0.025em] ${
                  item.featured ? "text-[var(--primary-color)]" : "text-[#11111a]"
                }`}
              >
                {item.name}
              </span>
              <span className="mt-1 text-[12px] sm:text-[14px] leading-[1.45] text-[#53536b]">
                {item.detail}
              </span>
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
      className="bg-white px-4 py-16 text-[#11111a] sm:px-6 sm:py-[72px] lg:px-8"
    >
      <div className="mx-auto max-w-[1240px]">
        <header className="mx-auto mb-[58px] max-w-[620px] text-center">
          <h2
            id="foundly-platforms-title"
            className="text-[38px] font-medium leading-[1.08] tracking-[-0.065em] sm:text-[48px] lg:text-[58px]"
          >
            Works with your website,
            <br />
            <span className="text-[var(--primary-color)]">Google and social media</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[550px] text-[18px] sm:text-[20px] leading-[1.65] text-[#53536b]">
            Publish to the site you already have, post to your Google Business
            Profile, and share on social media.
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
