import Hero from "./components/hero"
import Features from "./components/features";
import Pricing from "./components/pricing";
import About from "./components/about";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <Pricing/>
      <About/>
      <Contact/>
    </>
  );
}
