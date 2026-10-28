 "use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FaArrowRight,
  FaBrain,
  FaExpand,
  FaGoogle,
  FaMicrosoft,
  FaPlay,
  FaRotateLeft,
  FaRotateRight,
  FaStar,
} from "react-icons/fa6"
import { FaVolumeMute } from "react-icons/fa"
import { SiOpenaigym } from "react-icons/si"
import { FcGoogle } from "react-icons/fc"

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlayback = async () => {
    const video = videoRef.current
    if (!video) {
      setIsPlaying((playing) => !playing)
      return
    }

    if (video.paused) {
      try {
        await video.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const seekBy = (seconds: number) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = Math.min(
      Math.max(video.currentTime + seconds, 0),
      video.duration || 69,
    )
  }

  const toggleFullscreen = async () => {
    const video = videoRef.current
    if (!video) return
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      } else {
        await video.requestFullscreen()
      }
    } catch {
      // Fullscreen may be unavailable in some embedded browsers.
    }
  }

  return (
    <section aria-label="Foundly.ai marketing hero" className="w-full overflow-hidden bg-white px-4 pb-8 pt-12 text-[#111116] sm:px-6 sm:pt-14 lg:px-8 lg:pb-10">
      <div className="mx-auto w-full max-w-[1195px]">
        {/* Hero copy */}
        <div className="mx-auto flex max-w-[950px] flex-col items-center text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--primary-color)] sm:text-[14px]">
            Marketing on autopilot
          </p>

          <h1 className="mt-4 text-[38px] font-medium leading-[1.08] tracking-[-0.065em] sm:text-[52px] md:text-[64px] lg:text-[72px]">
            Get Leads from{" "}
            <span className="text-[var(--primary-color)]">Google &amp; AI</span>
          </h1>

          {/* Search platform icons */}
          <div className="mt-4 flex items-center justify-center gap-5 sm:gap-7" aria-label="Google and AI platforms">
            <FcGoogle className="h-8 w-8 text-[#4285f4] sm:h-11 sm:w-11" aria-label="Google" />
            <SiOpenaigym className="h-8 w-8 text-black sm:h-11 sm:w-11" aria-label="OpenAI" />
            <span className="flex h-9 w-9 items-center justify-center text-[36px] leading-none text-[var(--primary-color)] sm:h-11 sm:w-11 sm:text-[42px]" aria-label="Gemini">✦</span>
            <FaBrain className="h-8 w-8 text-[#f07855] sm:h-9 sm:w-9" aria-label="AI search" />
            <span className="flex h-9 w-9 items-center justify-center text-[34px] leading-none text-black sm:h-11 sm:w-11 sm:text-[40px]" aria-label="AI search">✳</span>
            <FaMicrosoft className="h-8 w-8 text-[#f25022] sm:h-11 sm:w-11" aria-label="Microsoft" />
          </div>

          <p className="mt-5 max-w-[590px] text-[18px] leading-[1.65] text-[#555463] sm:text-[20px]">
            Foundly.ai helps new customers find you on Google and
            <br className="hidden sm:block" /> AI like ChatGPT. It posts on your social media every day.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex h-[54px] min-w-[198px] items-center justify-center gap-3 rounded-full bg-[var(--primary-color)] px-8 text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(105,88,245,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#5b4be9] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#dcd6ff]"
          >
            Start Free <FaArrowRight className="h-4 w-4" />
          </Link>
          <span className="mt-2 text-[12px] text-[#8d8b98]">Cancel anytime</span>

          {/* Review source icons */}
          <div className="mt-7 flex items-center -space-x-1.5" aria-label="Review platforms">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e7ed] bg-white text-[#4285f4] shadow-sm"><FaGoogle className="h-5 w-5" /></span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e7ed] bg-white text-[#f04f38] shadow-sm"><FaBrain className="h-5 w-5" /></span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e7ed] bg-white text-[#e45b36] shadow-sm"><span className="text-[20px] font-bold">P</span></span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e7ed] bg-white text-[#00ad78] shadow-sm"><span className="text-[28px] leading-none">★</span></span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e7ed] bg-white text-[#1688ca] shadow-sm"><FaArrowRight className="h-5 w-5 -rotate-45" /></span>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-[15px] text-[#62606d]">
            <span className="flex items-center gap-0.5 text-[#f5aa00]" aria-label="4.7 out of 5 stars">
              {[0, 1, 2, 3].map((star) => <FaStar key={star} className="h-[13px] w-[13px]" />)}
              <FaStar className="h-[13px] w-[13px] opacity-70" />
            </span>
            <span>Rated <strong className="font-semibold text-[#292733]">4.7</strong> from 1,600+ reviews</span>
          </div>
        </div>

        {/* Product preview / video frame */}
        <div className="relative max-w-[850px] 2xl:max-w-full mx-auto mt-10 overflow-hidden rounded-[28px] border border-[#e5e3e9] bg-white shadow-[0_14px_42px_rgba(33,25,56,0.10)] sm:mt-12">
          <div className="relative flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_56%_40%,rgba(188,145,255,0.72)_0%,rgba(226,206,255,0.48)_33%,rgba(255,255,255,0.98)_73%)]">
            <div className="relative z-10 w-full w-full overflow-hidden rounded-[20px] border border-[#e4dcff] bg-white shadow-[0_8px_28px_rgba(69,43,124,0.14)] sm:rounded-[24px]">
              <video
                ref={videoRef}
                className={`${isPlaying ? "block" : "hidden"} h-auto w-full bg-white`}
                poster="/assets/image/overview-poster.webp"
                src="/assets/video/foundly-hero.mp4"
                muted={isMuted}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={(event) => {
                  const current = event.currentTarget
                  setProgress(current.duration ? (current.currentTime / current.duration) * 100 : 0)
                }}
              />
              <Image
                src="/assets/image/overview-poster.png"
                alt="Foundly.ai business settings dashboard preview"
                width={1193}
                height={670}
                priority
                className={`block h-auto w-full object-cover ${isPlaying ? "hidden" : ""}`}
              />              
            </div>

            <button
              type="button"
              onClick={() => setIsMuted((muted) => !muted)}
              className="absolute right-4 top-4 z-20 inline-flex h-10 items-center gap-2 rounded-full bg-[#6b6877] px-4 text-[13px] font-semibold text-white shadow-lg transition hover:bg-[#514e5d] sm:right-5 sm:top-5 sm:h-11 sm:px-5 sm:text-[13px]"
              aria-label={isMuted ? "Unmute demo" : "Mute demo"}
            >
              <FaVolumeMute className="h-4 w-4" />
              {isMuted ? "Tap for sound" : "Sound on"}
            </button>
          </div>

          {/* Video-style controls, matching the reference UI */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#3a3745]/80 via-[#817e8a]/55 to-transparent px-4 pb-4 pt-10 text-white sm:px-6 sm:pb-5">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(event) => setProgress(Number(event.target.value))}
              aria-label="Video progress"
              className="mb-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/40 accent-white"
            />
            <div className="flex items-center justify-between gap-3 text-[11px] sm:text-[13px]">
              <div className="flex items-center gap-4 sm:gap-5">
                <button type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause demo" : "Play demo"} className="transition hover:text-white/70"><FaPlay className="h-4 w-4" /></button>
                <button type="button" onClick={() => seekBy(-10)} aria-label="Go back 10 seconds" className="transition hover:text-white/70"><FaRotateLeft className="h-4 w-4" /></button>
                <button type="button" onClick={() => seekBy(10)} aria-label="Go forward 10 seconds" className="transition hover:text-white/70"><FaRotateRight className="h-4 w-4" /></button>
                <button type="button" onClick={() => setIsMuted((muted) => !muted)} aria-label={isMuted ? "Unmute" : "Mute"} className="transition hover:text-white/70"><FaVolumeMute className="h-4 w-4" /></button>
                <span className="whitespace-nowrap tabular-nums">0:{Math.round((progress / 100) * 69).toString().padStart(2, "0")} / 1:09</span>
              </div>
              <button type="button" onClick={toggleFullscreen} aria-label="Fullscreen video" className="transition hover:text-white/70"><FaExpand className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
