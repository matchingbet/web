import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";

import Container from "@mui/material/Container";

import HomePageItem from "../components/home-page-item";
import MostRequestedBets from "../components/most-requested-bets";
import SearchBets from "../components/search-bets";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#ffffff",
      fontSize: "1rem",
    },
  },
});

theme.typography.body1 = {
  fontSize: "1.2rem",
  "@media (min-width:300px)": {
    fontSize: ".8rem",
  },
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  color: "white",
};

theme.typography.h1 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
  color: "white",
};

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Matchingbet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Container>
        <HomePageItem title="Buscar Apostas">
          <SearchBets />
        </HomePageItem>

        <HomePageItem
          title="Apostas mais acessadas"
          showSeeMore={true}
          seeMoreHandler={() => console.log("cliquei em ver todas")}
        >
          <MostRequestedBets />
        </HomePageItem>
      </Container>

      <footer>
        {/* <CreateBet /> */}
      </footer>
    </ThemeProvider>
  );
};

export default Home;
