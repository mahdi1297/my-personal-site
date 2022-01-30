import React from "react";
import PageTitle from "../../shared/page-title";
import NewPortfolio from "./components/new-portfolio";
import PortfolioList from "./components/portfolio-list";

const Portfolio = () => {
  return (
    <>
      <PageTitle title="پورتفولیو" />
      <NewPortfolio />
      <PortfolioList />
    </>
  );
};

export default Portfolio;
