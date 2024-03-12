import Success1 from "@/assets/Success-1.jpg";
import Success2 from "@/assets/Success-2.jpg";
import Success3 from "@/assets/Success-3.jpg";
import Success4 from "@/assets/Success-4.jpg";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

type Props = {};

const Story = (props: Props) => {
  return (
    <section id="causes" className=" bg-secondary-100">
      <div className="mx-auto min-h-full w-5/6 py-20">
        {/* Header */}
        <div className="md:w-3/5">
          <h1 className="text-4xl font-bold">Our Success Stories</h1>
          <p className="my-5 text-sm">
            Our activities are directed to the needs of helpless people who require help to survive.
            The purpose of our foundation is to make Earth a better place to live.
          </p>
        </div>
        {/* 1st Half */}
        <div className="md:flex ">
          <div className="md:w-2/5">
            <img src={Success1} alt="Success-1" className="rounded-tr-[50px]" />
          </div>

          <div className="mt-5 md:mt-0 md:ml-10 md:w-3/5">
            <h4 className="font-bold text-2xl mb-5">Success Stories</h4>
            <div className="border-t-4  mb-4 w-1/4 border-secondary-500"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna at odio
              dignissim, quis vehicula nisi aliquam. Nam id orci ut velit venenatis tempor. Nunc
              finibus turpis quis justo vulputate, id consequat velit cursus. Ut vitae nisi vitae
              est accumsan lobortis. Sed nec massa sed ligula finibus malesuada. Cras pulvinar ipsum
              nec lectus vehicula aliquam. Integer vitae nisi nec leo bibendum suscipit a at nulla.
              In hac habitasse platea dictumst. Suspendisse potenti. Sed sed malesuada magna.
              Vestibulum vitae neque risus. Nulla ut leo feugiat, volutpat lectus non, convallis
              turpis. Nullam eu dolor et libero aliquet consequat. Quisque non dolor ac nulla
              gravida scelerisque.
            </p>
            <button className="bg-secondary-500 rounded-xl py-2 px-4 text-white mt-4">
              View More
            </button>
          </div>
        </div>
        {/* 2nd Half */}
        <div className="md:flex md:mt-24 mt-10">
          <div className="md:w-2/5 md:mt-40">
            <h4 className="font-bold text-2xl mb-5">Join Us</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna at odio
              dignissim, quis vehicula nisi aliquam. Nam id orci ut velit venenatis tempor. Nunc
            </p>
            <button className="bg-secondary-500 rounded-xl py-2 px-4 text-white mt-4">
              Register Now
            </button>
          </div>

          <div className="mt-5 md:mt-0 md:ml-10 md:w-3/5">
            <div>
              <div className="md:flex mb-5">
                <div className="md:w-2/5">
                  <img src={Success2} alt="Success-2" className="rounded-tr-[50px]" />
                </div>

                <div className="mt-5 md:mt-0 md:ml-10 md:w-3/5">
                  <h4 className="font-bold text-secondary-500 mb-5">01 Success Stories</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna at
                    odio dignissim, quis vehicula nisi aliquam.
                  </p>
                  <div className="flex gap-x-4 items-center mt-5">
                    <p className="font-bold">Read More</p>
                    <ArrowLongRightIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
              {/* Story 2 */}
              <div className="md:flex mb-5">
                <div className="md:w-2/5">
                  <img src={Success3} alt="Success-3" className="rounded-tr-[50px]" />
                </div>

                <div className="mt-5 md:mt-0 md:ml-10 md:w-3/5">
                  <h4 className="font-bold text-secondary-500 mb-5">02 Success Stories</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna at
                    odio dignissim, quis vehicula nisi aliquam.
                  </p>
                  <div className="flex gap-x-4 items-center mt-5">
                    <p className="font-bold">Read More</p>
                    <ArrowLongRightIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
              {/* Story 3 */}
              <div className="md:flex mb-5">
                <div className="md:w-2/5">
                  <img src={Success4} alt="Success-4" className="rounded-tr-[50px]" />
                </div>

                <div className="mt-5 md:mt-0 md:ml-10 md:w-3/5">
                  <h4 className="font-bold text-secondary-500 mb-5">03 Success Stories</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna at
                    odio dignissim, quis vehicula nisi aliquam.
                  </p>
                  <div className="flex gap-x-4 items-center mt-5">
                    <p className="font-bold">Read More</p>
                    <ArrowLongRightIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
