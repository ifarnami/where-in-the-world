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

  const getCountry = async (page: number = 1) => {
    await axios
      .get(`${baseUrl}/countries?_page=${page}&_per_page=8`)
      .then((res) => {
        const data = res.data.data;
        setCountriesList(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <CountriesContext.Provider value={{ countriesList, getCountry }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
