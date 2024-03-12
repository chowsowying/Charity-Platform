import CTA from "@/components/Home/CTA";
import Campaign from "@/components/Home/Campaign";
import Cause from "@/components/Home/Cause";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import News from "@/components/Home/News";
import Story from "@/components/Home/Story";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Campaign />
      <Cause />
      <Story />
      <News />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
