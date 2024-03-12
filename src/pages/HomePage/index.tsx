import CountriesWrapper from "../../components/CountiesWrapper";
import SearchBox from "../../components/SearchBox";

const HomePage = () => {
  return (
    <div className="px-10 py-8">
      <SearchBox />
      <CountriesWrapper />
    </div>
  );
};

export default HomePage;
