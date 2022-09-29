import type {NextPage} from "next";
import Head from "next/head";

import CustomHeader from "../components/CustomHeader";

import Container from "@mui/material/Container";

import HomePageItem from "../components/HomePageItem/HomePageItem";
import MostRequestedBets from "../components/MostRequestedBets/MostRequestedBets";
import SearchBets from "../components/SearchBets";

import {ThemeProvider} from "@mui/material/styles";
import BetCardProps from "../models/Bet";
import {useState} from "react";
import CreateBet from "../components/CreateBetButton";
import {HttpClient} from "../core/http-client-adapter";
import Bet from "../models/Bet";


export async function getServerSideProps() {
    const http = new HttpClient();
    const mostRequestedBets = await http.get<Bet[]>("generic/1/10");
    return {
        props: {
            mostRequestedBets,
        },
    }
}

interface HomePageProps {
    mostRequestedBets: Array<BetCardProps>;
}

const Home: NextPage<HomePageProps> = ({mostRequestedBets}) => {

    const [listSize, setListSize] = useState(6);

    const seeMoreHandler = () => {
        setListSize(listSize + 5);
    }

    return (
        <div>
            <Head>
                <title>Matchingbet</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <CustomHeader/>
            <Container>
                <HomePageItem title="Buscar Apostas">
                    <SearchBets/>
                </HomePageItem>

                <HomePageItem
                    title="Apostas mais acessadas"
                    showSeeMore={true}
                    seeMoreHandler={seeMoreHandler}
                >
                    <MostRequestedBets mostRequestedBets={mostRequestedBets} size={listSize}/>
                </HomePageItem>
            </Container>

            {/* <CreateBet/> */}
        </div>
    );
};

export default Home;
