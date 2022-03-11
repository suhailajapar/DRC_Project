//variables for dark and light themes
import { createGlobalStyle } from "styled-components";
import LightWave from "./../../assets/Waves/wave_light.svg";
import DarkWave from "./../../assets/Waves/wave_dark.svg";
import LightLogo from "../../assets/DashboardAsset/DashLogoLight.svg";
import DarkLogo from "../../assets/DashboardAsset/DashLogoDark.svg";

//object that references to the color properties
export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  backgroundImg: `url(${LightWave})`,
  cardBorder: "1px solid #c2c2c2",
  cardBody: "white",
  linkColor: "#498e2c",
  tableCellOdd: "#FFFFFF",
  tableCellEven: "#F3F3F3",
  headerLogo: `url(${LightLogo})`,
};

export const darkTheme = {
  body: "#1F1F1F",
  fontColor: "#fff",
  backgroundImg: `url(${DarkWave})`,
  cardBorder: "black",
  cardBody: "#010023",
  linkColor: "#7ed957",
  tableCellOdd: "#1F1F1F",
  tableCellEven: "#010023",
  headerLogo: `url(${DarkLogo})`,
};

//base styling (for entire document)
export const GlobalStyles = createGlobalStyle`
.login, .signup-container, .DashBG, .marketBG, .Profile_profile_bg__vVrLu {
  transition: background-color 0.5s ease;
}



.login, .signup-container, .DashBG, .marketBG, .Profile_profile_bg__vVrLu {
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  background-image: ${(props) => props.theme.backgroundImg};
}

.Profile, .BoughtAssets, .Wallet, .Chart, .LiveCharts, .Table {
  background-color: ${(props) => props.theme.cardBody};
  color: ${(props) => props.theme.fontColor};
  border: ${(props) => props.theme.cardBorder}
}

.MuiTableRow-root:nth-of-type(odd) {
  background-color: ${(props) => props.theme.tableCellOdd};
  
}

.MuiTableRow-root:nth-of-type(even), .css-1umaptr-MuiTableCell-root {
  background-color: ${(props) => props.theme.tableCellEven};
}

.css-pv6s8w-MuiTableRow-root td, .MuiTableCell-root:hover, .css-i4bv87-MuiSvgIcon-root, .css-1d159sf-MuiSvgIcon-root, .css-ahj2mt-MuiTypography-root, .css-1umaptr-MuiTableCell-root  {
    color: ${(props) => props.theme.fontColor};

}

.headerBarLogo {
  content: ${(props) => props.theme.headerLogo}
}

.Profile, .footer, .DashHead, .MarketHead, .buy-sell-input, .LiveCharts-header, .Table-header, .login-input, .signup-input,  .Profile_main_wrapper__-PDi6, .Profile_InputBox__o4OoZ{
  color: ${(props) => props.theme.fontColor}
}

.links {
  color: ${(props) => props.theme.linkColor}
}
`;
