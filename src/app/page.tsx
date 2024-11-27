import About from "@/components/About";
import Hero from "@/components/Hero";
import ServicesComponet from "@/components/ServicesComponet";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <About />
        <ServicesComponet />
      </main>
    </div>
  );
}
