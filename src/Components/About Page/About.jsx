import React from "react";
import Direction from "./About direction/Direction";
import { AboutWrapper, Container, Title, VideoWrapper,Video } from "./style";

export const About   = () =>{
    return(
        <AboutWrapper>
           <Container>
                <Title> We help organisations  <br />
                    transform their impact
                </Title>
                <VideoWrapper>
                <Video src={"https://wolffolins.b-cdn.net/wolffolins%2F61a92632-9f38-4b79-87b3-159b0951d26f_wo+content+short+version+20191010.mp4"} autoPlay  loop muted />
                </VideoWrapper>
           </Container>
           <Direction/>
        </AboutWrapper>
    )
}
export default About;