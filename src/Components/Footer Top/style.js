import styled from "styled-components"
export const Container = styled.div`
 background-color: #1d1d1b;
 font-family: 'AeonikMedium',sans-serif;
`;
export const TextWrapper = styled.div`
    width: 93%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    color: #ececec;
    padding: 160px 0;
    align-items: center;

`;

export const Title = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    span {
    font-size:70px;
    letter-spacing: 2px;
    line-height: 1.25;
    font-family:Aeonik,sans-serif;
    font-weight: 600;
    &::selection{
        color: #1d1d1b;
        background-color: #fff55f;
    }
  
    }
`;
export const TextBox = styled.div`
    width: 45%;
    font-family: AeonikMedium,sans-serif;
    font-size: 32px;
    letter-spacing: .2px;
    line-height: 1.2;
    font-weight: 500;
    &::selection{
        color: #1d1d1b;
        background-color: #fff55f;
    }
`;
