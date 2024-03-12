import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
};

const CampaignCard = ({ title, description, image, goal, raised }: Props) => {
  // Calculate the percentage of the goal raised
  const progress = (raised / goal) * 100;

  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 drop-shadow-lg">
      <div className="mb-4 flex justify-center">
        <img src={image} alt="" />
      </div>

      <div className="p-3">
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold">
            ${raised} <span className="font-normal text-gray-500">raised of ${goal}</span>
          </p>
          <button className="bg-secondary-500 rounded-xl py-2 px-4 text-white">Donate</button>
        </div>
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-4 rounded-full mt-3">
          <div
            className="bg-secondary-500 h-full rounded-full"
            style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
