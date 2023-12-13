import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container=styled.div`
  background-image: url(${props=>props.img});
  flex:1;
  height: 70vh;
  background-size:cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  color:#ffffff;
`                          
const Title=styled.div`
     font-size:40px;
      margin-bottom:15px; 
      font-weight:700;        
`            
const Button=styled.div`
    width: 200px;
    padding:10px 20px;
    background-color:#ffffff;
    color:#000000;  
    font-size:20px; 
    cursor:pointer;  
    text-align:center;  
    margin:auto;        
`
const Category = ({item}) => {
  return (
    
    <Container img={item.img} key={item.id}>
    {/* <Image src={item.img}/> */}
    <Link to={`/products/${item.cat}`} style={{textDecoration:'none',color:'white'}}>
    <Title>{item.title}</Title>   
    <Button>Shop Now</Button>   
    </Link>
    </Container>
  )
}

export default Category