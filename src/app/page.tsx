import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}
