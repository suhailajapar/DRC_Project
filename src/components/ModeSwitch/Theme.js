//variables for dark and light themes
import { createGlobalStyle } from "styled-components";
import LightWave from "./../../assets/Waves/wave_light.svg";
import DarkWave from "./../../assets/Waves/wave_dark.svg";
import LightLogo from "../../assets/DashboardAsset/DashLogoLight.svg";
import DarkLogo from "../../assets/DashboardAsset/DashLogoDark.svg";
import DropdownImgLight from "../../assets/Market Asset/down-chevron-light.png";
import DropdownImgDark from "../../assets/Market Asset/down-chevron-dark.png";
import WalletIconDark from "../../assets/DashboardAsset/WalletIconDark.svg";
import WalletIconLight from "../../assets/DashboardAsset/WalletIconLight.svg";

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
  dropdownIcon: `url(${DropdownImgLight})`,
  walletIcon: `url(${WalletIconLight})`,
  chartSelect: "#609D45",
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
  dropdownIcon: `url(${DropdownImgDark})`,
  walletIcon: `url(${WalletIconDark})`,
  chartSelect: "#193460",
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

.css-1wtx3ed-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
  background-color: ${(props) => props.theme.chartSelect} !important;
}

.w-icon {
  content: ${(props) => props.theme.walletIcon};
}

.MuiTableRow-root:nth-of-type(even), .MuiTableHead-root th {
  background-color: ${(props) => props.theme.tableCellEven};
}

.css-pv6s8w-MuiTableRow-root td, .MuiTableCell-root:hover, .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input, .css-i4bv87-MuiSvgIcon-root, .css-1d159sf-MuiSvgIcon-root, .css-ahj2mt-MuiTypography-root, .MuiTableHead-root th {
    color: ${(props) => props.theme.fontColor} !important;

}

.dropdown-icon {
  content: ${(props) => props.theme.dropdownIcon};
 
}

.headerBarLogo {
  content: ${(props) => props.theme.headerLogo}
}

.Profile, .footer, .DashHead, .MarketHead, .buy-sell-input, .LiveCharts-header, .Table-header, .login-input, .signup-input, .Profile_main_wrapper__-PDi6, .Profile_InputBox__o4OoZ {
  color: ${(props) => props.theme.fontColor} !important
}

.links {
  color: ${(props) => props.theme.linkColor}
}
`;
