import React from 'react';
import {CursorSvg} from "./style";
import cursorImg from "../assets/cursor/pause.png";

const Cursor = () => {
    const cursorRef = React.useRef(null)

    React.useEffect(() => {
        document.addEventListener("mousemove",(event)=>{
            const {clientX,clientY} =event
            const mouseX = clientX - cursorRef.current.clientWidth /2
            const mouseY = clientY - cursorRef.current.clientWidth /2
            cursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`
        })
    },[])

    return(
       <CursorSvg>
           <img
               ref={cursorRef}
               src={cursorImg}
               className={"cursor-svg"}
               alt={'cursor'}/>
       </CursorSvg>
    )
};
export default Cursor;