//variables for dark and light themes
import { createGlobalStyle } from "styled-components";
import LightWave from "./../../assets/Waves/wave_light.svg";
import DarkWave from "./../../assets/Waves/wave_dark.svg";

//object that references to the color properties
export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  backgroundImg: `url(${LightWave})`,
  cardBorder: "1px solid #c2c2c2",
  cardBody: "white",
  linkColor: "#498e2c",
};

export const darkTheme = {
  body: "#1F1F1F",
  fontColor: "#fff",
  backgroundImg: `url(${DarkWave})`,
  cardBorder: "black",
  cardBody: "#010023",
  linkColor: "#7ed957",
};

//base styling (for entire document)
export const GlobalStyles = createGlobalStyle`
.login, .signup-container, .DashBG, .marketBG, .Profile_main_wrapper__-PDi6 {
  transition: background-color 0.5s ease;
}



.login, .signup-container, .DashBG, .marketBG, .Profile_main_wrapper__-PDi6{
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  background-image: ${(props) => props.theme.backgroundImg};
}

.Profile, .BoughtAssets, .Wallet, .Chart, .LiveCharts, .Table{
  background-color: ${(props) => props.theme.cardBody};
  color: ${(props) => props.theme.fontColor};
  border: ${(props) => props.theme.cardBorder}
}


.Profile, .footer, .DashHead, .MarketHead, .buy-sell-input, .LiveCharts-header, .Table-header, .login-input, .signup-input, .table-cell, .Profile_main_wrapper__-PDi6{
  color: ${(props) => props.theme.fontColor}
}

.links {
  color: ${(props) => props.theme.linkColor}
}
`;
