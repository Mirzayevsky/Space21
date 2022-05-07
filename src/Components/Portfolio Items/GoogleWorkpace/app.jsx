import React from "react";
import {GoogleWorkSpaceWrapper} from "./style";
import WorkSpaceHeader from "./WorkSpace/Header/Header";
import Future from "./WorkSpace/FutureSection/FutureSection";

const GoogleWorkSpace = () =>{
    return(
        <GoogleWorkSpaceWrapper>
            <WorkSpaceHeader/>
            <Future/>
        </GoogleWorkSpaceWrapper>
    )
}
export default GoogleWorkSpace;