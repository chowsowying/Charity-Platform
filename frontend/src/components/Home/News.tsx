import News1 from "@/assets/News-1.jpg";
import News2 from "@/assets/News-2.jpg";
import News3 from "@/assets/News-3.jpg";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

type Props = {};

const News = (props: Props) => {
  return (
    <section id="news" className="mx-auto min-h-full w-5/6 py-20">
      {/* Header */}
      <div className="md:w-3/5">
        <h1 className="text-4xl font-bold">News and Resources</h1>
        <p className="my-5 text-sm">
          Our activities are directed to the needs of helpless people who require help to survive.
          The purpose of our foundation is to make Earth a better place to live.
        </p>
      </div>

      <div className="md:flex gap-x-5">
        {/* Card 1 */}
        <div className="md:w-1/2">
          <div className="mt-5 rounded-md border-2 border-gray-100 drop-shadow-lg">
            <div className="mb-4 flex justify-center">
              <img src={News1} alt="" />
            </div>
            <div className="p-3">
              <h4 className="font-bold">News 1: Raised over $20000 for Cause A</h4>
              <p className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna at odio
                dignissim, quis vehicula nisi aliquam. Nam id orci ut velit venenatis tempor. Nunc
                finibus turpis quis justo vulputate, id consequat velit cursus. Ut vitae nisi vitae
                est accumsan lobortis. Sed nec massa sed ligula finibus malesuada.{" "}
              </p>
              <div className="flex gap-x-4 items-center mt-5">
                <p className="font-bold">Read More</p>
                <ArrowLongRightIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          {/* Card 2 */}
          <div>
            <div className="mt-5 rounded-md border-2 border-gray-100 drop-shadow-lg flex">
              <div className="w-2/5">
                <img src={News2} alt="" className="h-full object-cover" />
              </div>
              <div className="p-3 w-3/5">
                <h4 className="font-bold">News 2: Raised over $20000 for Cause A</h4>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna at odio
                  dignissim, quis vehicula nisi aliquam. Nam id orci ut velit venenatis tempor. Nunc
                  finibus turpis quis justo vulputate, id consequat velit cursus. Ut vitae nisi
                  vitae est accumsan lobortis. Sed nec massa sed ligula finibus malesuada.{" "}
                </p>
                <div className="flex gap-x-4 items-center mt-5">
                  <p className="font-bold">Read More</p>
                  <ArrowLongRightIcon className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div>
            <div className="mt-5 rounded-md border-2 border-gray-100 drop-shadow-lg flex">
              <div className="w-2/5">
                <img src={News3} alt="" className="h-full object-cover" />
              </div>
              <div className="p-3 w-3/5">
                <h4 className="font-bold">News 3: Raised over $20000 for Cause A</h4>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna at odio
                  dignissim, quis vehicula nisi aliquam. Nam id orci ut velit venenatis tempor. Nunc
                  finibus turpis quis justo vulputate, id consequat velit cursus. Ut vitae nisi
                  vitae est accumsan lobortis. Sed nec massa sed ligula finibus malesuada.{" "}
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
    </section>
  );
};

export default News;
