import React from 'react'
import {Container,Video,Content,GoogleWorkSpace,ArrowIcon} from "./style";
import {useSelector} from "react-redux";
import ArrowPng from "../../assets/home/svg/right-arrow-svgrepo-com.svg"

const McKinsey = () => {
    const data = useSelector(state => state.getReducer.url)

    return (
    <Container>
        <Video src={"https://wolffolins.b-cdn.net/wolffolins%2F8ec5e816-c5c6-4cdb-8704-d06b98bcfd00_opt_mckinsey_lead.mp4"} autoPlay loop muted />
        <Content>
            <GoogleWorkSpace>TikTok</GoogleWorkSpace>
            <ArrowIcon>
                <img src={ArrowPng} alt={'arrow icon'}/>
            </ArrowIcon>
        </Content>
    </Container>
  )
}

export default McKinsey