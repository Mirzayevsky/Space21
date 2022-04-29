import styled from "styled-components";

export const Container = styled.div`
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    padding: 160px 0;
    height: 130vh;
    z-index: -1;
    position: sticky;
    background: #fff55f;


`;
export const ContentWrapper = styled.div`
height: 100%;
width: 92%;
margin: auto;
display: flex;
justify-content: space-between;
position: relative;


`;
export const Content = styled.div`
&:nth-child(2){
  display: flex;

}
`;
export const Title = styled.div`
font-size: 73px;
display: flex;
flex-direction: column;
margin-top: 160px;

span{
color: #1d1d1b;
font-family:AeonikRegular,sans-serif;
font-weight: 600;
}

`;
export const FooterBtn = styled.div`
  margin-top: 40px;
  margin-left: 5px;
.btn-name{
  font-size: 21px;
  font-weight: 400;
  font-family: Aeonik,sans-serif;
  text-decoration: underline;
}

&:hover{
  cursor: pointer;
  san{
    margin-left: 10px;
  }
}

`;
export const LinkWrapper = styled.div`
margin-right: 100px;
margin-top: 240px;
`;
export const LinksSubtitle = styled.div`
font-size: 16px;
font-family: AeonikMedium,sans-serif;
margin-bottom: 30px;
`;
export const FooterLinks = styled.div`
font-size: 19px;
color: #1d1d1b;
font-weight: 500;
font-family: AeonikMedium,sans-serif;
margin-top: 15px;


`;
export const BottomText =styled.div`
/* position: absolute;
bottom: 40px;
left: 5%; */
font-family: AeonikMedium,sans-serif;
font-size: 19px;
font-weight: 500;
line-height: 1.26;
letter-spacing: .8px;
margin-top: 80px;
margin-left: 5%;
span{
color: #1d1d1b !important;
font-family: AeonikMedium,sans-serif;
font-size: 19px;
font-weight: 500;
line-height: 1.26;
letter-spacing: .8px;
margin-left: 20px;

}

`;