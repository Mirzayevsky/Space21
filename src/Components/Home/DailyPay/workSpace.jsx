import React from 'react'
import {Container,Video,Content,GoogleWorkSpace,ArrowIcon} from "./style";
import {useSelector} from "react-redux";
import ArrowPng from "../../assets/home/svg/right-arrow-svgrepo-com.svg"

const DailyPay = () => {
    const data = useSelector(state => state.getReducer.url)

    return (
    <Container>
        <Video src={"https://wolffolins.b-cdn.net/wolffolins/c35d8df4-f520-443b-b314-1d41d4092d79_DailyPay-Header.mp4"} autoPlay loop muted />
        <Content>
        {/* <video id="play-video_html5_api" class="vjs-tech" preload="none" poster="//i0.wp.com/image.tmdb.org/t/p/w780/nKhE6wLeKHMK8orDefSMAlmEz40.jpg" data-setup="" webkit-playsinline="true" playsinline="playsinline" tabindex="-1">
            <source src="https://123moviesathome.xyz/themes/v1//assets/movie.mp4" type="video/mp4" label="SD"><source src="https://123moviesathome.xyz/themes/v1//assets/movie.mp4" type="video/mp4" label="HD">
        </video> */}
            <GoogleWorkSpace>Tesco</GoogleWorkSpace>
            <ArrowIcon>
                <img src={ArrowPng} alt={'arrow icon'}/>
            </ArrowIcon>
        </Content>
    </Container>
  )
}

export default DailyPay