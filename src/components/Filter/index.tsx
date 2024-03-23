import { ChangeEvent, ChangeEventHandler } from "react";
import useCountries from "../../hooks/useCountries";

interface IFilterProps {}

const Filter: React.FC<IFilterProps> = (): JSX.Element => {
  const { filterByRegion } = useCountries();

  const handleFilter: ChangeEventHandler = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value;
    filterByRegion(value);
  };

  return (
    <select
      name="region"
      id="region"
      className="outline-none rounded-md px-6 py-3 shadow-primary dark:bg-dark-elements dark:shadow-secondary"
      onChange={handleFilter}
    >
      <option selected value="none">
        Filter by Region
      </option>
      <option value="africa">Africa</option>
      <option value="asia">Asia</option>
      <option value="americas">America</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default Filter;
