import React from 'react'
import {Container, Video, Content, GoogleWorkSpace, ArrowIcon, Subtitle} from "./style";
import {useSelector} from "react-redux";
import ArrowPng from "../../assets/home/svg/right-arrow-svgrepo-com.svg"

const Uber = () => {
    const data = useSelector(state => state.getReducer.url)
    return (
    <Container>
        <Video src={"https://wolffolins.b-cdn.net/wolffolins%2Fcc4ea2db-0fa1-4693-8b48-ff72a15461b5_opt_casestudy_uber_lead.mp4"} autoPlay loop muted />
        <Content>
            <GoogleWorkSpace>Uber</GoogleWorkSpace>
            <Subtitle>Changing how the world moves</Subtitle>
            <ArrowIcon>
                <img src={ArrowPng} alt={'arrow icon'}/>
            </ArrowIcon>
        </Content>
    </Container>
  )
}

export default Uber