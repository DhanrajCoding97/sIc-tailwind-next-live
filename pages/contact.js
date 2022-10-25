import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactForm from "../components/ContactForm";
import SocialLink from "../components/SocialLink";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);
  return (
    <motion.div ref={ref}>
      <motion.section
        id="contact"
        animate={animation}
        className="py-[90px] px-[5vw] contact-bg min-h-screen"
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
      </motion.section>
    </motion.div>
  );
};

export default Contact;
