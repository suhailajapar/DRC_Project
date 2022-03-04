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
  // searchBar: "#c4c4c4",
  // box: "#312e81",
  // wotd: "#F9F9F9",
};

export const darkTheme = {
  body: "#1F1F1F",
  fontColor: "#fff",
  backgroundImg: `url(${DarkWave})`,
  cardBorder: "black",
  cardBody: "#010023",
  // banner: "#000",
  // title: "#c7d2fe",
  // searchBar: "#575757",
  // box: "#6366f1",
  // wotd: "#000",
};

//base styling (for entire document)
export const GlobalStyles = createGlobalStyle`
.login, .signup-container, .DashBG, .marketBG {
  transition: background-color 0.5s ease;
}

.login, .signup-container, .DashBG, .marketBG{
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  background-image: ${(props) => props.theme.backgroundImg};
}

.Profile, .BoughtAssets, .Wallet, .Chart, .LiveCharts, .Table{
  background-color: ${(props) => props.theme.cardBody};
  color: ${(props) => props.theme.fontColor};
  border: ${(props) => props.theme.cardBorder}
}


.footer, .DashHead, .MarketHead, .buy-sell-input, .LiveCharts-header, .Table-header, .login-input, .signup-input{
  color: ${(props) => props.theme.fontColor}
}


/*
.main-title, .sub-title{
  color: ${(props) => props.theme.title}
}

.wotd{
  background-color: ${(props) => props.theme.wotd}

}
.words, .word-example, .word-definition, .wotd-title, .theWord, .definition, .title, .notFound, .message, .resolution, .about_us, .contributors, person_name{
  color: ${(props) => props.theme.fontColor}
}

.searchBar, .input{
  background-color: ${(props) => props.theme.searchBar}
}

.input{
  color: ${(props) => props.theme.fontColor}
}

.partOfSpeech, .synonymsList, .antonymsList{
  background-color: ${(props) => props.theme.box}
} */
`;
