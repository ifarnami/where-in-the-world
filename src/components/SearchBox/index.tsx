import { IoIosSearch } from "react-icons/io";
import useCountries from "../../hooks/useCountries";

interface ISearchBox {}

const SearchBox: React.FC<ISearchBox> = (): JSX.Element => {
  const { filterCountries } = useCountries();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterCountries(e.target.value);
  };

  return (
    <div className="w-fit h-fit bg-white shadow-secondary flex items-center pl-3 ml-10 rounded-md overflow-hidden dark:bg-dark-elements">
      <div className="text-2xl text-[#9EA5B1]">
        <IoIosSearch />
      </div>
      <input
        className="px-3 py-3 w-[450px] outline-none dark:bg-dark-elements dark:text-gray-100"
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
