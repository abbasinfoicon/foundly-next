 "use client"

import React from "react"
import type { MegaMenuType } from "./Header"
import Link from "next/link"

type MenuExpandProps = {
  activeMenu: Exclude<MegaMenuType, null>
  onSelectMenu: (menu: MegaMenuType) => void
  onClose: () => void
}

type MenuItem = {
  title: string
  description: string
  href: string
  icon: string
}

const productItems: MenuItem[] = [
  { title: "Social Media", description: "Posts written, designed and scheduled for every channel.", href: "/", icon: "share" },
  { title: "AI SEO Agent", description: "Plan, create, publish, and measure SEO work.", href: "/", icon: "bot" },
  { title: "AI Blog Writer", description: "Create SEO-ready articles from keyword demand.", href: "/", icon: "pen" },
  { title: "Local SEO", description: "Improve Google Maps, profile, and local search visibility.", href: "/", icon: "pin" },
  { title: "Local SEO Services", description: "We run your local SEO for you. Plans, results and pricing.", href: "/", icon: "pin" },
  { title: "Backlinks", description: "Connect authority signals to content strategy.", href: "/", icon: "link" },
  { title: "Auto Linking Tool", description: "Find and apply useful internal link opportunities.", href: "/", icon: "nodes" },
  { title: "Autoblog", description: "Run a controlled SEO blog publishing workflow.", href: "/", icon: "calendar" },
  { title: "Keyword Research Tool", description: "Turn keyword ideas into publishable SEO actions.", href: "/", icon: "search" },
  { title: "E-commerce & Shopify", description: "Support product and collection SEO workflows.", href: "/", icon: "shop" },
  { title: "Rank on ChatGPT", description: "Build clearer sources for ChatGPT visibility.", href: "/", icon: "spark" },
]

const resourceItems: MenuItem[] = [
  { title: "Blog", description: "Plain-English guides to getting found online.", href: "/", icon: "book" },
  { title: "Case Studies", description: "Real businesses and the results they recorded.", href: "/", icon: "trend" },
  { title: "Help Center", description: "Getting started, publishing, billing and your account.", href: "/", icon: "life" },
  { title: "SEO Glossary", description: "SEO and AI search words, explained simply.", href: "/", icon: "book" },
  { title: "Industries", description: "How Foundly helps your kind of business.", href: "/", icon: "building" },
  { title: "Compare Foundly", description: "Foundly vs an agency, doing it yourself, and other tools.", href: "/", icon: "scale" },
  { title: "Integrations", description: "WordPress, Shopify, Webflow, Wix and more.", href: "/", icon: "plug" },
  { title: "Affiliate Program", description: "Earn recurring commissions by recommending Foundly.", href: "/", icon: "hand" },
  { title: "Contact Us", description: "Talk to a person about your business.", href: "/", icon: "chat" },
]

function Icon({ name }: { name: string }) {
  const common = { className: "h-[18px] w-[18px]", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const }
  const paths: Record<string, React.ReactNode> = {
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" /></>,
    bot: <><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M12 8V4h-3M2 13h2m16 0h2M9 13v2m6-2v2" /></>,
    pen: <><path d="m4 16 10.8-10.8a2.1 2.1 0 0 1 3 3L7 19l-4 1zM13 7l4 4" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7.1 0l2-2A5 5 0 0 0 12 4l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20l1.1-1.1" /></>,
    nodes: <><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="m7 7 4 9m6-9-4 9M7 6h10" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 10h18m-9 3v4l3 1" /></>,
    search: <><circle cx="10.5" cy="10.5" r="7" /><path d="m16 16 5 5" /></>,
    shop: <><path d="M4 8h16l-1 12H5L4 8Z" /><path d="m4 8 2-5h12l2 5M9 12v2m6-2v2" /></>,
    spark: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></>,
    book: <><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H12v17H5.5A2.5 2.5 0 0 0 3 22V5.5ZM21 5.5A2.5 2.5 0 0 0 18.5 3H12v17h6.5A2.5 2.5 0 0 1 21 22V5.5Z" /></>,
    trend: <><path d="m3 17 6-6 4 3 7-8" /><path d="M14 6h6v6" /></>,
    life: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6.5 19a6 6 0 0 1 11 0" /></>,
    building: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h2m4 0h2M8 11h2m4 0h2M9 21v-5h6v5" /></>,
    scale: <><path d="M12 3v18m-7-15h14M5 6l-3 6h6L5 6Zm14 0-3 6h6l-3-6ZM7 21h10" /></>,
    plug: <><path d="M9 3v6m6-6v6M7 9h10v3a5 5 0 0 1-5 5v4" /></>,
    hand: <><path d="M8 12V5a1.5 1.5 0 0 1 3 0v6-8a1.5 1.5 0 0 1 3 0v8-6a1.5 1.5 0 0 1 3 0v7l1-2a1.7 1.7 0 0 1 3 1l-2 7a5 5 0 0 1-5 4h-2a5 5 0 0 1-4-2l-4-5a1.7 1.7 0 0 1 2.5-2.3L8 15" /></>,
    chat: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 4a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.4Z" /></>,
  }
  return <svg {...common}>{paths[name] ?? paths.spark}</svg>
}

function ArrowRight() {
  return <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
}

const MenuExpand = ({ activeMenu, onSelectMenu, onClose }: MenuExpandProps) => {
  const isProducts = activeMenu === "products"
  const items = isProducts ? productItems : resourceItems

  return (
    <>
      <div
        className="absolute left-0 right-0 top-[calc(100%+12px)] z-50 max-h-[calc(100vh-110px)] overflow-y-auto rounded-[24px] border border-[#e6e5eb] bg-white p-4 shadow-[0_18px_50px_rgba(26,22,54,0.15)] sm:p-6 lg:min-w-[900px] lg:overflow-visible lg:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
          {/* Explore sidebar */}
          <aside className="flex flex-col border-b border-[#e9e6f2] pb-5 lg:min-h-[510px] lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <h2 className="mb-4 px-3 text-[12px] font-normal uppercase tracking-[0.12em] text-[#92909f]">Explore</h2>
            <div className="space-y-1">
              <button
                type="button"
                onMouseEnter={() => onSelectMenu("products")}
                onClick={() => onSelectMenu(isProducts ? null : "products")}
                className={`flex w-full items-center justify-between rounded-[14px] px-3 py-3 text-left transition-colors ${isProducts ? "bg-[#f0edff] text-[#171525]" : "text-[#252332] hover:bg-[#f8f7ff]"}`}
              >
                <span><span className="block text-[15px] font-medium">Products</span><span className="mt-0.5 block text-[13px] text-[#828091]">Get found and keep posting</span></span>
                <svg className={`h-4 w-4 shrink-0 ${isProducts ? "text-[#6958ff]" : "text-[#aaa8b8]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
              <button
                type="button"
                onMouseEnter={() => onSelectMenu("resources")}
                onClick={() => onSelectMenu(isProducts ? "resources" : null)}
                className={`flex w-full items-center justify-between rounded-[14px] px-3 py-3 text-left transition-colors ${!isProducts ? "bg-[#f0edff] text-[#171525]" : "text-[#252332] hover:bg-[#f8f7ff]"}`}
              >
                <span><span className="block text-[15px] font-medium">Resources</span><span className="mt-0.5 block text-[13px] text-[#828091]">Guides, stories and help</span></span>
                <svg className={`h-4 w-4 shrink-0 ${!isProducts ? "text-[#6958ff]" : "text-[#aaa8b8]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
              <Link href="/" onClick={onClose} className="flex w-full items-center justify-between rounded-[14px] px-3 py-3 text-left text-[#252332] transition-colors hover:bg-[#f8f7ff]">
                <span><span className="block text-[15px] font-medium">Pricing</span><span className="mt-0.5 block text-[13px] text-[#828091]">Simple plans per website</span></span>
                <svg className="h-4 w-4 shrink-0 text-[#aaa8b8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
              </Link>
            </div>

            {isProducts ? (
              <Link href="/" className="mt-6 rounded-[17px] border border-[#e3ddff] bg-gradient-to-br from-[#fbfaff] to-white p-4 transition hover:border-[#c9beff] lg:mt-auto">
                <div className="mb-3 flex -space-x-1.5">
                  {["G", "◎", "✦", "✳", "◉"].map((brand, index) => <span key={brand + index} className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e9e6f3] bg-white text-[12px] font-semibold text-[var(--primary-color)] shadow-sm">{brand}</span>)}
                </div>
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6958ff]">AI Search</span>
                <strong className="mt-1 block text-[14px] font-medium text-[#171525]">Get named in AI answers</strong>
                <span className="mt-1 block text-[12px] leading-[1.55] text-[#737181]">How ChatGPT, Gemini and Google's AI pick who to recommend.</span>
                <span className="mt-3 flex items-center gap-2 text-[12px] font-medium text-[var(--primary-color)]">See how to rank on ChatGPT <ArrowRight /></span>
              </Link>
            ) : (
              <Link href="/" className="mt-6 rounded-[17px] border border-[#e3ddff] bg-gradient-to-br from-[#fbfaff] to-white p-4 transition hover:border-[#c9beff] lg:mt-auto">
                <div className="mb-3 flex flex-wrap gap-1.5"><span className="rounded-full border border-[#e5e0ff] bg-white px-2.5 py-1 text-[10px] text-[#5b586d]">Backlink</span><span className="rounded-full border border-[#e5e0ff] bg-white px-2.5 py-1 text-[10px] text-[#5b586d]">Map pack</span><span className="rounded-full border border-[#e5e0ff] bg-white px-2.5 py-1 text-[10px] text-[#5b586d]">AI Overview</span></div>
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6958ff]">New to SEO?</span>
                <strong className="mt-1 block text-[15px] font-medium text-[#171525]">Start with the glossary</strong>
                <span className="mt-1 block text-[13px] leading-[1.55] text-[#737181]">SEO and AI search words, explained in plain English.</span>
                <span className="mt-3 flex items-center gap-2 text-[13px] font-medium text-[var(--primary-color)]">Open the glossary <ArrowRight /></span>
              </Link>
            )}

            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link href="/" className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#e7e5eb] text-[13px] font-medium text-[#302e3d] transition hover:border-[#c9c1ff] hover:bg-[#fbfaff]"><Icon name="trend" /> Sign in</Link>
              <Link href="/" className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#e7e5eb] text-[13px] font-medium text-[#302e3d] transition hover:border-[#c9c1ff] hover:bg-[#fbfaff]"><Icon name="chat" /> Talk to us</Link>
            </div>
          </aside>

          {/* Dynamic right-side panel */}
          <section className="min-w-0" aria-label={isProducts ? "Product features" : "Resources"}>
            <div className="mb-5 flex items-center justify-between px-1">
              <h2 className="text-[12px] font-normal uppercase tracking-[0.12em] text-[#92909f]">{isProducts ? "Features" : "Resources"}</h2>
              {!isProducts && <Link href="/" className="flex items-center gap-1 text-[12px] font-medium text-[var(--primary-color)] hover:text-[#4e3fe8]">All articles <ArrowRight /></Link>}
            </div>

            <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
              {items.map((item) => (
                <Link key={item.title} href={item.href} className="group flex min-w-0 items-start gap-3 rounded-xl p-1.5 transition-colors hover:bg-[#faf9ff]">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e9e7f0] bg-white text-[#6958ff] transition-colors group-hover:border-[#d7d0ff] group-hover:bg-[#f7f5ff]"><Icon name={item.icon} /></span>
                  <span className="min-w-0 pt-0.5">
                    <strong className="block text-[14px] font-medium leading-5 text-[#191824]">{item.title}</strong>
                    <span className="mt-0.5 block text-[12px] leading-[1.45] text-[#737181]">{item.description}</span>
                  </span>
                </Link>
              ))}
            </div>

            {isProducts ? (
              <Link href="/" className="mt-5 flex flex-col gap-4 rounded-[16px] border border-[#dcd4ff] bg-gradient-to-r from-[#f7f5ff] via-white to-[#fcfbff] px-4 py-4 transition hover:border-[#bfb1ff] sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#6958ff]"><Icon name="spark" /> Limited-time offer</span>
                  <strong className="mt-1 block text-[16px] font-medium text-[#191824]">SEO + Social Media for $49 a month</strong>
                  <span className="mt-1 block text-[12px] text-[#737181]">Locked in for as long as you stay subscribed</span>
                </span>
                <span className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-2">
                  <span className="flex items-baseline gap-1.5 whitespace-nowrap"><s className="text-[13px] text-[#9a98a5]">$149</s><strong className="text-[26px] font-semibold leading-none tracking-tight text-[#171525]">$49</strong><span className="text-[11px] text-[#737181]">USD / month</span></span>
                  <span className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-[var(--primary-color)] px-4 text-[13px] font-semibold text-white shadow-[0_5px_12px_rgba(105,88,245,0.2)]">See pricing <ArrowRight /></span>
                </span>
              </Link>
            ) : (
              <div className="mt-5 rounded-[16px] border border-[#ebe7f7] bg-[#fcfbff] px-4 py-3">
                <div className="mb-3 flex items-center justify-between"><span className="text-[12px] font-normal uppercase tracking-[0.12em] text-[#92909f]">Featured guides</span><Link href="/blog" className="text-[12px] font-medium text-[var(--primary-color)]">All articles →</Link></div>
                <div className="grid gap-3 md:grid-cols-3">
                  <Link href="/" className="flex items-center gap-2.5 rounded-lg p-1 hover:bg-white"><span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#5c4ce8] to-[#9b8cff] text-lg text-white">◎</span><span><span className="block text-[11px] text-[#8a8798]">GEO · 13 min read</span><strong className="mt-0.5 block text-[12px] font-medium leading-[1.35] text-[#191824]">How to get cited by ChatGPT and Google AI</strong></span></Link>
                  <Link href="/" className="flex items-center gap-2.5 rounded-lg p-1 hover:bg-white"><span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#168f8b] to-[#5dd0bd] text-lg text-white">⌖</span><span><span className="block text-[11px] text-[#8a8798]">Local SEO · 10 min read</span><strong className="mt-0.5 block text-[12px] font-medium leading-[1.35] text-[#191824]">Local SEO automation for your Google Business Profile</strong></span></Link>
                  <Link href="/" className="flex items-center gap-2.5 rounded-lg p-1 hover:bg-white"><span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#6557ed] to-[#b3a7ff] text-lg text-white">⌁</span><span><span className="block text-[11px] text-[#8a8798]">Strategy · 11 min read</span><strong className="mt-0.5 block text-[12px] font-medium leading-[1.35] text-[#191824]">AI SEO agent vs hiring an SEO agency</strong></span></Link>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  )
}

export default MenuExpand
