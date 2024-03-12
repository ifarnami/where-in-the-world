interface ICountryCardProps {
  imgAddress: string;
  title: string;
  population: number;
  region: string;
  capital: string;
}

const CountryCard: React.FC<ICountryCardProps> = ({
  imgAddress,
  title,
  population,
  region,
  capital,
}): JSX.Element => {
  return (
    <div className="w-[250px] h-[380px] rounded-lg flex flex-col shadow-secondary overflow-hidden dark:bg-dark-elements">
      <div className="h-1/3">
        <img src={imgAddress} alt="flag" />
      </div>
      <div className="px-3 pb-5 pt-16 flex flex-col gap-5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="text-gray-700 dark:text-gray-200 font-medium">
          <p>
            Population:{" "}
            <span className="text-gray-500 dark:text-gray-400 font-normal">
              {population}
            </span>
          </p>
          <p>
            Region:{" "}
            <span className="text-gray-500 dark:text-gray-400 font-normal">
              {region}
            </span>
          </p>
          <p>
            Capital:{" "}
            <span className="text-gray-500 dark:text-gray-400 font-normal">
              {capital}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
