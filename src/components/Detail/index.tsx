import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Country } from "../../types/types";
import {
  displayLanguages,
  formatNumbersWithCommas,
} from "../../helpers/helpers";

interface IDetailProps extends Country {}

const Detail: React.FC<IDetailProps> = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  return (
    <section className="px-16 py-16 flex flex-col gap-12">
      <Link
        to="/"
        className="w-fit rounded shadow-secondary dark:shadow-primary pl-4 pr-7 py-1.5 flex items-center gap-1"
      >
        <div className="text-2xl">
          <IoIosArrowRoundBack />
        </div>
        Back
      </Link>

      <div className="flex items-center gap-48">
        <div className="h-96 w-2/5">
          <img className="max-h-full w-full" src={flag} alt="flag image" />
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-extrabold">{name}</h2>
          <div className="flex gap-10 font-bold text-lg">
            <ul>
              <li>
                Native Name:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal ">
                  {nativeName}
                </span>
              </li>
              <li>
                Population:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal ">
                  {formatNumbersWithCommas(population)}
                </span>
              </li>
              <li>
                Region:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal ">
                  {region}
                </span>
              </li>
              <li>
                Sub Region:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal ">
                  {subregion}
                </span>
              </li>
              <li>
                Capital:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal ">
                  {capital}
                </span>
              </li>
            </ul>

            <ul>
              <li>
                Top Level Domain:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal">
                  {<p className="inline">{topLevelDomain}</p>}
                </span>
              </li>
              <li>
                Currencies:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal">
                  <p className="inline">
                    {currencies && currencies.map((currency) => currency.name)}
                  </p>
                </span>
              </li>
              <li>
                Languages:{" "}
                <span className="text-gray-500 dark:text-gray-400 font-normal">
                  {displayLanguages(languages)}
                </span>
              </li>
            </ul>
          </div>
          <ul className="flex items-center gap-2 text-lg font-bold">
            Border Countries:
            {borders ? (
              borders.map((borderCountry, index) => {
                return (
                  <li
                    className="w-fit shadow-primary px-3 py-1.5 text-gray-500 dark:text-gray-400 font-normal"
                    key={index}
                  >
                    {borderCountry}
                  </li>
                );
              })
            ) : (
              <li className="w-fit shadow-primary px-3 py-1.5 text-gray-500 dark:text-gray-400 font-normal">
                No Country!
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Detail;
