import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import ElevatingLuxury from "@/components/ElevatingLuxury";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Performance from "@/components/Performance";
import Consultation from "@/components/Consultation";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Showcase />
      <ElevatingLuxury />
      <WhyChoose />
      <Services />
      <Story />
      <Performance />
      <Consultation />
      <Team />
      <Testimonial />
      <ContactCta />
      <Footer />
    </main>
  );
}
