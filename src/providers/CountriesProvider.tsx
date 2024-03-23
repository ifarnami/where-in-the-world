import { PropsWithChildren, useEffect, useState } from "react";
import { CountriesContext } from "../contexts/countriesContext";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
import { Country } from "../types/types";
import { useNavigate } from "react-router-dom";

interface ICountriesProviderProps extends PropsWithChildren {}

const CountriesProvider: React.FC<ICountriesProviderProps> = ({
  children,
}): JSX.Element => {
  const navigate = useNavigate();
  const [countriesList, setCountriesList] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const getCountry = async (page: number = 1) => {
    await axios
      .get(`${baseUrl}/countries?_page=${page}&_per_page=20`)
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        setCountriesList(data);
        setFilteredCountries(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCountry();
  }, []);

  const searchForCountry = (searchParam: string) => {
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
      navigate("/");
    }
  };

  const filterByRegion = (region: string) => {
    if (region === "none") {
      setFilteredCountries(countriesList);
    } else {
      const newList = countriesList.filter(
        (country) => country.region.toLowerCase() === region
      );
      setFilteredCountries(newList);
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        findCountry,
        filteredCountries,
        getCountry,
        searchForCountry,
        filterByRegion,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
