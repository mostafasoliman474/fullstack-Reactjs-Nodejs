import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
// import { CardsItems } from '../data'
import axios from 'axios'
const Container=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  gap:20px;
  margin: auto;
  margin: 20px 0;
`
const Cards = ({category,filter,sort}) => {
  const [product, setProduct] = useState([])
  const [filterProduct, setFilteredProducts] = useState([])
  useEffect(()=>{
    const getData=async()=>{
      try {
        const res=await axios.get(category?`http://localhost:5000/api/product?category=${category}`:"http://localhost:5000/api/product");
          setProduct(res.data)
      } catch (error) {
        console.log(error)
      } 
    }
    getData();
  },[category,filter])
  
  useEffect(() => {
    category &&
      setFilteredProducts(
        product.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [product, category, filter]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <Container>
        {category?
        filterProduct.map(item=>(
          <Card item={item} key={item.id}/> 
          ))
          :
          product.map(item=>(
            <Card item={item} key={item.id}/> 
          ))
        }       
    </Container>
  )
}
export default Cards