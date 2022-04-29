import styled from "styled-components";

export const CursorSvg = styled.div`
  z-index: 1000;
  width: 80px;
  height: 80px;
  pointer-events: none;
  transform: translate3d(0,0,0);
  position: fixed;
  cursor: pointer !important;
  top: 0;
  left: 0;
  background: transparent;
  
  img{
    height: 60px;
    width: 70px;
  }
`;
