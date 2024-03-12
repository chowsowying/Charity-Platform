import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

type Props = {
  icon: JSX.Element;
  title: string;
};

const CauseCard = ({ icon, title }: Props) => {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-10 py-5 text-center bg-secondary-100">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-3">{icon}</div>
        <p className=" text-sm text-gray-500">Donate for</p>
        <h4 className="font-bold text-2xl">{title}</h4>
      </div>
      <div className="flex justify-between items-center mt-5">
        <p>View More</p>
        <ArrowLongRightIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default CauseCard;
