import React from 'react'
import {Container,Video,Content,GoogleWorkSpace,ArrowIcon} from "./style";
import {useSelector} from "react-redux";
import ArrowPng from "../../assets/home/svg/right-arrow-svgrepo-com.svg"

const Sage = () => {
    const data = useSelector(state => state.getReducer.url)
    return (
    <Container>

        {/*<Video src={"https://wolffolins.b-cdn.net/wolffolins%2F2473fd44-7057-4c7c-b34a-e4e2733683e6_opt_lafayette_lead_01.mp4"} autoPlay loop muted />*/}
        <img
            srcSet="https://wolffolins.b-cdn.net/wolffolins/Yjg4NjQxMzMtNzY3ZS00MjU1LWJlZWMtMDlmMmFiNGQ0MDZk_sage_brain_zoom.gif?auto=compress,format&amp;rect=0,0,1600,900&amp;w=1365&amp;h=768 1365w, https://wolffolins.b-cdn.net/wolffolins/Yjg4NjQxMzMtNzY3ZS00MjU1LWJlZWMtMDlmMmFiNGQ0MDZk_sage_brain_zoom.gif?auto=compress,format 1600w, https://wolffolins.b-cdn.net/wolffolins/Yjg4NjQxMzMtNzY3ZS00MjU1LWJlZWMtMDlmMmFiNGQ0MDZk_sage_brain_zoom.gif?auto=compress,format&amp;rect=0,0,1600,900&amp;w=2560&amp;h=1440 2560w"
            loading="lazy" alt=""/>
        <Content>
            <GoogleWorkSpace>Tesco</GoogleWorkSpace>
            <ArrowIcon>
                <img src={ArrowPng} alt={'arrow icon'}/>
            </ArrowIcon>
        </Content>
    </Container>
  )
}

export default Sage;