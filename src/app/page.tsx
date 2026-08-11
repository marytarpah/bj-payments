import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ImpactStats } from "@/components/ImpactStats";
import { ProblemSection } from "@/components/ProblemSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SmartStrategySection } from "@/components/SmartStrategySection";
import { SetupTimeline } from "@/components/SetupTimeline";
import { PricingTiers } from "@/components/PricingTiers";
import { Services } from "@/components/Services";
import { IncludedFeatures } from "@/components/IncludedFeatures";
import { EstimateConfigurator } from "@/components/EstimateConfigurator";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { SeoGuide } from "@/components/SeoGuide";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ProblemSection />
        <ComparisonTable />
        <ImpactStats />
        <SmartStrategySection />
        <SetupTimeline />
        <PricingTiers />
        <Services />
        <IncludedFeatures />
        <EstimateConfigurator />
        <Process />
        <Testimonials />
        <FAQ />
        <SeoGuide />
      </main>
      <Footer />
    </>
  );
}
