import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 5vh);
  position: relative;
  display: flex;
  align-items: center;
  background: #ffdb00;
`;

export const Title = styled.div`
  font-size: clamp(40px,-16.98366px + 7.42942vw,90px);
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -.02em;
  line-height: 1.11;
  padding-left: 4%;
  @media only screen and (max-width: 992px){
    width: 90%;
  }
 
`;

export const ArrowLink = styled.div`
  line-height: 1.4;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 40px;
  position: absolute;
  left: 2%;
  bottom: 5%;
  
  .arrow{
    width: 7rem;
    height: 3rem;
  }
  
  .arrow-span{
    font-size: clamp(20px,14.30163px + .74294vw,25px);
    font-family: 'Poppins', sans-serif;
  }
  
`;

export const ShowReel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  
  .video{
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    cursor: pointer !important;
  }
  
  svg{
    height: 60px;
    width: 60px;
    z-index: 9999;
  }
  
`;

export const Controls = styled.div`

`;

