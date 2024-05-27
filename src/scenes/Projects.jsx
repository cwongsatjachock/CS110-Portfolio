import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';


const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1}
}

const Project = ({ title, desc, link }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div 
                className={overlayStyles}  
                onClick={() => {
                    window.open(link, '_blank');
                }}
            >
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                {desc}
                </p>
            </div>
            <img 
            src={`assets/${projectTitle}.jpeg`} 
            alt={projectTitle}
            width={400}
            height={400}
            />
        </motion.div>
    )
}

Project.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    link: PropTypes.string
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
        {/* HEADINGS */}
        <motion.div
            className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                <p className="font-playfair font-semibold text-4xl">
                    <span className="text-[#74c365]">PRO</span>JECTS AND EXPERIENCES
                </p>
                    <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    I love the smell of apples.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* ROW 1 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-[#77dd77]
                                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold" 
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Resume 322" desc="Create a resume using Markdown" link="https://github.com/UCR-Senior-Design/course-project-dvl"/>
                    <Project title="Boba Thoughts" desc="Find a new boba shop" link="https://github.com/stormyy00/BobaThoughts"/>

                    {/* ROW 2 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-[#74c365]
                                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold" 
                    >
                        INTUITIVE NAVIGATION
                    </div>
                    <div
                        className="flex justify-center text-center items-center p-10 bg-[#aadd77]
                                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold" 
                    >
                        RESPONSIVE DESIGN
                    </div>
                    <div
                        className="flex justify-center text-center items-center p-10 bg-[#90ee90]
                                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold" 
                    >
                        SEAMLESS FUNCTIONALITY
                    </div>

                    {/* ROW 3 */}
                    <Project title="Monster Slayer" desc="Hunt monsters in your terminal" link="https://github.com/cwongsatjachock/Monster-Slayer"/>
                    <Project title="Flashcard App" desc="Learn using flashcards with this app" link="https://github.com/cwongsatjachock/Flashcard-App?tab=readme-ov-file"/>
                    <div
                        className="flex justify-center text-center items-center p-10 bg-[#77ddaa]
                                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold" 
                    >
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>

      {/* EXPERIENCES */}
      <div className="md:flex md:justify-between md:gap-16 mt-20">
        <motion.div
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-[#64e986]">EXP</span>ERIENCES
          </p>
          <LineGradient width="w-1/3" />
          <div className="mt-5 mb-7">
            <div className="flex justify-between">
              <span>Tech Intern - Remote</span>
              <span>Feb. 2022 – Oct. 2022</span>
            </div>
            <div className="flex justify-between">
              <a href="https://necessarybehavior.com/" target="_blank" rel="noopener noreferrer" className="hover:text-lime-600">Necessary Behavior</a>
              <span>Los Angeles, CA</span>
            </div>
          </div>
        <a href="https://necessarybehavior.com/" target="_blank" rel="noopener noreferrer">
            <img 
                src="assets/nblogo.jpg"
                alt="Necessary Behavior Logo"
            />
        </a>
        </motion.div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="md:flex md:justify-between md:gap-16 mt-20">
        <motion.div
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-[#64e986]">CERT</span>IFICATIONS
          </p>
          <LineGradient width="w-1/3" />
          <div className="mt-5 mb-7">
            <div className="flex justify-between">
                <span>Mechanical Design - SolidWorks Associate</span>
                <span>Dec. 2022</span>
            </div>
            <div className="flex justify-between">
                <span>Dassault Systemes</span>
            </div>
            </div>

            <div className="mt-5 mb-7">
            <div className="flex justify-between">
                <span>Programming for Everybody Specialization</span>
                <span>Jan. 2022</span>
            </div>
            <div className="flex justify-between">
                <span>Coursera - University of Michigan</span>
            </div>
            </div>

            <div className="mt-5 mb-7">
            <div className="flex justify-between">
                <span>Google Support IT</span>
                <span>Dec. 2021</span>
            </div>
            <div className="flex justify-between">
                <span>Coursera - Google</span>
            </div>
            </div>

            <div className="mt-5 mb-7">
            <div className="flex justify-between">
                <span>Software Engineering Virtual Experience Internship</span>
                <span>Oct. 2021</span>
            </div>
            <div className="flex justify-between">
                <span>JPMorgan Chase &amp; Co.</span>
            </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects