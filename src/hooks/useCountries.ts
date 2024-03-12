import { useContext } from "react";
import { CountriesContext } from "../utils/countriesContext";

const useCountries = () => {
  const context = useContext(CountriesContext);

  if (context === undefined) {
    throw new Error("useCountries should be used with CountryContext");
  } else {
    return context;
  }
};

export default useCountries;
