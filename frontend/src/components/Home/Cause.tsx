import { CauseCardType } from "@/shared/types";
import {
  PlusCircleIcon,
  AcademicCapIcon,
  UserGroupIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import CauseCard from "./CauseCard";

const Cause = () => {
  const causes: Array<CauseCardType> = [
    {
      icon: <UserGroupIcon className="h-24 w-24 text-secondary-500" />,
      title: "Helpless Children",
    },
    {
      icon: <PlusCircleIcon className="h-24 w-24 text-secondary-500" />,
      title: "Medical Service",
    },
    {
      icon: <AcademicCapIcon className="h-24 w-24 text-secondary-500" />,
      title: "Education Service",
    },
    {
      icon: <HandThumbUpIcon className="h-24 w-24 text-secondary-500" />,
      title: "Other Causes",
    },
  ];

  return (
    <section id="causes" className="mx-auto min-h-full w-5/6 py-20">
      {/* Header */}
      <div className="md:w-3/5">
        <h1 className="text-4xl font-bold">Donation Cause</h1>
        <p className="my-5 text-sm">
          Our activities are directed to the needs of helpless people who require help to survive.
          The purpose of our foundation is to make Earth a better place to live.
        </p>
      </div>
      {/* Cause Card */}
      <div className="mt-5 items-center justify-between gap-8 md:flex">
        {causes.map((c: CauseCardType) => (
          <div key={c.title}>
            <CauseCard key={c.title} title={c.title} icon={c.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cause;
