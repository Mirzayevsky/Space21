import React from 'react'
import {Container, Video, Content, GoogleWorkSpace, ArrowIcon, BottomText, BottomBtn} from "./style";
import {useSelector} from "react-redux";
import ArrowPng from "../../assets/home/svg/right-arrow-svgrepo-com.svg"

const Enel = () => {
    const data = useSelector(state => state.getReducer.url)
    return (
    <Container>

        <Video src={"https://wolffolins.b-cdn.net/wolffolins%2F69283659-d0c0-48d5-9e1d-0284ec757cab_opt_enel_lead.mp4"} autoPlay loop muted />
        <Content>
            <GoogleWorkSpace>Enel</GoogleWorkSpace>
            <div>Democratizing the energy industry</div>
            <ArrowIcon>
                <img src={ArrowPng} alt={'arrow icon'}/>
            </ArrowIcon>
            <BottomText>Let's talk about you</BottomText>
            <BottomBtn>Get in touch</BottomBtn>
        </Content>

    </Container>
  )
}

export default Enel;