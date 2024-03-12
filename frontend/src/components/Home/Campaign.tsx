import { CampaignCardType } from "@/shared/types";
import Campaign1 from "@/assets/Campaign-1.jpg";
import Campaign2 from "@/assets/Campaign-2.jpg";
import Campaign3 from "@/assets/Campaign-3.jpg";
import CampaignCard from "./CampaignCard";

const campaigns: Array<CampaignCardType> = [
  {
    title: "Campaign 1: Raised food for them",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    image: Campaign1,
    goal: 10000,
    raised: 5000,
  },
  {
    title: "Campaign 2: Raised money for them",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    image: Campaign2,
    goal: 20000,
    raised: 1000,
  },
  {
    title: "Campaign 3: Built a new school for them",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    image: Campaign3,
    goal: 12000,
    raised: 5000,
  },
];

const Campaign = () => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      {/* Header */}
      <div className="mx-auto md:w-3/5 text-center">
        <h1 className="text-4xl font-bold">Current Campaign</h1>
        <p className="my-5 text-sm">
          Our activities are directed to the needs of helpless people who require help to survive.
          The purpose of our foundation is to make Earth a better place to live.
        </p>
      </div>
      {/* Campaign Card */}
      <div className="mt-5 items-center justify-between gap-8 md:flex">
        {campaigns.map((c: CampaignCardType) => (
          <div key={c.title}>
            <CampaignCard
              key={c.title}
              title={c.title}
              description={c.description}
              image={c.image}
              goal={c.goal}
              raised={c.raised}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Campaign;
