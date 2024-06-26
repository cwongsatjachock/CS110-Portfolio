import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
import SocialMediaIcons from "../components/SocialMediaIcons";
import Resume from "../../public/assets/Resume.pdf"

const Landing = ({setSelectedPage}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
        {/* IMAGE SECTION */}
        <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.01,
                ease: [0, 0.71, 0.2, 1.01] }}
            whileHover={{ scale: 1.2 }}>
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20
                                    before:rounded-[200px] before:w-full before:max-w-[400px] before:h-5/6
                                    before:border-2 before:border-[#77dd77] before:z-[-1]">
                        <img
                            alt="profile"
                            className="hover:filter transition duration-500 z-10 w-full
                                        max-w-[400px] md:max-w-[1000px]" 
                            src="assets/profile-image.png"
                        />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className="hover:filter transition duration-500 z-10 w-full
                                    max-w-[500px] md:max-w-w-[600px]" 
                        src="assets/profile-image.png"
                    />
                )}
            </motion.div>
        </div>

        {/* MAIN SECTION */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
            {/* HEADINGS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <p className="text-6xl font-playfair z-10 text-center md:text-start">
                    Chaiwat {""}
                    <span className="xs:relative z-20 before:absolute before:-left-[25px]
                        before:-top-[70px] before:z-[-1]">
                    Wongsatjachock
                    </span>
                </p>
                <p className="mt-10 mb-7 text-sm text-center md:text-start">
                I'm a graduting student of 2024 from UC Riverside with a major in Computer Science. I have a passion with computer
                and I'm excited to bring my knowledge, skills, and enthusiasm into the professional world.
                </p>
            </motion.div>

            {/* CALL TO ACTIONS */}
            <motion.div
                className="flex mt-5 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <AnchorLink
                    className="bg-[#77dd77] text-white rounded-sm py-3 px-5 font-semibold
                        hover:bg-[#006D5B] hover:text-[#90ee90] transition duration-500"
                    onClick={() => setSelectedPage("contact")}
                    href="#contact"
                >
                    Contact Me
                </AnchorLink>
                <AnchorLink
                    className="rounded-r-sm bg-[#77dd77] py-0.5 pr-0.5"
                    onClick={() => setSelectedPage("contact")}
                    href="#contact"
                >
                    <div
                        className="bg-[#006D5B] hover:text-[#90ee90] transition duration-500 w-full h-full flex items-center
                        justify-center font-playfair px-5">
                    Let's talk
                    </div>
                </AnchorLink>
                <a
                    className="bg-[#77dd77] text-white rounded-sm py-3 px-5 font-semibold
                        hover:bg-[#006D5B] hover:text-[#90ee90] transition duration-500"
                    onClick={() =>  window.open('assets/Resume.pdf', '_blank')}
                >
                    Resume
                </a>
            </motion.div>

            <motion.div
                className="flex mt-5 justify-center md:justify-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}            
            >
                <SocialMediaIcons />
            </motion.div>
        </div>
    </section>
  )
}

export default Landing