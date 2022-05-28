import type { NextPage } from "next";
import ItemCard from "../components/ItemCard/ItemCard";

const Home: NextPage = () => {
  return (
    <div className="grid">
      <ItemCard
        imgLink="https://picsum.photos/200"
        date="28 april 2022"
        title="billing something"
        link="/billing-page"
      />
    </div>
  );
};

export default Home;
