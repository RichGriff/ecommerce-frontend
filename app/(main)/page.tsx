import Collections from "@/components/Collections";
import CookiePolicy from "@/components/CookiePolicy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Incentives from "@/components/Incentives";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <Incentives />
      <Collections />
    </>
  )
}
