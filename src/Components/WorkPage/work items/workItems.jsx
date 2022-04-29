import React from "react";
import { Card, CardWrapper, Container,Video,Content,GoogleWorkSpace,ArrowIcon, CardBody, Button } from "./style";
import {useSelector} from "react-redux";

const WorkHeader = ()=>{
    const data = useSelector(state => state.getReducer.url)
    const Urls = [
        {   id:1,
            url:data,
            title:"Google WorkSpace"
        },
        {   id:2,
            url:"https://wolffolins.b-cdn.net/wolffolins/3da68a4f-a138-4a92-be09-624ddf235d3f_TikTok_explainer_texture_03_1.mp4",
            title:"Tik Tok"

        },
        {   id:3,
            url:"https://wolffolins.b-cdn.net/wolffolins/ee275cb5-f0fd-42ce-be98-f5e2e7d83c02_WO_Faber_01_MovingTheDialofCulture.mp4",
            title:"Faber"
        },
        {   id:4,
            url:"https://wolffolins.b-cdn.net/wolffolins/c35d8df4-f520-443b-b314-1d41d4092d79_DailyPay-Header.mp4",
            title:"DailyPay"

        },
        {
            id:5,
            url:"https://wolffolins.b-cdn.net/wolffolins/51d773d9-bdf2-4da3-9e07-4ebf112c41ef_0_Jimdo_Fat_Frank.mp4",
            title:"Jimdo"
        },
        {
            id:6,
            url:"https://wolffolins.b-cdn.net/wolffolins/036ae87d-b86a-4bab-a6eb-ab4ec58259d9_3.mp4",
            title:"Google Tv"
        },
        {
            id:7,
            url:"https://wolffolins.b-cdn.net/wolffolins/5efe06bd-9da5-42c4-9998-0ee5355e2e72_00_Understood_U.mp4",
            title:"Understood"
        },
        {
            id:8,
            url:"https://wolffolins.b-cdn.net/wolffolins%2F8ec5e816-c5c6-4cdb-8704-d06b98bcfd00_opt_mckinsey_lead.mp4",
            title:"McKinday & Company"
        },
        {
            id:9,
            url:"https://wolffolins.b-cdn.net/wolffolins/56e24973-10db-4da2-9d88-132d2fabaa5c_00_AES_Hero.mp4",
            title:"AES"
        },
        {
            id:10,
            url:"https://wolffolins.b-cdn.net/wolffolins%2Fcc4ea2db-0fa1-4693-8b48-ff72a15461b5_opt_casestudy_uber_lead.mp4",
            title:"Uber"
        }
        
    ]

return(
    <Container>
   
        <CardWrapper>
          {Urls?.map((item)=>(
              <Card>
              <CardBody>
              <Video src={item.url} autoPlay loop muted />
              <Content>
                  <GoogleWorkSpace>{item.title}</GoogleWorkSpace>
                  <ArrowIcon>
                  </ArrowIcon>
              </Content>
              </CardBody>
          </Card>
          ))}
        </CardWrapper>
        <Button>Load More</Button>
       
    </Container>
)
}
export default WorkHeader;