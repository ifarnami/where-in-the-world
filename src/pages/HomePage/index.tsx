import CountriesWrapper from "../../components/CountiesWrapper";
import Filter from "../../components/Filter";
import Pagination from "../../components/Pagination";
import SearchBox from "../../components/SearchBox";

const HomePage = () => {
  return (
    <div className="px-10 py-8">
      <div className="flex justify-between px-9">
        <SearchBox />
        <Filter />
      </div>
      <CountriesWrapper />
      <Pagination />
    </div>
  );
};

export default HomePage;
