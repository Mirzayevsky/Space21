import React from "react";
import {WorkSpaceWrapper,Video,Content,Title} from "./style";
import {useSelector} from "react-redux";
const WorkSpaceHeader = () => {
    const data = useSelector(state => state.getReducer.url)
    return(
        <WorkSpaceWrapper>
            <Video src={`${data}wolffolins/81de49a0-252f-4308-85de-c694a7dc4637_01_Google_Workspace_Rotate.mp4`} autoPlay loop muted />
            <Content>
                <Title>Google WorkSpace</Title>
            </Content>
        </WorkSpaceWrapper>
    )
}
export default WorkSpaceHeader;