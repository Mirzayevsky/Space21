import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Container, Cover, Logo, Sidebar, SidebarBtn} from "./style";

const Navbar = () => {
    const [menuState, setMenuState] = useState (true);
    return (
        <Container>
            <Logo>
               <div  className={'logo-inner'}>WOLFF</div>
               <div className={'logo-inner'}>OLINS</div>
            </Logo>

              <SidebarBtn menuState={menuState}
                          onClick={() => {setMenuState( ! menuState)}}/>
            <Sidebar menuState={menuState} className={"sidebar"} >
                <Cover menuState={menuState}>
                    <div className={'nav-link-wrapper'}>
                        <Link to={"/work"} >Work</Link>
                        <Link to={"/about"} >About</Link>
                        <Link to={"/join"} >Join</Link>
                        <Link to={"/Views"} >Views</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                </Cover>
              </Sidebar>
        </Container>
    )
}
export default Navbar;