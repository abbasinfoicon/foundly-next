 "use client"

import React, { useState } from "react"
import MenuExpand from "./MenuExpand"
import Link from "next/link"

export type MegaMenuType = "products" | "resources" | null

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<MegaMenuType>(null)

  const closeMenu = () => setActiveMenu(null)

  return (
    <div className="sticky top-0 z-[100] w-full border-t border-[#e9e9ec] bg-white px-3 pt-3 sm:px-5 sm:pt-5">
      <header
        className="relative mx-auto flex min-h-[76px] w-full max-w-[1240px] items-center justify-between rounded-[24px] border border-[#ededf1] bg-white px-5 py-3 shadow-[0_8px_24px_rgba(26,22,54,0.08)] sm:px-7 lg:px-8"
      >
        <Link
          className="flex shrink-0 items-center"
          href="/"
          aria-label="Foundly AI home"
        >
          <img
            className="block h-auto w-[132px] object-contain sm:w-[138px]"
            src="/assets/image/logo.png"
            alt="Foundly AI"
          />
        </Link>

        <nav className="hidden h-full items-center gap-7 text-[15px] font-medium tracking-[-0.03em] text-[#171525] lg:flex xl:gap-8" aria-label="Main navigation">
          <button
            type="button"
            className={`inline-flex h-12 items-center gap-1.5 transition-colors hover:text-[var(--primary-color)] ${activeMenu === "products" ? "text-[var(--primary-color)]" : ""}`}
            aria-expanded={activeMenu === "products"}
            onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
          >
            Products
            <svg className={`h-4 w-4 transition-transform ${activeMenu === "products" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <Link className="transition-colors hover:text-[var(--primary-color)]" href="/">Pricing</Link>
          <button
            type="button"
            className={`inline-flex h-12 items-center gap-1.5 transition-colors hover:text-[var(--primary-color)] ${activeMenu === "resources" ? "text-[var(--primary-color)]" : ""}`}
            aria-expanded={activeMenu === "resources"}
            onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
          >
            Resources
            <svg className={`h-4 w-4 transition-transform ${activeMenu === "resources" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <Link className="transition-colors hover:text-[var(--primary-color)]" href="/">Blog</Link>
          <Link className="transition-colors hover:text-[var(--primary-color)]" href="/">Contact</Link>
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          <Link className="inline-flex h-11 items-center justify-center rounded-full border border-[#dedee5] px-5 text-sm font-medium tracking-[-0.02em] text-[#171525] transition-colors hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]" href="/signin">Sign in</Link>
          <Link className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary-color)] px-6 text-sm font-semibold tracking-[-0.02em] text-white shadow-[0_5px_12px_rgba(105,88,245,0.2)] transition hover:-translate-y-0.5 hover:bg-[#5d4be8]" href="/signup">Start Free</Link>
        </div>

        <button
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-[#e7e5ef] text-[#171525] transition hover:bg-[#f8f7ff] lg:hidden"
          type="button"
          aria-label={activeMenu ? "Close menu" : "Open menu"}
          aria-expanded={Boolean(activeMenu)}
          onClick={() => setActiveMenu(activeMenu ? null : "products")}
        >
          <span className={`h-[2px] w-[17px] rounded-full bg-current transition-transform ${activeMenu ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-[17px] rounded-full bg-current transition-transform ${activeMenu ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>

        {activeMenu && (
          <MenuExpand
            activeMenu={activeMenu}
            onSelectMenu={setActiveMenu}
            onClose={closeMenu}
          />
        )}
      </header>
    </div>
  )
}

export default Header
