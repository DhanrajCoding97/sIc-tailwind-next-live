import Hero from "../components/Hero";
import About from "../pages/sic/about";
import Products from "../pages/sic/products";
import Contact from "../pages/sic/contact";
import Services from "./sic/services";

export default function Home() {
  return (
    <div id="main">
      <Hero
        heading="If you want to buy Electrical or Instrumentation Products."
        message="You came to the Right place."
      />
      <About />
      <Services />
      <Products />
      <Contact />
    </div>
  );
}
