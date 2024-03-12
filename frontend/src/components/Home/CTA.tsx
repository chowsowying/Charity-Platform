import { Link } from "react-router-dom";

type Props = {};

const CTA = (props: Props) => {
  return (
    <section id="causes" className=" bg-secondary-100">
      <div className="mx-auto min-h-full w-5/6 py-20">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-bold text-secondary-500">Want to change the world</p>
          <h4 className="font-bold text-4xl mt-5">
            Help us raised money for our
            <br /> humanitariun causes
          </h4>
          {/* Actions */}
          <div className="mt-5 flex items-center gap-8">
            <button className="bg-secondary-500 rounded-xl py-2 px-4 text-white">Donate Now</button>
            <Link className="border border-secondary-500 rounded-xl py-2 px-4 text-black" to="">
              <p>Know About Charity</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
