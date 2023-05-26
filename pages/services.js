import { React, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const serviceVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      bounce: 0.3,
      duration: 2,
    },
  };

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [animation, inView]);
  return(
    <motion.section id="services" ref={ref}>
      <motion.div
        initial="hidden"
        animate={animation}
        variants={serviceVariants}
        className="py-[90px] px-[5vw] services-bg min-h-screen"
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
          }}
        >
          
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-5">
        Our Services
    </h1>
      <div className="my-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl">
        <h2 className="pt-4 text-center text-2xl sm:text-3xl text-black font-bold">Product Supply Group</h2>
        <div className="flex flex-col lg:flex-row p-8">
        <Image
          src="/carouselImage1.jpg"
          height={500}
          width={500}
          alt="Product Supply Group (PSG)"
        />
        <ul className="list-disc sm:text-2xl text-black m-8">
          <li>Temperature controllers, Indicators, Process Recorders, Transmitters, Flow meters</li>
          <li>Level switches, Flow switches, Temperature sensors, I/P convertors</li>
          <li>Temperature & Pressure gages, Safety Interlock</li>
          <li>Safety Fence, Safety PLC</li>
          <li>Control valves, Flame sensors, Modutrol motors</li>
          <li>Micro switches, Relays, Power Supply Units,Basic switches, Limit switches</li>
          <li>Transformers, Micro-Processor Trainer Kits</li>
        </ul>
        </div>
      </div>
      <div className="my-5 bg-gradient-to-r from-lime-500 to-teal-500 rounded-xl">
        <h2 className="pt-4 text-center text-2xl sm:text-3xl text-black font-bold">Process Automation Products</h2>
        <div className="flex flex-col lg:flex-row gap-5 p-8">
          <Image
              src="/carouselImage2.jpg"
              height={500}
          width={500}
              alt="Process Automation Products"
          />
          <ul className="list-disc sm:text-2xl text-black m-8">
            <li>Temperature/ Pressure/ Flow Measurement Controller/ Indicator</li>
            <li>Temperature/ Pressure/ Flow Sensor( RTDs), Thermocouples</li>
            <li>Pressure Transmitters,Differential Pressure Transmitter, Votex Flow Meters , Magnetic Flow Meters etc</li>
            <li>Consistency/ Density Measurement Systems</li>
            <li>Programmable Controllers / Circular Chart Recoreder / Strip Chart Recorder / Paperless Recorder etc.</li>
            <li>Limit Switches , Hall effect Sensor , Encoders , Speed Sensors , Power Amplifiers etc.</li>
            <li>Pressure Gauges & Vacuum Gauges, Dial Thermometers & Thermocouples</li>
          </ul>
        </div>
      </div>
      <div className="my-5 bg-gradient-to-r from-cyan-300 to-violet-800 rounded-xl">
        <h2 className="pt-4 text-center text-2xl sm:text-3xl text-black font-bold">Sensors & Safety Products</h2>
      <div className="flex flex-col lg:flex-row gap-5 p-8">
        <Image
              src="/carouselImage3.jpg"
              height={500}
          width={500}
              alt="Sensors & Safety Products"
        />
        <ul className="list-disc sm:text-2xl text-black m-8">
          <li>Proximity, Inductive, Capacitice, Slot Sensors</li>
          <li>Safety Fence, Safety PLC, Safety Interlocks, Door Switches, Limit Switches</li>
          <li>ASI Modules, Signal Isolators, Intrinsically Safety Barriers</li>
        </ul>
      </div>
      </div>
    
        </motion.div>
      </motion.div>
    </motion.section>

    
  )
}

export default Services;
