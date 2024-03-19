import { Language } from "../types/types";

export const displayLanguages = (langs: Language[]) => {
  const arr = langs.map((lang) => {
    return lang.name;
  });
  return arr.join(", ");
};

export const formatNumbersWithCommas = (population: number) => {
  return population.toLocaleString("en-US");
};
