import { createContext } from "react";
import { Country } from "../types/types";

interface ICountriesContext {
  filteredCountries: Country[];
  getCountry: (path: number) => void;
  searchForCountry: (searchParam: string) => void;
  findCountry: (id: string) => Country | undefined;
  filterByRegion: (region: string) => void;
}

export const CountriesContext = createContext<ICountriesContext | undefined>(
  undefined
);
