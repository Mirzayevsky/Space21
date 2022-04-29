import styled from "styled-components";

export const Container = styled.div`

`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CardBody = styled.div`
height: 100%;
width: 100%;

&:hover{
    transition: 0.5s;
    transform: scale(.97,.96);
   
}
`;

export const Card = styled.div`
 width: 50%;
 height: 400px;
 overflow: hidden;
 cursor: pointer;
 background-color: #ffbf2b;
 position: relative;
 
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;
export const Content = styled.div`
  position: absolute;
  left: 3.5%;
  bottom: 4%;
`;
export const GoogleWorkSpace = styled.div`
  letter-spacing: -.01em;
  font-family: "Poppins",sans-serif;
  font-weight: 500;
  font-size: clamp(20px,14.30163px + .74294vw,25px);
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
export const Button = styled.div`
    color: #000;
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(20px,14.30163px + .74294vw,25px);
    font-family: "Poppins",sans-serif;
    line-height: 1.4;
    margin: auto;
    padding: 30px 0;
    cursor: pointer;
`;