import React from "react";
import { Link } from "react-router-dom";
import landingLogoQuote from "./landing_logo_quote.PNG";

const LandingPage = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={landingLogoQuote} alt='landing page logo' />
      <div>
        <Link to='/home'>Go To App</Link>
      </div>
    </div>
  );
};
export default LandingPage;
