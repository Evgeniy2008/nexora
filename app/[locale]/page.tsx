import { setRequestLocale } from "next-intl/server";
import { Background } from "@/components/Background";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ScrollProgress />
      <Background />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <TechStack />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
