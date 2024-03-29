export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital?: string;
  altSpellings?: string[];
  subregion: string;
  region: string;
  population: number;
  latlng?: number[];
  demonym?: string;
  area?: number;
  timezones?: string[];
  nativeName: string;
  numericCode?: string;
  flags?: Flags;
  currencies?: Currency[];
  languages: Language[];
  translations?: Translations;
  flag: string;
  regionalBlocs?: RegionalBlock[];
  independent?: boolean;
  gini?: number;
  borders?: string[];
  cioc?: string;
  id: string;
}

export interface RegionalBlock {
  acronym: string;
  name: string;
  otherAcronyms?: string[];
  otherNames?: string[];
}

export interface Translations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa?: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}

export interface Language {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export type Pages = {
  number: number;
  selected: boolean;
};
