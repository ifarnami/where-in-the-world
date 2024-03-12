import { createContext } from "react";
import { FetchedCountries } from "../types/types";

interface ICountriesContext {
  countriesList: FetchedCountries[];
  getCountry: (path: number) => void;
}

export const CountriesContext = createContext<ICountriesContext | undefined>(
  undefined
);
