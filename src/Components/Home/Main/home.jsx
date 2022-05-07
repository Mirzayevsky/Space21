import React from 'react';
import {Container} from "./styles"
import Header from "../Header/header";
import Sage from "../Sage/workSpace";
import Enel from "../Enel/workSpace";
import WorkSpace from "../WorkSpace/workSpace";

const Home = () => {
    return (
        <Container>
             <Header/>
             <WorkSpace/>
             <Sage/>
             <Enel/>
        </Container>
    );
};

export default Home;