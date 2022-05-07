import styled from "styled-components";

export const  WorkSpaceWrapper = styled.div`
  width: 100%;
  height: 80vh;
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
  color: grey;
  margin-bottom: 0.5rem;
  line-height: 1.286;
  letter-spacing: -.01em;
  //font-family: object-sans-Regular,sans-serif;
  font-size: 20px;
  font-size: clamp(20px,14.30163px + .74294vw,25px);
  font-family: "Poppins",sans-serif;
  font-weight: 500;

`;