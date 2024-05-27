import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";


const Interests = () => {
    const interestStyle = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
    justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

    return (
        <section id="interests" className="pt-32 pb-16">
          {/* HEADING */}
          <motion.div
            className="md:w-1/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5 text-red">
              INTERESTS
            </p>
            <LineGradient width="mx-auto w-2/4" />
            <p className="mt-10">
              Here's are some of my interests.
            </p>
          </motion.div>
    
          {/* TESTIMONIALS */}
          <div className="md:flex md:justify-between gap-8">
            <motion.div
              className={`bg-[#90ee90] ${interestStyle}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img src="assets/computer.png" alt="pcbuilding" />
              <p className="text-center text-xl">
                Building computers
              </p>
            </motion.div>
    
            <motion.div
              className={`bg-[#aadd77] ${interestStyle}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <img src="assets/vgames.png" alt="video games" />
              <p className="text-center text-xl">
                Playing video games
              </p>
            </motion.div>
    
            <motion.div
              className={`bg-[#74c365] ${interestStyle}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
            <img src="assets/pickleball.png" alt="pickleball" />
            <p className="text-center text-xl">
              Engage in Pickleballs 
            </p>
            </motion.div>
          </div>
        </section>
      );
    };
    

export default Interests