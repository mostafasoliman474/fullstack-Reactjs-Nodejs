import React, { useState } from 'react'
import Nav from '../components/Nav'
import { Announcement } from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
const Container=styled.div`
               
`
const FilterContainer=styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding:10px 40px;
`
const Title=styled.h1`
  font-size: 35px;
  font-weight: 800;
`
const Filter=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;            
`
const FilterProduct=styled.div`
  display: flex; 
  gap:15px   ; 
  align-items: center;        
`
const Desc=styled.p`
  font-size:22px;
  font-weight:700;           
`
const SortProduct=styled.div`
  display: flex;  
  align-items: center;        
  gap:15px;                    
`
const Optional=styled.select`
  width:100px;
  height:40px;            
  font-size: 20px;
  outline: none;
  padding:4px;
`
const Element=styled.option`
 font-size: 20px;
`
const Products = () => {
  const location = useLocation();
  const category =location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("Newest");
  const handelFilter=(e)=>{
    const value=e.target.value;
    setFilter({...filter,
      [e.target.name]:value,
    })
  }
 
  return (
    <Container>
       <Nav/>
       <Announcement/>
       <FilterContainer>
               <Title>
                  {category?category:"ALL"}           
               </Title>
               <Filter>
                   <FilterProduct>
                      <Desc>Filter Products:</Desc> 
                      <Optional name="color" onChange={handelFilter}>
                              <Element>Color</Element>
                              <Element>White</Element>
                              <Element>Red</Element>
                              <Element>Black</Element>
                              <Element>Gray</Element>
                              <Element>Blue</Element>
                      </Optional> 
                      <Optional name="size" onChange={handelFilter}>
                              <Element>Size</Element>
                              <Element>S</Element>
                              <Element>M</Element>
                              <Element>L</Element>
                              <Element>XL</Element>
                      </Optional>         
                   </FilterProduct>
                   <SortProduct>
                       <Desc>Sort Products:</Desc> 
                       <Optional onChange={(e)=>setSort(e.target.value)}>
                              <Element value='newest'>newest</Element>
                              <Element value='asc'>Price(asc)</Element>
                              <Element value='des'>Price(des)</Element>
                      </Optional>      
                   </SortProduct>
               </Filter>
       </FilterContainer>
       <Cards category={category} filter={filter} sort={sort} />
       <NewsLetter/> 
       <Footer/>       
    </Container>
  )
}

export default Products