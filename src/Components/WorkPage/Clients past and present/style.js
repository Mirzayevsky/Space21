import styled from "styled-components";

export const ClientsWrapper = styled.div`
 background-color: #000;
 padding: 50px 0;

`;

export const Container = styled.div`
width: 93%;
margin: auto;
`;

export const Title = styled.div`
    color: #ffdb00;
    letter-spacing: -.01em;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    font-size: clamp(30px,24.30163px + .74294vw,35px);
    line-height: 1.286;
`;


export const ClientCard = styled.div`
width: 100%;
margin-top: 70px;
display: flex;
color: #ccc;
font-size: clamp(16px,13.72065px + .29718vw,18px);
`;

export const Subtitle= styled.div`
     color: #fff;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    width: 25%;
`;

export const ClientsNameWrapper= styled.div`
word-wrap: break-word !important;
&:nth-child(2){
    width:25%;
}
&:nth-child(3){
    width: 25%;
}
&:nth-child(4){
    width:25%;
}
`;

export const ClientsName= styled.div`
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    margin-top: 7px;
    &:nth-child(1){
        margin: 0;
    }
`;

export const BottomWrapper = styled.div`
color: #fff;
margin-top: 60px;
`;

export const  BottomText= styled.div`
font-size: clamp(35px,17.9049px + 2.22883vw,50px);
 font-family: "Poppins",sans-serif;
 font-weight: 500;
 line-height: 1.2;
 letter-spacing: -.01em;
`;

export const  BottomBtn= styled.div`
    margin-top: 2rem;
    font-size: clamp(20px,14.30163px + .74294vw,25px);
    line-height: 1.4;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
`;