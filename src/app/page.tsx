import About from "@/components/About";
import Hero from "@/components/Hero";
import ServicesComponet from "@/components/ServicesComponet";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <About />
        <ServicesComponet />
        <WhyUs />
      </main>
    </div>
  );
}
