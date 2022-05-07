import React,{useState} from "react";
import {ArrowLink, Container, Controls, ShowReel, Title} from "./style";
// import {ReactComponent as Arrow} from "../../assets/home/svg/right-arrow-svgrepo-com.svg";
import { useRef } from "react";
import Cursor from "../../CustomCursor/cursor";
const Header = () =>{
    const videoRef = useRef(null);
    const [ play,setPlay]= useState(false)
    return(
        <Container>
                <Title> We help create transformative brands that move business, people and the world forward</Title>
            {
                play ? <ShowReel onClick={()=> setPlay(false)} >
                        <Cursor/>
                        <video
                        id="video1"
                        ref={videoRef}
                        autoPlay={true}
                        className={'video'}
                        src="https://wolffolins.cdn.prismic.io/wolffolins%2F61a92632-9f38-4b79-87b3-159b0951d26f_wo+content+short+version+20191010.mp4"
                        loop="loop"/>
                        </ShowReel> :
                    <ArrowLink>
                        {/*<Arrow className={'arrow'}/>*/}
                        <span onClick={()=>setPlay(true)} className={'arrow-span'}> Play showreel</span>
                    </ArrowLink>
            }

        </Container>

    )
}
export default Header;