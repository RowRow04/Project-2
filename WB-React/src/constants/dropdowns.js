import {
  countries,
  refbrgy,
  refcitymun,
  refprovince,
  refregion,
} from "../assets/address";

export const suffixList = [
  {
    value: "Jr.",
    label: "Jr.",
  },
  {
    value: "Jr. II",
    label: "Jr. II",
  },
  {
    value: "Sr.",
    label: "Sr.",
  },
  {
    value: "II",
    label: "II",
  },
  {
    value: "III",
    label: "III",
  },
  {
    value: "IV.",
    label: "IV.",
  },
  {
    value: "V.",
    label: "V.",
  },
  {
    value: "VI.",
    label: "VI.",
  },
];

export const categoryList = [
  {
    label: "Camper",
    value: "CAMPER",
  },
  {
    label: "Biker",
    value: "BIKER",
  },
];

export const sexList = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
];

const sortByLabel = (arr) => {
  return arr.sort((a, b) => {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });
};

export const countriesList = sortByLabel(
  countries.map(({ countryCode, countryName }) => ({
    value: countryCode,
    label: countryName,
  }))
);

export const refbrgyList = sortByLabel(
  refbrgy.map(({ brgyCode, brgyDesc, ...obj }) => ({
    ...obj,
    value: brgyCode,
    label: brgyDesc,
  }))
);

export const refcitymunList = sortByLabel(
  refcitymun.map(({ citymunCode, citymunDesc, ...obj }) => ({
    ...obj,
    value: citymunCode,
    label: citymunDesc,
  }))
);

export const refprovinceList = sortByLabel(
  refprovince.map(({ provCode, provDesc, ...obj }) => ({
    ...obj,
    value: provCode,
    label: provDesc,
  }))
);

export const refregionList = sortByLabel(
  refregion.map(({ regCode, regDesc, ...obj }) => ({
    ...obj,
    value: regCode,
    label: regDesc,
  }))
);
