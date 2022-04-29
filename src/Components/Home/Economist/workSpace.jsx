import React from 'react'
import {Container,Video,Content,GoogleWorkSpace,ArrowIcon} from "./style";
import {useSelector} from "react-redux";
import ArrowPng from "../../assets/home/svg/right-arrow-svgrepo-com.svg"

const Economist = () => {
    const data = useSelector(state => state.getReducer.url)

    return (
    <Container>
        <Video src={"https://wolffolins.b-cdn.net/wolffolins/c26fdaaf-b855-417d-acbe-e26e2e134be0_TEG_CS-01+2.mp4"} autoPlay loop muted />
        <Content>
            <GoogleWorkSpace>Tesco</GoogleWorkSpace>
            <ArrowIcon>
                <img src={ArrowPng} alt={'arrow icon'}/>
            </ArrowIcon>
        </Content>
    </Container>
  )
}

export default Economist