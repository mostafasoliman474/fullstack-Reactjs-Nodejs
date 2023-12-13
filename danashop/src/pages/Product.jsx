import React, { useEffect, useState } from 'react'
import { Add, Remove } from '@mui/icons-material';
import Nav from '../components/Nav'
import { Announcement } from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import styled from 'styled-components'
// import ProductImage from '../assets/pexels-cottonbro-studio-9488406.jpg'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
const Container = styled.div`
`
const ProductContainer = styled.div`
display: flex;
padding:20px 40px;
gap: 50px;
`
const ImageContainer = styled.div`
    flex:1;
    max-height:80vh;
`
const Image = styled.img`
border-radius:10px;           
   width: 100%;
   height:100%;            
`
const ProductInfo = styled.div`
flex:1;
display: flex;
flex-direction: column;
gap: 30px;
`
const Title = styled.h1`
   
`
const Desc = styled.p`
font-size: 20px;
color: #858585;
`
const Price = styled.p`
font-size:30px;
font-weight: 600;

`
const ChooseContainer = styled.div`
  display: flex;
  gap: 40px;
`
const ChooseDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const ColorDiv = styled.div`
  width:25px;
  height:25px;
  border-radius:50%;
  background-color:${props => props.background};  
  cursor: pointer;    
  border:1px solid lightgray;  
`
const Optional = styled.select`
  width:80px;
  height:30px;            
  font-size: 18px;
  outline: none;
  padding:4px;
`
const Element = styled.option`
 font-size: 20px;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const Amount = styled.p`
  padding: 10px;
  border: 1px solid teal;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
`
const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border:none;
  border-radius: 5px;
  font-size: 18px;
  &:hover{
    background-color: black;
  }
`
const Product = () => {
  const location = useLocation();
  const [product, setProduct] = useState({})
  const id =location.pathname.split("/")[2];
  const [color,setColor]=useState("");
  const [size,setSize]=useState("");
  const [quantity,setQuantity]=useState(1);
  const dispatch=useDispatch()
 
  useEffect(()=>{
    const getProducts=async()=>{
      const res=await axios.get(`http://localhost:5000/api/product/find/${id}`);
      setProduct(res.data)
    }
    getProducts();
   
  },[id])
  const handelClick=()=>{
    dispatch(
      addProduct({...product,quantity,size,color})
    )
  }
  return (
    <Container>
      <Nav />
      <Announcement />
      <ProductContainer>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <ProductInfo>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <ChooseContainer>
            <ChooseDiv>
              <Desc>Color</Desc>
              {product.color?.map(c=>(
                <ColorDiv background={c} key={c} onClick={()=>setColor(c)}/>
                // console.log(color)
              ))}
            </ChooseDiv>
            <ChooseDiv>
              <Desc>Size</Desc>
              <Optional onChange={(e)=>setSize(e.target.value)}>
                <Element>Size</Element>
                {product.size?.map(s=>(
                  <Element key={s} value={s}>{s}</Element>
                ))}
              </Optional>
            </ChooseDiv>
          </ChooseContainer>
          <AmountContainer>
            <Add onClick={() => setQuantity(prev => prev + 1)} />
            <Amount>{quantity}</Amount>
            <Remove onClick={() => setQuantity(prev => prev>0 ? prev - 1:0)} />
            <Button onClick={handelClick}>ADD TO CART</Button>
          </AmountContainer>
        </ProductInfo>
      </ProductContainer>
      <NewsLetter />
      <Footer/>
    </Container>
  )
}

export default Product