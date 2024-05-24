import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-black font-bold" : ""} hover:text-[#AADD77] transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

Link.propTypes = {
    page: PropTypes.string.isRequired,
    selectedPage: PropTypes.string.isRequired,
    setSelectedPage: PropTypes.func.isRequired,
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const controls = useAnimation();

    useEffect(() => {
        if (!isTopOfPage) {
            controls.start({ y: 0, transition: { duration: 0.2 } });
        } else {
            controls.start({ y: -90, transition: { duration: 0.2 } });
        }
    }, [isTopOfPage, controls]);

    return (
        <div className="fixed top-0 z-40 w-full">
            <motion.div
                initial={{ y: -80 }}
                animate={controls}
                className="absolute top-0 left-0 w-full h-full bg-[#77DD77]"
            />
            <nav className="relative flex items-center justify-between mx-auto w-5/6 py-6">
                <h4 className="font-playfair text-3xl font-bold">CW</h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Interests" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-red p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <img alt="menu-icon" src="../assets/menu-icon.svg" />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src="../assets/close-icon.svg" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Interests" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

Navbar.propTypes = {
    isTopOfPage: PropTypes.bool.isRequired,
    selectedPage: PropTypes.string.isRequired,
    setSelectedPage: PropTypes.func.isRequired,
};

export default Navbar;
