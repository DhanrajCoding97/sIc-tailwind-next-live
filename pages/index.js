import Hero from "../components/Hero";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Hero
        heading="If you want to buy Electrical or Instrumentation Products."
        message="You have come to the Right place."
      />
      <Slider slides={SliderData} />
    </div>
  );
}
