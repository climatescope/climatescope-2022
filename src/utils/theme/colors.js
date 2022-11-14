const colors = {
  teal: {
    // "50": "#FFFFFF",
    // "100": "#D9F1F3",
    // "200": "#A6DDE2",
    // "300": "#73CAD2",
    // "400": "#40B7C2",
    // "500": "#009FAD",
    // "600": "#00899B",
    // "700": "#006C7A",
    // "800": "#004852",
    // "900": "#002D33",


    // "50": "#f2fbfb",
    // "100": "#ddf4f6",
    // "200": "#b4e8ec",
    // "300": "#97e0e6",
    // "400": "#63d4de",
    // "500": "#009FAD",
    // "600": "#0397A5",
    // "700": "#028B97",
    // "800": "#026c76",
    // "900": "#013f44"

    "50": "#f2fbfb",
    "100": "#DBF3F5",
    "200": "#BEEBEF",
    "300": "#94DDE5",
    "400": "#28AEBD",
    "500": "#06A0B1",
    "600": "#0194A7",
    "700": "#018798",
    "800": "#016C7A",
    "900": "#003B42"

  },
  gray: {
    // "25": "#FAFBFB",
    // "50": "#ECEFF1",
    // "100": "#CFD8DC",
    // "200": "#B0BEC5",
    // "300": "#90A4AE",
    // "400": "#78909C",
    // "500": "#607D8B",
    // "600": "#546E7A",
    // "700": "#455A64",
    // "800": "#37474F",
    // "900": "#263238",
    "900": "#212529",
    "800": "#353B41",
    "700": "#434A51",
    "600": "#687078",
    "500": "#778088",
    "400": "#878F97",
    "300": "#9DA3AA",
    "200": "#D7D9DB",
    "100": "#E7E8E9",
    "50": "#F4F4F4",
    "25": "#FAFAFA",
  },
  green: {
    "50": "#FFFFFF",
    "100": "#DDF0D9",
    "200": "#C1DABC",
    "300": "#A8C4A2",
    "400": "#8EAD89",
    "500": "#75966F",
    "600": "#587753",
    "700": "#3B5938",
    "800": "#1F3E1E",
    "900": "#002900",
  },
  yellow: {
    // "50": "#FFFFFF",
    // "100": "#FEEDD4",
    // "200": "#FDDEB1",
    // "300": "#FBCF8F",
    // "400": "#FAC06C",
    // "500": "#F8B149",
    // "600": "#DE9837",
    // "700": "#C37F25",
    // "800": "#A96612",
    // "900": "#8E4D00",
    
    // "50": "#fefbf2",
    // "100": "#fef4dd",
    // "200": "#fce7b4",
    // "300": "#fbdd97",
    // "400": "#facd63",
    // "500": "#FEBD25",
    // "600": "#df9101",
    // "700": "#c17401",
    // "800": "#884801",
    // "900": "#4f2600"

    "50": "#fefbf2",
    "100": "#fdf5dd",
    "200": "#fceab4",
    "300": "#fae197",
    "400": "#f9d363",
    "500": "#f8ba01",
    "600": "#de9901",
    "700": "#c07901",
    "800": "#884a01",
    "900": "#4e2600"

  },
  orange: {
    "50": "#FFFFFF",
    "100": "#FDE2DA",
    "200": "#FBC8B9",
    "300": "#F9AE98",
    "400": "#F69377",
    "500": "#F47956",
    "600": "#D76141",
    "700": "#B9492B",
    "800": "#9C3116",
    "900": "#7E1900",
  },
  red: {
    "50": "#FFFFFF",
    "100": "#FCCED1",
    "200": "#F3AAAE",
    "300": "#E9858B",
    "400": "#E06167",
    "500": "#D63C44",
    "600": "#C0343C",
    "700": "#AA2C35",
    "800": "#94232D",
    "900": "#7E1B25",
  },
  purple: {
    // "50": "#FFFFFF",
    // "100": "#E8E4FF",
    // "200": "#CAC6FF",
    // "300": "#ACAAF1",
    // "400": "#908ED3",
    // "500": "#7473B6",
    // "600": "#585999",
    // "700": "#3D417E",
    // "800": "#212A63",
    // "900": "#001752",
    "900": "#252551",
    "800": "#383877",
    "700": "#4D4D9E",
    "600": "#6363C4",
    "500": "#7A7AEB",
    "400": "#9191EE",
    "300": "#AAAAF2",
    "200": "#C3C3F6",
    "100": "#DDDDF9",
    "50": "#F7F7FD",
  },
  blue: {
    "50": "#FFFFFF",
    "100": "#D7EFF9",
    "200": "#AACADF",
    "300": "#81A3C2",
    "400": "#5B7EA1",
    "500": "#335882",
    "600": "#26476F",
    "700": "#1A365B",
    "800": "#0E2A4E",
    "900": "#001D3D",
  },
  twitter: {
    "400": "#39ADF4",
    "500": "#1da1f2",
    "600": "#0E98EC",
  },
  linkedin: {
    "400": "#0086CC",
    "500": "#0077B5",
    "600": "#00689E",
  },
  facebook: {
    "400": "#428EF0",
    "500": "#1877F2",
    "600": "#0C61D0",
  },
  indicators: {
    // "Biomass & Waste": "#75E3A1",
    // "Coal": "#414141",
    // "Geothermal": "#8A5DB5",
    // "Large Hydro": "#005673",
    // "Marine": "#BD5CA3",
    // "Natural Gas": "#D2D2D2",
    // "Nuclear": "#EE3124",
    // "Oil & Diesel": "#106E32",
    // "Other - fossil": "#6D6E71",
    // "Other - non-fossil": "#AB96C9",
    // "Solar PV": "#FFC91D",
    // "Solar thermal": "#F47E3E",
    // "Wind": "#0D9DDB",

    // "Biomass": "#75E3A1",
    // "Hydro": "#005673",
    // "Solar": "#FFC91D",
    // "Gas": "#D2D2D2",
    // "Oil": "#106E32",

    "Biomass & Waste": "#10D5B5",
    "Coal": "#40454F",
    "Geothermal": "#8F4DD2",
    "Large Hydro": "#01687C",
    "Marine": "#B70B8C",
    "Natural Gas": "#D7D9DB",
    "Nuclear": "#E24234",
    "Oil & Diesel": "#078D76",
    "Other - fossil": "#687078",
    "Other - non-fossil": "#B67FEE",
    "Solar PV": "#f8ba01",
    "Solar thermal": "#FFA86A",
    "Wind": "#02BDE3",

    "Biomass": "#10D5B5",
    "Hydro": "#01687C",
    "Solar": "#f8ba01",
    "Gas": "#D7D9DB",
    "Oil": "#078D76",

    "mena": "#078D76",
    "amer": "#02BDE3",
    "asia": "#E24234",
    "eu": "#10D5B5",

    "Asia-Pacific": "#E24234",
    "Europe": "#10D5B5",
    "Americas": "#02BDE3",
    "Middle East & Africa": "#078D76",

    "Africa": "#f8ba01",
    "Middle East": "#078D76",

  },
}

export default { ...colors, brand: colors.teal }
