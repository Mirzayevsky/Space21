import React from 'react'
import {Container,Video,Content,GoogleWorkSpace,ArrowIcon} from "./style";
import {useSelector} from "react-redux";
import ArrowPng from "../../assets/home/svg/right-arrow-svgrepo-com.svg"

const Tesco = () => {
    const data = useSelector(state => state.getReducer.url)
    return (
    <Container>
        <Video src={"https://wolffolins.b-cdn.net/wolffolins%2F1978d997-329e-4c64-98df-73e0138148cc_opt_tesco_lead.mp4"} autoPlay loop muted />
        <Content>
            <GoogleWorkSpace>TikTok</GoogleWorkSpace>
            <ArrowIcon>
                <img src={ArrowPng} alt={'arrow icon'}/>
            </ArrowIcon>
        </Content>
    </Container>
  )
}
export default Tesco