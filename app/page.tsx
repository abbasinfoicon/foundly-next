import Hero from "@/components/home/Hero";
import Client from "@/components/home/Client";
import TheNumber from "@/components/home/TheNumber";
import PublishedForYou from "@/components/home/PublishedForYou";
import Grow from "@/components/home/Grow";
import GoogleAI from "@/components/home/GoogleAI";
import MeasuredResults from "@/components/home/MeasuredResults";
import BusinessesTestimonial from "@/components/home/BusinessesTestimonial";
import SocialMedia from "@/components/home/SocialMedia";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Client />
      <TheNumber />
      <PublishedForYou />
      <Grow />
      <GoogleAI />
      <MeasuredResults />
      <BusinessesTestimonial />
      <SocialMedia />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
