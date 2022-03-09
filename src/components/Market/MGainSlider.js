import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import "./MSlider.css";
import { styled } from "@mui/material/styles";
import IconTest from "../../assets/DashboardAsset/WalletIconDark.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
  
`);

const title = <ul id="m-card-title">Binance</ul>;
const currentPrice = <ul id="m-card-value">0.0009</ul>;

function SampleNextArrow(props) {
  const { className, onClick, theme } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      onClick={onClick}
      sx={theme === "dark" ? { color: "white" } : { color: "black" }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick, theme } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      onClick={onClick}
      sx={theme === "dark" ? { color: "white" } : { color: "black" }}
    />
  );
}

export default function SimpleSlider({ theme, setTheme }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <SamplePrevArrow theme={theme} setTheme={setTheme} />,
    nextArrow: <SampleNextArrow theme={theme} setTheme={setTheme} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Card sx={{ maxWidth: 200, maxHeight: 100, borderRadius: 3 }}>
        <CardContentNoPadding sx={{ bgcolor: "#2D2C56", height: 30 }}>
          <div className="m-card-content">
            <div className="m-card-col m-card-col-l">
              <p>FARM/USD</p>
            </div>
            <div className="m-card-col m-card-col-r">
              <p>255%</p>
            </div>
          </div>
        </CardContentNoPadding>
        <CardHeader
          className="m-card-header"
          sx={{ height: 35, bgcolor: "#2D2C56" }}
          avatar={
            <Avatar
              src={IconTest}
              sx={{
                bgcolor: "#2D2C56",
                width: 40,
                height: 40,
                paddingLeft: 2,
              }}
            />
          }
          titleTypographyProps={{
            fontSize: 14,
            align: "right",
            color: "white",
          }}
          subheaderTypographyProps={{
            fontSize: 17,
            fontWeight: 700,
            align: "right",
            color: "white",
          }}
          title={title}
          subheader={currentPrice}
        />
      </Card>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
