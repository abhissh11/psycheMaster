import About from "@/components/About";
import Hero from "@/components/Hero";
import ServicesComponet from "@/components/ServicesComponet";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";
import "@mantine/carousel/styles.css";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <About />
        <ServicesComponet />
        <WhyUs />
        <Testimonial />
      </main>
    </div>
  );
}
