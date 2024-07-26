import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <main>
      <div className="items-container">
        {Object.values(items).map((each) => (
          <HomeItem key={each.id} item={each} />
        ))}
      </div>
    </main>
  );
};

export default Home;
