import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav>
      {/* Nav Container */}
      <div className="flex items-center justify-between fixed top-0 z-30 w-full py-5 bg-primary text-white">
        <div className="flex items-center justify-between mx-auto w-5/6 ">
          <div className="flex items-center justify-between w-full gap-16">
            {/* Left Side */}
            <div className="flex items-center justify-center gap-2">
              <img alt="logo" src={Logo} className="h-8 w-8" />
              <span className="font-bold text-secondary-500">CareClub</span>
            </div>

            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-8 text-sm">
                  <Link to="#home">Home</Link>
                  <Link to="#event">Events</Link>
                  <Link to="#courses">Courses</Link>
                  <Link to="#news">News</Link>
                  <Link to="#about">About Us</Link>
                </div>
                <button className="bg-white rounded-xl py-2 px-4 text-black">Register Now</button>
              </div>
            ) : (
              <button
                className="rounded-full bg-white text-black p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary drop-shadow-xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl text-white">
            <Link to="#home">Home</Link>
            <Link to="#event">Events</Link>
            <Link to="#courses">Courses</Link>
            <Link to="#news">News</Link>
            <Link to="#about">About Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
