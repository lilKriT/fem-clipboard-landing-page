import Hero from "./_sections/Hero";
import KeepTrack from "./_sections/KeepTrack";
import AccessAnywhere from "./_sections/AccessAnywhere";
import SuperCharge from "./_sections/SuperCharge";
import CTA from "./_sections/CTA";
import Footer from "./_sections/Footer";

export default function Home() {
  return (
    <section className="min-h-dvh w-full flex flex-col justify-center items-center">
      <Hero />
      <KeepTrack />
      <AccessAnywhere />
      <SuperCharge />
      <CTA />
      <Footer />
    </section>
  );
}
