import React from "react";
import WorkHeader from "./work items/workItems";
import { Container, PageWrapper, Title } from "./style";
import Clients from "./Clients past and present/Clients";

const WorkPage = () => {
    return(
      <PageWrapper>
        <Container>
            <Title> We don’t change the <br/>world. But our clients do</Title>
        </Container>
        <WorkHeader/>
        <Clients/>
    </PageWrapper>
    )
};
export default WorkPage;
