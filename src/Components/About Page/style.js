import styled from "styled-components"

export const AboutWrapper = styled.div`
background-color: #fff;
`;
export const Container = styled.div`
  width: 93%;
  margin: auto;
`;
export const Title = styled.div`
    font-size: clamp(40px,-16.98366px + 7.42942vw,90px);
    line-height: 1.11;
    letter-spacing: -.02em;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    padding-top: 15%;
    padding-bottom: 50px;
`;
export const VideoWrapper = styled.div`
  position: relative;
  padding: 50px 0;
`;
export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
