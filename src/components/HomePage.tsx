import { BookMeeting } from "./BookMeeting";
import { CallToAction } from "./CallToAction";
import { CareApproach } from "./CareApproach";
import { Contact } from "./Contact";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { PatientJourney } from "./PatientJourney";
import { Services } from "./Services";
import { Specialists } from "./Specialists";
import { Testimonials } from "./Testimonials";
import { TrustBar } from "./TrustBar";
import { TrustHighlights } from "./TrustHighlights";
import { WhyChoose } from "./WhyChoose";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <TrustHighlights />
        <Services />
        <WhyChoose />
        <CareApproach />
        <Specialists />
        <PatientJourney />
        <BookMeeting />
        <Testimonials />
        <Faq />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
