import styled from "styled-components"

export const DirectionWrapper = styled.div`
    width: 100%;
    color: #fff;
    background: #000;
    padding: 50px 0;

`;
export const Container = styled.div`
width: 93%;
margin: auto;
`;
export const Title = styled.div`
    font-size: clamp(30px,24.30163px + .74294vw,35px);
    line-height: 1.286;
    letter-spacing: -.01em;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    color: #ffdb00;
    padding-bottom: 3.5rem;
`;
export const DirectionContent = styled.div`
 height: 30vh;
 cursor: pointer;
 overflow: hidden;
 position: relative;
 height: ${({open}) =>open ? "60vh" : "100%"};
 
`;

export const DirectionTitle = styled.div`
    font-size: clamp(40px,-5.58692px + 5.94354vw,80px);
    line-height: 1.125;
    letter-spacing: -.02em;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    margin-bottom: 1.5rem;

`;

export const Subtitle = styled.div`
    color: #ccc;
    max-width: 45%;
    font-size: 20px;
    font-size: clamp(20px,14.30163px + .74294vw,25px);
    line-height: 1.4;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
`;
export const DirectionBtn = styled.div`
    font-size: clamp(20px,14.30163px + .74294vw,25px);
    line-height: 1.4;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    margin: 30px 0;
    span{
    font-size: clamp(20px,14.30163px + .74294vw,25px);
    line-height: 1.4;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    text-decoration: underline;
    padding-right: 10px;
    }
`;
export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: gray;
  position:absolute;
  bottom: 18%;
`;

export const HiddenContent = styled.div`
    font-size: 40px;
    margin-top: 200px;
    padding: 30px 0;
    transform:${({open}) =>open ? "translateY(600px)" : "translateY(0)"};
    transition: all .5s ease;

`;
