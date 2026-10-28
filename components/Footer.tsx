import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-[#211a2f] text-[#d8d1e8]"> 
            <div className="mx-auto w-full max-w-[1280px] px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-0">
            <div className="mb-14 flex flex-col gap-7 sm:mb-16 sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[#3a3149]">
                <div>
                    <strong className="block text-[22px] font-semibold leading-[1.25] tracking-[-0.04em] text-white sm:text-[28px]">A little AI. A lot more visibility.</strong>
                    <p className="mt-3 max-w-[360px] text-[15px] leading-[1.6] text-[#c3bad7]">Get found in search. Stay present on social media.<br className="hidden sm:block" /> Grow your business with one connected AI tool.</p>
                </div>
                <Link className="inline-flex h-[54px] min-w-[132px] items-center justify-center rounded-full bg-[var(--primary-color)] px-7 text-[16px] font-medium text-white shadow-[0_8px_24px_rgba(105,88,245,0.22)] transition hover:-translate-y-0.5 hover:bg-[#5d4be8]" href="/">Start Free</Link>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[1.15fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] lg:gap-x-7">
                <div className="col-span-2 flex flex-col items-start sm:col-span-1">
                    <Link className="transition-colors hover:text-white" href="/">
                        <img className="h-auto w-[140px] object-contain" src="/assets/image/logo-white.png" alt="Foundly AI" />
                    </Link>
                    <Link className="mt-5 text-[14px] text-[#c9c0dc] transition hover:text-white" href="/">info@upliftai.co</Link>
                    <ul className="mt-9 flex items-center gap-2" aria-label="follow Foundly AI on social media">
                        <li className="flex">
                            <Link href="/" rel="me noopener noreferrer" target="_blank" aria-label="Foundly AI on Instagram" className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-[#4b425b] text-[#c5bdd5] transition hover:border-[#8172ff] hover:text-white">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" aria-hidden="true" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="flex">
                            <Link href="/" rel="me noopener noreferrer" target="_blank" aria-label="Foundly AI on Facebook" className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-[#4b425b] text-[#c5bdd5] transition hover:border-[#8172ff] hover:text-white">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" aria-hidden="true" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="flex">
                            <Link href="/" rel="me noopener noreferrer" target="_blank" aria-label="Foundly AI on LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-[#4b425b] text-[#c5bdd5] transition hover:border-[#8172ff] hover:text-white">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="flex">
                            <Link href="/" rel="me noopener noreferrer" target="_blank" aria-label="Foundly AI on X" className="flex h-9 w-9 items-center justify-center rounded-[11px] border border-[#4b425b] text-[#c5bdd5] transition hover:border-[#8172ff] hover:text-white">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" aria-hidden="true" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"></path>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
                <nav className="flex flex-col items-start gap-[17px] text-[14px] leading-[1.25] text-[#c9c0dc]" aria-label="Footer Platform">
                    <strong className="mb-1 text-[14px] font-semibold text-white">Platform</strong>
                    <Link className="transition-colors hover:text-white" href="/">How it works</Link>
                    <Link className="transition-colors hover:text-white" href="/">What we publish</Link>
                    <Link className="transition-colors hover:text-white" href="/">Client results</Link>
                    <Link className="transition-colors hover:text-white" href="/">Customer stories</Link>
                    <Link className="transition-colors hover:text-white" href="/">Works with</Link>
                </nav>
                <nav className="flex flex-col items-start gap-[17px] text-[14px] leading-[1.25] text-[#c9c0dc]" aria-label="Footer Product">
                    <strong className="mb-1 text-[14px] font-semibold text-white">Product</strong>
                    <Link className="transition-colors hover:text-white" href="/">Social Media</Link>
                    <Link className="transition-colors hover:text-white" href="/">AI SEO Agent</Link>
                    <Link className="transition-colors hover:text-white" href="/">AI Blog Writer</Link>
                    <Link className="transition-colors hover:text-white" href="/">Local SEO</Link>
                    <Link className="transition-colors hover:text-white" href="/">Local SEO Services</Link>
                    <Link className="transition-colors hover:text-white" href="/">Backlinks</Link>
                    <Link className="transition-colors hover:text-white" href="/">Auto Linking Tool</Link>
                    <Link className="transition-colors hover:text-white" href="/">Keyword Research</Link>
                </nav>
                <nav className="flex flex-col items-start gap-[17px] text-[14px] leading-[1.25] text-[#c9c0dc]" aria-label="Footer AI search">
                    <strong className="mb-1 text-[14px] font-semibold text-white">AI search</strong>
                    <Link className="transition-colors hover:text-white" href="/">Rank on ChatGPT</Link>
                </nav>
                <nav className="flex flex-col items-start gap-[17px] text-[14px] leading-[1.25] text-[#c9c0dc]" aria-label="Footer Integrations">
                    <strong className="mb-1 text-[14px] font-semibold text-white">Integrations</strong>
                    <Link className="transition-colors hover:text-white" href="/">WordPress</Link>
                    <Link className="transition-colors hover:text-white" href="/">Shopify</Link>
                    <Link className="transition-colors hover:text-white" href="/">Webflow</Link>
                    <Link className="transition-colors hover:text-white" href="/">All integrations</Link>
                </nav>
                <nav className="flex flex-col items-start gap-[17px] text-[14px] leading-[1.25] text-[#c9c0dc]" aria-label="Footer Resources">
                    <strong className="mb-1 text-[14px] font-semibold text-white">Resources</strong>
                    <Link className="transition-colors hover:text-white" href="/">Help center</Link>
                    <Link className="transition-colors hover:text-white" href="/">SEO glossary</Link>
                    <Link className="transition-colors hover:text-white" href="/">Industries</Link>
                    <Link className="transition-colors hover:text-white" href="/">Case studies</Link>
                </nav>
                <nav className="flex flex-col items-start gap-[17px] text-[14px] leading-[1.25] text-[#c9c0dc]" aria-label="Footer Compare">
                    <strong className="mb-1 text-[14px] font-semibold text-white">Compare</strong>
                    <Link className="transition-colors hover:text-white" href="/">Outrank</Link>
                    <Link className="transition-colors hover:text-white" href="/">SEObot</Link>
                    <Link className="transition-colors hover:text-white" href="/">Surfer SEO</Link>
                    <Link className="transition-colors hover:text-white" href="/">Jasper AI</Link>
                    <Link className="transition-colors hover:text-white" href="/">Frase</Link>
                    <Link className="transition-colors hover:text-white" href="/">All comparisons</Link>
                </nav>
                <nav className="flex flex-col items-start gap-[17px] text-[14px] leading-[1.25] text-[#c9c0dc]" aria-label="Footer Company">
                    <strong className="mb-1 text-[14px] font-semibold text-white">Company</strong>
                    <Link className="transition-colors hover:text-white" href="/">Pricing</Link>
                    <Link className="transition-colors hover:text-white" href="/">Blog</Link>
                    <Link className="transition-colors hover:text-white" href="/">Affiliate program</Link>
                    <Link className="transition-colors hover:text-white" href="/">Contact</Link>
                </nav>
            </div>
            <div className="mt-16 flex flex-col gap-5 border-t border-[#3a3149] pt-6 text-[13px] text-[#c9c0dc] sm:flex-row sm:items-center sm:justify-between">
                <span>© 2026 foundly AI. All rights reserved.</span>
                <nav className="flex items-center gap-6" aria-label="Legal">
                    <Link className="transition-colors hover:text-white" href="/">Privacy policy</Link>
                    <Link className="transition-colors hover:text-white" href="/">Terms of service</Link>
                </nav>
            </div>
            </div>
        </footer>
    )
}

export default Footer