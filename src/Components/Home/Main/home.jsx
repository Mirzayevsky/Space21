import React from 'react';
import {Container} from "./styles"
import Header from "../Header/header";
import WorkSpace from "../WorkSpace/workSpace";
import TikTok from "../TikToks/workSpace";
import Uber from "../Uber/workSpace";
import McKinsey from "../mckinsay/workSpace";
import Tesco from "../Tesco/workSpace";
import Economist from "../Economist/workSpace";
import DailyPay from "../DailyPay/workSpace";
import Lafayette from "../Lafayette/workSpace";
import Sage from "../Sage/workSpace";
import Enel from "../Enel/workSpace";

const Home = () => {
    return (
        <Container>
             <Header/>
             <WorkSpace/>
             <TikTok/>
             <Uber/>
             <McKinsey/>
             <Tesco/>
             <Economist/>
             <DailyPay/>
             <Lafayette/>
             <Sage/>
             <Enel/>
        </Container>
    );
};

export default Home;