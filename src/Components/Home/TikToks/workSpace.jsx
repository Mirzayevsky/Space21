import React from 'react'
import {Container,Video,Content,GoogleWorkSpace,Subtitle,ArrowIcon} from "./style";
import {useSelector,useDispatch} from "react-redux";
import ArrowPng from "../../assets/home/svg/right-arrow-svgrepo-com.svg"

const TikTok = () => {
    const data = useSelector(state => state.getReducer.url)
    return (
    <Container>
        <Video src={"https://wolffolins.b-cdn.net/wolffolins/3da68a4f-a138-4a92-be09-624ddf235d3f_TikTok_explainer_texture_03_1.mp4"} autoPlay loop muted />
        <Content>
            <GoogleWorkSpace>TikTok</GoogleWorkSpace>
            <ArrowIcon>
                <img src={ArrowPng} alt={'arrow icon'}/>
            </ArrowIcon>
        </Content>
    </Container>
  )
}

export default TikTok