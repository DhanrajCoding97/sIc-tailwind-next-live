import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactForm from "../components/ContactForm";
import SocialLink from "../components/SocialLink";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const contactVariants = {
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

  return (
    <motion.section id="contact" ref={ref}>
      <motion.div
        initial="hidden"
        animate={animation}
        variants={contactVariants}
        className="py-[90px] px-[5vw] contact-bg min-h-screen"
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
        >
          <div
            id="contact-header"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold">
              Contact Us
            </h1>
            <p className="text-xl p-5">
              For all enquires, please email using the form below
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
            <ContactForm />
            <SocialLink />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
