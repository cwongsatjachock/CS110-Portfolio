import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/2"
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
            MY <span className="text-[#64e986]">SKILLS</span> AND{" "}
            <span className="text-[#7FC38D]">EDUCATION</span>
          </p>
          <LineGradient width="w-1/3" />
          <div className="mt-5 mb-7">
            <div className="flex justify-between">
              <span>University of California, Riverside</span>
              <span>Aug. 2022 – Expected Jun. 2024</span>
            </div>
            <div className="flex justify-between">
              <span>Bachelor of Science in Computer Science</span>
              <span>Riverside, CA</span>
            </div>
          </div>
          <div className="mt-5 mb-7">
            <div className="flex justify-between">
              <span>Saddleback College</span>
              <span>Aug. 2019 – Dec. 2021</span>
            </div>
            <div className="flex justify-between">
              <span>Associate of Science in Computer Science</span>
              <span>Mission Viejo, CA</span>
            </div>
          </div>
          <div className="mt-5 mb-7">
            <div className="flex justify-between">
              <span>Irvine Valley College</span>
              <span>Aug. 2020 – Aug. 2021</span>
            </div>
            <div className="flex justify-between">
              <span>Associate of Science in Computer Science</span>
              <span>Irvine, CA</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                                    before:w-full before:h-full before:border-2 before:border-[#77dd77] before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/ucr.png"
                width={500}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/ucr.png" />
          )}
        </div>
      </div>

      {/* RELEVANT COURSES */}
      <div className="md:flex md:justify-between md:gap-16 mt-10">
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
            <span className="text-[#64e986]">RELEVANT</span> CLASSES
          </p>
          <LineGradient width="w-1/3" />
          <div className="mt-5 mb-7">
          <pre>
            CS 008: INTRODUCTION TO COMPUTING<br/>
            CS 010: INTRO: CS FOR SCI, MATH & ENGR I<br/>
            CS 010B: INTRO: CS FOR SCI, MATH & ENGR II<br/>
            CS 010C: INTRO-DATA STRUCTRS & ALGORITHMS<br/>
            CS 061: MACHINE ORG & ASSEMBLY LANG PRGM<br/>
            CS 011: INTRO TO DISCRETE STRUCTURES<br/>
            CS 100: SOFTWARE CONSTRUCTION<br/>
            CS 120A: LOGIC DESIGN<br/>
            CS 141: INTERMED DATA STRUCS & ALGRTHM<br/>
            CS 150: AUTOMATA AND FORMAL LANGUAGES<br/>
            CS 153: DESIGN OF OPERATING SYSTEMS<br/>
            CS 161: DESIGN & ARCHTCTR OF COMP SYSTMS<br/>
            CS 152: COMPILER DESIGN<br/>
            CS 160: CONCURNT PRGRMNG & PARALL SYSTMS<br/>
            CS 178A/B: PROJECT SEQUENCE IN CSE<br/>
            CS 182: SOFTWARE TESTNG & VERIFICATION<br/>
            CS 170: INTRO TO ARTIFICAL INTELLIGENCE<br/>
            CS 180: INTRO TO SOFTWARE ENGINEERING<br/>
            CS 110: PRINCIPLES OF WEB DEVELOPMENT<br/>
            CS 166: DATABASE MANAGEMENT SYSTEMS<br/> 
            CS 172: INTRODUCTION TO INFORMATION RETRIEVAL 
          </pre>
          </div>
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between gap-32">
        {/* LANGUAGES */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Languages
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#81B622] absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Java, Python, Javascript, C/C++, SQL, HTML, CSS, ARM Assembly
          </p>
        </motion.div>

        {/* FRAMEWORKS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Frameworks
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#59981A] absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            React, Node.js, Express.js, GoogleTest, Vite, Next.js
          </p>
        </motion.div>

        {/* DEV TOOLS*/}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Dev Tools
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#ECF87F] absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Git, TravisCI, VS Code, Unreal Engine 4, SolidWorks, LaTeX, Figma,
            Android Studio
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
