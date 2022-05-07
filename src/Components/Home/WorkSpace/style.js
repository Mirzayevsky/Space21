import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

`;
export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Content = styled.div`
  position: absolute;
  left: 3.5%;
  bottom: 8%;
`;
export const Title = styled.div`
  color: #fff;
  margin-bottom: 0.5rem;
  line-height: 1.286;
  letter-spacing: -.01em;
  font-family: object-sans-Regular,sans-serif;
  //font-weight: 500;
  font-size: clamp(30px,24.30163px + .74294vw,35px);

`;
export const Subtitle = styled.div`
  color: #fff;
  //font-family: 'Brawler', serif;
  font-family: object-sans-Regular,sans-serif;
  font-size: 18px;
`;
export const ArrowIcon = styled.div`
  height: 70px;
  width: fit-content;
  margin-top: 10px;
  margin-left: 2px;
  svg{
    height: 100%;
    width: 100%;
    stroke: #fff;
    
  }
`;