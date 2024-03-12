import { Link } from "react-router-dom";
import Header from "@/assets/Header.png";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
const Hero = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-primary text-white py-10 md:h-full md:pb-0">
      <div className="mx-auto w-5/6 items-center justify-center md:flex ">
        {/* Main Header*/}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <div>
            <div className="md:-mt-20">
              <h1 className=" text-6xl">The Power of Collective Giving</h1>
            </div>

            <p className="mt-8 text-sm">
              We help the helpless to survive these hard times. To be safe and healthy to get life
              supplies and to renovate the country's economy and infrastructure.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex items-center gap-8">
            <button className="bg-white rounded-xl py-2 px-4 text-black">Donate Now</button>
            <Link className="border border-white rounded-xl py-2 px-4 text-white" to="">
              <p>Know About Charity</p>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 mt-5 ">
          <div className="relative ">
            <div className="before:absolute before:-bottom-3 before:-right-3 before:z-[1] before:content-dotssecondary ">
              <img alt="home-pageGraphic" src={Header} className="rounded-tr-[50px] md:h-[450px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Text */}
      <div className=" w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6">
          <div className="flex items-center justify-between gap-8">
            {/* left img */}
            <div className="md:w-1/2 w-1/5 flex items-center justify-center text-secondary-300">
              <ChevronDoubleRightIcon className="h-12 w-12" />
            </div>
            {/* right text */}
            <div className="md:w-1/2 w-4/5">
              <div className="border-t-4  mb-4 w-1/4"></div>
              <p>
                We know you care about how effectively your donation is being used. That's why we
                show you how every dollar was spent, how you made a difference, and how grateful the
                health workers, paitients, teachers and students are.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      {isAboveMediumScreens && (
        <div className=" w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-full items-center justify-between gap-8 ">
              <div className="text-center">
                <h1 className="text-3xl font-bold">$10M+</h1>
                <span>Money Donated</span>
              </div>

              <div className="text-center">
                <h1 className="text-3xl font-bold">560+</h1>
                <span>Donation Recieved</span>
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-bold">165+</h1>
                <span>Successfull Campaign</span>
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-bold">$80M</h1>
                <span>Charity in last year</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
