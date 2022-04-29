import React from 'react'
import {Container,Video,Content,GoogleWorkSpace,ArrowIcon} from "./style";
import {useSelector} from "react-redux";
import ArrowPng from "../../assets/home/svg/right-arrow-svgrepo-com.svg"

const Lafayette = () => {
    const data = useSelector(state => state.getReducer.url)
    return (
    <Container>
        <Video src={"https://wolffolins.b-cdn.net/wolffolins%2F2473fd44-7057-4c7c-b34a-e4e2733683e6_opt_lafayette_lead_01.mp4"} autoPlay loop muted />
        <Content>
            <GoogleWorkSpace>Tesco</GoogleWorkSpace>
            <ArrowIcon>
                <img src={ArrowPng} alt={'arrow icon'}/>
            </ArrowIcon>
        </Content>
    </Container>
  )
}

export default Lafayette