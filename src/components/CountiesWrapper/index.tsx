import useCountries from "../../hooks/useCountries";
import CountryCard from "../CountryCard";

interface ICountriesWrapperProps {}

const CountriesWrapper: React.FC<ICountriesWrapperProps> = (): JSX.Element => {
  const { filteredCountries } = useCountries();

  return (
    <ul className="w-full py-7 grid grid-cols-4 justify-items-center gap-10">
      {filteredCountries.map((country) => {
        return (
          <li key={country.id}>
            <CountryCard
              id={country.id}
              title={country.name}
              capital={country.capital}
              imgAddress={country.flag}
              population={country.population}
              region={country.region}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CountriesWrapper;
