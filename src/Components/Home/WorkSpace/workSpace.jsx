import React from 'react'
import {Container,Video,Content,Title,Subtitle,ArrowIcon} from "./style";
import {useSelector} from "react-redux";
import {ReactComponent as RightSvg} from "../../assets/home/svg/rightSvg.svg";
import {NavLink} from "react-router-dom";

const WorkSpace = () => {
  const data = useSelector(state => state.getReducer.url)
  const homeData = [
        {
            id:1,
            name:"Google Workspace",
            text:"Unifying Google Workspace for Future of Work",
            url:"wolffolins/81de49a0-252f-4308-85de-c694a7dc4637_01_Google_Workspace_Rotate.mp4",
            link:"/google-work-space"

        },
        {
            id:2,
            name:"TikTok",
            text:"",
            url:"wolffolins/3da68a4f-a138-4a92-be09-624ddf235d3f_TikTok_explainer_texture_03_1.mp4",
            link:"/tik-tok"
        },
        {
            id:3,
            name:"Uber",
            text:"Changing how the world moves",
            url:"wolffolins%2Fcc4ea2db-0fa1-4693-8b48-ff72a15461b5_opt_casestudy_uber_lead.mp4",
            link:"/tik-tok"

        },
        {
            id:4,
            name:"McKinsey & Company",
            text:"Creating real change",
            url:"wolffolins%2F8ec5e816-c5c6-4cdb-8704-d06b98bcfd00_opt_mckinsey_lead.mp4",
            link:"/tik-tok"

        },
        {
            id:5,
            name:"Tesco",
            text:"Leading again",
            url:"wolffolins%2F1978d997-329e-4c64-98df-73e0138148cc_opt_tesco_lead.mp4",
            link:"/tik-tok"

        },
        {
            id:6,
            name:"The Economist Group",
            text:"",
            url:"wolffolins/c26fdaaf-b855-417d-acbe-e26e2e134be0_TEG_CS-01+2.mp4",
            link:"/tik-tok"

        },
        {
            id:7,
            name:"DailyPay",
            text:"",
            url:"wolffolins/c35d8df4-f520-443b-b314-1d41d4092d79_DailyPay-Header.mp4",
            link:"/tik-tok"

        },
        {
            id:8,
            name:"Lafayette Anticipations",
            text:"Creating a cultural institution",
            url:"wolffolins%2F2473fd44-7057-4c7c-b34a-e4e2733683e6_opt_lafayette_lead_01.mp4",
            link:"/tik-tok"

        },
    ]
  const style = {color:"#fff"}

  return  homeData.map((item) => (
       <div key={item.id}>
           <NavLink to={item.link}>
               <Container>
                   <Video src={`${data}${item.url}`} autoPlay loop muted />
                   <Content>
                       <Title> {item.name}</Title>
                       <Subtitle>{item.text}</Subtitle>
                       <ArrowIcon>
                           <RightSvg/>
                       </ArrowIcon>
                   </Content>
               </Container>
           </NavLink>

       </div>
    ))

}

export default WorkSpace