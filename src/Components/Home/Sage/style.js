import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
img{
  height: 100%;
  width: 100%;
}
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
export const GoogleWorkSpace = styled.div`
  margin-bottom: 0.5rem;
  line-height: 1.286;
  letter-spacing: -.01em;
  font-family: "Poppins",sans-serif;
  font-weight: 500;
  font-size: clamp(30px,24.30163px + .74294vw,35px);
`;
export const Subtitle = styled.div`
  font-family: 'Brawler', serif;
  font-size: 20px;
`;
export const ArrowIcon = styled.div`
  height: 50px;
  width: 70px;
  margin-top: 10px;
  img{
    height: 100%;
    width: 100%;
  }
`;