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
            src={`../assets/${projectTitle}.jpeg`} 
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
                    <span className="text-[#74c365]">PRO</span>JECTS
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
                        className="flex justify-center text-center items-center p-10 bg-red
                                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold" 
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Resume 322" desc="Create a resume using Markdown" link="https://github.com/UCR-Senior-Design/course-project-dvl"/>
                    <Project title="Boba Thoughts" desc="Find a new boba shop" link="https://github.com/stormyy00/BobaThoughts"/>

                    {/* ROW 2 */}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue
                                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold" 
                    >
                        INTUITIVE NAVIGATION
                    </div>
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue
                                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold" 
                    >
                        RESPONSIVE DESIGN
                    </div>
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue
                                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold" 
                    >
                        SEAMLESS FUNCTIONALITY
                    </div>

                    {/* ROW 3 */}
                    <Project title="Monster Slayer" desc="Hunt monsters in your terminal" link="https://github.com/cwongsatjachock/Monster-Slayer"/>
                    <Project title="Project 7" />
                    <div
                        className="flex justify-center text-center items-center p-10 bg-blue
                                    max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold" 
                    >
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
    </section>
  )
}

export default Projects