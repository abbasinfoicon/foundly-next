"use client"

import Image from "next/image"
import { useState } from "react"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6"
import {
  FiBookmark,
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiMessageCircle,
  FiMoreHorizontal,
  FiRepeat,
  FiSend,
  FiThumbsUp,
} from "react-icons/fi"

type SocialNetwork = "Instagram" | "LinkedIn" | "X" | "Facebook"

type SocialPost = {
  id: string
  network: SocialNetwork
  business: string
  copy: string
  image: string
  footerCopy?: string
  handle?: string
}

const posts: SocialPost[] = [
  {
    id: "tony-takes",
    network: "X",
    business: "Tony Takes",
    copy: "Your customers should be inspired by the details that make your business different.",
    image: "/assets/image/product/01.webp",
    footerCopy: "A little detail can make a lasting impression.",
    handle: "@tonytakes",
  },
  {
    id: "siraverse",
    network: "Instagram",
    business: "Siraverse",
    copy: "Thoughtful design starts with the details. Discover the craft behind every piece.",
    image: "/assets/image/product/02.webp",
    footerCopy: "Trending heritage, thoughtfully curated.",
    handle: "siraverse.official",
  },
  {
    id: "sunaar",
    network: "LinkedIn",
    business: "SUNAAR Gold & Diamonds",
    copy: "Start with inspiration, then define your ring direction.",
    image: "/assets/image/product/03.webp",
    footerCopy: "Make every moment meaningful.",
    handle: "SUNAAR Gold & Diamonds",
  },
  {
    id: "lunchlink",
    network: "LinkedIn",
    business: "LunchLink",
    copy: "A catering brief makes office meals easier to coordinate.",
    image: "/assets/image/product/04.webp",
    footerCopy: "Clear choices. Better lunches.",
    handle: "LunchLink",
  },
  {
    id: "lario",
    network: "Facebook",
    business: "La Rio’s Mexican Grill",
    copy: "The right format changes the meal. Find something everyone will love.",
    image: "/assets/image/product/05.webp",
    footerCopy: "Fresh flavour for every occasion.",
    handle: "La Rio’s Mexican Grill",
  },
]

function NetworkIcon({ network }: { network: SocialNetwork }) {
  const shared = "h-[18px] w-[18px]"

  if (network === "Instagram") {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffca54] via-[#f04478] to-[#8149db] text-white">
        <FaInstagram className={shared} />
      </span>
    )
  }

  if (network === "LinkedIn") {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0a78c8] text-white">
        <FaLinkedinIn className={shared} />
      </span>
    )
  }

  if (network === "Facebook") {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1877f2] text-white">
        <FaFacebookF className={shared} />
      </span>
    )
  }

  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-black text-white">
      <FaXTwitter className={shared} />
    </span>
  )
}

function PostActions({ network }: { network: SocialNetwork }) {
  const actionClass = "inline-flex items-center gap-1 whitespace-nowrap"

  return (
    <div className="flex items-center justify-between gap-2 border-t border-white/10 pt-3 text-[11px] sm:text-[13px] text-white/65">
      <span className={actionClass}>
        {network === "X" ? <FiMessageCircle /> : <FiThumbsUp />}
        {network === "X" ? "Reply" : "Like"}
      </span>
      <span className={actionClass}>
        {network === "Instagram" ? <FiMessageCircle /> : <FiRepeat />}
        {network === "Instagram" ? "Comment" : network === "X" ? "Repost" : "Comment"}
      </span>
      <span className={actionClass}>
        {network === "Instagram" ? <FiSend /> : <FiRepeat />}
        {network === "Instagram" ? "Share" : "Share"}
      </span>
      {network === "Instagram" && <FiBookmark className="shrink-0" />}
    </div>
  )
}

function SocialPostCard({
  post,
  position,
}: {
  post: SocialPost
  position: number
}) {
  const isCenter = position === 0
  const positions: Record<number, string> = {
    [-2]: "left-[0%] top-[2%] z-0 -rotate-[10deg] [transform:perspective(1200px)_rotateY(18deg)] scale-[.78] opacity-55 blur-[2px] hover:blur-[0px] hover:scale-[.90] hover:opacity-100",
    [-1]: "left-[13%] top-[0%] z-10 -rotate-[6deg] [transform:perspective(1200px)_rotateY(12deg)] scale-[.9] opacity-80 hover:scale-100 hover:opacity-100",
    [0]: "left-1/2 top-0 z-30 -translate-x-1/2 [transform:perspective(1200px)_rotateY(0deg)_rotateX(2deg)] scale-100",
    [1]: "right-[13%] top-[0%] z-10 rotate-[6deg] [transform:perspective(1200px)_rotateY(-12deg)] scale-[.9] opacity-80 hover:scale-100 hover:opacity-100",
    [2]: "right-[0%] top-[2%] z-0 rotate-[10deg] [transform:perspective(1200px)_rotateY(-18deg)] scale-[.78] opacity-55 blur-[2px] hover:blur-[0px] hover:scale-[.90] hover:opacity-100",
  }

  return (
    <article
      aria-label={`${post.network} post by ${post.business}`}
      className={`absolute flex w-[272px] max-w-[72vw] flex-col overflow-hidden rounded-[24px] border border-white/30 bg-gradient-to-br from-[#38365b]/95 via-[#211e3d]/95 to-[#100f25]/95 p-3 text-white shadow-[0_25px_70px_rgba(0,0,0,.48),0_0_30px_rgba(90,100,255,.20),inset_0_1px_0_rgba(255,255,255,.30)] [transform-style:preserve-3d] [backface-visibility:hidden] transition-all duration-700 ease-out hover:border-[#a7a8ff]/70 hover:shadow-[0_30px_80px_rgba(0,0,0,.55),0_0_38px_rgba(107,92,255,.38),inset_0_1px_0_rgba(255,255,255,.42)] sm:w-[322px] ${positions[position] ?? positions[0]
        } ${isCenter ? "min-h-[440px] ring-1 ring-white/10" : "min-h-[420px]"}`}
    >
      <header className="mb-3 flex min-w-0 items-center gap-2 [transform:translateZ(12px)]">
        <NetworkIcon network={post.network} />
        <strong className="min-w-0 flex-1 truncate text-[13px] font-semibold tracking-[-0.02em] sm:text-[15px]">
          {post.business}
        </strong>
        <FiMoreHorizontal className="h-4 w-4 shrink-0 text-white/45" />
      </header>

      {post.copy && (
        <p className="mb-3 min-h-[34px] text-[12px] leading-[1.6] text-white/80 sm:text-[14px]">
          {post.copy}
        </p>
      )}

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] border border-white/25 bg-white/10 shadow-[0_12px_28px_rgba(0,0,0,.28),inset_0_1px_0_rgba(255,255,255,.22)] [transform:translateZ(18px)]">
        <Image
          src={post.image}
          alt={`${post.business} social media creative`}
          fill
          sizes="(max-width: 640px) 72vw, 290px"
          className="object-cover"
        />
      </div>

      <footer className="mt-auto pt-3 [transform:translateZ(10px)]">
        {post.handle && (
          <p className="mb-2 line-clamp-2 text-[12px] sm:text-[13px] leading-[1.5] text-white/80">
            <span className="mr-1 font-semibold text-white">{post.handle}</span>
            {post.footerCopy}
          </p>
        )}
        <PostActions network={post.network} />
      </footer>
    </article>
  )
}

export default function PublishedForYou() {
  const [activeIndex, setActiveIndex] = useState(2)

  const shift = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + posts.length) % posts.length)
  }

  const visiblePosts = [-2, -1, 0, 1, 2].map((offset) => {
    const index = (activeIndex + offset + posts.length) % posts.length
    return { post: posts[index], position: offset }
  })

  return (
    <section
      id="social"
      aria-labelledby="foundly-social-title"
      className="relative isolate w-full overflow-hidden bg-[radial-gradient(ellipse_at_50%_4%,rgba(92,73,173,.38)_0%,rgba(43,34,77,.3)_36%,transparent_68%),linear-gradient(180deg,#282044_0%,#171226_49%,#08070d_100%)] px-4 pb-16 pt-16 text-white sm:px-6 sm:pb-20 sm:pt-[96px] lg:min-h-[900px] lg:pb-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/image/bg/publish-bg.webp')" }}
    >
      {/* Foundly.ai social publishing section heading */}
      <header className="relative z-40 mx-auto max-w-[820px] text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-blue-200 sm:block" />
          <p className="subtitle inline-flex items-center gap-2 rounded-full border border-[#245ae2]/10 bg-gradient-to-r from-white via-[#f5f7ff] to-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--primary-color)] shadow-[0_2px_12px_rgba(36,90,226,0.08)]">
            <span className="text-base leading-none">✦</span>
            OMNICHANNEL PRESENCE
          </p>
          <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-blue-200 sm:block" />
        </div>

        <h2 className="title mt-4 font-medium leading-[1.08] tracking-[-0.065em]">
          Your brand, appearing  everywhere <span className="text-[var(--primary-color)]"> customers search</span>
        </h2>

        <p className="desc mx-auto mt-5 leading-[1.65] text-[#c2c0c9]">
          Foundly.ai writes, optimizes, and publishes content across Google, AI search engines, and social channels. It always sounds like you.
        </p>
      </header>

      {/* Interactive social post fan carousel */}
      <div className="relative mx-auto mt-12 h-[455px] w-full max-w-[1060px] sm:mt-[62px] sm:h-[585px] lg:mt-[64px]">
        <div className="absolute inset-x-0 bottom-0 top-8 bg-[radial-gradient(ellipse_at_50%_40%,rgba(122,91,255,.16),transparent_68%)]" />

        {visiblePosts.map(({ post, position }) => (
          <SocialPostCard
            key={`${post.id}-${position}`}
            post={post}
            position={position}
          />
        ))}

        <button
          type="button"
          onClick={() => shift(-1)}
          aria-label="Previous social post"
          className="absolute left-[calc(50%-180px)] top-[48%] z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/25 text-white shadow-lg backdrop-blur-md transition hover:bg-white/40 sm:left-[calc(50%-210px)]"
        >
          <FiChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => shift(1)}
          aria-label="Next social post"
          className="absolute right-[calc(50%-180px)] top-[48%] z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/25 text-white shadow-lg backdrop-blur-md transition hover:bg-white/40 sm:right-[calc(50%-210px)]"
        >
          <FiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
