import React from 'react'
import Category from './Category'
import { CategoryItems } from '../data'
import styled from 'styled-components'
const Container=styled.div`
  width: 100%;
  display: flex; 
  justify-content: space-between;
  gap: 30px;
  margin: 30px 0;
  padding:0 20px;
`
const Categories = () => {
  return (
    <Container>
      {CategoryItems.map(item=>(
        <Category item={item} key={item.id}/>
      ))}
    </Container>
    
  )
}

export default Categories