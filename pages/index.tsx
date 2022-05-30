import type { NextPage } from "next";
import ItemCard from "../components/ItemCard/ItemCard";

const Home: NextPage = () => {
  return (
    <div className="grid">
      <ItemCard
        imgLink="/images/billing-page/thumbnail.png"
        date="28 april 2022"
        title="billing page"
        link="/billing-page"
      />
    </div>
  );
};

export default Home;
