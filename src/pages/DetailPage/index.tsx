import { useParams } from "react-router-dom";
import Detail from "../../components/Detail";
import useCountries from "../../hooks/useCountries";
import { useEffect, useState } from "react";
import { Country } from "../../types/types";

const DetailsPage = () => {
  const [countryDetail, setCountryDetail] = useState<Country>({
    name: "string",
    topLevelDomain: [],
    alpha2Code: "string",
    alpha3Code: "string",
    callingCodes: [],
    capital: "string",
    altSpellings: [],
    subregion: "string",
    region: "string",
    population: 0,
    latlng: [],
    demonym: "string",
    area: 0,
    timezones: [],
    nativeName: "string",
    numericCode: "string",
    flags: {
      svg: "",
      png: "",
    },
    currencies: [],
    languages: [],
    translations: {
      br: "",
      pt: "",
      nl: "",
      hr: "",
      fa: "",
      de: "",
      es: "",
      fr: "",
      ja: "",
      it: "",
      hu: "",
    },
    flag: "string",
    regionalBlocs: [],
    independent: false,
    gini: 0,
    borders: [],
    cioc: "string",
    id: "string",
  });
  const { findCountry } = useCountries();
  const { countryId } = useParams();

  useEffect(() => {
    if (countryId) {
      const country = findCountry(countryId);
      setCountryDetail(country);
    }
  }, [countryId, findCountry]);

  return (
    <Detail
      name={countryDetail.name}
      capital={countryDetail.capital}
      borders={countryDetail.borders}
      currencies={countryDetail.currencies}
      languages={countryDetail.languages}
      nativeName={countryDetail.nativeName}
      population={countryDetail.population}
      region={countryDetail.region}
      subregion={countryDetail.subregion}
      topLevelDomain={countryDetail.topLevelDomain}
      flag={countryDetail.flag}
      id={countryDetail.id}
    />
  );
};

export default DetailsPage;
