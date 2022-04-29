import React from 'react'
import {Container,Video,Content,GoogleWorkSpace,Subtitle,ArrowIcon} from "./style";
import {useSelector,useDispatch} from "react-redux";
import ArrowPng from "../../assets/home/svg/right-arrow-svgrepo-com.svg"

const WorkSpace = () => {
    const data = useSelector(state => state.getReducer.url)
    return (
    <Container>
        <Video src={data} autoPlay loop muted />
        <Content>
            <GoogleWorkSpace>Google Workspace</GoogleWorkSpace>
            <Subtitle>Unifying Google Workspace for Future of Work</Subtitle>
            <ArrowIcon>
                <img src={ArrowPng} alt={'arrow icon'}/>
            </ArrowIcon>
        </Content>
    </Container>
  )
}

export default WorkSpace