import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { SliderItems } from '../data'
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
`
const Wrapper = styled.div`
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease; 
`
const ArrowContainer = styled.div`
  height: 50px;
  width: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '20px'};
  right: ${props => props.direction === 'right' && '20px'};
  margin: auto;
  cursor: pointer;
  opacity: 70%;
  z-index: 2;
`
const SlideContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.background};
  display: flex;
  align-items: center;
`
const DescContainer = styled.div`
  flex:1;
  display: flex;
  flex-direction:column;
  gap:20px;
  align-items: start;
`
const ImageContainer = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

`
const Image = styled.img`

  height: 100%;
`
const Title = styled.h1`
  font-size: 56px;
  font-weight:900;
  letter-spacing: 1px;
`
const Description = styled.p`
  font-size: 22px;
  width: 80%;
  line-height: 1.7rem;
  letter-spacing: 1px;

`
const Button = styled.button`
  padding:10px 20px;
  border-radius:5px;
  background-color:white;
  outline:none; 
  cursor: pointer;  
  font-size:18px;  
  border:1px solid black;
  &:hover{
    background-color:teal;
    color:white;
    border:1px solid white;
  }    
`
const Slider = () => {
  



  const [slideIndex, setSlideIndex] = useState(0);
  const handelClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
    else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }
  return (
    <Container>
        <ArrowContainer direction='left' onClick={()=>handelClick('left')}>
          <ArrowLeftOutlined />
        </ArrowContainer>
      <Wrapper slideindex={slideIndex}>
        {SliderItems.map((item) => (
          <SlideContainer key={item.id} background={item.background}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <DescContainer>
              <Title>{item.title}</Title>
              <Description>DON&apos;T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
              <Button>Shop Now</Button>
            </DescContainer>
          </SlideContainer>
        ))}
      </Wrapper>
        <ArrowContainer direction='right' onClick={()=>handelClick('right')}>
          <ArrowRightOutlined />
        </ArrowContainer>
    </Container>
  )
}

export default Slider