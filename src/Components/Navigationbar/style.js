import styled from "styled-components";

export const Container = styled.div`
  width: 93%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 4%;
  top: 8%;
  z-index: 99999 !important;
  
`;


export const Logo = styled.div`
  position: fixed;
  left: 3rem;
  z-index: 9999;
  top: 7%;
  /* color:${({menuState}) => menuState ? "#000" : "#ffbf2b"}; */
  .logo-inner{
   font-size: 5vmin;
   font-family: object-sans,sans-serif;
   letter-spacing: 3px;
   line-height: .9;
  }

`;

export const SidebarBtn = styled.div`
  height: 58px;
  width: 58px;
  border-radius: 50%;
  transition: .5s;
  cursor: pointer;
  position: fixed;
  right: 3rem;
  z-index: 9999;
  top: 7%;
  background-color:${({menuState}) => menuState ? "#000" : "#ffbf2b"};
`;

export const Cover = styled.div`
  transition: 1s ;
  position: fixed;
  background: #000;
  height:${({menuState}) => menuState ? "0" : "50vh"};
  width:${({menuState}) => menuState ? "0" : "50vh"};
  /* transform:${({menuState}) => menuState ? "scale(0)" : "scale(10)"}; */
  top:${({menuState}) => menuState ? "60px" : "0"};
  right:${({menuState}) => menuState ? "60px" : "0"};
  object-fit:${({menuState}) => menuState ? "initial" : "cover"};
  border-radius: 50%;
`;

export const Sidebar = styled.div`
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;


  .nav-link-wrapper{
    position: absolute !important;
    top:50%;
    left:6.5%;
    display:${({menuState}) => menuState ? "none" : "flex"};
    transition: 10s;
    opacity:${({menuState}) => menuState ? "0" : "1"};

    flex-direction: column;
    .nav-link{
      color: #fff !important;
      //font-size: 10.22vmin;
      line-height: 1.3vmin;   
    }
  }

  
`;
// export const Link = styled(Link)``;


