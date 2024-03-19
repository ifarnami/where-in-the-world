import { createContext } from "react";
import { FetchedCountries } from "../types/types";

interface ICountriesContext {
  filteredCountries: FetchedCountries[];
  getCountry: (path: number) => void;
  filterCountries: (searchParam: string) => void;
  findCountry: (id: string) => FetchedCountries;
}

export const CountriesContext = createContext<ICountriesContext | undefined>(
  undefined
);
