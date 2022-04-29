import React,{useState} from "react";
import {
  DirectionWrapper,
  Container,
  Title,
  DirectionTitle,
  Subtitle,
  DirectionBtn,
  Line,
  DirectionContent,
  HiddenContent,
} from "./style";

const Direction = () => {

    const [open,setOpen] =useState(true)


    
  return (
    <DirectionWrapper>
      <Container>
      <Title>We do three things</Title>
        <DirectionContent 
           onClick={() => {setOpen( ! open)}}
           open={open}>
          <DirectionTitle>Strategy</DirectionTitle>
          <Subtitle>Set your direction</Subtitle>
          <DirectionBtn>
            <span>See more</span>+
          </DirectionBtn>
          <HiddenContent open={open} >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est error itaque facere cum quo optio eligendi dolorem tempora corporis, ullam debitis incidunt consequatur sint iste fugiat atque dolore laudantium dolorum.
          </HiddenContent>
          <Line/>
        </DirectionContent>

        <DirectionContent 
           onClick={() => {setOpen( ! open)}}
           open={open}>
          <DirectionTitle>Strategy</DirectionTitle>
          <Subtitle>Set your direction</Subtitle>
          <DirectionBtn>
            <span>See more</span>+
          </DirectionBtn>
          <HiddenContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est error itaque facere cum quo optio eligendi dolorem tempora corporis, ullam debitis incidunt consequatur sint iste fugiat atque dolore laudantium dolorum.
          </HiddenContent>
          <Line />
        </DirectionContent>

        <DirectionContent 
           onClick={() => {setOpen( !open)}}
           open={open}>
          <DirectionTitle>Strategy</DirectionTitle>
          <Subtitle>Set your direction</Subtitle>
          <DirectionBtn>
            <span>See more</span>+
          </DirectionBtn>
          <HiddenContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est error itaque facere cum quo optio eligendi dolorem tempora corporis, ullam debitis incidunt consequatur sint iste fugiat atque dolore laudantium dolorum.
          </HiddenContent>
        </DirectionContent>

      </Container>
    </DirectionWrapper>
  );
};
export default Direction;
