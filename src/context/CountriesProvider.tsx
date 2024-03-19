import { PropsWithChildren, useEffect, useState } from "react";
import { CountriesContext } from "../utils/countriesContext";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
import { FetchedCountries } from "../types/types";

interface ICountriesProviderProps extends PropsWithChildren {}

const CountriesProvider: React.FC<ICountriesProviderProps> = ({
  children,
}): JSX.Element => {
  const [countriesList, setCountriesList] = useState<FetchedCountries[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<
    FetchedCountries[]
  >([]);

  const getCountry = async (page: number = 1) => {
    await axios
      .get(`${baseUrl}/countries?_page=${page}&_per_page=20`)
      .then((res) => {
        const data = res.data.data;
        setCountriesList(data);
        setFilteredCountries(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCountry();
  }, []);

  const filterCountries = (searchParam: string) => {
    const newList = countriesList.filter((country) =>
      country.name.toLowerCase().includes(searchParam)
    );
    setFilteredCountries(newList);
  };

  const findCountry = (id: string) => {
    const selectedCountry = filteredCountries.find(
      (country) => country.id === id
    );
    if (selectedCountry) {
      return selectedCountry;
    } else {
      throw new Error("There isn't any country with the given id!!!");
    }
  };

  return (
    <CountriesContext.Provider
      value={{ findCountry, filteredCountries, getCountry, filterCountries }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
