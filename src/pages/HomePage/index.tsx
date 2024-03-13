import CountriesWrapper from "../../components/CountiesWrapper";
import Pagination from "../../components/Pagination";
import SearchBox from "../../components/SearchBox";

const HomePage = () => {
  return (
    <div className="px-10 py-8">
      <SearchBox />
      <CountriesWrapper />
      <Pagination />
    </div>
  );
};

export default HomePage;
